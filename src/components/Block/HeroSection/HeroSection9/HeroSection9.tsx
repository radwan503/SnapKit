import { ArrowRightIcon } from "lucide-react";

const HeroSection9 = () => {
  return (
    <section
      aria-labelledby="simple-hero"
      className="relative isolate overflow-hidden bg-white dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-neutral-600 dark:text-neutral-300 uppercase">
              New • v1.0
            </p>
          <h1
            className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl"
          >
            Build faster with beautiful components
          </h1>
        
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Production‑ready React & Tailwind building blocks designed for speed, accessibility, and maintainability.
            </p>
          

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm outline-none ring-0 transition hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-900/50 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Get Started
              <span className="ml-2" aria-hidden>
                <ArrowRightIcon />
              </span>
            </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm outline-none transition hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-900/50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-900"
              >
                Live Demo
              </a>
           
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeroSection9;