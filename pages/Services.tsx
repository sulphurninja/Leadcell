import Head from "next/head";
import Canvas from "@/components/canvas";
import Header from "@/components/header";
import Hero from "@/components/hero";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";

export default function Services() {
  return (
    <>
      <div className="absolute z-100">
        <CustomCursor />
      </div>

      {/* <div className="h-screen lg:w-screen absolute ">
        <video
          src="/bg.mp4"
          className="object-fill absolute opacity-40  z-10 "
          autoPlay
          loop
          muted
        />
      </div> */}



      <Head>
        <title>Leadcell - Many minor cells to your big sales!</title>
        <meta name="description" content="Leacell B2B, Many minor cells to your big sales! Skyrocketing your sales and services worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black bg-blend-multiply items-center w-full">
        <div className="w-full  relative overflow-clip">
          <div className="w-full h-auto">
            <div className="text-4xl absolute w-full z-10">
              <Header />
            </div>
            {/* <div className="w-full h-auto">
              <Hero />
            </div> */}
          </div>
       
          <div className="  text-center">
            <h1 className="">What do we Promise?</h1>
            <p className=" text-white  lg:text-6xl text-4xl text-center font-bold w-[50%]  font-serif ml-[25%] mt-[5%] ">Services that skyrocket your leads and sales! </p>
          </div>
          <div className="text-white text-center mt-8 grid grid-rows-3  gap-4 lg:grid-cols-3">
            <div className="my-4">
              <h1 className="text-2xl font-bold my-4 ">📄 Data Services</h1>
              <p className="text-sm lg:text-md">
                <span className="text-gray-400 ">CDQA (Contact Discovery) List Building Data & Lead Validation 
                </span>
               </p>
            </div>
            <div className="text-white my-4 ">
              <h1 className="text-2xl font-bold my-4">📈 Sales Acceleration</h1>
              <p className="text-sm lg:text-md">
                <span className="text-gray-400 ">Lead Generation MQL, HQL, BANT Leads SQL and Appointment settings 
                </span>
               </p>
            </div>

            <div className="text-white my-4 ">
              <h1 className="text-2xl font-bold my-4">📜 Demand Generation</h1>
              <p className="text-sm lg:text-md">
                <span className="text-gray-400 ">Account based Marketing Webinar and Virtual Event Marketing </span>
               </p>
            </div>

            <div className="text-white lg:my-[-20%] ">
              <h1 className="text-2xl font-bold my-4">✉️ Email Marketing</h1>
              <p className="text-sm lg:text-md">
                <span className="text-gray-400 ">Opens, Clicks and form fill-up campaigns</span>
               </p>
            </div>

            <div className="flex my-16 lg:text-2xl  lg:my-4 w-screen text-right ">
              <img src='/popular.gif' className="h-[50%] lg:mt-[-10%] " />
              <h1 className="lg:ml-[15%]">

                <span className="text-sm text-gray-400">Quality Leads</span>
                <br></br>
                <h1 className="text-4xl font-bold">Deliver.</h1>
                <br></br>
                <h1 className="text-4xl font-bold">Quality.</h1>
                <br></br>
                <h1 className="text-4xl font-bold">Leads.</h1>
                <br></br>

                <span className="text-gray-400">We always deliver quality leads!</span>

              </h1>
            </div>
          </div>
          <div className="text-center mt-[-20%] lg:mt-[-20%] " id='features'>
            <p className=" text-3xl font-thin text-gray-400">Popular Areas 👑<br></br>
              EXPLORE. <span className="text-white font-bold lg:text-6xl text-3xl "> MAXIMIZE.</span> CONQUER.</p>
          </div>


          <div className=" grid grid-cols-2 grid-rows-2 lg:text-xl text-sm  gap-4 lg:my-4 w-screen  ">
            <h1 className="text-gray-400 my-24 lg:mx-48  ">
              MQL
              {/* <span className="font-bold text-white flex text-4xl">4X</span> */}
              <p className="text-white font-thin">We are specialized in Mql leads for most of our client
              </p>
            </h1>
            <h1 className="text-gray-400 my-24 lg:mx-48  ">
            CONFIRMED CALL BACKS
              <p className="text-white font-thin"> We guarantee confirmed callbacks.</p>
            </h1>
            <h1 className="text-gray-400 lg:my-24 lg:mx-48  ">
            HYBRID CAMPAIGNS 
              {/* <span className="font-bold text-white flex text-4xl">4X</span> */}
              <p className="text-white font-thin">Our multi-channel approach is much more effective than any single channels.

              </p>
            </h1>
            <h1 className="text-gray-400 lg:my-24 lg:mx-48  ">
            APPOINTMENT SETTINGS 
              {/* <span className="font-bold text-white flex text-4xl">4X</span> */}
              <p className="text-white font-thin">We offer pay per appointment in America and UK Region
              </p>
            </h1>
            <div className="absolute lg:h-[10%] lg:block hidden lg:ml-[38%] lg:mt-[20%] ">
              <img src='/prism.gif' className=" h-full w-full" />
            </div>
      
   
        </div>
        <Footer />
        </div>       
      </div>
    </>
  );
}
