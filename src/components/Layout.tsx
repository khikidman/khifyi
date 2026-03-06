import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Background from "./Background";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen text-zinc-100">
      <Background />
      <div className="pointer-events-none fixed inset-0 z-20">

        {/* Top Fade */}
        <div
          className="
            absolute top-0 left-0 w-full
            h-64
            bg-gradient-to-b
            from-black/90
            via-black/40
            to-transparent
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            absolute bottom-0 left-0 w-full
            h-64
            bg-gradient-to-t
            from-black/90
            via-black/40
            to-transparent
          "
        />

      </div>
      <Navbar/>


      <main className="max-w-3xl mx-auto px-6 py-12">
          {children}
      </main>

      <footer className="w-full py-10 border-t border-zinc-900 mt-20 sticky z-50">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Khi Kidman. All rights reserved.
          </p>

          {/* Optional small footer links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;