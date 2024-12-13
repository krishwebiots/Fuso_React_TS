import { useLocation } from "react-router-dom";

const UsePathName = () => {
  const { pathname } = useLocation();
  const Path = pathname.split("/").slice(1);
  return Path;
};

export default UsePathName;
