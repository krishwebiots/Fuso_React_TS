import { Col } from "reactstrap";
import { DashboardTitle } from "../../../../../../Constants/Constants";
import { SalesLayoutData } from "../../../../../../Data/Pages/Other";
import { dynamicSvg, Image } from "../../../../../../Utils";

const SalesLayout = () => {
  return (
    <Col xs="12">
      <h4 className="dashboard-title">{DashboardTitle}</h4>
      <ul className="sales-layout-list">
        {SalesLayoutData.map((item, index) => (
          <li key={index} className={index === 2 ? "d-xl-block d-md-none d-block" : ""}>
            <div className="sale-flex">
              <div>
                <span>{item.name}</span>
                <h4>{item.price}</h4>
                <h6>
                  <Image src={dynamicSvg(item.trendImg)} alt={item.trendAlt} className="img-fluid" /> {item.trend}
                </h6>
              </div>
              <div className="sale-img">
                <Image src={dynamicSvg(item.salesImg)} alt="sales" className="img-fluid" />
                <Image src={dynamicSvg(item.salesImg)} alt="sales" className="img-fluid sale-opacity" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default SalesLayout;
