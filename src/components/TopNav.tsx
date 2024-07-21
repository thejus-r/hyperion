import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="uppercase w-full bg-neutral-900 z-50 text-xs fixed top-0 font-semibold tracking-wide flex justify-between py-10 px-12">
      <div>Thejus Rajendran</div>
      <div className="gap-12 hidden sm:flex">
        <Link href={"/"}>Projects</Link>
        <Link href={"/"}>Experience</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="w-full h-24 absolute bg-gradient-to-b from-neutral-900 to-neutral-900/0  -bottom-24 left-0" />
    </nav>
  );
}
