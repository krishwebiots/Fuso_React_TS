import { ArrowUp } from "iconsax-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { InterviewQuestionTitle } from "../../../Constants/Constants";
import { FaqData, InterviewQuestionContent, PaymentData, QuestionListData } from "../../../Data/Demo/JobDemo3";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";

const InterviewQuestion = () => {
  return (
    <Fragment>
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
                      <ArrowUp />
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-b-space job3-newsletter">
        <Container>
          <div className="newsletter-box position-relative">
            {dynamicNumber(3).map((item, index) => (
              <Image src={dynamicImage(`job-3/bg-effect/c-${item}.png`)} alt={`c-${item}`} className={`img-fluid position-absolute circle-${item} d-lg-block d-none`} key={index} />
            ))}
            <Row className="justify-content-between">
              <Col lg="6">
                <div className="newsletter-content">
                  <h2>Get your Dream Job Easily</h2>
                  <p>Whether you're a recent graduate, seasoned professional, or exploring new career paths, our app has you covered.</p>
                  <div className="pay-flex-btn">
                    {PaymentData.map((item, index) => (
                      <Link to={item.utl} key={index}>
                        <Image src={dynamicImage(`job-3/${item.image}`)} alt="gpay" className="img-fluid" />
                      </Link>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xxl="5" xs="6" className="d-lg-block d-none">
                <div className="newsletter-img h-100">
                  <Image src={dynamicImage("job-3/phone-mockup.png")} alt="phone-mockup" className="img-fluid h-100" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default InterviewQuestion;
