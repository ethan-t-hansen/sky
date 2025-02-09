"use client";

import ProjectsSection from "@/components/projects-section";

export default function Page() {
  return (
    <main className="relative pt-16 pr-8 lg:pr-48 lg:justify-start justify-center">
      <div className="mx-auto max-w-6xl mb-4">
        <div className="rounded-full bg-[url(/img/profile-pic.png)] bg-cover w-32 h-32 shadow-[inset_0_0_20px_rgba(255,255,255,0.6)] drop-shadow-lg border-white mb-8" />

        <p className="text-4xl leading-tight font-thin font-serif mb-8 flex-row flex">
          Creative developer exploring digital experience through 3D, animation,
          and web.
        </p>

        <div className="space-y-2">
          <p className="text-sm font-medium opacity-50">What am I up to?</p>
          <p className="text-md ">
            Design engineering for customer apps @ ICBC.
          </p>
          <p className="text-md">
            Studying business + computer science @ the University of British
            Columbia.
          </p>
        </div>
      </div>
      <ProjectsSection />
    </main>
  );
}
