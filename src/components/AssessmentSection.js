import { useState, useMemo, useCallback } from "react";
import MSidebar from "./MSidebar";
import PortalPopup from "./PortalPopup";
import StatusBar1 from "./StatusBar1";

const AssessmentSection = ({
  iconPosition,
  iconTop,
  iconLeft,
  onFrameContainer3Click,
}) => {
  const [isMSidebarOpen, setMSidebarOpen] = useState(false);
  const frameDiv2Style = useMemo(() => {
    return {
      position: iconPosition,
      top: iconTop,
      left: iconLeft,
    };
  }, [iconPosition, iconTop, iconLeft]);

  const openMSidebar = useCallback(() => {
    setMSidebarOpen(true);
  }, []);

  const closeMSidebar = useCallback(() => {
    setMSidebarOpen(false);
  }, []);

  return (
    <>
      <div
        className="flex flex-col items-start justify-start text-left text-base text-text-100 font-inter"
        style={frameDiv2Style}
      >
        <StatusBar1
          vector="/vector4.svg"
          vector1="/vector5.svg"
          frame1000007851="/frame-10000078511.svg"
          statusBarPosition="unset"
        />
        <div className="bg-text-white w-[375px] h-[50px] overflow-hidden shrink-0 flex flex-row py-0 px-[15px] box-border items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <div
              className="rounded-41xl bg-secondary-5 w-10 h-10 flex flex-row p-2.5 box-border items-center justify-center cursor-pointer"
              onClick={openMSidebar}
            >
              <img
                className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
                alt=""
                src="/segment.svg"
              />
            </div>
            <div className="relative leading-[140%] font-semibold">
              Assessment
            </div>
          </div>
          <div
            className="rounded-51xl bg-text-white w-10 h-10 flex flex-row p-2.5 box-border items-center justify-center cursor-pointer"
            onClick={onFrameContainer3Click}
          >
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/laptop-mac.svg"
            />
          </div>
        </div>
        <div className="bg-text-white w-[375px] overflow-hidden flex flex-col items-start justify-center text-sm text-secondary-1">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 bg-text-white box-border h-[50px] flex flex-row py-2.5 px-0 items-center justify-center border-b-[2px] border-solid border-secondary-1">
              <div className="relative font-medium">My Assessments</div>
            </div>
            <div className="flex-1 bg-text-white box-border h-[50px] flex flex-row py-2.5 px-0 items-center justify-center text-text-85 border-b-[2px] border-solid border-system-background">
              <div className="relative font-medium">Unstop Assessments</div>
            </div>
          </div>
        </div>
      </div>
      {isMSidebarOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMSidebar}
        >
          <MSidebar onClose={closeMSidebar} />
        </PortalPopup>
      )}
    </>
  );
};

export default AssessmentSection;
