/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
function Lend() {
  const [form, setForm] = useState();

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    console.log("hey there");
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    if(data.error)
      {
        alert(data.error);
      }
      else{
        alert("Form submitted");
      }

  };

  const getLenders = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getLenders();
  }, []);

  return (
    <div>
      <div
        style={{ padding: "20px" }}
        className="flex justify-center /*h-screen*/ "
      >
        <div className="w-full max-w-sm">
          <form
            onSubmit={handleSubmit}
            style={{
              border: "2px solid",
              borderRadius: "8px",
              padding: "40px",
            }}
          >
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-s"
                  htmlFor="inline-full-name"
                >
                  Lender Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="appearance-none border border-gray-400 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-s"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  onChange={handleForm}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-s"
                  htmlFor="inline-full-name"
                >
                  Loan Type
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="appearance-none border border-gray-400 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-s"
                  id="type"
                  name="type"
                  type="text"
                  placeholder="ex:Micro"
                  onChange={handleForm}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-s"
                  htmlFor="inline-full-name"
                >
                  Amount
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="appearance-none border border-gray-400 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-s"
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="ex: 10000"
                  onChange={handleForm}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-s"
                  htmlFor="inline-full-name"
                >
                  Duration
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="appearance-none border border-gray-400 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-s"
                  id="duration"
                  name="duration"
                  type="number"
                  placeholder="Year"
                  onChange={handleForm}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-s"
                  htmlFor="inline-full-name"
                >
                  Interest rate
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="appearance-none border border-gray-400 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-s"
                  id="interest"
                  name="interest"
                  type="number"
                  placeholder="ex:4%"
                  onChange={handleForm}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-s"
                  htmlFor="inline-full-name"
                >
                  Contact Number
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="appearance-none border border-gray-400 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-s"
                  id="contact_number"
                  name="contact_number"
                  type="number"
                  placeholder="ex:934758xxxx"
                  onChange={handleForm}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-4">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-s"
                  htmlFor="inline-email"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="appearance-none border border-gray-400 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-s"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  onChange={handleForm}
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-xs"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticationRequired(Lend, {
  onRedirecting: () => <div>Loading...</div>,
});
