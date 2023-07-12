import { useFormik } from "formik";
import InputComponent from "../Common/InputComponents";
import PasswordInput from "../Common/PasswordInput";
import * as Yup from "yup";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { SignUpUser } from "../../Services/signUpService";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../Providers/AuthProvider";

// import axios from "axios";

//1
const initialValues = {
  name: "", //
  username: "", //
  email: "", //
  phoneNumber: "", //
  password: "", //
  passwordConfirm: "", //
};

//2
// const onSubmit = (value) => {
//   console.log(value);
//   // axios
//   //   .post("http://localhost:3001/users", value)
//   //   .then((res) => console.log(res.data))
//   //   .catch((err) => console.log(err.response.data));
// };

//3
const validationSchema = Yup.object({
  name: Yup.string().required("field is required").min(3, "min 3 characters"),
  username: Yup.string()
    .required("field is required")
    .min(6, "min 6 characters"),
  email: Yup.string()
    .email("invalid email address")
    .required("field is required"),
  phoneNumber: Yup.string()
    .matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    )
    .required("field is required"),
  password: Yup.string()
    .required("field is required")
    .min(8, "min 8 characters"),
  // .matches(
  //   // eslint-disable-next-line
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  // ),
  passwordConfirm: Yup.string()
    .required("field is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const SignUpFrom = () => {
  const setAuth = useAuthActions();
  const auth = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const direct = searchParams.get("redirect") || "/";
  const redirect = searchParams.get("redirect")
    ? `/${searchParams.get("redirect")}`
    : "/";
  useEffect(() => {
    if (auth) {
      navigate(redirect);
    }
    // eslint-disable-next-line
  }, [direct, auth]);
  const onSubmit = async (value) => {
    const { name, email, phoneNumber, password } = value;
    const userData = { name, email, phoneNumber, password };
    // const newUserData = { ...userData, cartItem: [] };
    // console.log(newUserData);
    try {
      const { data } = await SignUpUser(userData);
      // console.log(data);
      setAuth(data);
      //localStorage.setItem("Authentication", JSON.stringify(data));
      toast.success(`'${name}' registered successflly!`);
      setError(null);
      navigate(redirect);
    } catch (err) {
      if (err.response.data.message) {
        setError(err.response.data.message);
        console.log(error);
        toast.error(error);
      }
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="w-1/3 mx-auto my-10">
      <header className=" mb-2 w-full text-2xl flex justify-center">
        <h2 className="py-1">Sign Up Form</h2>
      </header>
      <div className="container flex flex-col border-2 border-indigo-300 py-5 rounded-md md:min-w-max">
        <form onSubmit={formik.handleSubmit}>
          <InputComponent formik={formik} name="name" />
          <InputComponent formik={formik} name="username" />
          <InputComponent formik={formik} name="email" type="email" />
          <InputComponent formik={formik} name="phoneNumber" type="tel" />
          <PasswordInput formik={formik} name="password" type="password" />
          <PasswordInput
            formik={formik}
            name="passwordConfirm"
            type="password"
          />

          <div className="w-full flex justify-center px-5">
            <button
              disabled={!formik.isValid}
              type="submit"
              className="w-full md:w-48 mt-2 border-2 border-indigo-600 py-1 px-5 rounded-md disabled:text-gray-400 disabled:border-gray-400"
            >
              SignUp
            </button>
          </div>
          <div className="px-5 mt-4">
            Already
            <NavLink
              to={`/login?redirect=${direct}`}
              className="text-green-600 pl-2"
            >
              login?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpFrom;
