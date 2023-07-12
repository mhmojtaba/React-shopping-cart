import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../components/Providers/AuthProvider";
import { toast } from "react-toastify";
//import { useEffect } from "react";

const Profile = () => {
  const user = useAuth();

  console.log(user);
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  const signOutHandler = () => {
    setAuth(null);
    localStorage.removeItem("Authentication");
    navigate("/");
    toast.success(`'${user.name}' SignedOut!`);
  };

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("Authentication"));
  //   if (userData) {
  //     setAuth(userData);
  //   }

  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <h3 className="text-3xl text-center mt-6 text-green-400">
        Profile Dashboard
      </h3>
      <div className="flex justify-between flex-col items-center mt-10 border rounded-md py-3 border-gray-600 md:max-w-lg md:mx-auto">
        <div className="w-full flex justify-center border-b pb-3 mb-6">
          <p>Name = {user?.name}</p>
        </div>
        <div className="w-full flex justify-center border-b pb-3 mb-6">
          <p>email ={user?.email}</p>
        </div>
        <div className="w-full flex justify-center  pb-3 ">
          <p>Phone = {user?.phoneNumber}</p>
        </div>
      </div>
      <div className=" flex justify-center mt-6 ">
        <button
          onClick={signOutHandler}
          className="bg-red-500 hover:bg-red-600 mt-4 transition-all rounded-md w-full md:w-36 py-2 text-slate-50"
        >
          SignOut
        </button>
      </div>
    </>
  );
};

export default Profile;
