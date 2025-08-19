import { useState } from "react";
import { Check, Layers, Mail, Menu, X } from "lucide-react";

const HeroSection16 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-blue-100 dark:bg-gray-900 font-sans flex items-center justify-center p-4">
      <div className="max-w-7xl mx-auto w-full rounded-3xl">
        
        {/* --- Header Section --- */}
        <header className="flex items-center justify-between mb-12 relative">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight">
            <Layers className="text-blue-600 w-7 h-7" />
            <span className="text-neutral-900">Struct</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block flex-grow text-center">
            <ul className="flex justify-center space-x-6">
              {["Demos", "About", "Blog", "Pages", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:inline bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-lg">
              Start Free Trial
            </button>
            <button
              className="md:hidden text-gray-700 dark:text-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 p-4 z-50 md:hidden">
              <ul className="flex flex-col space-y-4 text-center">
                {["Demos", "About", "Blog", "Pages", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full transition-colors shadow-lg">
                    Start Free Trial
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </header>

        {/* --- Main Content Section --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
              Modern POS that makes running your business easier
            </h1>

            {/* Checklist */}
            <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300">
              <li className="flex items-start justify-center lg:justify-start space-x-2">
                <Check className="w-6 h-6 text-green-500 mt-1" />
                <span>Manage cost savings & payments method</span>
              </li>
              <li className="flex items-start justify-center lg:justify-start space-x-2">
                <Check className="w-6 h-6 text-green-500 mt-1" />
                <span>Analysis inventory and online sales report</span>
              </li>
            </ul>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <div className="relative w-full sm:w-auto flex-grow">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors">
                Start Free Trial
              </button>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Log in now
              </a>
            </p>
          </div>

          {/* Right Column */}
          <div className="relative w-full lg:w-3/5 mt-12 lg:mt-0 p-4 sm:p-8">
            <div className="relative w-full h-72 sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?w=600&auto=format&fit=crop&q=60"
                alt="Businessperson using a credit card"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-1/2 left-2 sm:left-0 sm:-translate-x-1/3 -translate-y-1/2 bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-2xl shadow-xl w-[180px] sm:w-[250px] animate-pulse-slow">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Revenue</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">$36,845.00</p>
            </div>
            <div className="absolute top-1/4 right-2 sm:right-0 sm:translate-x-1/3 -translate-y-1/2 bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-2xl shadow-xl w-[150px] sm:w-[200px] animate-pulse-slow animation-delay-500">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Customer</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">86,590</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection16;
