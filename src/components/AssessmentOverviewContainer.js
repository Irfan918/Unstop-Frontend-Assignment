import { useMemo } from "react";

const AssessmentOverviewContainer = ({
  totalAssessmentText,
  totalPurposeText,
  totalAssessmentValue,
  propWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="self-stretch bg-text-white w-[162px] overflow-hidden shrink-0 flex flex-col py-4 px-5 box-border items-start justify-start gap-[16px] text-left text-sm text-text-100 font-inter"
      style={frameDiv1Style}
    >
      <div className="relative leading-[140%] font-semibold">
        {totalAssessmentText}
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px] text-xl">
        <img
          className="relative rounded-lg w-10 h-10 overflow-hidden shrink-0"
          alt=""
          src={totalPurposeText}
        />
        <b className="relative leading-[140%]">{totalAssessmentValue}</b>
      </div>
    </div>
  );
};

export default AssessmentOverviewContainer;
