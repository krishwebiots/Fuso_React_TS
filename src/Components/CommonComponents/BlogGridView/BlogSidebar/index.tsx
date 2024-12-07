import Categories from "./Categories";
import LatestArticle from "./LatestArticle";
import SocialContact from "./SocialContact";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <LatestArticle />
      <Categories />
      <SocialContact />
    </div>
  );
};

export default BlogSidebar;
