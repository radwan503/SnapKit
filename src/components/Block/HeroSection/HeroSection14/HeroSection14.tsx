import { ArrowDown } from 'lucide-react';

const HeroSection14 = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans flex items-center justify-center p-4">
      {/* Outer container for the hero section */}
      <div className="max-w-7xl mx-auto w-full md:grid md:grid-cols-5 lg:gap-8 xl:gap-16">
        
        {/* Left Column (40% of width on desktop) */}
        <div className="md:col-span-2 flex flex-col justify-start items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
            Let's Design Your Home <br /> Very Easily
          </h1>
          <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors shadow-lg mb-8">
            Get Started
          </button>
          
          {/* Left Image Placeholder */}
          <div className="w-full h-80 bg-gray-700 rounded-xl overflow-hidden relative mb-4">
            <img 
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Living room with chandelier" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Scroll Indicator */}
          <div className="flex items-center space-x-2 text-yellow-400 self-center md:self-auto">
            <div className="border border-yellow-400 rounded-full p-2">
              <ArrowDown size={24} />
            </div>
            <span className="text-sm font-semibold">Scroll to explore</span>
          </div>
        </div>

        {/* Right Column (60% of width on desktop) */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="max-w-xl text-gray-400 mb-8">
            Interior design is the art of science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space.
          </p>
          
          {/* Statistics Row */}
          <div className="flex justify-center md:justify-start space-x-8 md:space-x-12 lg:space-x-16 mb-8">
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold mb-1">400+</p>
              <span className="text-gray-400">Client</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold mb-1">2.5k+</p>
              <span className="text-gray-400">Product</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-3xl font-bold mb-1">12+</p>
              <span className="text-gray-400">Year Experience</span>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="w-full h-[400px] bg-gray-700 rounded-xl overflow-hidden relative">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Cozy living room" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection14


