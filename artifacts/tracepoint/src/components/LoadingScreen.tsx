import React from "react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-serif text-white tracking-[0.2em] uppercase font-bold relative z-10">
          TracePoint <span className="text-primary">Intelligence</span>
        </h1>
        <div className="mt-8 w-64 h-1 bg-white/10 relative overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-primary w-full origin-left animate-[scan_2s_ease-in-out_infinite]" />
        </div>
        <div className="mt-4 text-white/50 font-mono text-xs uppercase tracking-widest">
          Establishing secure connection...
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          50.1% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}} />
    </div>
  );
}
