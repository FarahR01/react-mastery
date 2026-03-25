export default function Sidebar() {
  const items = ["Dashboard", "Users", "Orders", "Settings"];

  return (
    <div
      style={{
        width: "200px",
        height: "100vh",
        backgroundColor: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Admin</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}