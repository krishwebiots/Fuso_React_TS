import { Container } from "reactstrap";
import { dynamicImage } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import LoginForm from "../Common/LoginForm";

const Login2Container = () => {
  return (
    <section className="pt-0 login-section login-2 overflow-hidden">
      <RatioImage src={dynamicImage("other/s-1.jpg")} alt="s1" className="bg-img" />
      <Container className="h-100">
        <div className="position-relative h-100">
          <LoginForm />
        </div>
      </Container>
    </section>
  );
};

export default Login2Container;
