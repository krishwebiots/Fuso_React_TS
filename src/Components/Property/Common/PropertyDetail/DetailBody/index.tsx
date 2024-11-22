import { Fragment } from "react/jsx-runtime";
import Amenities from "./Amenities";
import Description from "./Description";
import FloorPlans from "./FloorPlans";
import Location from "./Location";
import Overview from "./Overview";
import Reviews from "./Reviews";
import ScheduleTour from "./ScheduleTour";
import Video from "./Video";

const DetailBody = () => {
  return (
    <Fragment>
      <Overview />
      <Amenities />
      <Description />
      <FloorPlans />
      <Video />
      <Location />
      <Reviews />
      <ScheduleTour />
    </Fragment>
  );
};

export default DetailBody;
