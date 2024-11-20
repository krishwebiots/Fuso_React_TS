import { ArrowUp } from "iconsax-react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { InterviewQuestionTitle } from "../../../Constants/Constants";
import { FaqData, InterviewQuestionContent, QuestionListData } from "../../../Data/Demo/JobDemo3";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const InterviewQuestion = () => {
  return (
    <section className="question-section position-relative">
      {dynamicNumber(2).map((item, index) => (
        <Image src={dynamicSvg(`job/o-${item + 2}.svg`)} alt={`o-${item + 2}`} className={`img-fluid object-${item + 2} position-absolute`} key={index} />
      ))}
      <Container>
        <CommonHeader title={InterviewQuestionTitle} content={InterviewQuestionContent} headClass="title-style-5" />
        <Row className="justify-content-lg-between justify-content-center align-items-center gy-5">
          <Col xl="5" lg="6" xs="9">
            <div className="main-img position-relative">
              {FaqData.map((item, index) => (
                <Image src={dynamicImage(`job-3/about/${item.image}`)} alt="faq-object" className={`img-fluid ${item.class ? item.class : ""}`} key={index} />
              ))}
            </div>
          </Col>
          <Col xl="6" lg="6">
            <ul className="question-list">
              {QuestionListData.map((item, index) => (
                <li key={index}>
                  <div className="question-list-flex">
                    <h3>{item.title}</h3>
                    <h4>{item.question}</h4>
                  </div>
                  <Link to={RouteList.Pages.Other.Faq} className="arrow-circle">
                    <ArrowUp className="iconsax"/>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InterviewQuestion;
