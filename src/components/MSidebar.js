const MSidebar = ({ onClose }) => {
  return (
    <div className="relative bg-secondary-5 w-[315px] h-[1074px] overflow-hidden flex flex-col pt-10 px-5 pb-2.5 box-border items-start justify-start gap-[10px] max-w-full max-h-full text-left text-sm text-text-100 font-inter">
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch h-9 flex flex-row items-start justify-between">
          <div className="relative leading-[140%] font-medium">Menu</div>
          <img className="relative w-6 h-6" alt="" src="/cut2.svg" />
        </div>
        <div className="self-stretch rounded-lg bg-secondary-5 h-[50px] flex flex-row p-2.5 box-border items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/dashboard1.svg"
            />
            <div className="relative leading-[140%] font-medium">Dashboard</div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-aliceblue box-border h-[50px] flex flex-row p-2.5 items-center justify-start relative gap-[10px] text-secondary-1 border-[1px] border-solid border-secondary-1">
          <div className="flex flex-row items-center justify-start gap-[8px] z-[0]">
            <img className="relative w-5 h-5" alt="" src="/note-alt1.svg" />
            <div className="relative leading-[140%] font-semibold">
              Assessment
            </div>
          </div>
          <div className="absolute my-0 mx-[!important] top-[5px] left-[230px] rounded-3xs bg-accent-new-red w-[7px] h-[7px] opacity-[0] z-[1]" />
        </div>
        <div className="self-stretch rounded-lg bg-secondary-5 h-[50px] flex flex-row p-2.5 box-border items-center justify-start">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img className="relative w-5 h-5" alt="" src="/quiz1.svg" />
            <div className="relative leading-[140%] font-medium">
              My Library
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src="/vector-2671.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch rounded-lg bg-secondary-5 h-[50px] flex flex-row p-2.5 box-border items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <img className="relative w-5 h-5" alt="" src="/admin-meds.svg" />
            <div className="relative leading-[140%] font-medium">
              Round Status
            </div>
          </div>
          <div className="rounded-3xl bg-accent-red-light box-border h-[18px] flex flex-row py-1.5 px-2 items-center justify-start text-3xs text-accent-new-red border-[1px] border-solid border-accent-new-red">
            <div className="relative font-medium">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MSidebar;
