import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AssessmentSection from "../components/AssessmentSection";
import PortalPopup from "../components/PortalPopup";
import Property1Frame1000010252 from "../components/Property1Frame1000010252";
import SectionCard from "../components/SectionCard";
import MPopup from "../components/MPopup";

const MMain = () => {
  const [isMPopup1Open, setMPopup1Open] = useState(false);
  const [isMPopup12, setMPopup12] = useState(false);
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBarChartContainerClick = useCallback(() => {
    navigate("/m-fullview");
  }, [navigate]);

  const onFrameContainer155Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMPopup1 = useCallback(() => {
    isMPopup1Open ? (setMPopup1Open(false)) : setMPopup1Open(true);
  });
  const openMPopup12 = useCallback(() => {
    isMPopup12 ? (setMPopup12(false)) : setMPopup12(true);
  });

  const closeMPopup1 = useCallback(() => {
    setMPopup1Open(false);
  }, []);

  return (
    <>
      <div className=" bg-slate-100 flex  items-start justify-center h-[1390px]">
        <div className="">
          <AssessmentSection onFrameContainer3Click={onFrameContainer3Click} />
          {
            isMPopup12 ? (<SectionCard />) : ""
          }


          <div className="bg-text-white w-[375px] flex flex-col py-5 px-[15px] box-border items-start justify-start">
            <Property1Frame1000010252
              search="/search1.svg"
              add="/add3.svg"
              link="/link11.svg"
              link1="/link12.svg"
              link2="/link13.svg"
              link3="/link13.svg"
              link4="/link12.svg"
              link5="/link12.svg"
              link6="/link14.svg"

              property1Frame1000010252Position="unset"
              barChartCursor="pointer"
              frameDivCursor="pointer"
              openMPopup1={openMPopup12}

            // onBarChartContainerClick={onBarChartContainerClick}
            />
          </div>
          <div
            className=" sticky  bottom-3  rounded-[51.43px] bg-secondary-1 w-[50px] h-[50px] overflow-hidden flex flex-row p-[7.142857551574707px] box-border items-center justify-center cursor-pointer"
            onClick={openMPopup1}>
            <img
              className="relative w-[28.57px] h-[28.57px] overflow-hidden shrink-0"
              alt=""
              src="/add4.svg" />
          </div>
        </div>

      </div>
      {isMPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMPopup1}
        >
          <MPopup onClose={closeMPopup1} />
        </PortalPopup>


      )}
    </>
  );
};

export default MMain;
