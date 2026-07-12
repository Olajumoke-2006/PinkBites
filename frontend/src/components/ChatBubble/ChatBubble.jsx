import "./ChatBubble.css";

export default function ChatBubble({ sender, message }) {
  return (
    <div className={`bubble-row ${sender}`}>
      <div className={`bubble ${sender}`}>
        {message}
      </div>
    </div>
  );
}