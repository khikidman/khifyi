import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-zinc-800">
      <div className="max-w-3xl mx-auto px-6 py-4 flex gap-6">
        <Link className="hover:text-blue-400 transition" to="/">
          Home
        </Link>
        <Link className="hover:text-blue-400 transition" to="/portfolio">
          Portfolio
        </Link>
        <Link className="hover:text-blue-400 transition" to="/music">
          Music
        </Link>
        <Link className="hover:text-blue-400 transition" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;