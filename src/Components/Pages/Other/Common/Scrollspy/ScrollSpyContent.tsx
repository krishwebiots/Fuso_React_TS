import { FC } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { Col } from "reactstrap";
import { ScrollspyType } from "../../../../../Types/OtherType";

const ScrollSpyContent: FC<ScrollspyType> = ({ content }) => {
  return (
    <Col xxl="10" lg="9">
      <ScrollSpy activeClass="active" updateHistoryStack={false} scrollThrottle={100}>
        {content?.map((item, index) => (
          <div id={item.id} key={index}>
            {item.subsections ? <h5 className="sub-title mt-lg-4 mt-3">{item.title}</h5> : <h4 className="privacy-title">{item.title}</h4>}
            <p>{item.content}</p>
            {item.subList && (
              <ul className="sub-list">
                {item.subList.map((subList, index) => (
                  <li key={index}>
                    <strong>{subList.title} </strong>
                    {subList.content}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ScrollSpy>
    </Col>
  );
};

export default ScrollSpyContent;
