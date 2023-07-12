import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import Carts from "./Pages/Carts";
import Contact from "./Pages/Contact";
import CartProvider from "./components/Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./Pages/CheckOut";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AuthProvider from "./components/Providers/AuthProvider";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/404/NotFound";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/carts" element={<Carts />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
