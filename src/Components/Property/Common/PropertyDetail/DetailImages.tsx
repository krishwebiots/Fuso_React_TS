import { Fragment } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Href } from "../../../../Constants/Constants";
import { dynamicImage, dynamicNumber } from "../../../../Utils";

const DetailImages = () => {
  const RenderImageItem = (item: number) => {
    const imageSrc = dynamicImage(`property/detail-main/${item}.jpg`);
    return (
      <Col xs="6" className="p-0" key={item}>
        <Item original={imageSrc} width="1300" height="800">
          {({ ref, open }) => (
            <Link to={Href} onClick={open} className="bg-size" style={{ backgroundImage: `url(${imageSrc})` }}>
              <img className="img-fluid bg-img" ref={ref} src={imageSrc} alt="Image_description" style={{ display: "none" }} />
            </Link>
          )}
        </Item>
      </Col>
    );
  };

  return (
    <Fragment>
      <Row className="ratio_landscape m-0 image-radius">
        <Gallery>{RenderImageItem(1)}</Gallery>
        <Col md="6" className="p-0">
          <Row className="m-0">
            <Gallery>{dynamicNumber(4).map((item) => RenderImageItem(item + 1))}</Gallery>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DetailImages;
