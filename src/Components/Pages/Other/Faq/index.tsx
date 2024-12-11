import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Newsletter from "../../../Home/Common/Newsletter";
import QuestionBox from "./QuestionBox";
import FaqSection from "./FaqSection";

const FaqContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="FAQ" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <FaqSection />
      <Newsletter type="pricing" />
      <QuestionBox />
    </Fragment>
  );
};

export default FaqContainer;
