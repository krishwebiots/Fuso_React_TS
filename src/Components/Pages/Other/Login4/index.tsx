import { Fragment } from "react/jsx-runtime";
import CarDemo1Container from "../../../Home/CarDemo1";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

const Login4Container = () => {
  return (
    <Fragment>
      <CarDemo1Container />
      <LoginModal />
      <SignUpModal />
    </Fragment>
  );
};

export default Login4Container;
