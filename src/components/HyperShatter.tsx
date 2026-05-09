"use client";

export default function HyperShatter({ 
  children, 
  className, 
  shardClassPrefix, 
  count 
}: { 
  children: string; 
  className?: string; 
  shardClassPrefix: string; 
  count: number 
}) {
  return (
    <div className={`hyper-container ${className}`}>
      {/* Base text that becomes visible and carries the glitch after reconstruction */}
      <span className="hyper-base block">{children}</span>
      {/* 3D Animated Shards */}
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`hyper-layer ${shardClassPrefix}-${i + 1} block`} aria-hidden="true">
          {children}
        </span>
      ))}
    </div>
  );
}
