export default function UserMenu() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src="https://i.pravatar.cc/40"
        alt="user"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
      <span>Farah</span>
    </div>
  );
}