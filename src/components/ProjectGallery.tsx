const ProjectGallery = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-4 p-5">
      {/* Row 1: Two card groups with phone screenshots */}
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[478px]">
        <div className="flex-1 bg-[#F9F9F9] rounded-[32px] flex items-center justify-center gap-4 p-4 h-[400px] md:h-auto">
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X3S1S6Q1RKT076CBQWC9SX.png")' }}
          />
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X3ZV90RCVG0N1W3KMBDBZR.png")' }}
          />
        </div>
        <div className="flex-1 bg-[#F9F9F9] rounded-[32px] flex items-center justify-center gap-4 p-4 h-[400px] md:h-auto">
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X2YCKCHNAA3AS2FXD4CMMN.png")' }}
          />
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X32JK0GPK093XQVK1EP43J.png")' }}
          />
        </div>
      </div>

      {/* Row 2: Three sections */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[244px] bg-[#F9F9F9] rounded-[32px] flex items-center justify-center p-4 h-[400px] md:h-[478px]">
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X2PC3ZNF57QYJBT9SKZ56B.png")' }}
          />
        </div>
        <div className="w-full md:w-[244px] bg-[#F9F9F9] rounded-[32px] flex items-center justify-center p-4 h-[400px] md:h-[478px]">
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X435HJYBAJ32MB40Q41KFE.png")' }}
          />
        </div>
        <div className="flex-1 bg-[#F9F9F9] rounded-[32px] flex items-center justify-center gap-4 p-4 h-[400px] md:h-[478px]">
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X3B47DFMKAYJQYS56SDFHW.png")' }}
          />
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X3J0EMXS4ER1QFGCWHX42F.png")' }}
          />
          <div 
            className="w-[153px] h-[332px] rounded-[24px] border border-[#00000021] bg-cover bg-center bg-no-repeat flex-shrink-0 hidden lg:block"
            style={{ backgroundImage: 'url("https://workers.paper.design/file-assets/01K6TRN5ZA81ESKVPPADQ4AE03/01K6X3D425F1WKYTWGMXYQS71H.png")' }}
          />
        </div>
      </div>

    </div>
  );
};

export default ProjectGallery;
