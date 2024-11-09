import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { RouteList } from "../../../Routers/RouteList";

const SortBy = () => {
  return (
    <div className="sortby-section">
      <Container>
        <div className="breadcrumb-content">
          <ul className="breadcrumbs-list">
            <li>
              <Link to={RouteList.Home.PropertyDemo1}>Home</Link>
            </li>
            <li>House in Amsterdam</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default SortBy;
