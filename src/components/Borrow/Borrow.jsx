/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import "./margins.css"
import { useState } from "react";
import { useEffect } from "react";


function Borrow() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    //API to fetch dta from backend
    fetch('http://localhost:8080/demo')
      .then(response => response.json())
      .then(data => {
        //Updating the dta
        setCardsData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="margins">
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cardsData.map((card, index) => (
              <SingleCard
                image="data:image/jpeg;base64,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"
                CardTitle={card.LenderName}
                CardDescription={card.LenderType}
                Carddet1={card.Amount}
                CardDet2={card.ContactNumber}
                Button="Apply"
                onClickButton={() => console.log("Button clicked!")}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const SingleCard = ({
  image,
  Button,
  CardDescription,
  Carddet1,
  CardDet2,
  CardTitle,
  onClickButton,
}) => {
  return (
    <div className="mb-4 overflow-hidden rounded-lg bg-gray-100 border border-black shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <img src={image} alt="" className="w-full" />
      <div className="p-3 text-center sm:p-4 md:p-2 xl:p-4">
        <h3>
          <a
            href="#"
            className="mb-2 block text-sm font-semibold text-dark hover:text-primary dark:text-white sm:text-base md:text-sm lg:text-base xl:text-base 2xl:text-sm"
          >
           Name of Lender : {CardTitle}
          </a>
        </h3>
        <p className="mb-2 text-xs leading-relaxed text-body-color dark:text-dark-6">
          <span className="font-semibold">Loan Type:</span> {CardDescription}
        </p>
        <p className="mb-2 text-xs leading-relaxed text-body-color dark:text-dark-6">
          <span className="font-semibold">AMOUNT: RS. </span> {Carddet1}
        </p>
        <p className="mb-2 text-xs leading-relaxed text-body-color dark:text-dark-6">
          <span className="font-semibold">Contact Number :</span> {CardDet2}
        </p>

        {Button && (
          <button
            onClick={onClickButton} // Attach onClick event to the button
            className="inline-block rounded-full bg-orange-200 border border-gray-3 px-3 py-1 text-xs font-medium text-body-color transition hover:border-primary hover:bg-orange-500 hover:text-white dark:border-dark-3 dark:text-dark-6"
          >
            {Button}
          </button>
        )}
      </div>
    </div>
  );
};


export default withAuthenticationRequired(Borrow, {
  onRedirecting: () => <div>Loading...</div>,
});
