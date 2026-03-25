import { useState } from "react";
import NavItem from "./NavItem";
import UserMenu from "./UserMenu";

const links = ["Home", "About", "Services", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      {/* Logo */}
      <h2 style={{ color: "#4f46e5" }}>MyApp</h2>

      {/* Links */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "15px",
          margin: 0,
          padding: 0,
        }}
      >
        {links.map((link) => (
          <NavItem
            key={link}
            label={link}
            active={active === link}
            onClick={() => setActive(link)}
          />
        ))}
      </ul>

      {/* User */}
      <UserMenu />
    </nav>
  );
}