import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import Carts from "./Pages/Carts";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
