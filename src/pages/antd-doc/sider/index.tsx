import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import { menuItems } from "./mixin";
import "./index.scss";

const App: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    // <div className="menu-wrap">
    <Menu
      className="left-menu"
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={menuItems}
    />
    // </div>
  );
};

export default App;
