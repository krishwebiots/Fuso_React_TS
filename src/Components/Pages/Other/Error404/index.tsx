import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import { GoToHomePage, WhoopsPageNotFound } from "../../../../Constants/Constants";
import { Error404Content } from "../../../../Data/Pages/Other";

const Error404Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="404" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space error-section">
        <div className="container">
          <div className="error-box">
            <div className="error-content">
              <Image src={dynamicImage("other/404.svg")} className="img-fluid" />
              <h2>{WhoopsPageNotFound}</h2>
              <p>{Error404Content}</p>
              <Link to={RouteList.Home.CarDemo1} className="btn-solid">
                {GoToHomePage}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Error404Container;
