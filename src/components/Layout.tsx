import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
    <Navbar />

    <main className="max-w-3xl mx-auto px-6 py-12">
        {children}
    </main>
    </div>
  );
};

export default Layout;