import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Battle from "./Battle";
import "./index.css";
import Popular from "./Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// JSX Style of React
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="light">
          <div className="container">
            <Routes>
              <Route path="/" element={<Popular />} />
              <Route path="/battle" element={<Battle />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
