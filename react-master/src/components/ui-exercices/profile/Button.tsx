type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#4f46e5",
        color: "white",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}