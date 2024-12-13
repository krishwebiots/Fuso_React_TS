import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import LoginForm from "../Common/LoginForm";

const Login3Container = () => {
  return (
    <section className="pt-0 login-section login-3 overflow-hidden">
      <Container fluid className="p-0">
        <Row>
          <Col lg="6" className="p-0">
            <div className="d-flex align-items-center justify-content-center h-100">
              <LoginForm />
            </div>
          </Col>
          <Col lg="6" className="p-0">
            <div className="login3-image">
              <RatioImage src={dynamicImage("other/s-2.jpg")} alt="s2" className="bg-img" />
              <div className="login3-content">
                <Link to={RouteList.Home.CarDemo1} className="login-logo">
                  <Image src={dynamicImage("logo/1.png")} alt="logo" />
                </Link>
                <h2>Find a Place you will Love.</h2>
                <p>Discover your perfect place with ease. Whether you’re searching for a dream home, a cozy vacation rental, or a workspace, we connect you with locations that fit your lifestyle.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login3Container;
