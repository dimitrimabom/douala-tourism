import React from "react";

export default function loading() {
  return (
    <div className="h-full w-full absolute z-50 bg-background flex items-center justify-center">
      <span className="text-4xl md:text-6xl font-bold mb-4 animate-pulse delay-150">
        Loading ...
      </span>
    </div>
  );
}
