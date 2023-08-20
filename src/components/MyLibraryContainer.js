const MyLibraryContainer = () => {
  return (
    <a className="[text-decoration:none] bg-text-white min-w-[170px] h-screen overflow-hidden flex flex-row pt-4 pb-5 pr-5 pl-[30px] box-border items-start justify-start text-[inherit]">
    <div className="flex flex-col items-center justify-start gap-[16px]">
      <div className="h-[225px] flex flex-col pt-0 px-0 pb-2.5 box-border items-start justify-start gap-[2px] text-left text-xs text-text-100 font-inter">
        <div className="rounded-lg bg-text-white w-[110px] h-[70px] overflow-hidden shrink-0 flex flex-col py-2.5 px-5 box-border items-center justify-center relative gap-[6px]">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 z-[0]"
            alt=""
            src="/dashboard.svg"
          />
          <div className="relative leading-[140%] font-medium z-[1]">
            Dashboard
          </div>
        </div>

        <div className="rounded-lg bg-aliceblue box-border w-[110px] h-[70px] overflow-hidden shrink-0 flex flex-col py-2.5 px-5 items-center justify-center relative gap-[6px] text-secondary-1 border-[1px] border-solid border-secondary-1">
          <img className="relative w-5 h-5 z-[0]" alt="" src="/note-alt.svg" />
          <div className="relative leading-[140%] font-medium z-[1]">
            Assessment
          </div>
        </div>
        
        <div className="rounded-lg bg-text-white w-[110px] h-[70px] overflow-hidden shrink-0 flex flex-col py-2.5 px-5 box-border items-center justify-center relative gap-[6px]">
        <img className="relative w-5 h-5" alt="" src="/quiz.svg" />
          <div className="relative leading-[140%] font-medium">My Library</div>
        </div>
      </div>

      
      <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
          alt=""
          src="/vector-267.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[6px]">
          <div className="rounded-3xl bg-accent-red-light box-border h-[18px] flex flex-row py-1.5 px-2 items-center justify-start border-[1px] border-solid border-accent-new-red">
            <div className="relative font-medium">Admin</div>
          </div>
          <div className="rounded-lg bg-text-white w-[110px] overflow-hidden flex flex-col py-2.5 px-5 box-border items-center justify-center gap-[6px] text-center text-xs text-text-100">
            <img
              className="relative w-5 h-5"
              alt=""
              src="/admin-meds.svg"
            />
            <div className="relative leading-[140%] font-medium">
              <p className="m-0">Round</p>
              <p className="m-0">Status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a>
  );
};

export default MyLibraryContainer;
