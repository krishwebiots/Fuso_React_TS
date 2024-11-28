import { getTrackBackground, Range } from "react-range";
import { STEP } from "../../../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setBudgetStatus, setPriceStatus } from "../../../../../../ReduxToolkit/Reducers/FilterReducers";
import { RangeInputFieldsType } from "../../../../../../Types/ProductType";
import { FC, useEffect, useState } from "react";

const RangeInputFields: FC<RangeInputFieldsType> = ({ type }) => {
  const dispatch = useAppDispatch();
  const { priceStatus, budgetStatus, minAndMaxPrice } = useAppSelector((state) => state.filter);
  const [rangePrice, setRangePrice] = useState<number[]>([40000, 500000]);

  const handlePriceChange = (values: number[]) => {
    if (type === "car") dispatch(setBudgetStatus(values));
    else dispatch(setPriceStatus(values));
  };

  useEffect(() => {
    if (type === "car") setRangePrice(budgetStatus);
    else setRangePrice(priceStatus);
  }, [budgetStatus, priceStatus, type, minAndMaxPrice]);

  return (
    <Range
      values={rangePrice}
      step={STEP}
      min={minAndMaxPrice[0] || 1000}
      max={minAndMaxPrice[1] || 1000000}
      onChange={(values) => handlePriceChange(values)}
      renderTrack={({ props, children }) => (
        <div onTouchStart={props.onTouchStart} onMouseDown={props.onMouseDown} style={{ ...props.style, height: "36px", display: "flex", width: "100%" }}>
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: rangePrice,
                colors: ["#ccc", "rgba(var(--theme-color), 1)", "#ccc"],
                min: minAndMaxPrice[0] || 1000,
                max: minAndMaxPrice[1] || 1000000,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ index, props }) => (
        <div {...props} key={index} style={{ ...props.style, height: "12px", width: "7px", top: "15px", borderRadius: "60px", backgroundColor: "rgba(var(--theme-color), 1)", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 2px 6px #AAA" }}>
          <div style={{ position: "absolute", top: "-30px", color: "#fff", fontWeight: "bold", fontSize: "12px", fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif", padding: "4px", borderRadius: "4px", backgroundColor: "rgba(var(--theme-color), 1)" }}>{rangePrice[index]}</div>
        </div>
      )}
    />
  );
};

export default RangeInputFields;
