import Header from "./Header";

const SectionCard = () => {
  return (
    <div className=" flex  items-center justify-center text-left text-sm text-text-100 font-inter">
      <div className="self-stretch rounded-xl overflow-hidden flex flex-col items-start justify-start gap-[1px] border-[1px] border-solid border-gainsboro">
        <div className="self-stretch flex flex-row items-start justify-start gap-[1px]">
          <Header
            assessmentLabel="Total Assessment"
            assessmentValue="/frame-10000091002.svg"
            assessmentNumber="34"
          />
          <img
            className="self-stretch relative max-h-full w-px"
            alt=""
            src="/vector-364.svg"
          />
          <Header
            assessmentLabel="Total Purpose"
            assessmentValue="/frame-10000091003.svg"
            assessmentNumber="11"
          />
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/vector-361.svg"
        />
        <div className="self-stretch bg-text-white overflow-hidden flex flex-col py-2.5 px-3.5 items-start justify-start gap-[10px]">
          <div className="relative leading-[140%] font-medium">Candidates</div>
          <div className="flex flex-row items-center justify-start gap-[14px] text-base">
            <img
              className="relative rounded-lg w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/frame-10000093531.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[1px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-semibold">11,145</div>
                <div className="relative text-3xs leading-[140%] font-medium text-status-success">
                  +89
                </div>
              </div>
              <div className="relative text-3xs leading-[140%] font-medium">
                Total Candidate
              </div>
            </div>
            <img className="relative w-px h-10" alt="" src="/vector-2501.svg" />
            <div className="flex flex-col items-start justify-start gap-[1px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-semibold">1,14</div>
                <div className="relative text-3xs leading-[140%] font-medium text-status-success">
                  +89
                </div>
              </div>
              <div className="relative text-3xs leading-[140%] font-medium">
                Who Attamped
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/vector-361.svg"
        />
        <div className="self-stretch bg-text-white overflow-hidden flex flex-col py-2.5 px-3.5 items-start justify-start gap-[10px]">
          <div className="relative leading-[140%] font-medium">
            Candidates Source
          </div>
          <div className="flex flex-row items-center justify-start gap-[10px] text-base">
            <img
              className="relative rounded-lg w-10 h-10 overflow-hidden shrink-0"
              alt=""
              src="/frame-10000058321.svg"
            />
            <div className="flex flex-col items-start justify-start gap-[1px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-semibold">11,000</div>
                <div className="relative text-3xs leading-[140%] font-medium text-status-success">
                  +89
                </div>
              </div>
              <div className="relative text-3xs leading-[140%] font-medium">
                E-mail
              </div>
            </div>
            <img className="relative w-px h-10" alt="" src="/vector-2501.svg" />
            <div className="flex flex-col items-start justify-start gap-[1px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-semibold">11,000</div>
                <div className="relative text-3xs leading-[140%] font-medium text-status-success">
                  +89
                </div>
              </div>
              <div className="relative text-3xs leading-[140%] font-medium">
                Social Share
              </div>
            </div>
            <img className="relative w-px h-10" alt="" src="/vector-2501.svg" />
            <div className="flex flex-col items-start justify-start gap-[1px]">
              <div className="flex flex-row items-center justify-start gap-[4px]">
                <div className="relative font-semibold">11,000</div>
                <div className="relative text-3xs leading-[140%] font-medium text-status-success">
                  +89
                </div>
              </div>
              <div className="relative text-3xs leading-[140%] font-medium">
                Unique Link
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
