/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
import { FaArrowRight } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const Card = (props) => {
  const colors = () => {
    let colorNo = Math.floor(Math.random() * 8);

    let color = "";
    switch (colorNo) {
      case 1:
        color =
          "  bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 ";
        break;
      case 2:
        color =
          "  bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-cyan-200 ";
        break;
      case 3:
        color =
          "  bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-green-200";
        break;
      case 4:
        color =
          "  bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-purple-200";
        break;
      case 5:
        color =
          "  bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-pink-200 ";
        break;
      default:
        color =
          "  bg-gradient-to-br from-teal-500 to-lime-500 group-hover:from-teal-500 group-hover:to-lime-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-lime-400";
        break;
    }
    return color;
  };
  return (
    <div className="relative w-4/5 md:w-56 m-auto md:m-0 p-4 h-56 border rounded-lg shadow bg-gray-800 border-gray-700">
   

      <h5 className="my-2 text-2xl font-semibold flex justify-between tracking-tight text-white ">
        <div>{props.title}</div>
        
      </h5>
      <button type="submit" className="flex absolute top-2 right-2"
      onClick={() => {props.deleteBtn(props.title) }}
      >
      <IconContext.Provider value={{ color: "red", size: "1.5rem" }}>
              
        <MdDeleteForever />
            </IconContext.Provider>
      </button>
      <p className="mb-3 font-normal text-gray-400 overflow-hidden">
        {props.desc}
      </p>
      
      <button
        className={`absolute bottom-5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-400 rounded-lg group${colors()}`}
        onClick={() => { }}
      >
        <span className="relative px-4 py-2 flex items-center justify-center gap-2 transition-all ease-in duration-75  bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More <FaArrowRight />
        </span>
      </button>
    </div>
  );
};

export default Card;
