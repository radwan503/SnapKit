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

const featureSections = [
  { title: "Pure Style", desc: "Minimal and clean typography.", component: <FeatureSectionDemo1 /> },
  { title: "Bold Look", desc: "Strong visuals that grab attention.", component: <FeatureSectionDemo2 /> },
  { title: "Smooth Flow", desc: "Modern and fluid feature layout.", component: <FeatureSectionDemo3 /> },
  { title: "Dynamic Motion", desc: "Engaging video background style.", component: <FeatureSectionDemo4 /> },
  { title: "Dual Split", desc: "Two-column highlight showcase.", component: <FeatureSectionDemo5 /> },
  { title: "Glass Effect", desc: "Futuristic frosted glass design.", component: <FeatureSectionDemo6 /> },
  { title: "Elegant Mode", desc: "Elegant theme section.", component: <FeatureSectionDemo7 /> },
  { title: "Sharp Spotlight", desc: "Focus sharply on product features.", component: <FeatureSectionDemo8 /> },
  { title: "Vivid Gradient", desc: "Vibrant gradient-based layout.", component: <FeatureSectionDemo9 /> },
  { title: "Strong Action", desc: "Bold CTA-driven section.", component: <FeatureSectionDemo10 /> },
  { title: "Startup Edge", desc: "Sleek SaaS and tech-focused design.", component: <FeatureSectionDemo11 /> },
  { title: "Smart Commerce", desc: "Perfect for product showcasing.", component: <FeatureSectionDemo12 /> },
  { title: "Modern Luxury", desc: "Premium look with subtle effects.", component: <FeatureSectionDemo13 /> },
  { title: "Classic Center", desc: "Timeless, centered layout.", component: <FeatureSectionDemo14 /> },
];


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

          {/* Step 2: Render dynamically */}
          {featureSections.map((item, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-xl font-bold text-textSlate">{item.title}</h2>
              <p className="text-sm text-gray-500 mb-6">{item.desc}</p>
              {item.component}
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeatureSectionPage;
