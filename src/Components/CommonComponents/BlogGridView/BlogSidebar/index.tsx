import { FC } from "react";
import Categories from "./Categories";
import LatestArticle from "./LatestArticle";
import SocialContact from "./SocialContact";

const BlogSidebar: FC<{ socialContact?: boolean }> = ({ socialContact }) => {
  return (
    <div className="blog-sidebar">
      <LatestArticle />
      <Categories />
      {socialContact && <SocialContact />}
    </div>
  );
};

export default BlogSidebar;
