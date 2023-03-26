import Link from "next/link";
import CustomCursor from "./cursor";
import Wave from "./wave";

export default function Header() {
  return (
    <>
      <div className="z-4">
        <CustomCursor />
      </div>
      <div className="w-screen h-auto z-3 fixed bg-gradient-to-b from-dark via-dark  border-t border-wh text-green-300 flex  pt-10 justify-between">
        <div className="w-[10%] mt-[-3%] mx-2  lg:w-[8%]">
         <img src='logo.png' className="w-full  h-full" />
        
      
        </div>

        <ul className="flex w-[40%] mr-[5%] lg:mr-[0%] gap-4 lg:text-xl text-xs text-center  justify-around">
          <Link href="/" className="hover:text-green-100 hover:underline decoration-lal">Home</Link>
          <Link href="/Services/#features" className="hover:text-green-100 hover:underline decoration-lal">Features</Link>
          <Link href="/Services" className="hover:text-green-100 hover:underline decoration-lal">Services</Link>
          <Link href="/About" className="hover:text-green-100 hover:underline decoration-lal">About</Link>
          <Link
            href="mailto:info@company.com"
            className="border-wh  text-dark rounded-2xl text-center "
          >
            ✉️
          </Link>
        </ul>
      </div>
    </>
  );
}
