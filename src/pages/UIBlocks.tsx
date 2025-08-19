import React from "react";
import ComponentPreviewCard from "../components/LandingPage/ComponentPreviewCard";
import { elements, pageSections } from "../data/Blocks";
import { Link } from "react-router";

const UIBlocks = () => {

  return (
    <React.Fragment>
      <section className="relative bg-primary border-t border-darkBg py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center md:text-left relative z-10">
          {/* Top Section Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-textSlate mb-2 uppercase tracking-wide">
              UI BLOCKS
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-textColor leading-tight mb-4">
              Components
            </h1>
            <p className="text-lg md:text-xl text-textSlate max-w-2xl">Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.</p>
            <p className="text-lg md:text-xl text-textSlate max-w-2xl mt-2">
              Heroes, feature sections, newsletter sign up forms — everything you need to
              build beautiful marketing websites.
            </p>
          </div>

          {/* Page Sections Grid */}
          <div className="mb-16">
            <h2 className="text-base font-semibold text-textSlate mb-6 uppercase tracking-wide">
              SECTIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pageSections.map((section, index) => (
              <Link key={section.title} to={section.link}>
                  <ComponentPreviewCard
                    key={index}
                    image={section.image}
                    title={section.title}
                    count={section.count}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Elements Grid */}
          <div>
            <h2 className="text-base font-semibold text-textSlate mb-6 uppercase tracking-wide">
              ELEMENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {elements.map((element, index) => (
                 <Link key={element.title} to={element.link}>
                  <ComponentPreviewCard
                    key={index}
                    image={element.image}
                    title={element.title}
                    count={element.count}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UIBlocks;
