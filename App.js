import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import PortfolioAssistant from "./src/Components/PortfolioAssistant";

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen w-full text-gray-900 dark:text-gray-100 flex items-center justify-center">
      <PortfolioAssistant />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
