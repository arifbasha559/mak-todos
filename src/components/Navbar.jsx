/* eslint-disable react/prop-types */
// import { useState } from "react";
import { PiScrollFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import "../App.css";

function Navbar(props) {
  // const [count, setCount] = useState(0);
  
  // props.create();
  return (
    <div className="absolute top-0  left-0 bg-slate-950/70 w-screen h-16 z-20">
      <div className="m-auto w-4/5 md:w-screen h-full flex items-center justify-between md:px-36  ">
        <div className="logo flex w-3/4 justify-start ">
          <button className='flex gap-4 outline-0' >

          <IconContext.Provider
            value={{ color: "#fff", size: "2rem" }}
            className="cursor-pointer"
            ><PiScrollFill />
          </IconContext.Provider>
          <div className="cursor-pointer">
            <h2 className="text-2xl text-white text-nowrap">Mak Todos</h2>
          </div>
            </button>
        </div>
        <div className="create flex pr-8">
          <button className="flex h-8 w-8 justify-center items-center bg-slate-800 hover:bg-slate-700 hover:rounded-md rounded"
           onClick={()=>{props.create()}} >

            <IconContext.Provider value={{ color: "#fff", size: "1rem" }}>
              <FaPlus />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
