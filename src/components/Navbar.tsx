import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const [underline, setUnderline] = useState({
    x: 0,
    width: 0,
  });

  const navItems = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Music", path: "/music" }
  ];

  useEffect(() => {
    const activeIndex = navItems.findIndex(
      (item) =>
        location.pathname === item.path ||
        (item.path !== "/" &&
          location.pathname.startsWith(item.path))
    );

    if (navRef.current && activeIndex !== -1) {
      const links = navRef.current.querySelectorAll("a");
      const activeLink = links[activeIndex] as HTMLElement;

      setUnderline({
        x: activeLink.offsetLeft,
        width: activeLink.offsetWidth
      });
    }
  }, [location.pathname]);

  return (
    <nav className="w-full border-b border-zinc-800 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-white hover:text-blue-300 transition-colors"
        >
          khi<span className="text-blue-300">.</span>fyi
        </Link>

        {/* Nav Links */}
        <div
          ref={navRef}
          className="relative flex items-center gap-8 text-sm"
        >
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" &&
                location.pathname.startsWith(item.path));

            return (
      <Link
        key={item.name}
        to={item.path}
        className={`relative pb-1 font-medium transition-colors duration-300 ${
          isActive
            ? "text-blue-300"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        {item.name}

        {isActive && (
          <motion.span
            layoutId="underline"
            className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-300"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }}
          />
        )}
      </Link>
    );
          })}

          {/* Directional Underline */}
          <span
            className="absolute bottom-0 h-0.5 bg-blue-300 transition-transform duration-300 ease-out"
            style={{
              width: underline.width,
              transform: `translateX(${underline.x}px)`
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;