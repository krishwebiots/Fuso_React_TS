import { Form } from "reactstrap";
import PropertyDetails from "./PropertyDetails";
import FurnishingDetail from "./FurnishingDetail";
import Area from "./Area";
import PropertyFeatures from "./PropertyFeatures";
import PriceDetails from "./PriceDetails";
import Gallery from "./Gallery";

const CreateProperty = () => {
  return (
    <Form>
      <PropertyDetails />
      <FurnishingDetail />
      <Area />
      <PropertyFeatures />
      <PriceDetails />
      <Gallery />
    </Form>
  );
};

export default CreateProperty;
