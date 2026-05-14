"use client";

import { useEffect, useState } from "react";

function calculateTimeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default function TimeAgo({ dateString }: { dateString: string }) {
  const [displayTime, setDisplayTime] = useState("");

  useEffect(() => {
    // Set initial time on mount
    setDisplayTime(calculateTimeAgo(dateString));

    // Update every minute
    const interval = setInterval(() => {
      setDisplayTime(calculateTimeAgo(dateString));
    }, 60000);

    return () => clearInterval(interval);
  }, [dateString]);

  return <span className="opacity-40 text-xs w-16 uppercase tracking-tighter">{displayTime || "..."}</span>;
}
