import { Container } from "reactstrap";
import SearchSection from "../../../Layout/Footer/FooterDemo2/SearchSection";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import Testimonials from "../Common/Testimonials";

const TestimonialAndNewsletter = () => {
  return (
    <div className="combine-bg overflow-hidden">
      <RatioImage src={dynamicImage("dark-job/bg-effect/newsletter-bg.png")} alt="newsletter-bg" className="bg-img" />
      <Testimonials type="job_demo2" />
      <section className="dark-newsletter-section">
        <Container>
          <div className="newsletter-box">
            <SearchSection />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TestimonialAndNewsletter;
