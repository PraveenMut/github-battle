import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./Loading";

const Popular = React.lazy(() => import("./Popular"));
const Battle  = React.lazy(() => import("./Battle"));
const Navbar  = React.lazy(() => import("./Navbar"));
const Results = React.lazy(() => import("./Results"));

// JSX Style of React
class App extends React.Component {
  state = {
    theme: "light",
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme == "light" ? "dark" : "light",
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <div className={this.state.theme}>
          <div className="container">
            <React.Suspense fallback={<Loading />}>
            <Navbar theme={this.state.theme} toggleTheme={this.toggleTheme} />
            <Routes>
              <Route path="/" element={<Popular />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/results" element={<Results />} />
            </Routes>
            </React.Suspense>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
