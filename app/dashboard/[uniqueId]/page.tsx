import { gql } from "@apollo/client";
import { initializeApollo } from "../../components/apolloclient";
import { collectSegmentData } from "next/dist/server/app-render/collect-segment-data";
import { ProfileHeader } from "../../components/profile-header";
import { StatsCard } from "../../components/stats-card";
import { PostList } from "../../components/post-list";
import { user } from "../../query";

const GET_USER = gql`
  query GetUser($uniqueId: String!) {
    ${user}
}
`;

interface PageProps {
    params: Promise<{ uniqueId: string }>;
  }

  export default async function Page({ params }: PageProps) {
    const resolvedParams = await params; 
    const { uniqueId } = resolvedParams;
    

  console.log({ uniqueId });
  const client = initializeApollo();

  try {
    const { data } = await client.query({
      query: GET_USER,
      variables: { uniqueId },
    });

    if (!data.user) {
      return <div>User not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-white p-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <ProfileHeader
            avatar={data.user.avatar}
            nickname={data.user.nickname}
            uniqueId={data.user.uniqueId}
          />
          <StatsCard
            followersCount={data.user.stats.followerCount}
            followingCount={data.user.stats.followingCount}
            hearts={data.user.stats.heartCount}
            videos={data.user.stats.videoCount}
            followers={data.user.followers}
            following={data.user.following}
          />
          <PostList posts={data.user.posts} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return <div>An error occurred while fetching data.</div>;
  }
}