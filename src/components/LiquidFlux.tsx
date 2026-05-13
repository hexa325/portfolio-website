"use client";

import React from "react";

/**
 * LiquidFlux Component (Brutalist Refactor)
 * Repurposed for a snappy, mechanical block-style reveal.
 */
export default function LiquidFlux({ 
  children, 
  className = "",
  delay = "0s"
}: { 
  children: string; 
  className?: string;
  delay?: string;
}) {
  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <span 
        className="relative block animate-liquid-flux opacity-0" 
        style={{ 
          animationDelay: delay
        }}
      >
        {children}
      </span>
    </div>
  );
}
