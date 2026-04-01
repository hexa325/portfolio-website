export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] dark:bg-[#0a0a0a] bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-white/20 dark:border-white/20 border-black/20 border-t-blue-400 rounded-full animate-spin" />
        <p className="text-white/60 dark:text-white/60 text-black/60">Loading...</p>
      </div>
    </div>
  );
}
