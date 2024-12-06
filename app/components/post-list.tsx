"use client";

import { Play, MessageCircle, Bookmark, Share2 } from "lucide-react";
import { formatNumber } from "../lib/format-numbers";

interface Post {
  desc: string;
  playCount: number;
  commentCount: number;
  collectCount: number;
  shareCount: number;
}

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recent Posts</h2>
      <div className="grid gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white dark:bg-white/5 hover:bg-zinc-50 dark:hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-zinc-200 dark:border-white/10 transition-colors duration-300"
          >
            <p className="text-lg mb-4">{post.desc}</p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: Play, value: post.playCount, label: "Plays" },
                { icon: MessageCircle, value: post.commentCount, label: "Comments" },
                { icon: Bookmark, value: post.collectCount, label: "Saves" },
                { icon: Share2, value: post.shareCount, label: "Shares" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <stat.icon className="w-5 h-5 mb-1 text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-white transition-colors duration-300" />
                  <span className="font-medium">{formatNumber(stat.value)}</span>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}