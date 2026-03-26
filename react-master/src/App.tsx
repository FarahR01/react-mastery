import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExercisesShowcase from "./pages/ExercisesShowcase";
import PatternsShowcase from "./pages/PatternsShowcase";
import ProfilePage from "./pages/ui-exercices/ProfilePage";
import NavbarPage from "./pages/ui-exercices/NavbarPage";
import TodoPage from "./pages/ui-exercices/TodoPage";
import ProductPage from "./pages/ui-exercices/ProductPage";
import DashboardPage from "./pages/ui-exercices/DashboardPage";
import FormPage from "./pages/ui-exercices/FormPage";
import AccordionPage from "./pages/advanced-react-patterns/AccordionPage";
import RenderPropsPage from "./pages/advanced-react-patterns/RenderPropsPage";
import TabsPatternPage from "./pages/advanced-react-patterns/TabsPatternPage";
import "./App.css";
import LearnPage from "./pages/LearnPage";

function AppContent() {
  return (
    <>
      {/* Navigation Header */}
      <header className="app-header">
        <div className="app-header__container">
          <Link to="/" className="app-header__logo">
            React Mastery 🚀
          </Link>
          <nav className="app-header__nav">
            <Link to="/" className="app-header__link">
              Home
            </Link>
            <Link to="/learn" className="app-header__link">
              Learn
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
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/ui-exercises" element={<ExercisesShowcase />} />
          <Route path="/patterns" element={<PatternsShowcase />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/navbar" element={<NavbarPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/patterns/accordion" element={<AccordionPage />} />
          <Route path="/patterns/render-props" element={<RenderPropsPage />} />
          <Route path="/patterns/tabs" element={<TabsPatternPage />} />
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
