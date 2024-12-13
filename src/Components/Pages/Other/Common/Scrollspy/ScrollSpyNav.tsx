import { FC } from "react";
import { Col, Nav, NavLink } from "reactstrap";
import { ScrollspyType } from "../../../../../Types/OtherType";

const ScrollSpyNav: FC<ScrollspyType> = ({ list }) => {
  return (
    <Col xxl="2" lg="3" className="d-lg-inline-block d-none">
      <div className="side-scrollspy">
        <div id="navbar-privacy" className="nav-sticky">
          <Nav className="flex-column">
            {list?.map((item, index) =>
              item.subList ? (
                <Nav className="flex-column" key={index}>
                  {item.subList.map((subList, index) => (
                    <NavLink className="mt-1" data-to-scrollspy-id={subList.id} href={`#${subList.id}`} key={index}>
                      {subList.title}
                    </NavLink>
                  ))}
                </Nav>
              ) : (
                <NavLink data-to-scrollspy-id={item.id} href={`#${item.id}`} className="mt-xl-3 mt-2" key={index}>
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
