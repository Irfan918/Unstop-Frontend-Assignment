import { useMemo } from "react";

const StatusBar1 = ({
  vector,
  vector1,
  frame1000007851,
  statusBarPosition,
}) => {
  const statusBarStyle = useMemo(() => {
    return {
      position: statusBarPosition,
    };
  }, [statusBarPosition]);

  return (
    <div
      className="relative bg-text-white w-[374px] h-10 flex flex-row py-[7px] px-4 box-border items-center justify-between"
      style={statusBarStyle}
    >
      <img className="relative w-[28.43px] h-[11.09px]" alt="" src="/941.svg" />
      <div className="h-[11px] overflow-hidden flex flex-row py-0 px-px box-border items-center justify-start gap-[8px]">
        <img className="relative w-[15.5px] h-[9.78px]" alt="" src={vector} />
        <img
          className="relative w-[13.92px] h-[10.05px]"
          alt=""
          src={vector1}
        />
        <img
          className="relative w-[22.5px] h-[10.26px]"
          alt=""
          src={frame1000007851}
        />
      </div>
    </div>
  );
};

export default StatusBar1;
