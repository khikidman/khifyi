import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Background from "./Background";
import { Link } from "react-router-dom";
import UpcomingReleasesCarousel from "./UpcomingReleaseCarousel";

const upcomingReleases = [
  { title: "Afloat", releaseDate: "Mar 12, 2026" },
  { title: "Eirenity", releaseDate: "Mar 13, 2026" },
];

interface LayoutProps {
  children: ReactNode;
  showUpcomingReleases?: boolean;
}

const Layout = ({ children, showUpcomingReleases = false }: LayoutProps) => {
  return (
    <div className="min-h-screen text-zinc-100">
      <Background />
      <div className="pointer-events-none fixed inset-0 z-20">

        {/* Top Fade */}
        <div
          className="
            absolute top-0 left-0 w-full
            h-48
            bg-gradient-to-b
            from-black/85
            to-transparent
            will-change-transform
            will-change-opacity
            transform-gpu
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            absolute bottom-0 left-0 w-full
            h-48
            bg-gradient-to-t
            from-black/85
            to-transparent
            will-change-transform
            will-change-opacity
            transform-gpu
          "
        />

      </div>
      <Navbar/>

      {showUpcomingReleases && (
        <UpcomingReleasesCarousel releases={upcomingReleases} />
      )}

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
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy
            </Link>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Layout;