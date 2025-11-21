export type StatCardProps = {
  iconUrl: string;
  iconClassName: string;
  iconBackgroundClassName: string;
  label: string;
  value: string;
  changeText: string;
  changeVariant: string;
  hasOuterPadding?: boolean;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div
      className={
        props.hasOuterPadding
          ? "box-border caret-transparent flex bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] flex-col p-6 rounded-md"
          : "box-border caret-transparent flex"
      }
    >
      <div className="box-border caret-transparent flex">
        <div className="relative items-center box-border caret-transparent flex shrink-0 h-12 justify-center w-12 overflow-hidden mr-4 rounded-2xl">
          <img src={props.iconUrl} alt="" className={props.iconClassName} />
          <div className={props.iconBackgroundClassName}></div>
        </div>
        <div className="box-border caret-transparent w-full">
          <div className="text-slate-500 text-[10px] font-medium box-border caret-transparent tracking-[2px] leading-[14px] uppercase mb-0.5">
            {props.label}
          </div>
          <div className="items-center box-border caret-transparent flex">
            <h3 className="text-xl font-semibold box-border caret-transparent leading-[26px]">
              {props.value}
            </h3>
            <div
              className={`text-xs font-medium box-border caret-transparent leading-3 border ml-1 px-1.5 py-[3px] rounded-[100px] border-solid ${props.changeVariant}`}
            >
              {props.changeText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
