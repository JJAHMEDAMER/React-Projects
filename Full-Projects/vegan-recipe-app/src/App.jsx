import { Routes, Route } from "react-router-dom"

// Comp
import { Navbar, CategoriesButton, Search } from "./components";

// Pages
import { HomePage, CuisinePage } from "./pages"

export const App = () => {
  return <div>
    <div className="v-spacing"></div>
    <Navbar />
    <div className="v-spacing"></div>
    <Search/>
    <div className="v-spacing"></div>

    <CategoriesButton />
    <div className="v-spacing"></div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cuisine/:query" element={<CuisinePage />} />
    </Routes>
    <div className="v-spacing"></div>
  </div>;
}; 
