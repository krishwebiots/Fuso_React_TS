import { Container } from "reactstrap";
import { dynamicImage } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import SignUpForm from "../Common/SignUpForm";

const SignUp2Container = () => {
  return (
    <section className="pt-0 login-section login-2 overflow-hidden">
      <RatioImage src={dynamicImage("other/s-1.jpg")} alt="s1" className="bg-img" />
      <Container className="h-100">
        <div className="position-relative h-100">
          <SignUpForm />
        </div>
      </Container>
    </section>
  );
};

export default SignUp2Container;
