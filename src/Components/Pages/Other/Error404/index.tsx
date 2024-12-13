import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { RouteList } from "../../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../../Utils";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";

const Error404Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="404" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space error-section">
        <div className="container">
          <div className="error-box">
            <div className="error-content">
              <Image src={dynamicImage("other/404.svg")} className="img-fluid" />
              <h2>Whoops ! Page Not Found</h2>
              <p>We couldn't find the page you're looking for. It's possible that the link you clicked on is broken or the page has been moved.</p>
              <Link to={RouteList.Home.CarDemo1} className="btn-solid">
                Go To Home Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Error404Container;
