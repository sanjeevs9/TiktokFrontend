"use client"
import { useState } from "react";
import { Users, Heart, Video } from "lucide-react";
import { formatNumber } from "../lib/format-numbers";
import { FollowersModal } from "./FollowersModal";

interface StatsCardProps {
  followersCount: number;
  followingCount: number;
  hearts: number;
  videos: number;
  following:[{
    avatar:string,
    name:string
  }],
  followers:[{
    avatar:string,
    name:string
  }]
}

export function StatsCard({ followersCount, followingCount, hearts, videos, following, followers }: StatsCardProps) {
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'followers' | 'following'>('followers');

  const handleOpenModal = (tab: 'followers' | 'following') => {
    setActiveTab(tab);
    setShowFollowersModal(true);
  };

  const stats = [
    {
      icon: Users,
      label: "Followers",
      value: followersCount,
      onClick: () => handleOpenModal('followers'),
      isClickable: true,
    },
    {
      icon: Users,
      label: "Following",
      value: followingCount,
      onClick: () => handleOpenModal('following'),
      isClickable: true,
    },
    {
      icon: Heart,
      label: "Hearts",
      value: hearts,
      isClickable: false,
    },
    {
      icon: Video,
      label: "Videos",
      value: videos,
      isClickable: false,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        {stats.map((stat) => {
          const Component = stat.isClickable ? 'button' : 'div';
          return (
            <Component
              key={stat.label}
              onClick={stat.onClick}
              className={`flex flex-col items-center p-4 bg-white dark:bg-white/5 ${
                stat.isClickable ? 'hover:bg-zinc-50 dark:hover:bg-white/10 cursor-pointer' : ''
              } backdrop-blur-sm rounded-xl border border-zinc-200 dark:border-white/10 transition-colors duration-300`}
            >
              <stat.icon className="w-6 h-6 mb-2 text-zinc-900 dark:text-zinc-100" />
              <span className="text-2xl font-bold">{formatNumber(stat.value)}</span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</span>
            </Component>
          );
        })}
      </div>

      <FollowersModal
        isOpen={showFollowersModal}
        onClose={() => setShowFollowersModal(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        followers={followers}
        following={following}
      />
    </>
  );
}