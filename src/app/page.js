import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Image from "next/image";
import bg from "../../public/background/newHomeBg.png"
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";


const Wizard = dynamic(() => import('@/components/models/Wizard'),{ssr: false})
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image priority sizes="100vw" src = {bg} alt = "background-image" fill className = "w-full h-full object-center object-cover opacity-20" />
    <div className="w-full h-screen">
{/* {navigation and 3d model} */}
<Navigation/>
<RenderModel>
  <Wizard/>
</RenderModel>
    </div>
    
    
    </main>
  );
}
