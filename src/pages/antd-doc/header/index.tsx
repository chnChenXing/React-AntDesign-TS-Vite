import { FC, useState } from "react";
import { Col, Row, Input, Menu, Dropdown, Button, Space, Tooltip } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

import antdLogo from "@/assets/svg/antd-logo.svg";
import cn_en from "@/assets/svg/cn-en.svg";
import github from "@/assets/svg/github.svg";
import ltr from "@/assets/svg/ltr.svg";

import { navList, versionList, moreList } from "./mixin";
import "./index.css";

const RouterPage: FC = () => {
  //  顶部菜单, 取值current, 设值setCurrent(), 默认值"component"
  const [current, setCurrent] = useState("component");
  const onClick = (e: any) => {
    setCurrent(e.key);
  };

  // 选择版本下拉框
  const [version, setVersion] = useState("5.2.3");
  const versionProps = {
    items: versionList,
    onClick: (e: any) => {
      console.log(e);
      setVersion(e.key);
    },
  };

  // 更多下拉框
  const moreProps = {
    items: moreList,
    onClick: () => {},
  };

  return (
    <>
      <Row>
        <Col span={4} className="logo-wrap">
          <img src={antdLogo} width="32" height="32" />
          <h1 className="logoName">Ant Design</h1>
        </Col>
        <Col span={8}>
          <Input
            size="small"
            className="search-input"
            placeholder="请输入关键字搜索..."
            prefix={<SearchOutlined className="search-prefix" />}
            suffix={<span className="search-suffix">Ctrl K</span>}
          />
        </Col>
        <Col span={7}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={navList}
          />
        </Col>
        <Col span={5}>
          <Dropdown menu={versionProps} className="mr24">
            <Button size="small">
              <Space>
                {version}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={moreProps} className="mr24">
            <Button size="small">
              <Space>
                更多
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Tooltip placement="bottom" title="中文 / English" className="mr16">
            <span className="icon-wrap">
              <img src={cn_en} width="16" height="16" />
            </span>
          </Tooltip>
          <Tooltip placement="bottom" title="LTR" className="mr16">
            <span className="icon-wrap">
              <img src={ltr} width="16" height="16" />
            </span>
          </Tooltip>
          <Tooltip placement="bottom" title="Github" className="mr16">
            <span className="icon-wrap">
              <img src={github} width="16" height="16" />
            </span>
          </Tooltip>
        </Col>
      </Row>
    </>
  );
};
export default RouterPage;
