const MathAssessmentContainer = ({ productId }) => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between z-[0] text-left text-lg text-text-100 font-inter">
      <div className="flex flex-col items-start justify-center gap-[10px]">
        <img
          className="relative rounded-xl w-[50px] h-[50px] overflow-hidden shrink-0"
          alt=""
          src="/frame-10000087031.svg"
        />
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div className="relative leading-[140%] font-medium">
            Math Assessment
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px] text-sm">
            <div className="relative leading-[140%] font-semibold inline-block w-[26px] h-5 shrink-0">
              Job
            </div>
            <img className="relative w-px h-4" alt="" src="/vector-3331.svg" />
            <div className="h-[22px] flex flex-row items-center justify-start gap-[4px] text-xs text-text-50">
              <img
                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                alt=""
                src={productId}
              />
              <div className="relative font-medium">20 Apr 2023</div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-31xl bg-text-white w-[30px] h-[30px] flex flex-row py-[5px] px-2.5 box-border items-center justify-center">
        <img className="relative w-5 h-5" alt="" src="/3-dot2.svg" />
      </div>
    </div>
  );
};

export default MathAssessmentContainer;
