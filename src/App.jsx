import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/index";
import Productlist from "./components/productlist";
import { useEffect, useState } from "react";

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
        <div className="Loader"></div>
      ) : (
        <div className="App">
          <Header />
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/product" element={<Productlist />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
