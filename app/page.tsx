"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [uniqueId, setUniqueId] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (uniqueId.trim() !== "") {
      router.push(`/dashboard/${encodeURIComponent(uniqueId)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-white p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-12">
          TikTok Profile Viewer
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Search Card */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Search Profile</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Enter a TikTok username to view their profile details and statistics
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="uniqueId" className="block text-sm font-medium">
                  Enter TikTok Username
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400">
                    @
                  </span>
                  <input
                    id="uniqueId"
                    type="text"
                    value={uniqueId}
                    onChange={(e) => setUniqueId(e.target.value)}
                    placeholder="e.g. zachking"
                    required
                    className="w-full pl-8 pr-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 transition-all duration-300"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 py-3 px-4 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-300 font-medium flex items-center justify-center space-x-2"
              >
                <span>View Profile</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>

          {/* Top Creators Card */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Top TikTok Creators</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Click on any creator to instantly view their profile
              </p>
            </div>
            <div className="space-y-3">
              {[
                "khaby.lame",
                "taylorswift",
                "mrbeast",
                "billieeilish",
                "addisonre",
                "tiktok",
                "kimberly.loaiza",
                "zachking",
                "domelipa",
                "therock"
              ].map((username, index) => (
                <div
                  key={username}
                  onClick={() => setUniqueId(username)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer transition-all duration-200 group"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-600 text-sm font-medium">
                    {index + 1}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400">@</span>
                  <span className="group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200">
                    {username}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}