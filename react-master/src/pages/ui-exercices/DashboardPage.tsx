// 🧩  Dashboard Layout

import Card from "../../components/ui-exercices/dashboard/Card";
import DashboardLayout from "../../components/ui-exercices/dashboard/DashboardLayout";


// 🖼️ UI Parts:
// Sidebar
// Header
// Content area
// Widgets/cards
// 🧱 Components: react-master\src\components\ui-exercices\dashboard
// Dashboard
// Sidebar
// Header
// Card
// Widget


export default function DashboardPage() {
    return (
        // Container = DashboardLayout
 <DashboardLayout>
        {/* Content area */}
              {/* Cards */}
              <div style={{ display: "flex", gap: "20px" }}>
                <Card title="Total Users" value="1,234" />
                <Card title="Total Orders" value="567" />
                <Card title="Revenue" value="$98,765" />
              </div>
      {/* Extra content */}
 <div style={{ marginTop: "30px" }}>
        <h2>Recent Activity</h2>
        <p>Coming soon...</p>
      </div>
        </DashboardLayout>

    )
}
