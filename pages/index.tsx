import Head from "next/head";
import Canvas from "@/components/canvas";
import Header from "@/components/header";
import Hero from "@/components/hero";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="absolute z-100">
        <CustomCursor />
      </div>

      <div className="h-screen lg:w-screen absolute ">
        <video
          src="/bg.mp4"
          className="object-fill absolute opacity-40  z-10 "
          autoPlay
          loop
          muted
        />
      </div>



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
            <div className="w-full h-auto">
              <Hero />
            </div>
          </div>
          <Canvas />
          <div className="mt-[5%]  text-center">
            <h1 className="text-white lg:text-6xl text-4xl text-center font-bold">What do we Promise?</h1>
            <p className="text-blue-300 w-[50%] lg:text-2xl font-thin font-serif ml-[25%] mt-[5%] ">We've designed a package of lead generating services, personalised and integrated to fit your sales and marketing goals, To assist technology firms in their search for consumers. </p>
          </div>
          <div className="text-white text-center mt-8 grid grid-rows-3  gap-4 lg:grid-cols-3">
            <div className="my-4">
              <h1 className="text-2xl font-bold my-4 ">💳 Connects</h1>
              <p className="text-sm lg:text-md">
                <span className="text-gray-400 ">Leadcell Connect services and highly experienced telemarketing team use a blend of research techniques, probing skills
                </span>
                <br></br>
                Consultative selling to ensure that your sales teams can take effective action at the right place and at the right time, whether your prospects are C-Suite, middle management, or any level in between.
                Take your company to the next level by scaling it up! </p>
            </div>
            <div className="text-white my-4 ">
              <h1 className="text-2xl font-bold my-4">🧬 Generation</h1>
              <p className="text-sm lg:text-md">
                <span className="text-gray-400 ">Our team of experts has generated leads for technology firms, starting with marketing qualified leads and ending with BANT (Budget, Authority, Need, Time) qualified prospects at the bottom of the funnel.
                </span>
                <br></br>
                To deliver high-quality leads, we use telemarketing, email, and internet platforms.
                To enhance campaign ROI and increase your business, get a broad view of your customers.</p>
            </div>

            <div className="text-white my-4 ">
              <h1 className="text-2xl font-bold my-4">🔎 Identification</h1>
              <p className="text-sm lg:text-md">
                <span className="text-gray-400 ">Your company's success depends on Account Based Marketing (ABM) and Strategic Account Management. Leadcell gives you important information to assist you land, mine, and cultivate strategic accounts for maximum profit.</span>
                <br></br>
                Our intelligence is actionable, verifiable, and tailored to your company's sales plan. Large accounts should be identified and prioritised .</p>
            </div>

            <div className="flex lg:mx-44  my-28 lg:my-4 w-screen text-right ">
              <img src='/connect.gif' className="" />
              <h1 className="lg:ml-[50%]">

                <span className="text-sm text-gray-400">Fast Connects</span>
                <br></br>
                <h1 className="text-4xl font-bold">Identify.</h1>
                <br></br>
                <h1 className="text-4xl font-bold">Engage.</h1>
                <br></br>
                <h1 className="text-4xl font-bold">Expand.</h1>
                <br></br>

                <span className="text-gray-400">It's all about the connections.</span>

              </h1>
            </div>
          </div>
          <div className="text-center lg:mt-[-20%] ">
            <p className=" text-3xl font-thin text-gray-400">SkyRocketing Your Sales! 📈<br></br>
              EXPLORE. <span className="text-white font-bold lg:text-6xl text-3xl "> MAXIMIZE.</span> CONQUER.</p>
          </div>


          <div className=" grid grid-cols-2 grid-rows-2 lg:text-xl text-sm  gap-4 lg:my-4 w-screen  ">
            <h1 className="text-gray-400 my-24 lg:mx-48  ">
              Performance
              <span className="font-bold text-white flex text-4xl">4X</span>
              <p className="text-white font-thin">High Volume lead generation capacity across all industries with same quality standards for scalable & repeatable programs
              </p>
            </h1>
            <h1 className="text-gray-400 my-24 lg:mx-48  ">
              Global Connect
              <span className="font-bold text-white flex text-4xl">4X</span>
              <p className="text-white font-thin">Global geographical coverage with local language capabilities and compliant with GDPR, CASL, CCPA and related laws</p>
            </h1>
            <h1 className="text-gray-400 lg:my-24 lg:mx-48  ">
              Triple Check
              <span className="font-bold text-white flex text-4xl">4X</span>
              <p className="text-white font-thin">Triple check quality assurance & data verification process, ensuring 100% lead accuracy levels guaranteed
              </p>
            </h1>
            <h1 className="text-gray-400 lg:my-24 lg:mx-48  ">
              Faster Leads
              <span className="font-bold text-white flex text-4xl">4X</span>
              <p className="text-white font-thin">Multichannel marketing strategies with 100% content engagement & viewership guaranteed along with seamless delivery of content across all platforms
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
