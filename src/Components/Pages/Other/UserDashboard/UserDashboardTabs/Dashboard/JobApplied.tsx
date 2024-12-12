import ReactApexChart from "react-apexcharts";
import { Button, Col } from "reactstrap";
import { JobAppliedTitle } from "../../../../../../Constants/Constants";
import { JobAppliedList, OptionsEarning } from "../../../../../../Data/Pages/Other";

const JobApplied = () => {
  return (
    <Col xl="5">
      <div className="white-card">
        <h4 className="dashboard-inner-title">{JobAppliedTitle}</h4>
        <ul className="applied-buttons">
          {JobAppliedList.map((item, index) => (
            <li key={index}>
              <Button className="applied-btn">{item}</Button>
            </li>
          ))}
        </ul>
        <div id="jobChart" className="jobChart">
          <ReactApexChart options={OptionsEarning} series={OptionsEarning.series} type="line" height={158} />
        </div>
      </div>
    </Col>
  );
};

export default JobApplied;
