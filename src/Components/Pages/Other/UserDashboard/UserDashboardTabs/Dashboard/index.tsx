import ReactApexChart from "react-apexcharts";
import { Col, Row } from "reactstrap";
import { AmazingDealsTitle } from "../../../../../../Constants/Constants";
import { DealChart } from "../../../../../../Data/Pages/Other";
import { dynamicImage, Image } from "../../../../../../Utils";
import JobApplied from "./JobApplied";
import JobCard from "./JobCard";
import LatestCarOrders from "./LatestCarOrders";
import PropertyCard from "./PropertyCard";
import SalesLayout from "./SalesLayout";

const Dashboard = () => {
  return (
    <div className="common-card">
      <Row className="gy-4">
        <SalesLayout />
        <Col xl="5">
          <div className="white-card">
            <h4 className="dashboard-inner-title">{AmazingDealsTitle}</h4>
            <div id="dealChart" className="dealChart">
              <ReactApexChart options={DealChart} series={DealChart.series} type="bar" height={250} />
            </div>
          </div>
        </Col>
        <LatestCarOrders />
        <PropertyCard />
        <Col md="4">
          <div className="map-card">
            <Image src={dynamicImage("other/map-card.jpg")} alt="map" className="img-fluid" />
          </div>
        </Col>
        <JobApplied />
        <JobCard />
      </Row>
    </div>
  );
};

export default Dashboard;
