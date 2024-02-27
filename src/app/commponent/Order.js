"use client";

import { useState } from "react";

const Order = () => {
  const [storename, setStorename] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [products, setProducts] = useState("");

  const SendOrder = () => {
    const url =
      "https://wa.me/+918540969591?text=" +
      "welcome to kishan electronics store (Bijli Ghar)" +
      "storename: " +
      storename +
      "%0a" +
      "name: " +
      name +
      "%0a" +
      "number: " +
      number +
      "%0a" +
      "date: " +
      date +
      "%0a" +
      "store address: " +
      address +
      "%0a" +
      "products: " +
      products;

    if (products === "") {
      return;
    }
    if (storename === "") {
      return;
    }
    if (name === "") {
      return;
    }
    if (number === "") {
      return;
    }
    if (date === "") {
      return;
    }
    if (address === "") {
      return;
    } else {
      window.open(url, "_blank").focus();
    }
  };

  return (
    <>
      <div className="w-[100%] h-auto flex justify-center items-center  mt-7">
        <div className="w-[95%] h-auto flex justify-center items-center">
          <div className="w-[100%] sm:w-[400px] h-auto bg-gray-200 rounded-md">
            <h1 className="text-3xl text-center"> Send Order</h1>
            <form>
              <div className="w-auto h-auto flex flex-col justify-center items-center mt-4">
                <p className="">Your Business Name / Store Name</p>
                <input
                  onChange={(e) => setStorename(e.target.value)}
                  type="text"
                  placeholder="business / Store name"
                  className="w-[330px] h-[40px] rounded-md outline-none text-md"
                  required
                />
              </div>
              <div className="w-auto h-auto flex flex-col justify-center items-center mt-4">
                <p>Your Full Name </p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  className="w-[330px] h-[40px] rounded-md outline-none text-md"
                  required
                />
              </div>
              <div className="w-auto h-auto flex flex-col justify-center items-center mt-4">
                <p>Your Current Phone number / whatsapp</p>
                <input
                  onChange={(e) => setNumber(e.target.value)}
                  type="number"
                  placeholder="Phone number / Whatsapp"
                  className="w-[330px] h-[40px] rounded-md outline-none text-md"
                  required
                />
              </div>
              <div className="w-auto h-auto flex flex-col justify-center items-center mt-4">
                <p>Enter Date</p>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  placeholder="Date"
                  className="w-[330px] h-[40px] rounded-md outline-none text-md"
                  required
                />
              </div>
              <div className="w-auto h-auto flex flex-col justify-center items-center mt-4">
                <p>Your Business / store Address</p>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="business/store address"
                  className="w-[330px] h-[40px] rounded-md outline-none text-md"
                  required
                />
              </div>
              <div className="w-auto h-auto flex flex-col justify-center items-center mt-4">
                <p>Products name you want buy</p>
                <input
                  onChange={(e) => setProducts(e.target.value)}
                  type="text"
                  placeholder="Products name"
                  className="w-[330px] h-[40px] rounded-md outline-none text-md"
                  required
                />
              </div>

              <div className="w-auto h-auto flex flex-col justify-center items-center mt-4 mb-2">
                <button
                  className="w-[200px] h-[40px] bg-green-600 text-white rounded-md "
                  onClick={() => SendOrder()}
                >
                  Send Order Via
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
