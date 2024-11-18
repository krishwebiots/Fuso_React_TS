import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { RouteList } from "../../../Routers/RouteList";
import { ChildMenuType } from "../../../Types/LayoutType";
import { dynamicImage, Image } from "../../../Utils";

const MenuImage: FC<ChildMenuType> = ({ mainMenu }) => {
  const { t } = useTranslation();

  return (
    <div className="mega-menu sample">
      <Row className="row-cols-xl-4 row-cols-1 gy-4">
        {mainMenu.map((child, index) => (
          <Col key={index}>
            <Link to={child.path ? child.path : RouteList.Home.CarDemo1} className="demo-box">
              <div className="demo-img">
                <div className="overflow-hidden">
                  <Image src={dynamicImage(child.image ? child.image : "other/menu/1.jpg")} alt="demo-1" />
                </div>
              </div>
              <h6>{t(child.title ? child.title : "")}</h6>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuImage;
