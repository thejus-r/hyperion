import TopNav from "@/components/TopNav";
import { outfit } from "@/utils/fonts";
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      <main style={outfit.style}>
        <TopNav />
        {children}
      </main>
    </ReactLenis>
  );
}
