import "./ChatInput.css";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatInput({
  value,
  onChange,
  onSend,
}) {
  return (
    <div className="chat-input">
      <input
        value={value}
        onChange={onChange}
        placeholder="Type 1, 97, 98, 99..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSend();
          }
        }}
      />

      <button onClick={onSend}>
        <FaPaperPlane />
      </button>
    </div>
  );
}