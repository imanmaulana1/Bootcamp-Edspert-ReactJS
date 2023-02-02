import React from "react";

const CheckboxComp = (props) => {
  return (
    <>
      <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label class="form-check-label ms-2" for="flexCheckDefault">
          {props.label}
        </label>
      </div>
    </>
  );
};

export default CheckboxComp;
