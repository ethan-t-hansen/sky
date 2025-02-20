"use client";

import ProjectGrid from "@/components/ProjectGrid";

export default function Page() {
  return (
    <main className="lg:justify-start justify-center items-start">
      <div className="max-w-6xl h-screen flex flex-col justify-center items-center">
        <div>
          <p className="text-3xl md:text-4xl lg:text-5xl font-regular font-sans flex-row flex tracking-tight text-center mb-4">
            Creative Developer / Product Designer
          </p>

          <div className="flex md:gap-0 gap-4 md:justify-between text-xs font-regular">
            <p className="opacity-60">CURRENTLY</p>
            <div className="flex flex-col items-start md:items-end text-left">
              <p>Business + CS @ The University of British Columbia</p>
              <p>Design Engineering @ ICBC</p>
            </div>
            <p className="opacity-60">BASED IN</p>
            <p>Vancouver, Canada</p>
          </div>
        </div>
      </div>
      <p className="w-full text-center text-xs opacity-50"> / SELECTED PROJECTS /</p>
      <ProjectGrid/>
    </main>
  );
}
