import React from "react";
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import { projectsData } from "../../data";
import ProjectList from "@/components/projects";
// import Staff from "@/components/models/Staff";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import('@/components/models/Staff'),{ssr: false})
export default function Home() {

  return (
  <>

      <Image src = {bg} alt = "background-image" className = "-z-50 fixed top-0 left-0 w-full h-full object-center object-cover opacity-25" priority sizes="100vw" />
   <ProjectList projects={projectsData}/>
   <div className="flex items-center justify-center fixed top-16 lg:top-20
   -translate-x-1/2 lg:translate-x-0 -z-10
   left-1/2
   lg:-left-24 h-screen">
  <RenderModel>
    <Staff/>
  </RenderModel></div>

</>
  );
}
