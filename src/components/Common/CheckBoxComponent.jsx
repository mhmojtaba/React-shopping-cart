import React from "react";

const CheckBoxComponent = ({ CheckOptions, formik, name }) => {
  console.log(formik.errors[name]);
  return (
    <div className=" flex flex-col justify-center items-stretch px-4 gap-2 mb-3 ">
      <div className="flex justify-between">
        <div>Course:</div>
        <div className="flex justify-end gap-4">
          {CheckOptions.map((item) => (
            <div key={item.value}>
              <input
                name={name}
                id={item.value}
                value={item.value}
                onChange={formik.handleChange}
                type="checkbox"
                checked={formik.values[name].includes(item.value)}
              />
              <label htmlFor={item.value}>{item.lable}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex self-end text-xs text-red-500 -mt-1">
        {formik.errors[name] && formik.touched[name] && (
          <p>{formik.errors[name]}</p>
        )}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
