import { Link } from "react-router-dom";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: "group";
}[] = [
  {
    key: "overview",
    label: (
      <Link to="/antd-doc/Overview">
        <span>组件总览</span>
      </Link>
    ),
  },
  {
    label: "通用",
    key: "common",
    type: "group",
    children: [
      {
        key: "Button",
        label: (
          <Link to="/antd-doc/Button">
            <span>Button</span>
            <span className="chinese">按钮</span>
          </Link>
        ),
      },
      {
        key: "Icon",
        label: (
          <Link to="/antd-doc/Icon">
            <span>Icon</span>
            <span className="chinese">图标</span>
          </Link>
        ),
      },
      {
        key: "Typography",
        label: (
          <Link to="/antd-doc/Typography">
            <span>Typography</span>
            <span className="chinese">排版</span>
          </Link>
        ),
      },
    ],
  },
  {
    label: "布局",
    key: "layout",
    type: "group",
    children: [
      {
        key: "Divider",
        label: (
          <Link to="/antd-doc/Divider">
            <span>Divider</span>
            <span className="chinese">分割线</span>
          </Link>
        ),
      },
      {
        key: "Grid",
        label: (
          <Link to="/antd-doc/Grid">
            <span>Grid</span>
            <span className="chinese">栅格</span>
          </Link>
        ),
      },
      {
        key: "Layout",
        label: (
          <Link to="/antd-doc/Layout">
            <span>Layout</span>
            <span className="chinese">布局</span>
          </Link>
        ),
      },
      {
        key: "Space",
        label: (
          <Link to="/antd-doc/Space">
            <span>Space</span>
            <span className="chinese">间距</span>
          </Link>
        ),
      },
    ],
  },
  {
    label: "导航",
    key: "nav",
    type: "group",
    children: [
      {
        key: "Anchor",
        label: (
          <Link to="/antd-doc/Anchor">
            <span>Anchor</span>
            <span className="chinese">锚点</span>
          </Link>
        ),
      },
      {
        key: "Breadcrumb",
        label: (
          <Link to="/antd-doc/Breadcrumb">
            <span>Breadcrumb</span>
            <span className="chinese">面包屑</span>
          </Link>
        ),
      },
      {
        key: "Drowpdown",
        label: (
          <Link to="/antd-doc/Drowpdown">
            <span>Drowpdown</span>
            <span className="chinese">下拉菜单</span>
          </Link>
        ),
      },
      {
        key: "Menu",
        label: (
          <Link to="/antd-doc/Menu">
            <span>Menu</span>
            <span className="chinese">导航菜单</span>
          </Link>
        ),
      },
      {
        key: "Pagination",
        label: (
          <Link to="/antd-doc/Pagination">
            <span>Pagination</span>
            <span className="chinese">分页</span>
          </Link>
        ),
      },
      {
        key: "Step",
        label: (
          <Link to="/antd-doc/Step">
            <span>Step</span>
            <span className="chinese">步骤条</span>
          </Link>
        ),
      },
    ],
  },
  {
    label: "数据录入",
    key: "dataset",
    type: "group",
    children: [
      {
        key: "AutoComplete",
        label: (
          <Link to="/antd-doc/AutoComplete">
            <span>AutoComplete</span>
            <span className="chinese">自动完成</span>
          </Link>
        ),
      },
      {
        key: "Cascader",
        label: (
          <Link to="/antd-doc/Cascader">
            <span>Cascader</span>
            <span className="chinese">级联选择</span>
          </Link>
        ),
      },
      {
        key: "Checkbox",
        label: (
          <Link to="/antd-doc/Checkbox">
            <span>Checkbox</span>
            <span className="chinese">多选框</span>
          </Link>
        ),
      },
      {
        key: "DatePicker",
        label: (
          <Link to="/antd-doc/DatePicker">
            <span>DatePicker</span>
            <span className="chinese">日期选择框</span>
          </Link>
        ),
      },
      {
        key: "Form",
        label: (
          <Link to="/antd-doc/Form">
            <span>Form</span>
            <span className="chinese">表单</span>
          </Link>
        ),
      },
      {
        key: "Input",
        label: (
          <Link to="/antd-doc/Input">
            <span>Input</span>
            <span className="chinese">输入框</span>
          </Link>
        ),
      },
      {
        key: "InputNumber",
        label: (
          <Link to="/antd-doc/InputNumber">
            <span>InputNumber</span>
            <span className="chinese">数字输入框</span>
          </Link>
        ),
      },
      {
        key: "Mentions",
        label: (
          <Link to="/antd-doc/Mentions">
            <span>Mentions</span>
            <span className="chinese">提及</span>
          </Link>
        ),
      },
      {
        key: "Radio",
        label: (
          <Link to="/antd-doc/Radio">
            <span>Radio</span>
            <span className="chinese">单选框</span>
          </Link>
        ),
      },
      {
        key: "Rate",
        label: (
          <Link to="/antd-doc/Rate">
            <span>Rate</span>
            <span className="chinese">评分</span>
          </Link>
        ),
      },
      {
        key: "Select",
        label: (
          <Link to="/antd-doc/Select">
            <span>Select</span>
            <span className="chinese">选择器</span>
          </Link>
        ),
      },
      {
        key: "Slider",
        label: (
          <Link to="/antd-doc/Slider">
            <span>Slider</span>
            <span className="chinese">滑动输入条</span>
          </Link>
        ),
      },
      {
        key: "Switch",
        label: (
          <Link to="/antd-doc/Switch">
            <span>Switch</span>
            <span className="chinese">开关</span>
          </Link>
        ),
      },
      {
        key: "TimePicker",
        label: (
          <Link to="/antd-doc/TimePicker">
            <span>TimePicker</span>
            <span className="chinese">时间选择框</span>
          </Link>
        ),
      },
      {
        key: "Transfer",
        label: (
          <Link to="/antd-doc/Transfer">
            <span>Transfer</span>
            <span className="chinese">穿梭框</span>
          </Link>
        ),
      },
      {
        key: "TreeSelect",
        label: (
          <Link to="/antd-doc/TreeSelect">
            <span>TreeSelect</span>
            <span className="chinese">树选择</span>
          </Link>
        ),
      },
      {
        key: "Upload",
        label: (
          <Link to="/antd-doc/Upload">
            <span>Upload</span>
            <span className="chinese">上传</span>
          </Link>
        ),
      },
    ],
  },
  {
    label: "数据展示",
    key: "datashow",
    type: "group",
    children: [
      {
        key: "Avatar",
        label: (
          <Link to="/antd-doc/Avatar">
            <span>Avatar</span>
            <span className="chinese">头像</span>
          </Link>
        ),
      },
      {
        key: "Badge",
        label: (
          <Link to="/antd-doc/Badge">
            <span>Badge</span>
            <span className="chinese">徽标数</span>
          </Link>
        ),
      },
      {
        key: "Calendar",
        label: (
          <Link to="/antd-doc/Calendar">
            <span>Calendar</span>
            <span className="chinese">日历</span>
          </Link>
        ),
      },
      {
        key: "Card",
        label: (
          <Link to="/antd-doc/Card">
            <span>Card</span>
            <span className="chinese">卡片</span>
          </Link>
        ),
      },
      {
        key: "Carousel",
        label: (
          <Link to="/antd-doc/Carousel">
            <span>Carousel</span>
            <span className="chinese">走马灯</span>
          </Link>
        ),
      },
      {
        key: "Collapse",
        label: (
          <Link to="/antd-doc/Collapse">
            <span>Collapse</span>
            <span className="chinese">折叠面板</span>
          </Link>
        ),
      },
      {
        key: "Descriptions",
        label: (
          <Link to="/antd-doc/Descriptions">
            <span>Descriptions</span>
            <span className="chinese">描述列表</span>
          </Link>
        ),
      },
      {
        key: "Empty",
        label: (
          <Link to="/antd-doc/Empty">
            <span>Empty</span>
            <span className="chinese">空状态</span>
          </Link>
        ),
      },
      {
        key: "Image",
        label: (
          <Link to="/antd-doc/Image">
            <span>Image</span>
            <span className="chinese">图片</span>
          </Link>
        ),
      },
      {
        key: "List",
        label: (
          <Link to="/antd-doc/List">
            <span>List</span>
            <span className="chinese">列表</span>
          </Link>
        ),
      },
      {
        key: "Popover",
        label: (
          <Link to="/antd-doc/Popover">
            <span>Popover</span>
            <span className="chinese">气泡卡片</span>
          </Link>
        ),
      },
      {
        key: "QRCode",
        label: (
          <Link to="/antd-doc/QRCode">
            <span>QRCode</span>
            <span className="chinese">二维码</span>
          </Link>
        ),
      },
      {
        key: "Segmented",
        label: (
          <Link to="/antd-doc/Segmented">
            <span>Segmented</span>
            <span className="chinese">分段控制器</span>
          </Link>
        ),
      },
      {
        key: "Statistic",
        label: (
          <Link to="/antd-doc/Statistic">
            <span>Statistic</span>
            <span className="chinese">统计数值</span>
          </Link>
        ),
      },
      {
        key: "Table",
        label: (
          <Link to="/antd-doc/Table">
            <span>Table</span>
            <span className="chinese">表格</span>
          </Link>
        ),
      },
      {
        key: "Tabs",
        label: (
          <Link to="/antd-doc/Tabs">
            <span>Tabs</span>
            <span className="chinese">标签页</span>
          </Link>
        ),
      },
      {
        key: "Tag",
        label: (
          <Link to="/antd-doc/Tag">
            <span>Tag</span>
            <span className="chinese">标签</span>
          </Link>
        ),
      },
      {
        key: "Timeline",
        label: (
          <Link to="/antd-doc/Timeline">
            <span>Timeline</span>
            <span className="chinese">时间轴</span>
          </Link>
        ),
      },
      {
        key: "Tooltip",
        label: (
          <Link to="/antd-doc/Tooltip">
            <span>Tooltip</span>
            <span className="chinese">文字提示</span>
          </Link>
        ),
      },
      {
        key: "Tour",
        label: (
          <Link to="/antd-doc/Tour">
            <span>Tour</span>
            <span className="chinese">漫游式引导</span>
          </Link>
        ),
      },
      {
        key: "Tree",
        label: (
          <Link to="/antd-doc/Tree">
            <span>Tree</span>
            <span className="chinese">树形控件</span>
          </Link>
        ),
      },
    ],
  },
];
