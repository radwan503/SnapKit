import { motion } from "framer-motion";
import Button from "../../../../utils/Button";

export default function HeroSection12() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] overflow-hidden px-4 sm:px-6 md:px-16">
      {/* Background animated shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-72 h-72 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-purple-600 rounded-full blur-3xl -top-36 -left-36 md:-top-36 md:-left-52"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-64 h-64 sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-blue-500 rounded-full blur-3xl -bottom-36 -right-36 md:-bottom-36 md:-right-52"
      />

      {/* Hero content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left text section */}
        <div className="space-y-4 sm:space-y-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-tight"
          >
            Design Your <span className="text-purple-400">Future</span> <br />
            With Creative Ideas
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl"
          >
            Build stunning digital experiences with modern UI, smooth animations, and smart layouts that adapt to every device.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-3 rounded-xl shadow-lg w-full sm:w-auto text-center">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-gray-400 text-white text-lg px-6 py-3 rounded-xl w-full sm:w-auto text-center"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right image section with responsive scaling */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mt-8 md:mt-0 w-full"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2h8ZW58MHx8MHx8fDI%3D"
            alt="hero"
            className="rounded-2xl shadow-2xl border border-gray-700 w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
