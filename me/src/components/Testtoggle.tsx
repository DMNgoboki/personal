"use client";

import { useState } from "react";

export function HiddenToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        Show/Hide Content
      </button>

      <div
        className={`${
          isVisible ? "block" : "hidden"
        } p-4 bg-gray-200 rounded-lg`}
      >
        <p>This content is now visible!</p>
      </div>
    </div>
  );
}
