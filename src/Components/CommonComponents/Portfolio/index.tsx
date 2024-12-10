import { FC, Fragment, useEffect, useState } from "react";
import { Button, Container, Nav, NavItem } from "reactstrap";
import { PortfolioListData } from "../../../Data/Pages/Portfolio";
import { RouteList } from "../../../Routers/RouteList";
import Breadcrumbs from "../Breadcrumbs";
import PortfolioBox from "./PortfolioBox";
import { PortfolioType } from "../../../Types/PortfolioType";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { setCardToShow } from "../../../ReduxToolkit/Reducers/SidebarReducers";

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
          <h3>Showcase of Success</h3>
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
