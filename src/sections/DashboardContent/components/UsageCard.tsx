export const UsageCard = () => {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-between md:flex-row">
      <div className="relative box-border caret-transparent flex flex-col h-full justify-between">
        <div className="relative items-center box-border caret-transparent flex shrink-0 h-12 justify-center w-12 overflow-hidden mb-4 rounded-2xl">
          <img
            src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058831413ede764f64a258d_pie-chart.svg"
            alt=""
            className="box-border caret-transparent max-w-full w-6 z-[5]"
          />
          <div className="absolute bg-teal-500 box-border caret-transparent h-full opacity-15 w-full z-0 inset-[0%]"></div>
        </div>
        <h4 className="text-lg font-semibold box-border caret-transparent mb-2.5">
          Used percentage
        </h4>
        <div className="text-slate-500 text-sm box-border caret-transparent leading-5">
          Check your storage on your dashboard.
        </div>
      </div>
      <img
        src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/608ac26976322417838e72f4_Dash_Chart_03.svg"
        alt=""
        className="box-border caret-transparent shrink-0 h-[120px] max-w-full ml-0 mt-4 md:ml-5 md:mt-0"
      />
    </div>
  );
};
