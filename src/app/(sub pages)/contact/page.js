import React from "react";
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from "@/components/contact/Form";


export default function Contact() {

  return (
  <>

      <Image src = {bg} 
      priority sizes="100vw"
      alt = "background-image" 
      className = "-z-50 fixed top-0 left-0 w-full h-full object-center object-cover opacity-25" />

   <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
   <div className="flex flex-col items-center justify-center space-y-6 w-full sm:*:w-3/4">
   <h1 className="text-accent font-semibold text-center text-4xl capitalize"> 
    Summon the wizard
    </h1>
<p className="font-light text-center text-sm sm:text-base">
Cross the threshold into a realm where words hold power and whispers shape destiny. Inscribe your message upon the sacred scroll, and let the energies of the cosmos weave your intent into reality. Whether you seek ancient wisdom, mystical alliances, or the revelation of hidden truths, your words shall be received as enchanted runes within this ethereal sanctuary.

Use the form below to cast your spell into the void, and await the shimmering echoes of magic in return. The wizard listens, the stars align, and destiny stirs. 🔮✨
</p>
   </div>

   </article>
   <Form/>
</>
  );
}
