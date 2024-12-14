import { FC, Fragment, useEffect, useState } from "react";
import { Button, Container, Nav, NavItem } from "reactstrap";
import { ShowcaseOfSuccess } from "../../../Constants/Constants";
import { PortfolioListData } from "../../../Data/Pages/Portfolio";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { setCardToShow } from "../../../ReduxToolkit/Reducers/LayoutReducers";
import { RouteList } from "../../../Routers/RouteList";
import { PortfolioType } from "../../../Types/PortfolioType";
import Breadcrumbs from "../Breadcrumbs";
import PortfolioBox from "./PortfolioBox";

const Portfolio: FC<PortfolioType> = ({ gridSize, carShow, type, sectionClass }) => {
  const [activeTab, setActiveTab] = useState("all");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardToShow(carShow || 6));
  }, [carShow, dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title="Portfolio" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className={`portfolio-section section-b-space ${sectionClass ? sectionClass : ""}`}>
        <Container>
          <h3>{ShowcaseOfSuccess}</h3>
          {type !== "box_slider" && (
            <div className="nav-tabs-portfolio">
              <Nav pills>
                {PortfolioListData.map((item, index) => (
                  <NavItem key={index}>
                    <Button className={`nav-link tab-filter ${activeTab === item.type ? "active" : ""}`} color="transparent" onClick={() => setActiveTab(item.type)}>
                      {item.title}
                    </Button>
                  </NavItem>
                ))}
              </Nav>
            </div>
          )}
          <PortfolioBox activeTab={activeTab} gridSize={gridSize} type={type} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Portfolio;
