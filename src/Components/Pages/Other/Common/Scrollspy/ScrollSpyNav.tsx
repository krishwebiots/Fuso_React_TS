import { FC, useEffect, useState } from "react";
import { Col, Nav, NavLink } from "reactstrap";
import { ScrollspyType } from "../../../../../Types/OtherType";

const ScrollSpyNav: FC<ScrollspyType> = ({ list }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
      }
    );

    const sections = document.querySelectorAll(".scrollspy-section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <Col xxl="2" lg="3" className="d-lg-inline-block d-none">
      <div className="side-scrollspy">
        <div id="navbar-privacy" className="nav-sticky">
          <Nav className="flex-column">
            {list?.map((item, index) =>
              item.subList ? (
                <Nav className="flex-column" key={index}>
                  {item.subList.map((subList, index) => (
                    <NavLink className={`mt-1 ${activeId === subList.id ? "active" : ""}`} href={`#${subList.id}`} key={index}>
                      {subList.title}
                    </NavLink>
                  ))}
                </Nav>
              ) : (
                <NavLink href={`#${item.id}`} className={`mt-xl-3 mt-2 ${activeId === item.id ? "active" : ""}`} key={index}>
                  {item.title}
                </NavLink>
              )
            )}
          </Nav>
        </div>
      </div>
    </Col>
  );
};

export default ScrollSpyNav;
