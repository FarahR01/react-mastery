type Props = {
  onAdd: () => void;
};

export default function AddToCartButton({ onAdd }: Props) {
  return (
    <button
      onClick={onAdd}
      style={{
        width: "100%",
        padding: "10px",
        border: "none",
        borderBottomLeftRadius: "12px",
        borderBottomRightRadius: "12px",
        backgroundColor: "#4f46e5",
        color: "white",
        cursor: "pointer",
      }}
    >
      Add to Cart 🛒
    </button>
  );
}