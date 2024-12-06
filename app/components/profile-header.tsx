"use client";

interface ProfileHeaderProps {
  avatar: string;
  nickname: string;
  uniqueId: string;
}

export function ProfileHeader({ avatar, nickname, uniqueId }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-zinc-200 dark:ring-zinc-800 hover:ring-zinc-300 dark:hover:ring-zinc-700 transition-all duration-300">
          <img
            src={avatar}
            alt={nickname}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="mt-6">
        <h1 className="text-4xl font-bold mb-2">{nickname}</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">{uniqueId}</p>
      </div>
    </div>
  );
}