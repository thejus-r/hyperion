import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import { outfit } from "@/utils/fonts";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";
import { Toaster } from "sonner";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      <main style={outfit.style}>
        <TopNav />
        {children}
        <Footer />
      </main>
      <Toaster />
    </ReactLenis>
  );
}
