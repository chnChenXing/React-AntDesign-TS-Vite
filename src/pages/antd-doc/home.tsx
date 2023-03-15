import React from "react";
import { Layout, Space, Col, Row } from "antd";
import "antd/dist/antd.css";

import MyHeader from "./header";
import MyFooter from "./footer";
import MySider from "./sider";
import MyContent from "./article";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  color: "rgba(0,0,0,.88)",
  height: 64,
  paddingInline: 0,
  position: "relative",
  zIndex: "10",
  maxWidth: "100%",
  backgroundColor: "#ffffff",
  boxShadow:
    "0 1px 2px 0 rgb(0 0 0 / 3%), 0 1px 6px -1px rgb(0 0 0 / 2%), 0 2px 4px 0 rgb(0 0 0 / 2%)",
};

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
    <Header style={headerStyle}>
      <MyHeader></MyHeader>
    </Header>
    <Row>
      <Col span={4}>
        <MySider></MySider>
      </Col>
      <Col span={20} className="right-container">
        <MyContent></MyContent>
        <MyFooter></MyFooter>
      </Col>
    </Row>
  </Space>
);

export default App;
