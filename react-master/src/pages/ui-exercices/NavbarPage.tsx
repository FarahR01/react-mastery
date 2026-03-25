import Navbar from "../../components/ui-exercices/navbar/Navbar";

export default function NavbarPage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h1>Welcome 👋</h1>
        <p>Click navbar items to see active state</p>
      </div>
    </>
  );
}