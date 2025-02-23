import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
import { HatModel } from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";


export default function About() {

  return (
  <>

      <Image 
      
      src = {bg}
      priority sizes="100vw" alt = "background-image" className = "-z-50 fixed top-0 left-0 w-full h-full object-center object-cover opacity-25" />

   <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
  <RenderModel>
     <HatModel/>
  </RenderModel> 
   </div>
  <div className="relative w-full h-screen flex flex-col items-center justify-center">
  <div className="absolute flex flex-col items-center text-center top-1/2  sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 ">
    <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">Riya Verma</h1>
    <p className="font-light text-foreground text-lg">Meet this wizard behind this portfolio </p>

  </div>
</div>
<AboutDetails/>
</>
  );
}
