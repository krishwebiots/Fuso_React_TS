import { Link } from "react-router-dom";
import { Button, Form, Input, Label } from "reactstrap";
import { DonTHaveAnAccount, LogIn, LogInYourAccount, OR, Remember, SignUp, Welcome } from "../../../../Constants/Constants";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import { LoginSocialData } from "../../../../Data/Pages/Other";
import RenderInput from "../../../CommonComponents/RenderInput";

const LoginForm = () => {
  return (
    <div className="form-box">
      <div className="login-title">
        <h3>{Welcome}</h3>
        <h5>{LogInYourAccount}</h5>
      </div>
      <Form className="login-form">
        <RenderInput placeholder="Enter Your Email" mainClass="form-input" review />
        <RenderInput placeholder="Enter Your Password" mainClass="form-input" review />
        <div className="form-check-box">
          <Input type="checkbox" id="Remember" />
          <Label htmlFor="Remember">{Remember}</Label>
        </div>
        <Button className="btn-solid" type="button">
          {LogIn}
        </Button>
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
          <h6>{DonTHaveAnAccount}</h6>
          <Link to={RouteList.Pages.Other.SignUp1}>{SignUp}</Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
