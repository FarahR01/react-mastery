import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ExercisesShowcase from "./pages/ExercisesShowcase";
import ProfilePage from "./pages/ui-exercices/ProfilePage";
import NavbarPage from "./pages/ui-exercices/NavbarPage";
import TodoPage from "./pages/ui-exercices/TodoPage";
import ProductPage from "./pages/ui-exercices/ProductPage";
import DashboardPage from "./pages/ui-exercices/DashboardPage";
import FormPage from "./pages/ui-exercices/FormPage";
import "./App.css";

function AppContent() {
  return (
    <>
      {/* Navigation Header */}
      <header className="app-header">
        <div className="app-header__container">
          <Link to="/" className="app-header__logo">
            React UI Exercises 🚀
          </Link>
          <nav className="app-header__nav">
            <Link to="/" className="app-header__link">
              Home
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="app-header__link"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Routes */}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<ExercisesShowcase />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/navbar" element={<NavbarPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
