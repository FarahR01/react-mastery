type Props = {
  title: string;
  value: string;
};

export default function Card({ title, value }: Props) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "150px",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      <p style={{ color: "#6b7280" }}>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}