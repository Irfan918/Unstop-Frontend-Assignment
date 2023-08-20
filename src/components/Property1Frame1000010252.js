import { useMemo, useState } from "react";
import SectionCardForm1 from "./SectionCardForm1";
import MathAssessmentSection from "./MathAssessmentSection";
import SectionCardForm from "./SectionCardForm";
import Footer from "./Footer";
import MPopup from "./MPopup";

const Property1Frame1000010252 = ({
  search,
  add,
  link,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  property1Frame1000010252Position,
  barChartCursor,
  frameDivCursor,
  openMPopup1,
}) => {
  const property1Frame1000010252Style = useMemo(() => {
    return {
      position: property1Frame1000010252Position,
    };
  }, [property1Frame1000010252Position]);

  const barChartStyle = useMemo(() => {
    return {
      cursor: barChartCursor,
    };
  }, [barChartCursor]);

  const frameDivStyle = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);



  const [isMPopup, setMPopup] = useState(false);
  const openMPopup = function () {
    isMPopup ? (setMPopup(false)) : setMPopup(true);
  };


  return (
    <>
        {
          isMPopup ? <MPopup openMPopup={openMPopup} /> : ""
        }
      <div className="relative flex flex-col items-start justify-start text-left text-base text-text-100 font-inter"
        style={property1Frame1000010252Style}    >

        <div className="flex flex-col items-start justify-start gap-[10px]">
          <div className="w-[345px] flex flex-row items-center justify-between">
            <div className="relative font-semibold">My Assessment</div>
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <div className="rounded-31xl bg-text-white w-10 h-10 flex flex-row p-1 box-border items-center justify-center">
                <img
                  className="relative w-[22px] h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src={search}
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
                className="rounded-31xl bg-text-white w-10 h-10 flex flex-row p-1 box-border items-center justify-center"
                style={barChartStyle}
                onClick={openMPopup1} >

                <div className="w-5 h-5 flex flex-row items-center justify-center">
                  <img className="relative w-4 h-4" alt="" src="/bar-chart.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[345px] flex flex-col items-start justify-start gap-[15px]">
            <div onClick={openMPopup} >
              <SectionCardForm1 dimensionCode="/add.svg" showVectorIcon />
            </div>
            <MathAssessmentSection productCode="/link.svg" />
            <SectionCardForm dimensionText="/link1.svg" />
            <SectionCardForm dimensionText="/link2.svg" />
            <SectionCardForm dimensionText="/link2.svg" />
            <SectionCardForm dimensionText="/link1.svg" />
            <SectionCardForm dimensionText="/link1.svg" />
            <Footer dimensionCode="/link3.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Property1Frame1000010252;
