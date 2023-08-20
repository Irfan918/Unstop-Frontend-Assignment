const MathAssessmentSection = ({ productCode }) => {
  return (
    <div className="self-stretch rounded-xl bg-text-white overflow-hidden flex flex-col p-3.5 items-start justify-start gap-[10px] text-center text-sm text-text-100 font-inter border-[1px] border-solid border-gainsboro">
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <img
            className="relative rounded-xl w-[50px] h-[50px] overflow-hidden shrink-0"
            alt=""
            src="/frame-1000008703.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[2px]">
            <div className="relative font-semibold">Math Assessment</div>
            <div className="flex flex-row items-center justify-start gap-[5px] text-left text-xs">
              <div className="relative leading-[140%] font-medium inline-block w-[26px] shrink-0">
                Job
              </div>
              <img className="relative w-px h-4" alt="" src="/vector-333.svg" />
              <div className="h-[22px] flex flex-row items-center justify-start text-center text-text-50">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <img
                    className="relative w-3 h-3"
                    alt=""
                    src="/schedule.svg"
                  />
                  <div className="relative font-medium">20 Apr 23</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-21xl bg-text-white w-6 h-6 flex flex-row py-1 px-2 box-border items-center justify-center">
          <img className="relative w-4 h-4" alt="" src="/3-dot1.svg" />
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src="/vector-332.svg"
      />
      <div className="self-stretch flex flex-row items-center justify-between text-xs">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <div className="relative font-semibold">00</div>
            <div className="relative text-3xs leading-[140%] font-medium text-left">
              Duration
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <div className="relative font-semibold">00</div>
            <div className="relative text-3xs leading-[140%] font-medium text-left">
              Questions
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[10px] text-left">
          <div className="rounded-31xl bg-text-white box-border h-[30px] overflow-hidden flex flex-row py-0.5 pr-2 pl-1.5 items-center justify-center gap-[4px] border-[1px] border-solid border-text-100">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src={productCode}
            />
            <div className="relative leading-[140%] font-medium">Share</div>
          </div>
          <div className="flex flex-row items-center justify-start text-center text-text-white">
            <div className="rounded-[32.73px] bg-pastel-neon-blue box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col py-[5px] px-1.5 items-center justify-center border-[1px] border-solid border-text-white">
              <b className="relative">LP</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathAssessmentSection;
