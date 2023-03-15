import React, { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "@/assets/svg/react.svg";
import antdLogo from "@/assets/svg/antd-logo.svg";
import "./index.scss";

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="Home">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Link to={"/antd-doc"}>
          <img src={antdLogo} className="logo react" alt="Antd logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default HomePage;
