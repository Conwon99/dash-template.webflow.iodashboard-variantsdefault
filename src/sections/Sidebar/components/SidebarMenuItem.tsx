export type SidebarMenuItemProps = {
  iconUrl: string;
  label: string;
  isActive?: boolean;
};

export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
  const wrapperClassName = props.isActive
    ? "relative box-border caret-transparent text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 flex grayscale-0 leading-5 opacity-100 text-nowrap align-top my-1 px-6 py-2 border-l-transparent border-l-2 md:grayscale-[0.2108] md:opacity-[0.93676] md:my-1.5 md:py-2.5"
    : "relative box-border caret-transparent text-left z-[900] mr-px";
  const buttonClassName = props.isActive
    ? "box-border caret-transparent text-nowrap relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 flex grayscale-[1] leading-5 opacity-70 align-top my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
    : "box-border caret-transparent text-nowrap relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 flex grayscale-[1] leading-5 opacity-70 align-top my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5";

  const content = (
    <>
      <img
        src={props.iconUrl}
        alt=""
        className="box-border caret-transparent max-w-full text-nowrap mr-5"
      />
      <div className="box-border caret-transparent text-nowrap">
        {props.label}
      </div>
      <img
        src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/60586d393a273570ab97cc78_chevron-down.svg"
        alt=""
        className="absolute box-border caret-transparent max-w-full text-nowrap mr-6 my-auto right-[0%] inset-y-[0%]"
      />
    </>
  );

  if (props.isActive) {
    return (
      <div role="button" className={wrapperClassName}>
        {content}
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      <div role="button" className={buttonClassName}>
        {content}
      </div>
    </div>
  );
};
