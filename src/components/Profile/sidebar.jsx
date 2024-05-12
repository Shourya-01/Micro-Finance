import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Repayment from "./repayments";
import Request from "./requests";
import Pending from "./pending";
function Sidebar() {
  const [visibleDiv, setVisibleDiv] = useState("request");

  const handleClick = (buttonName) => {
    setVisibleDiv(buttonName);
  };
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div style={{position:"relative"}} className="h-screen flex">
      <div className="bg-white w-80 p-5">
        <ul>
          <li className="mb-2">
            <div style={{}} class="flex flex-col items-center pb-10  ">
              <img
                style={{ marginTop: "4px" }}
                mt-4
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={user.picture}
                alt="Bonnie image"
              />

              <h5 class="mb-1 text-xl font-medium text-black-900 dark:text-black">
                {user.name}
              </h5>
              <span class="text-sm text-black-900 dark:text-black-900">
                {user.email}
              </span>
            </div>
          </li>
          <li className="mb-2">
            <li className="mb-2">
              <button
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300 "
                onClick={() => handleClick("request")}
              >
                Requests
              </button>
            </li>
            <button
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              onClick={() => handleClick("repayment")}
            >
              Repayment
            </button>
          </li>
          <li>
            <button
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              onClick={() => handleClick("pending")}
            >
              Pending
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-200">
        {visibleDiv === "request" && <Request></Request>}
        {visibleDiv === "repayment" && <Repayment></Repayment>}
        {visibleDiv === "pending" && <Pending></Pending>}
      </div>
    </div>
  );
}

export default Sidebar;
