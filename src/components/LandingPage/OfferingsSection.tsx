import { Layers2, PackagePlus, SquaresExclude } from 'lucide-react';
import  { useState } from 'react';

const OfferingsSection = () => {
  const [activeTab, setActiveTab] = useState('ui-blocks');


  const tabs = [
    {
      id: 'ui-blocks',
      name: 'UI BLOCKS',
      content:'Over 500+ professionally designed, fully responsive, expertly crafted components.',
      icon:<PackagePlus strokeWidth={0.5}  className='h-14 w-14 font-thin'/>,
      images: [
        'https://placehold.co/400x250/E0F2F7/2C3E50?text=UI+Block+1',
        'https://placehold.co/400x250/B2EBF2/2C3E50?text=UI+Block+2',
        'https://placehold.co/400x250/80DEEA/2C3E50?text=UI+Block+3',
      ],
    },
    {
      id: 'templates',
      name: 'TEMPLATES',
      content:'Visually-stunning, easy to customize site templates built with React and Next.js.',
      icon:<Layers2 strokeWidth={0.5}  className='h-14 w-14' />,
      images: [
        'https://placehold.co/400x250/FFEBEE/2C3E50?text=Template+1',
        'https://placehold.co/400x250/FFCDD2/2C3E50?text=Template+2',
        'https://placehold.co/400x250/EF9A9A/2C3E50?text=Template+3',
      ],
    },
    {
      id: 'ui-kit',
      name: 'UI KIT',
      content:'A starter kit for building your own component systems with React and Tailwind CSS.',
      icon:<SquaresExclude strokeWidth={0.5}  className='h-14 w-14'/>,
      images: [
        'https://placehold.co/400x250/E8F5E9/2C3E50?text=UI+Kit+1',
        'https://placehold.co/400x250/C8E6C9/2C3E50?text=UI+Kit+2',
        'https://placehold.co/400x250/A5D6A7/2C3E50?text=UI+Kit+3',
      ],
    },
  ];

  return (
    <div className="bg-primary border-t border-darkBg dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 md:py-32 antialiased flex flex-col items-center">
      {/* Main Container */}
      <div className='container mx-auto px-4 text-center md:text-left relative z-10'>
      <div className="bg-primary dark:bg-gray-800 rounded-0 shadow-lg overflow-hidden">
        {/* Tab navigation buttons */}
        <div className="flex justify-center border-b border-darkBg dark:border-gray-700 bg-primary dark:bg-gray-700 rounded-0">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`
                flex-1 py-4 px-6 text-left text-lg font-normal transition-all duration-300 ease-in-out
                ${activeTab === tab.id
                  ? 'border-b border-darkBg text-secondary dark:text-blue-400 bg-tab dark:bg-gray-800'
                  : 'text-textSlate dark:text-gray-300 hover:text-secondary hover:bg-tab dark:hover:bg-gray-600'}
                focus:outline-none rounded-0
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className='flex items-center gap-3'>
                <div>
                    <div className=' bg-transparent p-2'>{tab.icon}</div>
                </div>
                <div>
                    <p>{tab.name}</p>
                    <p className="text-grayBg dark:text-gray-200 text-left text-sm">{tab.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab content */}
        <div className="p-6 pb-20 bg-tab">
          {tabs.map((tab) => (
            <div key={tab.id} className={`${activeTab === tab.id ? 'block' : 'hidden'}`}>
              <h2 className="text-2xl font-bold text-textColor dark:text-gray-100 mb-6 text-center">
                {tab.name} Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.images.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={imageUrl}
                      alt={`${tab.name} Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                      onError={(e:any) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/400x250/CCCCCC/000000?text=Error+Loading+Image`;
                      }}
                    />
                    <div className="p-4">
                      <p className="text-gray-700 dark:text-gray-200 text-center text-sm">
                        {tab.name} Item {index + 1}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default OfferingsSection;
