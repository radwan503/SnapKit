
import { Menu, X, Grid2x2Plus } from "lucide-react";
import { Link } from "react-router";
import { useTheme } from "../utils/ThemeContext";


const Navbar = ({ toggleSidebar, toggleNav, navOpen }:any) => {
  const { toggleTheme } = useTheme();

  return (
    <header className="bg-primary text-white border-b border-darkBg dark:bg-gray-900 dark:text-white h-16 relative z-40">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-2">
          <button onClick={toggleSidebar} className="2xl:hidden">
            <Menu size={24} />
          </button>
          <Link to="/">
          <h1 className="text-lg font-bold flex gap-2 items-center"><Grid2x2Plus/>SnapKit</h1></Link>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            {/* {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />} */}
          </button>
          <button onClick={toggleNav} className="md:hidden">
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex gap-4">
          <Link to="/">Home</Link>
          <Link to="https://radwananik.netlify.app/">Creator</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      {navOpen && (
        <nav className="md:hidden flex flex-col gap-2 px-4 py-4 absolute w-full bg-blue-500 dark:bg-gray-800">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
