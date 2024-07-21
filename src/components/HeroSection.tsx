import BannerText from "./BannerText";

export default function HeroSection() {
  return (
    <section className="h-screen p-12 pt-24 flex flex-col bg-neutral-900 text-neutral-50 relative">
      <div className="h-full flex items-end text-2xl bg-red w-full md:w-2/5">
        <BannerText />
      </div>
      <div className="z-10 h-full flex items-end justify-center">
        Scroll Down
      </div>
    </section>
  );
}
