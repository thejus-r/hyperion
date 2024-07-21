export default function ExperienceSection() {
  return (
    <section className="sm:h-screen  pt-44 flex flex-col gap-8 bg-neutral-900 text-neutral-50">
      <div className="flex flex-col gap-2 p-12">
        <h2 className="uppecase text-xs font-semibold tracking-wide opacity-75">
          EXPERIENCE
        </h2>
        <p className="text-xl w-6/12">
          With a computer science background, I bring over six years of design
          experience and more than a year dedicated to UI/UX design.
        </p>
        <div className="flex gap-3">
          <div className="mt-1 h-5 w-5 relative">
            <div className="rounded-full h-3 w-3 bg-white absolute"></div>
            <div className="absolute -inset-1 rounded-full h-5 w-5 bg-transparent border-2 border-dashed border-neutral-50"></div>
          </div>
          <div>
            <div className="font-semibold">UI/UX Designer</div>
            <div className="text-sm">Flooid.in</div>
            <div className="text-sm opacity-50">2023 - Present</div>
          </div>
        </div>
      </div>
    </section>
  );
}
