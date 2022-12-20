import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Battle from "./Battle";
import "./index.css";
import Popular from "./Popular";

// JSX Style of React
class App extends React.Component {
  render() {
    return (
      <div className="light">
        <div className="container">
          <Battle />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
