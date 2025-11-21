export const StorageCard = () => {
  return (
    <a
      href="/project-management"
      className="text-black bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col max-w-full p-6 rounded-md md:shadow-[rgba(118,135,154,0.24)_0px_2px_1px_0px,rgba(118,135,154,0.1)_0px_10px_20px_0px] hover:shadow-[rgba(118,135,154,0.24)_0px_2px_1px_0px,rgba(118,135,154,0.1)_0px_10px_20px_0px]"
    >
      <div className="relative box-border caret-transparent flex flex-col h-full justify-between">
        <div className="box-border caret-transparent">
          <div className="relative items-center box-border caret-transparent flex shrink-0 h-12 justify-center w-12 overflow-hidden mb-4 rounded-2xl">
            <img
              src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605882d37ee33fcb3f67627f_hard-drive.svg"
              alt=""
              className="box-border caret-transparent max-w-full z-[5]"
            />
            <div className="absolute bg-violet-600 box-border caret-transparent h-full opacity-15 w-full z-0 inset-[0%]"></div>
          </div>
          <h4 className="text-lg font-semibold box-border caret-transparent mb-2.5">
            Drive Storage
          </h4>
        </div>
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent flex justify-between mt-4 mb-1">
            <div className="text-slate-500 text-sm box-border caret-transparent leading-5">
              60 GB
            </div>
            <div className="text-slate-500 text-sm box-border caret-transparent leading-5">
              100 GB
            </div>
          </div>
          <div className="items-center bg-slate-200 box-border caret-transparent flex h-1.5 w-full rounded-[100px]">
            <div className="text-white bg-violet-600 box-border caret-transparent h-full w-3/5 rounded-[100px]"></div>
          </div>
        </div>
      </div>
    </a>
  );
};
