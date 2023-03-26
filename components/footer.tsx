import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bg-dark lg:mx-24 mx-4 gap-4 lg:grid lg:grid-cols-2 lg:text-3xl font-thin text-white "> 
      <div>
<h1 className="text-2xl font-thin">Leadcell- Sales and Services</h1><br></br>

<p className="text-sm ">Accelerating Your Pre-sales with an unimaginable and super fast experience.</p>
</div>
<div>
<p className="text-sm pt-16">
  <address>Smart City Park, Baner, Near Balewadi, Pune-411045 Denver. CO, USA</address>

Phone Number : +1(303) 800-6804</p>

<Link href="mailto:info@company.com" className="text-orange-300 mt-4 text-sm  font-bold hover:underline">✉️ mail@leadcellb2b.com </Link>

</div>
<div className="w-screen border-[1px] border-b-0 border-l-0 border-r-0 lg:mx-[-18%] lg:mt-[5%] border-gray-100">
<div className="font-thin  text-sm mt-4 lg:my-8  lg:mx-8 ">
  <h4 className="pt-8 pb-4">Copyright ©2023</h4>
<h4 className="lg:ml-[90%]">Leadcell Pvt.Ltd</h4>
</div>
</div>

</div>
    </>
  );
}
