import { GrainGradient } from '@paper-design/shaders-react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-8">
        {/* Text Section */}
        <div className="flex flex-col gap-16 w-full md:w-auto md:flex-shrink-0" style={{ width: 'auto', maxWidth: '303px' }}>
          <div className="flex flex-col gap-4">
            <div className="font-noto font-semibold text-base leading-[150%] tracking-[-0.015em] whitespace-pre-wrap text-portfolio-text">
              {'Toni Nađ,\nProduct Designer'}
            </div>
          </div>
          <div className="font-noto font-normal text-base leading-[150%] tracking-[-0.015em] whitespace-pre-wrap text-portfolio-text">
            {'Currently working at Porsche Digital,\ndesigning user-centered experiences for Porsche drivers.'}
          </div>
        </div>

        {/* Animation Section */}
        <div className="relative w-full md:flex-1 h-[400px] md:h-[600px] rounded-[32px] overflow-hidden">
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
  );
};

export default Index;
