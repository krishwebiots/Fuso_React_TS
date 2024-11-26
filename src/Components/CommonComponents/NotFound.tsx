import { FC } from "react";
import { dynamicSvg, Image } from "../../Utils";

const NotFound: FC<{ word: string }> = ({ word }) => {
  return (
    <div className="no-found-item text-center">
      <Image src={dynamicSvg("other/not-found.svg")} alt="not-found" className="img-fluid" />
      <div className="no-found-content">
        <h3>{word}</h3>
        <p>There are no products that meet your criteria. It's possible they're unavailable, too specific, or out of stock. To improve your search, please try again later. Get assistance by contacting support.</p>
      </div>
    </div>
  );
};

export default NotFound;
