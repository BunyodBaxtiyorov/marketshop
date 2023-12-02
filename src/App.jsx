import "./App.css";
// import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/index";
import Productlist from "./components/productlist";
import { useEffect, useState } from "react";
import Login from "./auth/login";
import Register from "./auth/register";
import Produc from "./security/produc";

// import { Switch } from "react-router-dom";

// import Main from "./components/main";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="App">
          {/* <Header /> */}
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="product/:id" element={<Productlist />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          </Router>
          {/* <Produc /> */}
        </div>
      )}
    </>
  );
}

export default App;
