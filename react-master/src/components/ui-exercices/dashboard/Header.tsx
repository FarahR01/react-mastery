export default function Header() {
  return (
    <div
      style={{
        height: "60px",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h3>Dashboard</h3>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://i.pravatar.cc/40"
          style={{ borderRadius: "50%" }}
        />
        <span>Farah</span>
      </div>
    </div>
  );
}