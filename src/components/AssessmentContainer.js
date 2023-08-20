import { useState, useCallback } from "react";
import DPopup from "./DPopup";
import PortalPopup from "./PortalPopup";
import AssessmentOverviewContainer from "./AssessmentOverviewContainer";
import MathAssessmentContainer from "./MathAssessmentContainer";

const AssessmentContainer = () => {
  const [isDPopupOpen, setDPopupOpen] = useState(false);

  const openDPopup = useCallback(() => {
    setDPopupOpen(true);
  }, []);

  const closeDPopup = useCallback(() => {
    setDPopupOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch rounded-t-none rounded-b-xl bg-text-white overflow-y-auto flex flex-col p-5 items-start justify-start z-[0] text-left text-lg text-text-100 font-inter">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="relative leading-[140%] font-medium">
                Assessments Overview
              </div>
              <div className="rounded-xl box-border w-[1226px] overflow-hidden flex flex-row items-start justify-start gap-[1px] text-sm border-[1px] border-solid border-gainsboro">
                <AssessmentOverviewContainer
                  totalAssessmentText="Total Assessment"
                  totalPurposeText="/frame-1000009100.svg"
                  totalAssessmentValue="34"
                />
                <img
                  className="self-stretch relative max-h-full w-px"
                  alt=""
                  src="/vector-251.svg"
                />
                <div className="self-stretch flex-1 bg-text-white overflow-hidden flex flex-col py-4 px-5 items-start justify-start gap-[16px]">
                  <div className="relative leading-[140%] font-semibold">
                    Candidates
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[20px] text-xl">
                    <img
                      className="relative rounded-lg w-10 h-10 overflow-hidden shrink-0"
                      alt=""
                      src="/frame-1000009353.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <b className="relative leading-[140%]">11,145</b>
                        <div className="relative text-xs leading-[140%] font-medium text-status-success">
                          +89
                        </div>
                      </div>
                      <div className="relative text-xs leading-[140%] font-medium">
                        Total Candidate
                      </div>
                    </div>
                    <img
                      className="relative w-px h-10"
                      alt=""
                      src="/vector-250.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <b className="relative leading-[140%]">1,14</b>
                        <div className="relative text-xs leading-[140%] font-medium text-status-success">
                          +89
                        </div>
                      </div>
                      <div className="relative text-xs leading-[140%] font-medium">
                        Who Attamped
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-h-full w-px"
                  alt=""
                  src="/vector-251.svg"
                />
                <div className="self-stretch bg-text-white w-[499px] overflow-hidden shrink-0 flex flex-col py-4 px-5 box-border items-start justify-start gap-[16px]">
                  <div className="relative leading-[140%] font-semibold">
                    Candidates Source
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[20px] text-xl">
                    <img
                      className="relative rounded-lg w-10 h-10 overflow-hidden shrink-0"
                      alt=""
                      src="/frame-1000005832.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <b className="relative leading-[140%]">11,000</b>
                        <div className="relative text-xs leading-[140%] font-medium text-status-success">
                          +89
                        </div>
                      </div>
                      <div className="relative text-xs leading-[140%] font-medium">
                        E-mail
                      </div>
                    </div>
                    <img
                      className="relative w-px h-10"
                      alt=""
                      src="/vector-250.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <b className="relative leading-[140%]">145</b>
                        <div className="relative text-xs leading-[140%] font-medium text-status-success">
                          +89
                        </div>
                      </div>
                      <div className="relative text-xs leading-[140%] font-medium">
                        Social Share
                      </div>
                    </div>
                    <img
                      className="relative w-px h-10"
                      alt=""
                      src="/vector-250.svg"
                    />
                    <div className="flex flex-col items-start justify-start gap-[1px]">
                      <div className="flex flex-row items-center justify-start gap-[4px]">
                        <b className="relative leading-[140%]">145</b>
                        <div className="relative text-xs leading-[140%] font-medium text-status-success">
                          +89
                        </div>
                      </div>
                      <div className="relative text-xs leading-[140%] font-medium">
                        Unique Link
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="self-stretch relative max-h-full w-px"
                  alt=""
                  src="/vector-251.svg"
                />
                <AssessmentOverviewContainer
                  totalAssessmentText="Total Purpose"
                  totalPurposeText="/frame-10000091001.svg"
                  totalAssessmentValue="11"
                  propWidth="188px"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[1224px] flex flex-row items-end justify-between">
                <div className="relative leading-[140%] font-medium">
                  My Assessment
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="rounded-51xl bg-text-white w-10 h-10" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[30px]">
                <div className="w-[1224px] flex flex-row items-start justify-start gap-[30px]">
                  <div
                    className="self-stretch flex-1 rounded-xl bg-system-background overflow-hidden flex flex-col p-[30px] items-center justify-center relative gap-[12px] cursor-pointer text-center border-[1px] border-dashed border-gainsboro"
                    onClick={openDPopup}>

                    <div className="flex flex-col items-center justify-start gap-[10px] z-[0]">
                      <div className="rounded-53xl bg-text-white w-[70px] h-[70px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-center justify-center">
                        <img
                          className="relative w-10 h-10 overflow-hidden shrink-0"
                          alt=""
                          src="/add1.svg"
                        />
                      </div>
                      <div className="relative font-medium">New Assessment</div>
                    </div>
                    
                    <div className="self-stretch relative text-xs font-medium z-[1]">
                      From here you can add questions of multiple types like
                      MCQs, subjective (text or paragraph)!
                    </div>
                    <img
                      className="absolute my-0 mx-[!important] top-[-19px] left-[470px] w-[149px] h-[149px] z-[2]"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 rounded-xl bg-text-white overflow-hidden flex flex-col p-4 items-start justify-start relative gap-[16px] border-[1px] border-solid border-gainsboro">
                    <MathAssessmentContainer productId="/calendar-today.svg" />
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
                      alt=""
                      src="/vector-3321.svg"
                    />
                    <div className="self-stretch flex flex-row items-center justify-between z-[2] text-sm">
                      <div className="flex flex-row items-start justify-start gap-[14px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[140%] font-semibold">
                            00
                          </div>
                          <div className="relative text-xs leading-[140%] font-medium mt-[-1px]">
                            Duration
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[140%] font-semibold">
                            00
                          </div>
                          <div className="relative text-xs leading-[140%] font-medium mt-[-1px]">
                            Questions
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                        <div className="rounded-31xl bg-text-white box-border h-[30px] overflow-hidden flex flex-row py-0.5 pr-2 pl-1.5 items-center justify-center gap-[4px] border-[1px] border-solid border-text-100">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/link4.svg"
                          />
                          <div className="relative leading-[140%] font-medium">
                            Share
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start text-center text-text-white">
                          <div className="rounded-[32.73px] bg-pastel-neon-blue box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col py-[5px] px-1.5 items-end justify-center border-[1px] border-solid border-text-white">
                            <b className="relative">LP</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[58px] h-[49px] z-[3]" />
                  </div>
                  <div className="self-stretch flex-1 rounded-xl bg-text-white overflow-hidden flex flex-col p-4 items-start justify-start relative gap-[16px] text-sm border-[1px] border-solid border-gainsboro">
                    <MathAssessmentContainer productId="/calendar-today1.svg" />
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-px shrink-0 z-[1]"
                      alt=""
                      src="/vector-3321.svg"
                    />
                    <div className="self-stretch flex flex-row items-center justify-between z-[2]">
                      <div className="flex flex-row items-start justify-start gap-[14px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[140%] font-semibold">
                            00
                          </div>
                          <div className="relative text-xs leading-[140%] font-medium mt-[-1px]">
                            Duration
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[140%] font-semibold">
                            00
                          </div>
                          <div className="relative text-xs leading-[140%] font-medium mt-[-1px]">
                            Questions
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                        <div className="rounded-31xl bg-text-white box-border h-[30px] overflow-hidden flex flex-row py-0.5 pr-2 pl-1.5 items-center justify-center gap-[4px] border-[1px] border-solid border-text-100">
                          <img
                            className="relative w-5 h-5 overflow-hidden shrink-0"
                            alt=""
                            src="/link5.svg"
                          />
                          <div className="relative leading-[140%] font-medium">
                            Share
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start text-center text-text-white">
                          <div className="flex flex-row items-center justify-center">
                            <div className="rounded-[32.73px] bg-pastel-neon-blue box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col py-[5px] px-1.5 items-end justify-center border-[1px] border-solid border-text-white">
                              <b className="relative">LP</b>
                            </div>
                            <div className="rounded-[32.73px] bg-pastel-royal-blue box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col py-[5px] px-1.5 items-end justify-center ml-[-15.59px] border-[1px] border-solid border-text-white">
                              <b className="relative">LP</b>
                            </div>
                            <div className="rounded-[32.73px] bg-accent-pink box-border w-[30px] h-[30px] overflow-hidden shrink-0 flex flex-col py-[5px] px-1.5 items-end justify-center ml-[-15.59px] border-[1px] border-solid border-text-white">
                              <b className="relative">LP</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[58px] h-[49px] z-[3]" />
                  </div>
                </div>
                <div className="w-[1224px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDPopup}
        >
          <DPopup onClose={closeDPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AssessmentContainer;
