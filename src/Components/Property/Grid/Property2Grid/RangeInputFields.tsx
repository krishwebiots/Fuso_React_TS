import { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { setPriceStatus } from "../../../../ReduxToolkit/Reducers/FilterReducers";

const RangeInputFields = () => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState<number[]>([20000, 500000]);
  const MIN = 1000;
  const MAX = 1000000;
  const priceHandle = (value: number[]) => {
    setValues(value);
    dispatch(setPriceStatus({ min: value[0], max: value[1] }));
  };

  return (
    <Range
      values={values}
      step={1}
      min={MIN}
      max={MAX}
      onChange={(values) => {
        priceHandle(values);
      }}
      renderTrack={({ props, children }) => (
        <div
          onTouchStart={props.onTouchStart}
          onMouseDown={props.onMouseDown}
          style={{
            ...props.style,
            height: "36px",
            display: "flex",
            width: "100%",
          }}
        >
          <div
            ref={props.ref}
            style={{
              height: "5px",
              width: "100%",
              borderRadius: "4px",
              background: getTrackBackground({
                values: values,
                colors: ["#ccc", "#ef3f3e", "#ccc"],
                min: MIN,
                max: MAX,
              }),
              alignSelf: "center",
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ index, props }) => (
        <div
          {...props}
          key={index}
          style={{
            ...props.style,
            height: "12px",
            width: "7px",
            top: "15px",
            borderRadius: "60px",
            backgroundColor: "#ef3f3e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 2px 6px #AAA",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-30px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "12px",
              fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
              padding: "4px",
              borderRadius: "4px",
              backgroundColor: "#ef3f3e",
            }}
          >
            {values[index]}
          </div>
        </div>
      )}
    />
  );
};

export default RangeInputFields;
