'use client'
import React from "react";
import ItemLayout from "./ItemLayout";


const AboutDetails= () => {
     return (
      <section className="py-20 w-full"> 
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
             <h2 className="text-xl md:text-2xl text-left w-full capitalize">
        Architect & Full Stack Developer
      </h2>
      <p className="font-light text-xs sm:text-sm md:text-base">

I’m a tech-savvy software developer with a knack for full-stack development and data-driven solutions. I specialize in C++, JavaScript, React.js, MongoDB, and MySQL, and love crafting efficient, scalable systems. 
My standout projects include VibeVault, a sleek web app for managing multimedia content, and a Java-based e-commerce platform with 95% uptime. 
I also boosted a city’s recycling rate by 15% during my waste management internship. 
Certified in Google Analytics and Data Analytics, I’m all about solving problems and delivering results. 
Let’s create something awesome!
      </p>
        </ItemLayout>
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>
             <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
             20+ <sub className="font-semibold text-base">Projects</sub>
      </p>
        </ItemLayout>
        <ItemLayout className={'col-span-full xs:col-span-6 lg:col-span-4 text-accent'}>

      <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
           1+ <sub className="font-semibold text-base"> Year of Experience</sub>
      </p>
        </ItemLayout>


        <ItemLayout className={"col-span-full  sm:col-span-6 md:col-span-4 p-0 "}>
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs?username=riya0704&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Riya0704" loading="lazy"/>
     </ItemLayout>


     <ItemLayout className={"col-span-full md:col-span-8 p-0 "}>
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=riya0704&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false" alt="Riya0704" loading="lazy"/>
     </ItemLayout>
    



     <ItemLayout className={"col-span-full "}>
        <img className="w-full h-auto" src="https://skillicons.dev/icons?i=js,html,css,docker,bootstrap,aws,figma,appwrite,git,github,nodejs,react,vscode,vite,vercel,npm,nextjs,kubernetes,linux,mongodb,ai,typescript,tailwind,postman,mysql" alt="Riya0704" loading="lazy"/>
     </ItemLayout>


     <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
     <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=riya0704&theme=dark&hide_border=true&ring=FEFE5B&background=EB545400&currStreakNum=FEFE5B" alt="Riya0704" loading="lazy"/>
     </ItemLayout>
      

     <ItemLayout className={"col-span-full md:col-span-6 p-0 "}>
        <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=riya0704&repo=VibeVault&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="Riya0704" loading="lazy"/>
     </ItemLayout>
      </div>
    </section>
     )
}

export default AboutDetails;