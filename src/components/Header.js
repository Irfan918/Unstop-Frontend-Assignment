const Header = ({ assessmentLabel, assessmentValue, assessmentNumber }) => {
  return (
    <div className="flex-1 bg-text-white overflow-hidden flex flex-col py-2.5 px-3.5 items-start justify-start gap-[10px] text-left text-sm text-text-100 font-inter">
      <div className="relative leading-[140%] font-medium">
        {assessmentLabel}
      </div>
      <div className="flex flex-row items-center justify-start gap-[10px] text-base">
        <img
          className="relative rounded-lg w-10 h-10 overflow-hidden shrink-0"
          alt=""
          src={assessmentValue}
        />
        <div className="relative font-semibold">{assessmentNumber}</div>
      </div>
    </div>
  );
};

export default Header;
