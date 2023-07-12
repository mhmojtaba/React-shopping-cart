import { useRef, useState } from "react";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";

const PasswordInput = ({ formik, name, type = "password" }) => {
  const [eyetoggle, setEyetoggle] = useState(false);

  const pass = useRef(null);

  const toggleHandler = () => {
    setEyetoggle(!eyetoggle);
    if (!eyetoggle) {
      pass.current.setAttribute("type", "text");
    } else {
      pass.current.setAttribute("type", "password");
    }
  };
  return (
    <>
      <div className=" flex flex-col px-4 gap-2 mb-3">
        <div className=" flex flex-col justify-between items-start  relative md:flex-row md:gap-4">
          <label htmlFor={name}>{name}</label>
          <input
            ref={pass}
            name={name}
            {...formik.getFieldProps(name)}
            type={type}
            id={name}
            placeholder={`${name} ...`}
            className="w-full  placeholder-indigo-300 py-1 px-3 border border-indigo-500  outline-none rounded-md text-indigo-600 md:w-60"
          />

          <RiEyeFill
            onClick={toggleHandler}
            className={`absolute right-4 top-8 md:top-2 z-10" ${
              eyetoggle ? "hidden" : ""
            }`}
          />
          <RiEyeCloseFill
            onClick={toggleHandler}
            className={`absolute right-4 top-8 md:top-2 z-10" ${
              !eyetoggle ? "hidden" : ""
            }`}
          />
        </div>
        <div className="flex self-end text-xs text-red-500 -mt-1">
          {formik.errors[name] && formik.touched[name] && (
            <p>{formik.errors[name]}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
