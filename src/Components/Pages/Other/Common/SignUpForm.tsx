import { Link } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import { AlreadyHaveAnAccount, CreateAnAccount, LogIn, OR, SignUpAccount, Welcome } from "../../../../Constants/Constants";
import { LoginSocialData } from "../../../../Data/Pages/Other";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import RenderInput from "../../../CommonComponents/RenderInput";

const SignUpForm = () => {
  return (
    <div className="form-box">
      <div className="login-title">
        <h3>{Welcome}</h3>
        <h5>{SignUpAccount}</h5>
      </div>
      <Form className="login-form">
        <RenderInput placeholder="Enter Your Full Name" mainClass="form-input" review />
        <RenderInput placeholder="Enter Your Email" mainClass="form-input" review />
        <RenderInput placeholder="Enter Your Password" mainClass="form-input" review />
        <div className="form-check-box align-items-start">
          <Input type="checkbox" id="Remember" />
          <Label htmlFor="Remember" className="line-height-change">
            I understand and accept the
            <Link to={RouteList.Pages.Other.Condition} className="text-decoration-underline theme-color">
              Terms and Conditions
            </Link>
            as well as the
            <Link to={RouteList.Pages.Other.Privacy} className="text-decoration-underline theme-color">
              Privacy Policy.
            </Link>
          </Label>
        </div>
        <Button className="btn-solid">{CreateAnAccount}</Button>
        <div className="text-divider">
          <span>{OR}</span>
        </div>
        <ul className="login-social">
          {LoginSocialData.map((item, index) => (
            <li key={index}>
              <Link to={item.url} target="_blank">
                <Image src={dynamicImage(item.image)} className="img-fluid" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="signup-box">
          <h6>{AlreadyHaveAnAccount}</h6>
          <Link to={RouteList.Pages.Other.Login1}> {LogIn}</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm;
