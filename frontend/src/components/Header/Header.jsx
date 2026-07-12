import "./Header.css";
import { FaUtensils } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaUtensils />
        <div>
          <h2>PinkBites AI</h2>
          <p>Fast • Fresh • Delicious</p>
        </div>
      </div>
    </header>
  );
}