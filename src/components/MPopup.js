import Typeprimarysizemediumstate from "./Typeprimarysizemediumstate";

const MPopup = ({ openMPopup }) => {
  return (
    <div className="relative shadow-[0px_-5px_19px_rgba(0,_0,_0,_0.09)] w-[375px] flex flex-col items-start justify-start max-w-full max-h-full overflow-auto text-center text-sm text-text-100 font-inter">
      <div className="self-stretch rounded-t-xl rounded-b-none bg-text-white box-border h-[60px] flex flex-col py-0 px-[15px] items-start justify-center border-b-[1px] border-solid border-gainsboro">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-[175px] flex flex-row items-center justify-start">
            <div className="relative font-semibold">Sub-Section Details</div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="rounded-41xl bg-secondary-1 w-10 h-10 flex flex-row p-2.5 box-border items-center justify-center opacity-[0]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/bill-and-plan-line.svg"
              />
            </div>
            <div onClick={openMPopup} className="rounded-41xl bg-accent-red-light w-10 h-10 flex flex-row p-2.5 box-border items-center justify-center">
              <img
                className="relative w-[30px] h-[30px]"
                alt=""
                src="/cut.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-text-white h-[517px] overflow-y-auto shrink-0 flex flex-col py-4 px-[15px] box-border items-start justify-start gap-[20px] text-xs">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">Name of assessment</div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white box-border h-[50px] overflow-hidden shrink-0 flex flex-row p-[15px] items-center justify-start text-text-50 border-[1px] border-solid border-gainsboro">
            <div className="relative font-medium">Type Here</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">Purpose of the test is</div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white box-border h-[50px] overflow-hidden shrink-0 flex flex-row p-[15px] items-center justify-between text-text-50 border-[1px] border-solid border-gainsboro">
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
            <div className="relative font-medium">Description</div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white box-border h-[50px] overflow-hidden shrink-0 flex flex-row p-[15px] items-center justify-between text-text-50 border-[1px] border-solid border-gainsboro">
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
          <div className="self-stretch flex flex-col items-start justify-start text-left">
            <div className="self-stretch rounded-t-lg rounded-b-none flex flex-col p-4 items-start justify-start border-[1px] border-solid border-system-divider">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px]">
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
            </div>
            <div className="self-stretch rounded-t-none rounded-b-lg box-border h-[50px] flex flex-col p-4 items-start justify-start mt-[-1px] text-center text-text-50 border-[1px] border-solid border-system-divider">
              <div className="relative font-medium">Type here</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="relative font-medium">Duration of assessment</div>
          </div>
          <div className="self-stretch rounded-lg bg-text-white box-border h-[50px] overflow-hidden shrink-0 flex flex-row p-[15px] items-center justify-between text-text-50 border-[1px] border-solid border-gainsboro">
            <div className="relative font-medium">HH:MM:SS</div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 opacity-[0]"
              alt=""
              src="/bill-and-plan-line.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch bg-text-white box-border h-[60px] flex flex-col py-[7px] px-4 items-start justify-center border-t-[1px] border-solid border-gainsboro">
        <Typeprimarysizemediumstate
          button="Next"
          typeprimarysizemediumstatPosition="unset"
          typeprimarysizemediumstatAlignSelf="stretch"
        />
      </div>
    </div>
  );
};

export default MPopup;
