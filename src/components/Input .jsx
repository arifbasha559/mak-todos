/* eslint-disable react/prop-types */
// import React from 'react'
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

// import '../app.css'
const Input = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const titleChanger = (e) => {
    return setTitle(e.target.value);
  };
  const descChanger = (e) => {
    return setDesc(e.target.value);
  };

  return (
    <div
      id="form"
      className={`w-screen h-screen input absolute ${props.toggle} bg-slate-5a00 top-0 backdrop-blur-sm transition-all duration-700 ease-linear z-50 flex justify-center items-center `}
    >
      <form className="relative w-3/4 md:w-1/2 max-h-[80vh] overflow-y-  flex items-center rounded-lg flex-col bg-slate-950 px-25 py-16 gap-4">
        <button
          type="button"
          className="absolute top-3 right-3 md:right-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          onClick={() => {
            props.create();
          }}
        >
          <FaXmark />
        </button>

        <div className=" w-4/5 mx-auto">
          <label
            htmlFor="text"
            className="block  mb-2 text-sm font-medium text-white"
          >
            <div
              id="form"
              className="w-screen input absolute -translate-x-full bg-slate-5a00 top-0  transition-all duration-75 z-50 flex justify-center items-center"
            >
              …
            </div>
            Title:
          </label>
          <input
            type="text"
            id="text"
            value={title}
            onChange={titleChanger}
            className=" border  text-sm rounded-lg outline-0 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 "
            placeholder="title..."
            autoComplete="false"
            required
          />
        </div>

        <div className=" w-4/5 ">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description:
          </label>
          <textarea
            id="message"
            rows={4}
            onChange={descChanger}
            value={desc}
            required
            className="block p-2.5 w-full text-sm outline-0 max-h-52 min-h-14 rounded-lg border   focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 "
            placeholder="write the discription..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-4/5 px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          onClick={() => {
           props.addTodo(title,desc) || console.log("ADADad")
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Input;
