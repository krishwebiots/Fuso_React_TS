import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import LoginForm from "../Common/LoginForm";

const Login1Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Log In" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space login-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl="7" lg="6" className="d-lg-inline-block d-none">
              <div className="login-img">
                <Image src={dynamicImage("other/1.png")} alt="login-img" className="img-fluid" />
              </div>
            </Col>
            <Col xl="5" lg="6" sm="8">
              <LoginForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Login1Container;
