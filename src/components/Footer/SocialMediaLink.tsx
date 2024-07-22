import { SocialLinkType } from "@/types/SocialsLinkType";
import Image from "next/image";

type Props = {
  social: SocialLinkType;
};

export default function SocialMediaLink(props: Props) {
  return (
    <a href={props.social.link} target="_blank" className="flex gap-2">
      <Image
        src={props.social.icon}
        alt={props.social.name}
        width={"20"}
        height={"20"}
      ></Image>
      <div className="hidden md:block">{props.social.name}</div>
    </a>
  );
}
