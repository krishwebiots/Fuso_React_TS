import { SearchNormal1 } from "iconsax-react";
import { FC, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button, Label } from "reactstrap";
import { BrandAndModel, Href, Others, Popular } from "../../../../Constants/Constants";
import { Brands } from "../../../../Data/Car";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setCarBrandModel } from "../../../../ReduxToolkit/Reducers/FilterReducers";

const BrandModelFilter: FC<{ id: string }> = ({ id }) => {
  const [showMore, setShowMore] = useState(false);
  const [openItems, setOpenItems] = useState<string>("");
  const dispatch = useAppDispatch();
  const { carBrandModel } = useAppSelector((state) => state.filter);

  const toggle = (id: string) => setOpenItems((openItems) => (openItems === id ? "" : id));

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedPropertyType = [...carBrandModel];
    const brand = Brands.find((item) => item.value === value);

    if (brand) {
      if (checked) updatedPropertyType = [...carBrandModel, brand.value, ...brand.models.map((model) => model.value)];
      else updatedPropertyType = updatedPropertyType.filter((selectedValue) => selectedValue !== brand.value && !brand.models.some((model) => model.value === selectedValue));
    } else {
      if (checked) updatedPropertyType.push(value);
      else updatedPropertyType = updatedPropertyType.filter((selectedValue) => selectedValue !== value);
      Brands.forEach((item) => {
        const allModelsSelected = item.models.every((model) => updatedPropertyType.includes(model.value));
        if (allModelsSelected && !updatedPropertyType.includes(item.value)) updatedPropertyType.push(item.value);
        else if (!allModelsSelected && updatedPropertyType.includes(item.value)) updatedPropertyType = updatedPropertyType.filter((selectedValue) => selectedValue !== item.value);
      });
    }
    dispatch(setCarBrandModel(updatedPropertyType));
  };

  const renderBrands = (brandsToRender: typeof Brands) =>
    brandsToRender.map((brand, index) => (
      <div className="main-choose-item" key={index}>
        <div className="choose-item">
          <input type="checkbox" className="main-check" id={brand.name} value={brand.value} checked={carBrandModel?.includes(brand.value)} onChange={handleCheckboxChange} />
          <Label className="label-flex" htmlFor={brand.name}>
            <span>{brand.name}</span>
            {brand.count && <span>({brand.count})</span>}
          </Label>
          <Button className={`accordion-button ${openItems !== brand.id.toString() ? "collapsed" : ""}`} id={`toggler${brand.id}`} onClick={() => toggle(brand.id.toString())} />
        </div>
        <Accordion toggle={toggle} open={openItems}>
          <AccordionItem>
            <AccordionBody accordionId={brand.id.toString()}>
              <ul className="model-list">
                {brand.models.map((model, index) => (
                  <li key={index}>
                    <input type="checkbox" id={model.name} value={model.value} checked={carBrandModel?.includes(model.value)} onChange={handleCheckboxChange} />
                    <Label className="label-flex" htmlFor={model.name}>
                      <span>{model.name}</span>
                      {model.count && <span>({model.count})</span>}
                    </Label>
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
      <AccordionHeader targetId={id}>{BrandAndModel}</AccordionHeader>
      <AccordionBody accordionId={id}>
        <div className="more-list" style={showMore ? { maxHeight: "none" } : {}}>
          <div className="search-input">
            <SearchNormal1 className="iconsax" />
            <input type="search" className="form-control" placeholder="Search Brand or Model" />
          </div>
          <span className="inner-title">{Popular}</span>
          <div className="sidebar-choose-list">{renderBrands(Brands.slice(0, 4))}</div>
          <span className="inner-title">{Others}</span>
          <div className="sidebar-choose-list">{renderBrands(Brands.slice(4))}</div>
        </div>
        <a href={Href} className={`text-btn ${showMore ? "less-btn d-inline-block" : "more-btn"}`} onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </a>
      </AccordionBody>
    </AccordionItem>
  );
};

export default BrandModelFilter;
