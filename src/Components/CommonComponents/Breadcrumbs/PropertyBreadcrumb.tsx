import { Container } from "reactstrap";
import SearchTabList from "../../Home/Common/SearchTabList";
import ParticlesBg from "particles-bg";

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
      <div className="breadcrumbs-particles">
        <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={30}/>
      </div>
    </div>
  );
};

export default PropertyBreadcrumb;
