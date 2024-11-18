import { getTrackBackground, Range } from "react-range";
import { STEP } from "../../../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setPriceStatus } from "../../../../../../ReduxToolkit/Reducers/FilterReducers";
import { RangeInputFieldsType } from "../../../../../../Types/ProductType";

const RangeInputFields: React.FC<RangeInputFieldsType> = ({ min, max }) => {
  const dispatch = useAppDispatch();
  const { priceStatus } = useAppSelector((state) => state.filter);

  return (
    <Range
      values={priceStatus}
      step={STEP}
      min={min || 1000}
      max={max || 1000000}
      onChange={(values) => dispatch(setPriceStatus(values))}
      renderTrack={({ props, children }) => (
        <div onTouchStart={props.onTouchStart} onMouseDown={props.onMouseDown} style={{ ...props.style, height: "36px", display: "flex", width: "100%" }}>
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: priceStatus,
                colors: ["#ccc", "rgba(var(--theme-color), 1)", "#ccc"],
                min: min || 1000,
                max: max || 1000000,
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
          <div style={{ position: "absolute", top: "-30px", color: "#fff", fontWeight: "bold", fontSize: "12px", fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif", padding: "4px", borderRadius: "4px", backgroundColor: "rgba(var(--theme-color), 1)" }}>{priceStatus[index]}</div>
        </div>
      )}
    />
  );
};

export default RangeInputFields;
