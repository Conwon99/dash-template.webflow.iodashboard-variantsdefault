export const ProjectsList = () => {
  return (
    <div className="bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col p-6 rounded-md">
      <div className="items-start border-b-slate-200 border-l-slate-900 border-r-slate-900 border-t-slate-900 box-border caret-transparent flex justify-between mb-6 border-b">
        <h4 className="text-lg font-semibold box-border caret-transparent mb-2.5">
          Projects
        </h4>
      </div>
      <a
        href="/project-management"
        className="text-black items-start border-b-slate-200 box-border caret-transparent flex flex-col justify-between max-w-full pb-4 border-b md:items-center md:flex-row"
      >
        <div className="items-center box-border caret-transparent flex mb-3.5 md:mb-0">
          <img
            src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/618290cffe17403887a80e16_Project_Visual_06-min.jpg"
            sizes="64px"
            alt=""
            className="shadow-[rgba(118,135,154,0.15)_0px_1px_1px_0px] box-border caret-transparent h-12 max-w-full object-cover w-16 mr-2 rounded-[5px]"
          />
          <div className="box-border caret-transparent">
            <h6 className="text-sm font-semibold box-border caret-transparent leading-[18px]">
              Dashboard Kit
            </h6>
            <div className="text-slate-700 text-sm box-border caret-transparent shrink-0 leading-[22px]">
              2 hr ago
            </div>
          </div>
        </div>
        <div className="text-violet-600 text-sm box-border caret-transparent shrink-0 leading-[22px] hover:text-violet-900 hover:border-violet-900">
          View Project
        </div>
      </a>
      <a
        href="/project-management"
        className="text-black items-start border-b-slate-200 box-border caret-transparent flex flex-col justify-between max-w-full py-4 border-b md:items-center md:flex-row"
      >
        <div className="items-center box-border caret-transparent flex mb-3.5 md:mb-0">
          <img
            src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/618290d8f89d5e26b68e8194_Project_Visual_04-min.jpg"
            sizes="64px"
            alt=""
            className="shadow-[rgba(118,135,154,0.15)_0px_1px_1px_0px] box-border caret-transparent h-12 max-w-full object-cover w-16 mr-2 rounded-[5px]"
          />
          <div className="box-border caret-transparent">
            <h6 className="text-sm font-semibold box-border caret-transparent leading-[18px]">
              Sport Website
            </h6>
            <div className="text-slate-700 text-sm box-border caret-transparent shrink-0 leading-[22px]">
              6 hr ago
            </div>
          </div>
        </div>
        <div className="text-violet-600 text-sm box-border caret-transparent shrink-0 leading-[22px] hover:text-violet-900 hover:border-violet-900">
          View Project
        </div>
      </a>
      <a
        href="/project-management"
        className="text-black items-start box-border caret-transparent flex flex-col justify-between max-w-full pt-4 md:items-center md:flex-row"
      >
        <div className="items-center box-border caret-transparent flex mb-3.5 md:mb-0">
          <img
            src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/618290dcedd0c3166a7ceb2a_Project_Visual_03-min.jpg"
            sizes="64px"
            alt=""
            className="shadow-[rgba(118,135,154,0.15)_0px_1px_1px_0px] box-border caret-transparent h-12 max-w-full object-cover w-16 mr-2 rounded-[5px]"
          />
          <div className="box-border caret-transparent">
            <h6 className="text-sm font-semibold box-border caret-transparent leading-[18px]">
              Landingpage System
            </h6>
            <div className="text-slate-700 text-sm box-border caret-transparent shrink-0 leading-[22px]">
              1 week ago
            </div>
          </div>
        </div>
        <div className="text-violet-600 text-sm box-border caret-transparent shrink-0 leading-[22px] hover:text-violet-900 hover:border-violet-900">
          View Project
        </div>
      </a>
    </div>
  );
};
