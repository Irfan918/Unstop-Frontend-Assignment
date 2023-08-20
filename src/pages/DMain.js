import MyLibraryContainer from "../components/MyLibraryContainer";
import MainHeader from "../components/MainHeader";
import AssessmentContainer from "../components/AssessmentContainer";

const DMain = () => {
  return (
    <div className="relative bg-system-background w-full h-screen overflow-hidden flex flex-row py-0.5 px-0 box-border items-start justify-start gap-[16px] text-left text-3xs text-accent-new-red font-inter">
      <MyLibraryContainer />

      <div className="relative w-[1264px] h-[1020px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] w-[1264px]" />
        <div className="absolute top-[1px] left-[0px] w-[1264px] flex flex-col items-start justify-start">
          <MainHeader />
          <AssessmentContainer />
        </div>
      </div>
    </div>
  );
};

export default DMain;
