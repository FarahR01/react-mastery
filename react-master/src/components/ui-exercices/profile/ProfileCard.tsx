import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import Button from "./Button";

export default function ProfileCard() {
  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <Avatar src="https://i.pravatar.cc/150" />

      <UserInfo
        name="Farah"
        bio="Frontend Developer passionate about React ⚛️"
      />

      <div style={{ marginTop: "15px" }}>
        <Button label="Follow" onClick={() => alert("Followed!")} />
      </div>
    </div>
  );
}