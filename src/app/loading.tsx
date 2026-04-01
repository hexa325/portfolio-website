export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-black/20 dark:border-white/20 border-t-blue-400 rounded-full animate-spin" />
        <p className="text-black/60 dark:text-white/60">Loading...</p>
      </div>
    </div>
  );
}
