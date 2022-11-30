import { Routes, Route } from "react-router-dom"

// Comp
import { Navbar, CategoriesButton } from "./components";

// Pages
import { HomePage } from "./pages"

export const App = () => {
  return <div>
    <Navbar />
    <CategoriesButton />
    <div className="v-spacing"></div>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </div>;
}; 
