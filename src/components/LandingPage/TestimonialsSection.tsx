import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Tailwind Plus made it possible for me to ship the first version of Reflect entirely by myself, while still being immensely proud of the design.",
      author: "Alex MacCaw",
      company: "Founder of Reflect & Clearbit",
      avatar: "https://placehold.co/48x48/e2e8f0/64748b?text=AM", // Placeholder avatar
      logo: "https://placehold.co/60x16/e2e8f0/64748b?text=Reflect" // Placeholder logo
    },
    {
      quote: "Yet again Tailwind and Tailwind Plus are dramatically speeding up my frontend work. At this point Tailwind Plus is hands-down the highest ROI digital asset I've ever bought.",
      author: "Ben Barbersmith",
      company: "CTO & Co-Founder of Levelr",
      avatar: "https://placehold.co/48x48/e2e8f0/64748b?text=BB", // Placeholder avatar
      logo: "https://placehold.co/60x16/e2e8f0/64748b?text=Levelr" // Placeholder logo
    },
  ];

  return (
    <section className="bg-primary border-t border-darkBg py-20 md:py-32 relative overflow-hidden">
      {/* Background grid lines - simplified visual representation */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-px opacity-50">
        <div className="border-r border-b border-darkBg"></div>
        <div className="border-r border-b border-darkBg"></div>
        <div className="border-r border-b border-darkBg hidden lg:block"></div>
        <div className="border-b border-darkBg hidden lg:block"></div>
        <div className="border-r border-b border-darkBg"></div>
        <div className="border-r border-b border-darkBg"></div>
        <div className="border-r border-b border-darkBg hidden lg:block"></div>
        <div className="border-b border-darkBg hidden lg:block"></div>
      </div>
      <div className="absolute inset-0 grid grid-rows-2 gap-px opacity-50">
        <div className="border-b border-darkBg"></div>
        <div className="border-b border-darkBg"></div>
      </div>


      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              avatar={testimonial.avatar}
              logo={testimonial.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection