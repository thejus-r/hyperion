import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="uppercase w-full z-50 text-xs fixed top-0 font-semibold tracking-wide flex justify-between py-10 px-12">
      <div>Thejus Rajendran</div>
      <div className="gap-12 hidden sm:flex">
        <button
          onClick={() => {
            const sectionElement = document.getElementById("projects-section");
            sectionElement?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          PROJECTS
        </button>
        <button
          onClick={() => {
            const sectionElement =
              document.getElementById("experience-section");
            sectionElement?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          EXPERIENCE
        </button>
        <button
          onClick={() => {
            const sectionElement = document.getElementById("footer");
            sectionElement?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          CONTACT
        </button>
      </div>
      {/* <div className="w-full h-24 absolute bg-gradient-to-b from-neutral-900 to-neutral-900/0  -bottom-24 left-0" /> */}
    </nav>
  );
}
