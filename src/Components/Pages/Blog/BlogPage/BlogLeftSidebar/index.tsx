import { Fragment } from "react";
import { RouteList } from "../../../../../Routers/RouteList";
import Breadcrumbs from "../../../../CommonComponents/Breadcrumbs";
import BlogGridView from "../../../../CommonComponents/BlogGridView";

const BlogLeftSidebarContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Blog" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <BlogGridView carShow={9} />
    </Fragment>
  );
};

export default BlogLeftSidebarContainer;
