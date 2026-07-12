import "./ChatWindow.css";
import { useEffect, useRef } from "react";

export default function ChatWindow({ children }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [children]);

  return (
    <div className="chat-window">
      {children}
      <div ref={bottomRef}></div>
    </div>
  );
}