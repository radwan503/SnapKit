import ComponentPreviewCard from "./ComponentPreviewCard";

const TemplatesGridSection = () => {
  const templates = [
    {
      title: 'Spotlight',
      description: 'Personal portfolio template',
      image: 'https://placehold.co/400x250/e0e7ff/4338ca?text=Spotlight+Template',
    },
    {
      title: 'Radiant',
      description: 'SaaS marketing template',
      image: 'https://placehold.co/400x250/f0f4f8/334155?text=Radiant+Template',
    },
    {
      title: 'Compass',
      description: 'Course template',
      image: 'https://placehold.co/400x250/dbeafe/1e40af?text=Compass+Template',
    },
    {
      title: 'Salient',
      description: 'SaaS marketing template',
      image: 'https://placehold.co/400x250/fefce8/713f12?text=Salient+Template',
    },
    {
      title: 'Studio',
      description: 'Agency template',
      image: 'https://placehold.co/400x250/fee2e2/991b1b?text=Studio+Template',
    },
    {
      title: 'Primer',
      description: 'B2B product template',
      image: 'https://placehold.co/400x250/e0f2f7/0e7490?text=Primer+Template',
    },
    {
      title: 'Protocol',
      description: 'API reference template',
      image: 'https://placehold.co/400x250/ecfdf5/065f46?text=Protocol+Template',
    },
    {
      title: 'Commit',
      description: 'Changelog template',
      image: 'https://placehold.co/400x250/eef2ff/4f46e5?text=Commit+Template',
    },
    {
      title: 'Transmit',
      description: 'Podcast template',
      image: 'https://placehold.co/400x250/f0f4f8/334155?text=Transmit+Template',
    },
    {
      title: 'Pocket',
      description: 'App onboarding template',
      image: 'https://placehold.co/400x250/e0e7ff/4338ca?text=Pocket+Template',
    },
    {
      title: 'Syntax',
      description: 'Documentation template',
      image: 'https://placehold.co/400x250/dbeafe/1e40af?text=Syntax+Template',
    },
    {
      title: 'Keynote',
      description: 'Conference template',
      image: 'https://placehold.co/400x250/fefce8/713f12?text=Keynote+Template',
    },
  ];

  return (
    <section className="bg-primary border-t border-darkBg py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top Heading */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textColor leading-tight mb-4">
            Modern website templates, ready for your next launch.
          </h2>
          <p className="text-lg md:text-xl text-textSlate max-w-3xl mx-auto md:mx-0">
            Visually-stunning, customizable site templates built with React and Next.js. Your perfect
            starting point and the ultimate resource for learning expert Tailwind CSS techniques.
          </p>
        </div>

        {/* Grid of Template Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <ComponentPreviewCard
              key={index}
              image={template.image}
              title={template.title}
              description={template.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesGridSection;