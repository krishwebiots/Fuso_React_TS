import { Form } from "react-router-dom";
import { FindAnAnswer, Send } from "../../../../Constants/Constants";
import { QuestionContent } from "../../../../Data/Pages/Other";
import RenderInput from "../../../CommonComponents/RenderInput";
import CommonHeader from "../../../Home/Common/CommonHeader";

const QuestionBox = () => {
  return (
    <div className="faq-section section-b-space">
      <CommonHeader title={FindAnAnswer} content={QuestionContent} headClass="text-center content-title faq-bottom-title" />
      <div className="question-box">
        <Form className="login-form">
          <RenderInput placeholder="Enter Your Email" mainClass="form-input" inputType="email" review />
          <RenderInput placeholder="Type Your Question here..." mainClass="form-input" inputType="textarea" review />
          <RenderInput button={Send} mainClass="form-input text-end" review />
        </Form>
      </div>
    </div>
  );
};

export default QuestionBox;
