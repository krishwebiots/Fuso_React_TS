import { SearchNormal1 } from "iconsax-react";
import { useState } from "react";
import { Button, Container, Input, Nav, NavItem, TabContent, TabPane } from "reactstrap";
import { FrequentlyQuestions, HaveAnyQuestion } from "../../../../Constants/Constants";
import { FaqNavList, FrequentlyQuestionsContent } from "../../../../Data/Pages/Other";
import CommonHeader from "../../../Home/Common/CommonHeader";
import FaqBox from "./FaqBox";

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <section className="faq-section">
      <Container>
        <CommonHeader title={FrequentlyQuestions} content={FrequentlyQuestionsContent} headClass="text-center content-title mb-0" />
        <div className="search-title">
          <h3>{HaveAnyQuestion}</h3>
          <div className="search-input">
            <SearchNormal1 className="iconsax" />
            <Input type="search" placeholder="Type Here Your Questions..." />
          </div>
        </div>
        <div className="nav-tabs-portfolio">
          <Nav pills className="faq-tab">
            {FaqNavList.map((item, index) => (
              <NavItem key={index}>
                <Button className={`nav-link ${activeTab === item.type ? "active" : ""}`} color="transparent" onClick={() => setActiveTab(item.type)}>
                  {item.title}
                </Button>
              </NavItem>
            ))}
          </Nav>
        </div>
        <TabContent activeTab={activeTab}>
          {FaqNavList.map((item, index) => (
            <TabPane tabId={item.type} key={index}>
              <FaqBox type={item.type} />
            </TabPane>
          ))}
        </TabContent>
      </Container>
    </section>
  );
};

export default FaqSection;
