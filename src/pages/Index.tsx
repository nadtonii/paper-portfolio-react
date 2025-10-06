import { GrainGradient } from '@paper-design/shaders-react';
import { useState, useEffect } from 'react';
import ProjectGallery from '@/components/ProjectGallery';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure WebKit properly renders the gradient before fading in
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`h-screen p-4 flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="w-full h-full flex flex-col-reverse md:flex-row items-stretch gap-8">
          {/* Text Section */}
          <div className="flex flex-col justify-between w-full md:w-[303px] md:flex-shrink-0 md:h-full pb-20 md:pb-0">
            <div className="flex flex-col gap-4">
              <div className="font-noto font-semibold text-base leading-[150%] tracking-[-0.015em] whitespace-pre-wrap text-portfolio-text">
                {'Toni Nađ\nProduct Designer'}
              </div>
            </div>
            <div className="font-noto font-normal text-base leading-[150%] tracking-[-0.015em] whitespace-pre-wrap text-portfolio-text mt-2 md:mt-0">
              {'Currently working at Porsche Digital,\ndesigning user-centered experiences.'}
            </div>
          </div>

          {/* Animation Section */}
          <div className="relative w-full md:flex-1 h-[500px] md:h-full rounded-[32px] overflow-hidden">
            <GrainGradient
              colors={['#FFEFDF', '#EB885D', '#FFAD8A']}
              colorBack="#00000000"
              speed={2}
              scale={1.54}
              rotation={119}
              offsetX={0}
              offsetY={0.46}
              softness={0.02}
              intensity={1}
              noise={0.25}
              shape="blob"
              frame={2618843.2340003327}
              style={{
                backgroundColor: '#F6F2EB',
                borderRadius: '32px',
                height: '100%',
                width: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-baskerville text-2xl leading-[150%] text-portfolio-gradient-text text-center whitespace-pre">
              Keep thinking.
            </div>
          </div>
        </div>
      </div>
      
      <ProjectGallery />
    </>
  );
};

export default Index;
