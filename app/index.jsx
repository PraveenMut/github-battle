import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Battle from "./Battle";
import "./index.css";
import Popular from "./Popular";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Results from "./Results"

// JSX Style of React
class App extends React.Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme == "light" ? "dark" : "light",
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className={this.state.theme}>
          <div className="container">
            <Navbar theme={this.state.theme} toggleTheme={this.toggleTheme}/>
            <Routes>
              <Route path="/" element={<Popular />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/results" element={<Results />} />
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
