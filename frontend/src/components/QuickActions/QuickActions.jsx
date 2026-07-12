import "./QuickActions.css";
import {
  FaShoppingCart,
  FaHistory,
  FaClipboardList,
  FaCreditCard,
  FaTimesCircle,
} from "react-icons/fa";

const actions = [
  {
    label: "Place Order",
    value: "1",
    icon: <FaShoppingCart />,
  },
  {
    label: "Current Order",
    value: "97",
    icon: <FaClipboardList />,
  },
  {
    label: "Order History",
    value: "98",
    icon: <FaHistory />,
  },
  {
    label: "Checkout",
    value: "99",
    icon: <FaCreditCard />,
  },
  {
    label: "Cancel",
    value: "0",
    icon: <FaTimesCircle />,
  },
];

export default function QuickActions({ onSelect }) {
  return (
    <div className="quick-actions">
      {actions.map((action) => (
        <button
          key={action.value}
          onClick={() => onSelect(action.value)}
        >
          {action.icon}
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
}