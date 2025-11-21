export const ChartCard = () => {
  return (
    <div className="bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col p-6 rounded-md">
      <div className="items-start border-b-slate-200 border-l-slate-900 border-r-slate-900 border-t-slate-900 box-border caret-transparent flex justify-between mb-6 border-b">
        <h4 className="text-lg font-semibold box-border caret-transparent mb-2.5">
          Circle Chart
        </h4>
      </div>
      <div className="items-center box-border caret-transparent flex flex-col justify-center text-center">
        <img
          src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/608ac2d25bb74b5e3d4a6fa3_Dash_Chart_01.svg"
          alt=""
          className="box-border caret-transparent max-w-[220px] w-full mb-6"
        />
        <div className="items-center box-border caret-transparent flex flex-col justify-start -mx-2.5 md:[align-items:normal] md:flex-row">
          <div className="items-center box-border caret-transparent flex mx-2.5">
            <div className="text-white bg-violet-600 box-border caret-transparent shrink-0 h-2.5 w-2.5 mr-2 rounded-[100px]"></div>
            <div className="text-sm box-border caret-transparent shrink-0 leading-[22px]">
              Running
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex mx-2.5">
            <div className="bg-pink-600 box-border caret-transparent shrink-0 h-2.5 w-2.5 mr-2 rounded-[100px]"></div>
            <div className="text-sm box-border caret-transparent shrink-0 leading-[22px]">
              Delivered
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
