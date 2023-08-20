import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();

  const onFrameContainer13Click = useCallback(() => {
    navigate("/m-main");
  }, [navigate]);

  return (
    <div className="self-stretch rounded-t-xl rounded-b-none bg-text-white box-border h-[71px] overflow-hidden shrink-0 flex flex-col py-0 px-5 items-start justify-center z-[1] text-left text-xl text-text-100 font-inter border-b-[1px] border-solid border-system-divider">
      <div className="self-stretch flex-1 flex flex-row items-center justify-between">
        <div className="self-stretch flex flex-row items-center justify-start gap-[20px]">
          <div className="relative leading-[140%] font-semibold">
            Assessment
          </div>
          <img
            className="relative w-px h-[46px]"
            alt=""
            src="/vector-298.svg"
          />
          <div className="flex flex-row items-start justify-start text-sm text-secondary-1">
            <div className="bg-text-white box-border h-[70px] flex flex-row py-2.5 px-0 items-center justify-center border-b-[3px] border-solid border-secondary-1">
              <div className="relative font-semibold">My Assessments</div>
            </div>
          </div>
        </div>
        <div
          className="rounded-51xl bg-text-white w-10 h-10 flex flex-row p-2.5 box-border items-center justify-center cursor-pointer"
          onClick={onFrameContainer13Click}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 overflow-hidden shrink-0">
            <img
              className="absolute h-[91.67%] w-[58.29%] top-[4.17%] right-[20.83%] bottom-[4.17%] left-[20.88%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
