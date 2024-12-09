import { Fragment, useState } from "react";
import { Button, Container, Nav, NavItem } from "reactstrap";
import { PortfolioListData } from "../../../Data/Pages/Portfolio";
import { RouteList } from "../../../Routers/RouteList";
import Breadcrumbs from "../Breadcrumbs";
import PortfolioBox from "./PortfolioBox";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Fragment>
      <Breadcrumbs title="Portfolio" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="portfolio-section section-b-space">
        <Container>
          <h3>Showcase of Success</h3>
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
          <PortfolioBox activeTab={activeTab} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Portfolio;
