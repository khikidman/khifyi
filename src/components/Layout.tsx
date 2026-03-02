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
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12">
          {children}
      </main>
    </div>
  );
};

export default Layout;