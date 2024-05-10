import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-karmatic text-2xl py-4 px-12 bg-primary text-white w-fit drop-shadow-custom relative">
      <span className="w-1 h-1 bg-white absolute top-1 left-1"></span>
      <span className="w-1 h-1 bg-white absolute top-1 right-1"></span>
      <span className="w-1 h-1 bg-white absolute bottom-1 left-1"></span>
      <span className="w-1 h-1 bg-white absolute bottom-1 right-1"></span>
      {children}
    </div>
  );
}
