import { useMemo } from "react";


const SectionCardForm1 = ({ dimensionCode,  propCursor }) => {
  const frameDivStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div
      className="self-stretch rounded-xl bg-system-background overflow-hidden flex flex-col py-5 px-[30px] items-center justify-center relative gap-[12px] text-center text-sm text-text-100 font-inter border-[1px] border-dashed border-gainsboro"
      style={frameDivStyle}>


     
      <div className="flex flex-col items-center justify-start gap-[10px] z-[0]">
        <div className="rounded-[51.43px] bg-text-white w-[50px] h-[50px] overflow-hidden shrink-0 flex flex-row p-[7.142857551574707px] box-border items-center justify-center">
          <img
            className="relative w-[28.57px] h-[28.57px] overflow-hidden shrink-0"
            alt=""
            src={dimensionCode}
          />
        </div>
        <div className="relative font-semibold">New Assessment</div>
      </div>
      <div className="self-stretch relative text-xs font-medium z-[1]">
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </div>
    </div>
  );
};

export default SectionCardForm1;
