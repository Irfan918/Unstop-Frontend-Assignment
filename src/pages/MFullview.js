import { useCallback } from "react";
import SectionCard from "../components/SectionCard";
import { useNavigate } from "react-router-dom";
import SectionCardForm1 from "../components/SectionCardForm1";
import MathAssessmentSection from "../components/MathAssessmentSection";
import SectionCardForm from "../components/SectionCardForm";

const MFullview = () => {
  const navigate = useNavigate();

  const onBarChartContainerClick = useCallback(() => {
    navigate("/m-main");
  }, [navigate]);

  return (
    <>
    {/* <div className="flex  items-start justify-center  gap-[20px] text-left text-base text-text-100 font-inter">
      <SectionCard />
      <div className="flex flex-col items-start justify-start gap-[10px]">
        <div className="w-[345px] flex flex-row items-center justify-between">
          <div className="relative font-semibold">My Assessment</div>
          <div className="flex flex-row items-start justify-start gap-[4px]">
            <div className="rounded-31xl bg-text-white w-10 h-10 flex flex-row p-1 box-border items-center justify-center">
              <img
                className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
            </div>
            <div className="rounded-31xl bg-text-white w-10 h-10 flex flex-row p-1 box-border items-center justify-center">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/filter-list-alt.svg"
              />
            </div>
            <div
              className="rounded-31xl bg-secondary-5 box-border w-10 h-10 flex flex-row p-1 items-center justify-center cursor-pointer border-[1px] border-solid border-secondary-1"
              onClick={onBarChartContainerClick}
            >
              <div className="w-5 h-5 flex flex-row items-center justify-center">
                <img
                  className="relative w-4 h-4"
                  alt=""
                  src="/bar-chart1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[345px] flex flex-col items-start justify-start gap-[15px] text-center text-sm">
          <SectionCardForm1
            dimensionCode="/add2.svg"
            showVectorIcon
            propCursor="pointer"
          />
          <MathAssessmentSection productCode="/link6.svg" />
          <SectionCardForm dimensionText="/link7.svg" />
          <SectionCardForm dimensionText="/link7.svg" />
          <SectionCardForm dimensionText="/link8.svg" />
          <SectionCardForm dimensionText="/link8.svg" />
          <SectionCardForm dimensionText="/link9.svg" />
          <div className="self-stretch rounded-xl bg-text-white overflow-hidden flex flex-col p-3.5 items-start justify-start gap-[10px] border-[1px] border-solid border-gainsboro">
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
                    <img
                      className="relative w-px h-4"
                      alt=""
                      src="/vector-333.svg"
                    />
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
              <div className="flex flex-row items-center justify-start gap-[4px] text-left">
                <div className="rounded-31xl bg-text-white box-border h-[30px] overflow-hidden flex flex-row py-0.5 pr-2 pl-1.5 items-center justify-center gap-[4px] border-[1px] border-solid border-text-100">
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/add2.svg"
                  />
                  <div className="relative leading-[140%] font-medium">
                    Share
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4px] text-center text-sm text-text-white">
                  <div className="flex flex-row items-center justify-center">
                    <div className="rounded-[32.73px] bg-pastel-neon-blue box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col py-[5px] px-1.5 items-end justify-center border-[1px] border-solid border-text-white">
                      <b className="relative">LP</b>
                    </div>
                    <div className="rounded-[32.73px] bg-accent-pink box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col py-[5px] px-1.5 items-end justify-center ml-[-15.59px] border-[1px] border-solid border-text-white">
                      <b className="relative">LP</b>
                    </div>
                  </div>
                  <div className="relative text-xs font-semibold text-text-100">
                    +32,4090
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default MFullview;
