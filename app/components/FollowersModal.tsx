import { X } from 'lucide-react';

interface FollowersModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: 'followers' | 'following';
  onTabChange: (tab: 'followers' | 'following') => void;
  followers:[{
    avatar:string,
    name:string
  }],
  following:[{
    avatar:string,
    name:string
  }]
}

export function FollowersModal({ isOpen, onClose, activeTab, onTabChange,followers,following }: FollowersModalProps) {
    console.log(followers)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-900 rounded-xl w-[480px] h-[600px] flex flex-col mx-4">
        <div className="border-b border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between">
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'followers'
                  ? 'bg-zinc-100 dark:bg-zinc-800'
                  : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
              }`}
              onClick={() => onTabChange('followers')}
            >
              Followers
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'following'
                  ? 'bg-zinc-100 dark:bg-zinc-800'
                  : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
              }`}
              onClick={() => onTabChange('following')}
            >
              Following
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-1 p-4">
            {
                activeTab==="followers" ? 
                <div className="space-y-4">
            {followers.map((follower, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors"
              >
                <img
                  src={follower.avatar}
                  alt={follower.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{follower.name}</h3>
                </div>
              </div>
            ))}
          </div>
          :
          <div className="space-y-4">
          {following.map((following, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-2 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg transition-colors"
            >
              <img
                src={following.avatar}
                alt={following.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">{following.name}</h3>
              </div>
            </div>
          ))}
        </div>
            }
          
         
        </div>
      </div>
    </div>
  );
}