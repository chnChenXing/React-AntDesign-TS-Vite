import { FC } from "react";
import { Outlet, RouteProps } from "react-router";

import "./index.scss";

const ContentPage: FC<RouteProps> = () => {
  return (
    <article className="article-content">
      <Outlet />
    </article>
  );
};
export default ContentPage;
