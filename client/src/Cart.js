import React, { useState, useEffect, useRef } from "react";
import DropIn from "braintree-web-drop-in-react";

const Buy = () => {
  const [clientToken, setClientToken] = useState(null);
  const dropInInstance = useRef(null);
  const [data, setData] = useState(null); // Initialize data state with null

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch client token
        const tokenResponse = await fetch("http://localhost:5000/api/generate/token");
        if (!tokenResponse.ok) {
          throw new Error('Failed to fetch client token');
        }
        const tokenData = await tokenResponse.json();
        setClientToken(tokenData.clientToken);

        // Fetch pricing section from localStorage
        const item = localStorage.getItem('pricing_section');
        if (item) {
          const parsedItem = JSON.parse(item);
          setData(parsedItem);
          console.log(parsedItem.name);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const buy = async () => {
    try {
      if (!data) {
        throw new Error('Data not available');
      }

      const { nonce } = await dropInInstance.current.requestPaymentMethod();
      const response = await fetch("http://localhost:5000/api/process/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_method_nonce: nonce,
          amount: data.price,
          deviceData: dropInInstance.current.deviceData,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Payment processing failed");
      }

      const paymentResponse = await response.json();
      console.log(paymentResponse);
    } catch (error) {
      console.error("Failed to process payment", error);
    }
  };

  if (!clientToken || !data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden sm:h-auto h-screen">
        <div className="px-4 py-2 bg-blue-500 text-white">
          <h1 className="text-xl font-bold">Buy</h1>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold">{data.name}</h2>
          <h2 className="text-lg font-semibold">${data.price}</h2>
          <p className="text-sm mt-2">{data.name} package support for 1 month</p>
          
          <div className="mt-4">
            <DropIn
              options={{ authorization: clientToken }}
              onInstance={(instance) => (dropInInstance.current = instance)}
            />
          </div>
    
          <button
            onClick={buy}
            className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
  

  };

export default Buy;

