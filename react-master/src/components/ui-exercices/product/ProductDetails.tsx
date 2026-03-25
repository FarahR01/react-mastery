type Props = {
  title: string;
  price: number;
};

export default function ProductDetails({ title, price }: Props) {
  return (
    <div style={{ padding: "10px" }}>
      <h3 style={{ margin: "5px 0" }}>{title}</h3>
      <p style={{ color: "#4f46e5", fontWeight: "bold" }}>
        ${price.toFixed(2)}
      </p>
    </div>
  );
}