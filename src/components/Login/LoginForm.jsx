import { useFormik } from "formik";
import InputComponent from "../Common/InputComponents";
import PasswordInput from "../Common/PasswordInput";
import * as Yup from "yup";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { loginUser } from "../../Services/LoginServices";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useAuth, useAuthActions } from "../Providers/AuthProvider";
// import axios from "axios";

//1
const initialValues = {
  email: "", //
  password: "", //
};

//2
// const onSubmit = (value) => {
//   console.log(value);
// axios
//   .post("http://localhost:3001/users", value)
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err.response.data));
//};

//3
const validationSchema = Yup.object({
  email: Yup.string()
    .email("invalid email address")
    .required("field is required"),
  password: Yup.string().required("field is required"),
});

const LoginForm = () => {
  const setAuth = useAuthActions();
  const auth = useAuth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const direct = searchParams.get("redirect") || "/";
  const redirect = searchParams.get("redirect")
    ? `/${searchParams.get("redirect")}`
    : "/";
  //console.log(redirect);

  useEffect(() => {
    if (auth) {
      navigate(redirect);
    }
    // eslint-disable-next-line
  }, [direct, auth]);

  const onSubmit = async (value) => {
    try {
      const { data } = await loginUser(value);
      setAuth(data);
      //localStorage.setItem("Authentication", JSON.stringify(data));
      // console.log(data.token);
      toast.success(`'${value.email}' login successflly!`);
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
        <h2 className="py-1">Login Form</h2>
      </header>
      <div className="container flex flex-col border-2 border-indigo-300 py-5 rounded-md md:min-w-max">
        <form onSubmit={formik.handleSubmit}>
          <InputComponent formik={formik} name="email" type="email" />
          <PasswordInput formik={formik} name="password" type="password" />
          <div className="w-full flex justify-center px-5">
            <button
              disabled={!formik.isValid}
              type="submit"
              className="w-full md:w-48 mt-2 border-2 border-indigo-600 py-1 px-5 rounded-md disabled:text-gray-400 disabled:border-gray-400"
            >
              LogIn
            </button>
          </div>
          <div className="px-5 mt-4">
            Haven't
            <NavLink
              to={`/signup?redirect=${direct}`}
              className="text-green-600 pl-2"
            >
              signed up?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
