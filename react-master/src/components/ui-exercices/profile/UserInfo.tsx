type UserInfoProps = {
  name: string;
  bio: string;
};

export default function UserInfo({ name, bio }: UserInfoProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{name}</h2>
      <p style={{ color: "#666" }}>{bio}</p>
    </div>
  );
}