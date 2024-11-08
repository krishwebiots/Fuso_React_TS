import { Col, Container, Row } from "reactstrap";
import { MeetOurBrokers } from "../../../Constants/Constants";
import { SocialData, TeamData } from "../../../Data/Demo/PropertyDemo2";
import { RouteList } from "../../../Routers/RouteList";
import CommonHeader from "../Common/CommonHeader";
import RatioImage from "../../../Utils/RatioImage";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="property2-team-section section-t-lg-space section-b-lg-space">
      <Container>
        <CommonHeader title={MeetOurBrokers} headClass="title-style-1 title-style-6" subClass="horizontal-title" url={RouteList.Pages.Other.Team} view />
        <Row className="ratio_square justify-content-center gy-4">
          {TeamData.map((member, index) => (
            <Col lg="3" sm="6" key={index}>
              <div className="team-box">
                <div className="team-img">
                  <RatioImage src={dynamicImage(`property2/team/${member.image}`)} alt={`team-${index + 1}`} className="bg-img" />
                </div>
                <div className="team-content">
                  <h5>{member.name}</h5>
                  <ul className="team-social">
                    {SocialData.map((social, i) => (
                      <li key={i}>
                        <Link to={`https://${social}.com/`} target="_blank" rel="noopener noreferrer">
                          <Image src={dynamicSvg(`property2/team/${i + 1}.svg`)} alt={`social-${i + 1}`} className="img-fluid" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
