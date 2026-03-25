// Layout : Header + Sidebar + Footer => Repeatable for many pages
// Content area => Unique for each page
import Sidebar from "./Sidebar";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};
// We can use this layout for many pages, just by changing the content area (children)

export default function DashboardLayout({ children }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
        <Header />

        <div style={{ padding: "20px" }}>{children}</div>
      </div>
    </div>
  );
}