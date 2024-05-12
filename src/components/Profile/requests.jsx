import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Request() {
  const [cardsData, setCardsData] = useState([]);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [mail, setMail] = useState({
    email: user.email,
    
  });

  useEffect(() => {
    // API to fetch data from backend
    fetch("http://localhost:8080/demo2")
      .then((response) => response.json())
      .then((data) => {
        for(let i=0;i<data.length;i++)
          {
            if(data[i].LemailId===user.email)
              {
                setCardsData(data);
              }
          }
          
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

 
  const reject = async (e) => {
    const id=user.email;
    const response = await fetch(`http://localhost:8080/api/data/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response2 = await fetch(`http://localhost:8080/api/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // const data = await response.json();
    // console.log(data);
  };
  return (
    <div className="py-4 w-full px-4">
      <div className="flex flex-wrap  -mx-2">
        {cardsData.map((card, index) => (
          <div  key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-3">
              <p className="font-serif text-xs md:text-sm text-gray-600 dark:text-gray-100 font-semibold pb-1">
                Name: {card.Name}
              </p>
              <p className="font-serif text-xs md:text-sm text-gray-600 dark:text-gray-100 font-semibold pb-1">
                DOB: {card.DOB}
              </p>
              <p className="font-serif text-xs md:text-sm text-gray-600 dark:text-gray-100 font-semibold pb-1">
                Address: {card.Address}
              </p>
              <p className="font-serif text-xs md:text-sm text-gray-600 dark:text-gray-100 font-semibold pb-1">
                Contact: {card.ContactNumber}
              </p>
              <p className="font-serif text-xs md:text-sm text-gray-600 dark:text-gray-100 font-semibold pb-1">
                PAN: {card.PANNumber}
              </p>
              <p className="font-serif text-xs md:text-sm text-gray-600 dark:text-gray-100 font-semibold pb-1">
                Email: {card.BemailId}
              </p>
             
              <div className="flex justify-end gap-2">
                <button className="px-3 py-1 bg-green-600 text-white rounded-md shadow-lg hover:bg-green-900 transition-colors duration-300 focus:outline-none text-xs md:text-sm">
                  Accept
                </button>
                <button onClick={reject} className="px-3 py-1 bg-red-600 text-white rounded-md shadow-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none text-xs md:text-sm">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Request;
