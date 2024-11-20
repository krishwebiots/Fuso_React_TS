import { Container } from "reactstrap";
import SearchTabList from "../Common/SearchTabList";

const TabSection = () => {
  return (
    <Container>
      <div className="property-home-tab car2-home-tab">
        <SearchTabList endPoint={2} showTab={[2, 3, 4]} datePicker tabs />
      </div>
    </Container>
  );
};

export default TabSection;
