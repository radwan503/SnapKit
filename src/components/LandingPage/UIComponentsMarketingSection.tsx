import  { useState } from 'react';
import { ArrowRight } from 'lucide-react'; // Assuming Lucide React is available for icons
import ComponentPreviewCard from './ComponentPreviewCard';
import Button from '../../utils/Button';
import { tabContent } from '../../data/landingPageConfig';

const UIComponentsTabbedSection = () => {
  const [activeTab, setActiveTab] = useState('marketing');
  const currentTab = tabContent[activeTab];

  return (
    <section className="bg-primary border-t border-darkBg py-20 md:py-32 relative overflow-hidden">
      {/* Vertical 'UI BLOCKS' text on the left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-top-left ml-[-50px] md:ml-[-100px] lg:ml-[-150px] text-white font-bold text-xl uppercase tracking-widest whitespace-nowrap hidden sm:block">
        UI BLOCKS
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-textColor leading-tight mb-6 text-left">
          Beautiful UI components, built for real-world projects.
        </h2>
        <p className="text-lg md:text-xl text-textSlate max-w-2xl  text-left mb-12">
          A library of 500+ professionally designed, expertly crafted component examples you can
          drop into your Tailwind projects and customize to your heart's content.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-left border-b border-t border-darkBg mb-8 md:mb-12">
          {Object.keys(tabContent).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                py-3 px-6 text-lg font-semibold border-l border-darkBg
                ${activeTab === key
                  ? 'text-textColor bg-darkBg border border-grayBg'
                  : 'text-textSlate hover:text-gray-700  '}
                transition-colors duration-200 focus:outline-none
              `}
            >
              {tabContent[key].title}
            </button>
          ))}
        </div>

        {/* Tab Content (Grid of Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentTab.items.map((item:any, index:any) => (
            <ComponentPreviewCard
              key={index}
              image={item.image}
              title={item.title}
              count={item.count}
            />
          ))}
        </div>

        {/* "See More" Button */}
        <div className="flex justify-center mt-12">
          <Button variant="primary" size="lg" icon={ArrowRight}>
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UIComponentsTabbedSection;
