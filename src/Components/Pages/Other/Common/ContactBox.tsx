import { FC, Fragment } from "react";
import { Col, Row } from "reactstrap";
import { ContactBoxData } from "../../../../Data/Pages/Other";
import { PropsType } from "../../../../Types/HomeDemoType";

const ContactBox: FC<PropsType> = ({ type }) => {
  return (
    <Fragment>
      {type === "contact_1" && (
        <Row className="gy-4">
          {ContactBoxData.map((item, index) => (
            <Col xxl="3" md="6" key={index}>
              <div className="contact-box">
                <div className="contact-info">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="contact-icon">{item.icon}</div>
              </div>
            </Col>
          ))}
        </Row>
      )}

      {type === "contact_2" && (
        <ul className="contact-form-list">
          {ContactBoxData.map((item, index) => (
            <li className="contact-box" key={index}>
              <div className="contact-info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="contact-icon">{item.icon}</div>
            </li>
          ))}
        </ul>
      )}

      {type === "contact_3" && (
        <ul className="contact-list">
          {ContactBoxData.slice(0, 3).map((item, index) => (
            <li className="contact-box" key={index}>
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-info">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default ContactBox;
