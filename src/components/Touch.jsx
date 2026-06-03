import { useState } from "react";

export function TouchCard({ children, className = "" }) {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      className={`transition-all duration-200 ${pressed ? "scale-[0.98] brightness-95" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export function TouchLink({ children, className = "", ...props }) {
  const [pressed, setPressed] = useState(false);
  return (
    <a
      {...props}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      className={`transition-all duration-200 ${pressed ? "scale-95 opacity-90" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

export function TouchButton({ children, className = "", ...props }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      {...props}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      className={`transition-all duration-200 ${pressed ? "scale-95 opacity-90" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
