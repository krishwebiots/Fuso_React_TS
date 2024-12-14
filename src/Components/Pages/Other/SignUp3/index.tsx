import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import SignUpForm from "../Common/SignUpForm";
import { FindAPlaceYouWillLove } from "../../../../Constants/Constants";
import { LoginContent } from "../../../../Data/Pages/Other";

const SignUp3Container = () => {
  return (
    <section className="pt-0 login-section login-3 overflow-hidden">
      <Container fluid className="p-0">
        <Row>
          <Col lg="6" className="p-0">
            <div className="d-flex align-items-center justify-content-center h-100">
              <SignUpForm />
            </div>
          </Col>
          <Col lg="6" className="p-0">
            <div className="login3-image">
              <RatioImage src={dynamicImage("other/s-2.jpg")} alt="s2" className="bg-img" />
              <div className="login3-content">
                <Link to={RouteList.Home.CarDemo1} className="login-logo">
                  <Image src={dynamicImage("logo/1.png")} alt="logo" />
                </Link>
                <h2>{FindAPlaceYouWillLove}</h2>
                <p>{LoginContent}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp3Container;
