import React, { useState } from "react";

const About = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="mt-8  w-screen h-full flex flex-col justify-center items-center">
      <h1>Contact Us</h1>
      <div className=" mt-5  container flex flex-col justify-center items-center">
        <form className="w-3/5 md:w-fit" onSubmit={onSubmit}>
          <div className="mb-3 w-2/3 md:w-full flex justify-between flex-col md:flex-row">
            <label className="md:mr-6 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full placeholder-indigo-300 py-1 px-3 border border-indigo-500  outline-none rounded-md text-indigo-600 md:w-60"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="mb-3 w-2/3 md:w-full flex justify-between flex-col md:flex-row">
            <label className="md:mr-6 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full placeholder-indigo-300 py-1 px-3 border border-indigo-500  outline-none rounded-md text-indigo-600 md:w-60"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="mb-3 w-2/3 md:w-full flex justify-between flex-col md:flex-row">
            <label className="md:mr-6 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full placeholder-indigo-300 py-1 px-3 border border-indigo-500  outline-none rounded-md text-indigo-600 md:w-60"
              id="message"
              required
            />
          </div>
          <button
            className="bg-sky-500 hover:bg-sky-600 mt-4 transition-all rounded-md md:w-full w-2/3 py-2 text-slate-50"
            type="submit"
          >
            {formStatus}
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
