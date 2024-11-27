import { FC, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button } from "reactstrap";
import { Href } from "../../../../../Constants/Constants";
import { brands } from "../../../../../Data/Car";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setCarBrandModel } from "../../../../../ReduxToolkit/Reducers/FilterReducers";

const BrandModelFilter: FC<{ id: string }> = ({ id }) => {
  const [showMore, setShowMore] = useState(false);
  const [openItems, setOpenItems] = useState<string>("");
  const dispatch = useAppDispatch();
  const { carBrandModel } = useAppSelector((state) => state.filter);

  const toggle = (id: string) => setOpenItems((openItems) => (openItems === id ? "" : id));

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) dispatch(setCarBrandModel([...carBrandModel, value]));
    else dispatch(setCarBrandModel(carBrandModel.filter((selectedValue) => selectedValue !== value)));
  };

  const renderBrands = (brandsToRender: typeof brands) =>
    brandsToRender.map((brand, index) => (
      <div className="main-choose-item" key={index}>
        <div className="choose-item">
          <input type="checkbox" className="main-check" id={`main-check-${brand.id}`} />
          <label className="label-flex" htmlFor={`main-check-${brand.id}`}>
            <span>{brand.name}</span>
          </label>
          <Button className={`accordion-button ${openItems !== brand.id ? "collapsed" : ""}`} id={`toggler${brand.id}`} onClick={() => toggle(brand.id)} />
        </div>
        <Accordion toggle={toggle} open={openItems}>
          <AccordionItem>
            <AccordionBody accordionId={brand.id}>
              <ul className="model-list">
                {brand.models.map((model, index) => (
                  <li key={index}>
                    <input type="checkbox" id={model.name} value={model.value} checked={carBrandModel?.includes(model.value)} onChange={handleCheckboxChange} />
                    <label className="label-flex" htmlFor={model.name}>
                      <span>{model.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    ));

  return (
    <AccordionItem>
      <AccordionHeader targetId={id}>Brand + Model</AccordionHeader>
      <AccordionBody accordionId={id}>
        <div className="more-list" style={showMore ? { maxHeight: "none" } : {}}>
          <div className="search-input">
            <i className="iconsax" data-icon="search-normal-2" />
            <input type="search" className="form-control" placeholder="Search Brand or Model" />
          </div>
          <span className="inner-title">Popular</span>
          <div className="sidebar-choose-list">{renderBrands(brands.slice(0, 4))}</div>
          <span className="inner-title">Others</span>
          <div className="sidebar-choose-list">{renderBrands(brands.slice(4))}</div>
        </div>
        <a href={Href} className={`text-btn ${showMore ? "less-btn d-inline-block" : "more-btn"}`} onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </a>
      </AccordionBody>
    </AccordionItem>
  );
};

export default BrandModelFilter;
