import { motion, useAnimation } from "framer-motion";
import CustomCursor from "./cursor";

export default function Hero() {
  return (
    <>
      {/* <div>
        <CustomCursor />
      </div> */}
      <div className="w-full h-[full]   text-wh text-2xl lg:flex lg:p-5 justify-around">
        <div className="w-[90%] h-[60%] px-5 pt-40 lg:ml-auto lg:mr-auto lg:h-[100%] lg:w-[40%] justify-around">
          <div className="text-2xl  lg:text-9xl  text-yellow-300 font-black">
            <h1>Leadcell </h1>
            <h1 className="lg:hidden mt-[10%] font-thin text-white"> Many minor cells to your big sales!</h1>
       
          </div>

          <div className="ml-auto font-serif  mr-auto  pl-4 text-2xl pt-4 mt-10 text-blue-300 border-l-2 border-yellow-300">
          Accelerating your Sales and Services, WORLDWIDE!
          </div>

        </div>

        <div className="w-[50%] h-[5%] pt-8  ml-auto mr-auto lg:w-[40%] lg:h-[100%] overflow-clip justify-around object-fit">
          <img
            src="./globe.gif"
            className="w-full z-0  h-full hover:animate-spin-slow"
          />
        </div>
      </div>
    </>
  );
}
