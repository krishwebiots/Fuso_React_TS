import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import { RouteList } from "../../../../Routers/RouteList";
import { PrivacyPolicyData } from "../../../../Data/Pages/Other";

const PrivacyContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Pricing" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="privacy-section section-b-space">
        <Container>
          <h3 className="text-center">User Privacy and Data Security Policy</h3>
          <span className="privacy-date">
            <strong>Effective Date:</strong> 25/05/2024
          </span>
          <Row>
            <Col xxl="10" lg="9">
              <div data-bs-spy="scroll" data-bs-target="#navbar-privacy" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex={0}>
                {PrivacyPolicyData.map((item, index) => (
                  <div id={item.id}>
                    <h4 className="privacy-title">{item.title}</h4>
                    <p>{item.content}</p>
                    {item.subList && (
                      <ul className="sub-list">
                        {item.subList.map((subList, index) => (
                          <li key={index}>
                            <strong>{subList.title}: </strong>
                            {subList.content}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default PrivacyContainer;
