import Head from "next/head";
import Canvas from "@/components/canvas";
import Header from "@/components/header";
import Hero from "@/components/hero";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";

export default function About() {
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
                        <p className=" text-white  lg:text-6xl text-4xl text-center font-bold w-[50%]  font-serif ml-[25%] mt-[5%] ">Accelerating Your Pre-sales with an unimaginable and super fast experience. </p>
                    </div>
                    <div className="text-white text-center mt-8 grid grid-rows-3  gap-4 lg:grid-cols-3">
                        <div className="my-4">
                            <h1 className="text-2xl font-bold my-4 ">❔ Who Are We?</h1>
                            <p className="text-sm lg:text-md">
                                <span className="text-gray-400 ">LeadCell is a B2B Lead Generation company. we work with publishers, Media Agencies, and marketing companies who are seeking quality Leads. our goal is to provide a high return on investment to our clients with growth in marketing solutions.
                                </span>
                            </p>
                        </div>
                        <div className="text-white my-4 ">
                            <h1 className="text-2xl font-bold my-4">📈 Our Work</h1>
                            <p className="text-sm lg:text-md">
                                <span className="text-gray-400 ">If you are looking for Highly qualified leads, we are the perfect partners for your needs.

                                    We deal in Telemarketing, Email Marketing & Digital marketing. we also provide most accurate contact database, High-Quality sales leads & appointment settings.
                                </span>
                            </p>
                        </div>

                        <div className="text-white my-4 ">
                            <h1 className="text-2xl font-bold my-4">📜 Identification</h1>
                            <p className="text-sm lg:text-md">
                                <span className="text-gray-400 ">we help our clients accelerate revenue by identifying, profiling, nurturing and connecting with the right decision makers within their targeted customer and prospect accounts.  </span>
                            </p>
                        </div>

                        <div className="text-white text-center ">

                            <p className="text-sm lg:text-md">
                                <span className="text-blue-400 ">To deliver high-quality leads, we use telemarketing, email, and internet platforms. To enhance campaign ROI and increase your business, get a broad view of your customers.</span>
                            </p>
                        </div>
                        <div className="flex lg:ml-[-150%] ml-[-5%]  my-28 lg:my-4 w-screen text-right ">
                            <img src='/diamond.gif' className=" lg:absolute lg:mt-[26%] lg:ml-[20%] h-[10%] " />
                            <h1 className="lg:ml-[20%]  ">

                                <span className="text-sm text-gray-400">Fast Connects</span>
                                <br></br>
                                <h1 className="text-4xl font-bold">Vision.</h1>
                                <p className="text-sm">To be a preferred partner in the industry, recognized for the value we deliver through innovative strategies for our Clients.</p>
                                <br></br>
                                <h1 className="text-4xl font-bold">Mission.</h1>
                                <br></br>
                                <p className="text-sm">To be a preferred partner in the industry, recognized for the value we deliver through innovative strategies for our Clients.</p>
                                <h1 className="text-4xl font-bold">Values.</h1>
                                <br></br>

                                <span className="text-gray-400">Our Integrity defines us - In all of our actions, we strive to be fair.

                                    We see ourselves as partners for our clients and not vendors.

                                    Our expertise is, we believe in quality more over quantity. we strive to contest our commitment to deliver revenue growth for our clients. </span>

                            </h1>
                        </div>



                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
