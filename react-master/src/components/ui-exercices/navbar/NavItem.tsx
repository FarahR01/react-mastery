type NavItemProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export default function NavItem({ label, active, onClick }: NavItemProps) {
  return (
    <li
      onClick={onClick}
      style={{
        cursor: "pointer",
        padding: "8px 12px",
        borderRadius: "8px",
        backgroundColor: active ? "#e0e7ff" : "transparent",
        color: active ? "#3730a3" : "#333",
      }}
    >
      {label}
    </li>
  );
}