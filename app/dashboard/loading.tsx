export default function Loading() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black text-zinc-900 dark:text-white p-8 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header Skeleton */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 mb-8 animate-pulse">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
              <div className="space-y-3">
                <div className="h-6 w-48 bg-zinc-200 dark:bg-zinc-700 rounded" />
                <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-700 rounded" />
              </div>
            </div>
          </div>
  
          {/* Stats Card Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 animate-pulse"
              >
                <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-700 rounded mb-2" />
                <div className="h-6 w-16 bg-zinc-200 dark:bg-zinc-700 rounded" />
              </div>
            ))}
          </div>
  
          {/* Posts List Skeleton */}
          <div className="grid grid-cols-1 gap-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 animate-pulse"
              >
                <div className="flex items-center gap-4">
                  <div className="w-32 h-32 bg-zinc-200 dark:bg-zinc-700 rounded" />
                  <div className="space-y-3 flex-1">
                    <div className="h-4 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded" />
                    <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded" />
                    <div className="flex gap-4">
                      {[...Array(4)].map((_, j) => (
                        <div
                          key={j}
                          className="h-4 w-16 bg-zinc-200 dark:bg-zinc-700 rounded"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }