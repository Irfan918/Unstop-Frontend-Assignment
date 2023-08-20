import Typeprimarysizemediumstate from "./Typeprimarysizemediumstate";

const DPopup = ({ onClose }) => {
  return (
    <div className="relative w-[591px] flex flex-col items-start justify-start max-w-full max-h-full overflow-auto text-center text-xl text-text-100 font-inter">
      <div className="self-stretch rounded-t-lg rounded-b-none bg-text-white box-border h-[70px] overflow-hidden shrink-0 flex flex-row p-[30px] items-center justify-between border-[1px] border-solid border-gainsboro">
        <div className="relative font-semibold">Create new assessment</div>
        <img className="relative w-[30px] h-[30px]" alt="" src="/cut1.svg" />
      </div>
      <div className="self-stretch bg-text-white overflow-hidden flex flex-col py-5 px-[30px] items-start justify-start gap-[20px] mt-[-1px] text-base border-[1px] border-solid border-gainsboro">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">Name of assessment</div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white box-border h-[50px] overflow-hidden shrink-0 flex flex-row p-[15px] items-center justify-start text-sm border-[1px] border-solid border-gainsboro">
            <div className="relative font-medium">Type Here</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">Purpose of the test is</div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white box-border h-[50px] overflow-hidden shrink-0 flex flex-row p-[15px] items-center justify-between text-sm border-[1px] border-solid border-gainsboro">
            <div className="relative font-medium">Select</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/keyboard-arrow-down1.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">Description</div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white box-border h-[50px] overflow-hidden shrink-0 flex flex-row p-[15px] items-center justify-between text-sm border-[1px] border-solid border-gainsboro">
            <div className="relative font-medium">Select</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/keyboard-arrow-down.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">Skills</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-left text-xs">
            <div className="self-stretch rounded-t-lg rounded-b-none flex flex-col p-4 items-start justify-start gap-[10px] border-[1px] border-solid border-system-divider">
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <div className="rounded-3xl bg-accent-blue-light flex flex-row py-1.5 pr-2 pl-2.5 items-center justify-end">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <div className="relative font-medium">UI/UX and Design</div>
                    <img
                      className="relative rounded-mini w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
                <div className="rounded-3xl bg-accent-blue-light flex flex-row py-1.5 pr-2 pl-2.5 items-center justify-end">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <div className="relative font-medium">No of Question</div>
                    <img
                      className="relative rounded-mini w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
                <div className="rounded-3xl bg-accent-blue-light flex flex-row py-1.5 pr-2 pl-2.5 items-center justify-end">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <div className="relative font-medium">Web Development</div>
                    <img
                      className="relative rounded-mini w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                <div className="rounded-3xl bg-accent-blue-light flex flex-row py-1.5 pr-2 pl-2.5 items-center justify-end">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <div className="relative font-medium">UI/UX and Design</div>
                    <img
                      className="relative rounded-mini w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
                <div className="rounded-3xl bg-accent-blue-light flex flex-row py-1.5 pr-2 pl-2.5 items-center justify-end">
                  <div className="flex flex-row items-center justify-start gap-[5px]">
                    <div className="relative font-medium">Web Development</div>
                    <img
                      className="relative rounded-mini w-[18px] h-[18px] overflow-hidden shrink-0"
                      alt=""
                      src="/close.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-none rounded-b-lg box-border h-[50px] flex flex-col p-4 items-start justify-start mt-[-1px] text-center text-sm border-[1px] border-solid border-system-divider">
              <div className="relative font-medium">Type here</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">Duration of assessment</div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white box-border h-[50px] overflow-hidden shrink-0 flex flex-row p-[15px] items-center justify-between text-left text-sm text-text-50 border-[1px] border-solid border-gainsboro">
            <div className="relative font-medium">HH:MM:SS</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 opacity-[0]"
              alt=""
              src="/bill-and-plan-line.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-t-none rounded-b-lg bg-text-white shadow-[0px_-4px_50px_rgba(0,_0,_0,_0.09)] overflow-hidden flex flex-col py-5 px-[30px] items-start justify-center mt-[-1px] border-r-[1px] border-solid border-gainsboro border-b-[1px] border-l-[1px]">
        <Typeprimarysizemediumstate
          button="Save"
          typeprimarysizemediumstatPosition="unset"
          typeprimarysizemediumstatAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default DPopup;
