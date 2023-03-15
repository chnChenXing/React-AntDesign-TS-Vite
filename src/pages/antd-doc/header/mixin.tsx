import type { MenuProps } from "antd";

export const navList: MenuProps["items"] = [
  {
    label: "设计",
    key: "design",
  },
  {
    label: "研发",
    key: "develop",
  },
  {
    label: "组件",
    key: "component",
  },
  {
    label: "博客",
    key: "blog",
  },
  {
    label: "资源",
    key: "resource",
  },
  {
    label: "国内镜像",
    key: "mirror",
  },
];

export const versionList: MenuProps["items"] = [
  {
    label: "5.2.3",
    key: "5.2.3",
  },
  {
    label: "4.x",
    key: "4.x",
  },
  {
    label: "3.x",
    key: "3.x",
  },
  {
    label: "2.x",
    key: "2.x",
  },
  {
    label: "1.x",
    key: "1.x",
  },
  {
    label: "0.12x",
    key: "0.12x",
  },
  {
    label: "0.11x",
    key: "0.11x",
  },
  {
    label: "0.10x",
    key: "0.10x",
  },
  {
    label: "0.9x",
    key: "0.9x",
  },
];

export const moreList: MenuProps["items"] = [
  {
    label: "Ant Design Charts",
    key: "Ant Design Charts",
  },
  {
    label: "Ant Design Pro",
    key: "Ant Design Pro",
  },
  {
    label: "Ant Design Pro Components",
    key: "Ant Design Pro Components",
  },
  {
    label: (
      <div>
        Ant Design of Angular<span className="more-suffix">(社区实现)</span>
      </div>
    ),
    key: "Ant Design Angular",
  },
  {
    label: (
      <div>
        Ant Design of Vue<span className="more-suffix">(社区实现)</span>
      </div>
    ),
    key: "Ant Design Vue",
  },
];
