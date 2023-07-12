const InputComponent = ({ formik, name, type = "text" }) => {
  return (
    <>
      <div className=" flex flex-col px-4 gap-2 mb-3">
        <div className=" flex flex-col justify-between items-start  md:flex-row md:gap-4">
          <label htmlFor={name}>{name}</label>
          <input
            name={name}
            {...formik.getFieldProps(name)}
            type={type}
            id={name}
            placeholder={`Enter your ${name} ...`}
            className="w-full placeholder-indigo-300 py-1 px-3 border border-indigo-500  outline-none rounded-md text-indigo-600 md:w-60"
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

export default InputComponent;
