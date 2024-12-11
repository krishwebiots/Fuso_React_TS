import { Form } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { FindAnAnswer, Send } from "../../../../Constants/Constants";
import { QuestionContent } from "../../../../Data/Pages/Other";
import CommonHeader from "../../../Home/Common/CommonHeader";

const QuestionBox = () => {
  return (
    <div className="faq-section section-b-space">
      <CommonHeader title={FindAnAnswer} content={QuestionContent} headClass="text-center content-title faq-bottom-title" />
      <div className="question-box">
        <Form className="login-form">
          <div className="form-input">
            <Input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="form-input">
            <Input type="textarea" placeholder="Type Your Question here..." />
          </div>
          <div className="form-input text-end">
            <Button className="btn-solid">{Send}</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default QuestionBox;
