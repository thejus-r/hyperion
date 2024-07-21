import experience from "@/config/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience-section"
      className="h-screen pt-44 flex flex-col gap-8 bg-neutral-900 text-neutral-50"
    >
      <div className="flex flex-col gap-8 p-12">
        <div className="flex flex-col gap-2">
          <h2 className="uppecase text-xs font-semibold tracking-wide opacity-75">
            EXPERIENCE
          </h2>
          <p className="text-xl md:w-6/12">
            With a computer science background, I bring over six years of design
            experience and more than a year dedicated to UI/UX design.
          </p>
        </div>
        <ExperienceTimeLine />
      </div>
    </section>
  );
}

function ExperienceTimeLine() {
  return (
    <div className="flex flex-col">
      {experience.map((item, index) => (
        <div key={index} className="flex">
          <div className="flex flex-col items-center mt-1">
            <div className="min-w-3 min-h-3 relative">
              <div className="bg-white rounded-full w-3 h-3 outline-white outline-dashed outline-offset-2 absolute"></div>
              <div></div>
            </div>
            {experience.length == index + 1 ? (
              <div className="w-0.5 my-1 rounded h-full bg-gradient-to-b from-white/35 to-white/0"></div>
            ) : (
              <div className="w-0.5 my-1 rounded h-full  bg-white/35"></div>
            )}
          </div>
          <div className="mb-4 px-4">
            <div className="font-medium">{item.role}</div>
            <div className="text-sm">{item.company}</div>
            <div className="text-sm opacity-50">
              {item.from} - {item.to}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
