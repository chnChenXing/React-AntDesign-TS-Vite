import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@/pages/home";
import AntdHome from "@/pages/antd-doc/home";

// import Button from "@/pages/antd-doc/article/Button";
// import Icon from "@/pages/antd-doc/article/Icon";
// import Overview from "@/pages/antd-doc/article/Overview";
// import Typography from "@/pages/antd-doc/article/Typography";

// 导入所有routerPage
const metaRouters = import.meta.glob("@/pages/antd-doc/article/*/index.tsx", {
  eager: true,
});
console.log(metaRouters);

// * 处理路由表
const articleArray: any = [];
for (const key in metaRouters) {
  // 这个当路由的path，引入文件不区分大小写，手动改首字母大写
  let path = key.split("/")[5];
  path =
    "/antd-doc/" + path.substring(0, 1).toLocaleUpperCase() + path.substring(1);
  // @ts-ignore
  const component = metaRouters[key].default;
  articleArray.push({ path, component });
}

console.log(articleArray);

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/antd-doc" element={<AntdHome />}>
          {/* <Route path="/antd-doc/Button" element={<Button />}></Route>
          <Route path="/antd-doc/Icon" element={<Icon />}></Route>
          <Route path="/antd-doc/Overview" element={<Overview />}></Route>
          <Route path="/antd-doc/Typography" element={<Typography />}></Route> */}

          {articleArray.map((i: any) => {
            return <Route path={i.path} element={<i.component />}></Route>;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterPage;
