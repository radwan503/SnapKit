import React from "react";

import FeatureSectionDemo1 from "../../../components/Block/FeatureSection/FeatureSection1/Demo";
import FeatureSectionDemo2 from "../../../components/Block/FeatureSection/FeatureSection2/Demo";
import FeatureSectionDemo3 from "../../../components/Block/FeatureSection/FeatureSection3/Demo";
import FeatureSectionDemo4 from "../../../components/Block/FeatureSection/FeatureSection4/Demo";
import FeatureSectionDemo5 from "../../../components/Block/FeatureSection/FeatureSection5/Demo";
import FeatureSectionDemo6 from "../../../components/Block/FeatureSection/FeatureSection6/Demo";
import FeatureSectionDemo7 from "../../../components/Block/FeatureSection/FeatureSection7/Demo";
import FeatureSectionDemo8 from "../../../components/Block/FeatureSection/FeatureSection8/Demo";
import FeatureSectionDemo9 from "../../../components/Block/FeatureSection/FeatureSection9/Demo";
import FeatureSectionDemo10 from "../../../components/Block/FeatureSection/FeatureSection10/Demo";
import FeatureSectionDemo11 from "../../../components/Block/FeatureSection/FeatureSection11/Demo";
import FeatureSectionDemo12 from "../../../components/Block/FeatureSection/FeatureSection12/Demo";
import FeatureSectionDemo13 from "../../../components/Block/FeatureSection/FeatureSection13/Demo";
import FeatureSectionDemo14 from "../../../components/Block/FeatureSection/FeatureSection14/Demo";

const FeatureSectionPage = () => {
  return (
    <React.Fragment>
      <section className="relative bg-primary py-10 md:py-10 overflow-hidden">
        <div className="container mx-auto px-4 text-center md:text-left relative z-10">
          {/* Top Section Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-textSlate mb-2 uppercase tracking-wide">
              UI BLOCKS
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-textColor leading-tight mb-4">
              Feature Sections
            </h1>
            <p className="text-lg md:text-xl text-textSlate max-w-2xl mt-2">
              Use these Tailwind CSS feature section examples to highlight the most important features of your product or service. These examples are designed and built by the Tailwind CSS team, and include a variety of different styles and layouts.
            </p>
          </div>

          {/* Hero Section List */}
          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Minimal Elegance</h2>
            <p className="text-sm text-gray-500 mb-6">Clean, modern design with focus on typography.</p>
            <FeatureSectionDemo1 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Bold Statement</h2>
            <p className="text-sm text-gray-500 mb-6">Grab attention instantly with powerful visuals.</p>
            <FeatureSectionDemo2 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Creative Flow</h2>
            <p className="text-sm text-gray-500 mb-6">A fluid hero for dynamic brands and startups.</p>
            <FeatureSectionDemo3 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Video Background</h2>
            <p className="text-sm text-gray-500 mb-6">Timeless layout with balance and clarity.</p>
            <FeatureSectionDemo4 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Split Showcase</h2>
            <p className="text-sm text-gray-500 mb-6">Perfect for product highlights and dual messaging.</p>
            <FeatureSectionDemo5 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Glassmorphism Glow</h2>
            <p className="text-sm text-gray-500 mb-6">Futuristic hero with liquid glass effects.</p>
            <FeatureSectionDemo6 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Dark Mode Impact</h2>
            <p className="text-sm text-gray-500 mb-6">Elegant design that shines in the dark.</p>
            <FeatureSectionDemo7 />
          </div>

          <div className="mb-16">
             <h2 className="text-xl font-bold text-textSlate">Product Spotlight</h2>
            <p className="text-sm text-gray-500 mb-6">Soft, trendy gradients that breathe life.</p>
            <FeatureSectionDemo8 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Gradient Vibes</h2>
            <p className="text-sm text-gray-500 mb-6">Showcase your product front and center.</p>
            <FeatureSectionDemo9 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Call-to-Action Power</h2>
            <p className="text-sm text-gray-500 mb-6">Drive users to click with bold CTAs.</p>
            <FeatureSectionDemo10 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Tech Startup Edge</h2>
            <p className="text-sm text-gray-500 mb-6">Sleek design for SaaS and innovations.</p>
            <FeatureSectionDemo11 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">E-commerce Hero</h2>
            <p className="text-sm text-gray-500 mb-6">Highlight featured products beautifully.</p>
            <FeatureSectionDemo12 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Luxury Style</h2>
            <p className="text-sm text-gray-500 mb-6">Premium aesthetic with subtle animations.</p>
            <FeatureSectionDemo13 />
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-bold text-textSlate">Classic Centered</h2>
            <p className="text-sm text-gray-500 mb-6">Bring your hero to life with fun interactions.</p>
            <FeatureSectionDemo14 />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeatureSectionPage;
