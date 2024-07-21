import { Outfit } from "next/font/google";
import { Anton } from "next/font/google";
import localFont from "next/font/local";

export const outfit = Outfit({ subsets: ["latin"] });
export const anton = Anton({ weight: "400", subsets: ["latin"] });
export const space = localFont({ src: "../fonts/SpaceGrotesk-Variable.woff2" });
