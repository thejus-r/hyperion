import { toast } from "sonner";
import socials from "@/config/socials";
import SocialMediaLink from "./SocialMediaLink";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="h-[36vh] relative w-full bg-neutral-100 bottom-0 text-neutral-900"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%,100% 100%,0% 100%)",
      }}
    >
      <div className="fixed h-[36vh] w-full bottom-0">
        <div className="sm:flex justify-between pb-24 sm:pb-12 p-12 h-full">
          <div className="flex flex-col gap-4 sm:justify-between h-full">
            <div className="flex flex-col md:gap-4 gap-2">
              <p className="sm:text-2xl text-lg">
                Always looking forward to connect
              </p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("hello@thejus.design");
                  toast("Email copied to clipboard!");
                }}
                className="md:text-4xl text-2xl font-medium text-left"
              >
                hello@thejus.design
              </button>
            </div>
            <div className="hidden sm:block">
              <div className="flex gap-2">
                <Image
                  src={"/icons/pin.svg"}
                  alt="Place Icon"
                  width={"20"}
                  height={"20"}
                />
                <div>Bengaluru, Karnataka</div>
              </div>
            </div>
          </div>
          <div className="flex w-full sm:justify-start justify-around sm:flex-col gap-2 sm:gap-4 sm:w-1/12">
            {socials.map((item, index) => (
              <SocialMediaLink key={index} social={item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
