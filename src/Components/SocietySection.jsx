import React from "react";

const SocietySection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="society"
      className="w-full px-6 md:px-16 py-24 font-sans text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* ---------------- Main Heading ---------------- */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm tracking-widest uppercase">
            Society
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Computer Society of India
          </h1>
        </div>

        {/* ---------------- Journey ---------------- */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            The Journey
          </h2>

          <p className="mt-6 text-zinc-400 leading-relaxed text-base md:text-lg">
            I was selected into CSI through a rigorous selection process that
            included a written examination and multiple technical interview
            rounds. More than 400 students registered for the recruitment
            process. After the initial screening and probation phase, 40
            students were shortlisted. Following further technical evaluations
            and performance assessments, only 15 candidates were finally
            selected.
          </p>

          <p className="mt-6 text-zinc-400 leading-relaxed text-base md:text-lg">
            I joined as a Frontend Developer, where I began contributing to real
            internal projects and collaborative technical initiatives. Through
            consistent hands-on experience, I strengthened my fundamentals in
            React.js and gradually expanded into Next.js and React Native.
          </p>

          <p className="mt-6 text-zinc-400 leading-relaxed text-base md:text-lg">
            Working alongside seniors and a dedicated technical team helped me
            understand scalable frontend architecture, clean UI systems, and
            modern development workflows. This journey not only sharpened my
            technical skills but also built confidence, leadership, and strong
            execution ability.
          </p>
        </div>

        <div className="border-t border-zinc-800 my-20" />

        {/* ---------------- Render 3.0 ---------------- */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Render 3.0 (2025)
          </h3>

          <p className="mt-6 text-zinc-400 leading-relaxed text-base md:text-lg">
            As a 3rd-year Senior Coordinator of CSI, I managed the junior team
            and oversaw registrations for over 200 students — from integrating
            payment gateways to handling student data and team operations.
            Render 3.0 was a 4-day frontend masterclass covering HTML, CSS,
            JavaScript, and React. I was personally responsible for the React
            and JavaScript modules, and it was fulfilling to see attendees grasp
            concepts from scratch to deploying interactive interfaces.
          </p>
        </div>

        {/* ---------------- Photo Grid ---------------- */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {/* LEFT BIG VERTICAL */}
          <div className="relative overflow-hidden rounded-2xl md:row-span-2 group">
            <img
              src="/A.JPG"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500" />
          </div>

          {/* MIDDLE TOP */}
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="/B.JPG"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500" />
          </div>

          {/* CENTER SMALL */}
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src="/C.JPG"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500" />
          </div>

          {/* RIGHT BIG VERTICAL */}
          <div className="relative overflow-hidden rounded-2xl md:row-span-2 group">
            <img
              src="/D.JPG"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500" />
          </div>

          {/* WIDE BOTTOM CENTER */}
          <div className="relative overflow-hidden rounded-2xl md:col-span-2 group">
            <img
              src="/E.JPG"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
});

SocietySection.displayName = "SocietySection";

export default SocietySection;
