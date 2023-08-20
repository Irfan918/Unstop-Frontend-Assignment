import { useMemo } from "react";

const Typeprimarysizemediumstate = ({
  button,
  typeprimarysizemediumstatPosition,
  typeprimarysizemediumstatAlignSelf,
}) => {
  const typeprimarysizemediumstateStyle = useMemo(() => {
    return {
      position: typeprimarysizemediumstatPosition,
      alignSelf: typeprimarysizemediumstatAlignSelf,
    };
  }, [typeprimarysizemediumstatPosition, typeprimarysizemediumstatAlignSelf]);

  return (
    <div
      className="relative rounded-lg bg-secondary-1 h-10 flex flex-row py-2.5 px-[30px] box-border items-center justify-center text-left text-sm text-text-white font-inter"
      style={typeprimarysizemediumstateStyle}
    >
      <div className="relative font-semibold">{button}</div>
    </div>
  );
};

export default Typeprimarysizemediumstate;
