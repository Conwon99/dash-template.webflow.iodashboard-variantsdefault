export const Breadcrumb = () => {
  return (
    <div className="box-border caret-transparent flex flex-col-reverse justify-between max-w-[1200px] mx-auto md:flex-row">
      <div className="items-center box-border caret-transparent flex flex-wrap">
        <div className="items-center box-border caret-transparent flex mr-1">
          <a
            href="/dashboard-variants/default"
            className="text-sm font-medium box-border caret-transparent block leading-[22px] max-w-full"
          >
            Dashboard
          </a>
          <img
            src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/618291022450e8b448680ed1_chevron-right.svg"
            alt=""
            className="box-border caret-transparent max-w-full w-[18px] ml-1"
          />
        </div>
        <div className="items-center box-border caret-transparent flex mr-1">
          <div className="text-sm font-medium box-border caret-transparent leading-[22px]">
            Dashboards
          </div>
          <img
            src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/618291022450e8b448680ed1_chevron-right.svg"
            alt=""
            className="box-border caret-transparent max-w-full w-[18px] ml-1"
          />
        </div>
        <div className="items-center box-border caret-transparent flex mr-1">
          <div className="text-sm font-medium box-border caret-transparent leading-[22px]">
            Default
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <a
          href="/account"
          className="text-black items-center box-border caret-transparent flex max-w-full mb-5 md:mb-0"
        >
          <img
            src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfa3d1f8120bfc88c26_Dash_-_Avatar_02-min.jpg"
            alt=""
            className="box-border caret-transparent h-[42px] max-w-full object-cover w-[42px] mr-2 rounded-2xl"
          />
          <div className="box-border caret-transparent">
            <h5 className="font-semibold box-border caret-transparent leading-5">
              Jennifer H.
            </h5>
            <div className="text-slate-500 text-sm box-border caret-transparent shrink-0 leading-[22px]">
              Account settings
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
