import { Col, Label, Row } from "reactstrap";
import { DiscoverOurProduct, PricingPlanTitle } from "../../../../Constants/Constants";
import { PricingPlanContent, PricingPlanData } from "../../../../Data/Pages/Other";
import CommonHeader from "../../../Home/Common/CommonHeader";

const PricingPlan = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <CommonHeader title={PricingPlanTitle} content={PricingPlanContent} headClass="content-title" />
        <Row className="gy-xl-0 gy-4 justify-content-center">
          {PricingPlanData.map((plan, index) => (
            <Col xl="4" md="6" key={index}>
              <div className={`pricing-box ${plan.isActive ? "active" : ""}`}>
                <div className="d-flex align-items-center gap-2 justify-content-between">
                  <h4>{plan.name}</h4>
                  {plan.badge && <Label>{plan.badge}</Label>}
                </div>
                <p>{DiscoverOurProduct}</p>
                <h2>
                  {plan.price} <span>{plan.subtext}</span>
                </h2>
                <button className="btn-border" type="button">
                  {plan.buttonLabel}
                </button>
                <ul className="pricing-list">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <i className="ri-check-double-line" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PricingPlan;
