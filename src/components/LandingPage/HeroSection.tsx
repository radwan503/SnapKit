import { ArrowRight } from "lucide-react";
import Button from "../../utils/Button";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative bg-primary border-t border-darkBg py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center md:text-left relative z-10">
        <p className="text-sm font-semibold text-textSlate mb-2 uppercase tracking-wide">
          By the makers of Tailwind CSS
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-extrabold text-textColor leading-tight mb-6">
              Build your next idea <br className="hidden md:inline"/>even faster.
            </h1>
          </div>
          <div className="md:w-1/2 md:pl-16 mt-8 md:mt-0">
            <p className="text-lg md:text-xl text-textGray mb-8">
              Beautifully designed, expertly crafted components and templates,
              built by the makers of Tailwind CSS. The perfect starting point for
              your next project.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="text-textGray dark:text-gray-200 text-center text-sm" variant="primary" size="lg" icon={ArrowRight}>
                Explore templates
              </Button>
              <Link to="/ui-blocks">
                <Button className="text-darkBg dark:text-gray-200 text-center text-sm" variant="secondary" size="lg" icon={ArrowRight}>
                  Browse UI blocks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection