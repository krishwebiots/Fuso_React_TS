import { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { DetailType } from "../../../Types/LayoutType";

const FooterDetailSection: FC<DetailType> = ({ data, footerMenu }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => setOpenSections((prevState) => ({ [title]: !prevState[title] }));
  return (
    <Fragment>
      {data.map((item, index) => {
        const columnClass = item.contactList ? "col-lg-3 col-sm-5" : footerMenu ? "col-md-3 col-sm-6" : "col-md-2 col-sm-3";
        return (
          <Col key={index} className={`${columnClass} ${openSections[item.title] ? "open-footer-content" : ""}`}>
            <div>
              <div className="footer-title">
                <h4 onClick={() => toggleSection(item.title)}>{item.title}</h4>
              </div>
              <ul className={`footer-link ${item.contactList ? "footer-contact" : ""}`}>
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    {item.contactList ? (
                      <Fragment>
                        <i className={link.icon ? link.icon : ""} />
                        <span>{link.title}</span>
                      </Fragment>
                    ) : (
                      <Link to={link.url ? link.url : ""}>{link.title}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        );
      })}
    </Fragment>
  );
};

export default FooterDetailSection;
