import { Container } from "reactstrap";
import SearchTabList from "../../Home/Common/SearchTabList";

const PropertyBreadcrumb = () => {
  return (
    <div className="breadcrumbs-section">
      <Container>
        <div className="breadcrumbs-main">
          <div className="property-home-tab">
            <SearchTabList endPoint={2} showTab={[1, 2, 10, 11]} tabs button showNav />
          </div>
        </div>
      </Container>
      <div id="particles-js" className="breadcrumbs-particles" />
    </div>
  );
};

export default PropertyBreadcrumb;
