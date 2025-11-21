import { StatCard } from "@/sections/DashboardContent/components/StatCard";

export const StatsGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-6">
      <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-3 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-6">
        <StatCard
          iconUrl="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605882cb46d7bcb205f20f73_bar-chart.svg"
          iconClassName="box-border caret-transparent max-w-full z-[5]"
          iconBackgroundClassName="absolute bg-violet-600 box-border caret-transparent h-full opacity-15 w-full z-0 inset-[0%]"
          label="Value"
          value="2.100"
          changeText="+5%"
          changeVariant="text-teal-500 border border-teal-500/20"
          hasOuterPadding={true}
        />
        <div className="bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col p-6 rounded-md">
          <StatCard
            iconUrl="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058831d493c9a126c8c8cbc_users.svg"
            iconClassName="box-border caret-transparent max-w-full w-6 z-[5]"
            iconBackgroundClassName="absolute bg-teal-500 box-border caret-transparent h-full opacity-15 w-full z-0 inset-[0%]"
            label="Clients"
            value="719"
            changeText="-10%"
            changeVariant="text-pink-600 border border-pink-600/10"
            hasOuterPadding={false}
          />
        </div>
        <div className="bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col p-6 rounded-md">
          <StatCard
            iconUrl="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605883bbba1d7412377fefe7_truck.svg"
            iconClassName="box-border caret-transparent max-w-full w-6 z-[5]"
            iconBackgroundClassName="absolute bg-red-500 box-border caret-transparent h-full opacity-15 w-full z-0 inset-[0%]"
            label="Deliveries"
            value="10.5K"
            changeText="+19%"
            changeVariant="text-teal-500 border border-teal-500/20"
          />
        </div>
        <div className="bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col p-6 rounded-md">
          <StatCard
            iconUrl="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605884b47ee33f1eb5676cce_target.svg"
            iconClassName="box-border caret-transparent max-w-full w-6 z-[5]"
            iconBackgroundClassName="absolute bg-amber-400 box-border caret-transparent h-full opacity-15 w-full z-0 inset-[0%]"
            label="Target Ratio"
            value="95%"
            changeText="(+ 10%)"
            changeVariant="text-teal-500 border border-teal-500/20"
          />
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-6 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-3 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-6">
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
        <a
          href="/project-management"
          className="text-black bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col max-w-full p-6 rounded-md hover:shadow-[rgba(118,135,154,0.24)_0px_2px_1px_0px,rgba(118,135,154,0.1)_0px_10px_20px_0px]"
        >
          <div className="relative box-border caret-transparent flex flex-col h-full justify-between">
            <div className="items-start box-border caret-transparent flex justify-between mb-6">
              <div className="relative items-center box-border caret-transparent flex shrink-0 h-12 justify-center w-12 overflow-hidden mb-4 rounded-2xl">
                <img
                  src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605882d30a1fe8e9228d47ed_folder.svg"
                  alt=""
                  className="box-border caret-transparent max-w-full z-[5]"
                />
                <div className="absolute bg-violet-600 box-border caret-transparent h-full opacity-15 w-full z-0 inset-[0%]"></div>
              </div>
              <div className="box-border caret-transparent">
                <img
                  src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3da6bf39491be81291c6_Dash_-_Avatar_09-min.jpg"
                  alt=""
                  className="box-border caret-transparent inline-block h-10 max-w-full w-10 rounded-[100px] border-[3px] border-solid border-white"
                />
                <img
                  src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaebf62f4f1b3ef035_Dash_-_Avatar_07-min.jpg"
                  alt=""
                  className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                />
              </div>
            </div>
            <div className="box-border caret-transparent">
              <h4 className="text-lg font-semibold box-border caret-transparent mb-2.5">
                Research
              </h4>
              <div className="box-border caret-transparent flex justify-between">
                <div className="text-slate-500 text-sm box-border caret-transparent leading-5">
                  10 files
                </div>
                <div className="text-slate-500 text-sm box-border caret-transparent leading-5">
                  5 GB
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] p-6 rounded-md md:col-end-[span_2] md:col-start-[span_2]">
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
        </div>
      </div>
      <div className="bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col rounded-xl">
        <div className="items-start box-border caret-transparent flex justify-between pt-6 pb-4 px-9">
          <h4 className="text-lg font-semibold box-border caret-transparent">
            Work Performance
          </h4>
        </div>
        <div className="box-border caret-transparent overflow-auto md:overflow-visible">
          <div className="box-border caret-transparent flex flex-col px-4">
            <div className="bg-slate-50 box-border caret-transparent gap-x-0 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-0 px-6 py-4 rounded-lg md:grid-cols-[1fr_1fr_1fr_1fr]">
              <div className="text-slate-500 text-xs font-medium box-border caret-transparent tracking-[1px] leading-5 uppercase">
                Task
              </div>
              <div className="text-slate-500 text-xs font-medium box-border caret-transparent tracking-[1px] leading-5 uppercase">
                Status
              </div>
              <div className="text-slate-500 text-xs font-medium box-border caret-transparent tracking-[1px] leading-5 uppercase">
                Team
              </div>
              <div className="text-slate-500 text-xs font-medium box-border caret-transparent tracking-[1px] leading-5 uppercase">
                Estimated date
              </div>
            </div>
            <a
              href="/project-management"
              className="text-black box-border caret-transparent block max-w-full hover:shadow-[rgba(118,135,154,0.08)_0px_3px_8px_0px,rgba(118,135,154,0.24)_0px_1px_1px_0px]"
            >
              <div className="text-sm items-center border-b-slate-200 box-border caret-transparent gap-x-1 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-1 px-6 py-4 border-b md:gap-x-0 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-0 md:border-b-black md:border-b-0">
                <div className="font-medium box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1]">
                  Onboarding Process
                </div>
                <div className="items-center box-border caret-transparent flex">
                  <div className="bg-teal-500 box-border caret-transparent shrink-0 h-2.5 w-2.5 mr-2 rounded-[100px]"></div>
                  <div className="box-border caret-transparent">Done</div>
                </div>
                <div className="box-border caret-transparent my-2 md:-my-2">
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaf4c9ca97e6dee1e3_Dash_-_Avatar_06-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaebf62f4f1b3ef035_Dash_-_Avatar_07-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3da5bf3949e3151291c5_Dash_-_Avatar_08-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                </div>
                <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                  February 10, 2020
                </div>
              </div>
            </a>
            <a
              href="/project-management"
              className="text-black box-border caret-transparent block max-w-full hover:shadow-[rgba(118,135,154,0.08)_0px_3px_8px_0px,rgba(118,135,154,0.24)_0px_1px_1px_0px]"
            >
              <div className="text-sm items-center border-b-slate-200 box-border caret-transparent gap-x-1 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-1 px-6 py-4 border-b md:gap-x-0 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-0 md:border-b-black md:border-b-0">
                <div className="font-medium box-border caret-transparent">
                  SEO Integrations
                </div>
                <div className="items-center box-border caret-transparent flex">
                  <div className="bg-teal-500 box-border caret-transparent shrink-0 h-2.5 w-2.5 mr-2 rounded-[100px]"></div>
                  <div className="box-border caret-transparent">Done</div>
                </div>
                <div className="box-border caret-transparent my-2 md:-my-2">
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3da6bf39491be81291c6_Dash_-_Avatar_09-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfa3d1f8120bfc88c26_Dash_-_Avatar_02-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfa1a46298c089755f6_Dash_-_Avatar_05-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                </div>
                <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                  February 10, 2020
                </div>
              </div>
            </a>
            <a
              href="/project-management"
              className="text-black box-border caret-transparent block max-w-full hover:shadow-[rgba(118,135,154,0.08)_0px_3px_8px_0px,rgba(118,135,154,0.24)_0px_1px_1px_0px]"
            >
              <div className="text-sm items-center border-b-slate-200 box-border caret-transparent gap-x-1 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-1 px-6 py-4 border-b md:gap-x-0 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-0 md:border-b-black md:border-b-0">
                <div className="font-medium box-border caret-transparent">
                  Hosting Configuration
                </div>
                <div className="items-center box-border caret-transparent flex">
                  <div className="bg-red-500 box-border caret-transparent shrink-0 h-2.5 w-2.5 mr-2 rounded-[100px]"></div>
                  <div className="box-border caret-transparent">
                    In progress
                  </div>
                </div>
                <div className="box-border caret-transparent my-2 md:-my-2">
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaf4e4096750a7795e_Dash_-_Avatar_04-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaf4c9ca97e6dee1e3_Dash_-_Avatar_06-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaf4e4099af5a7795f_Dash_-_Avatar_03-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                </div>
                <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                  February 10, 2020
                </div>
              </div>
            </a>
            <a
              href="/project-management"
              className="text-black box-border caret-transparent block max-w-full hover:shadow-[rgba(118,135,154,0.08)_0px_3px_8px_0px,rgba(118,135,154,0.24)_0px_1px_1px_0px]"
            >
              <div className="text-sm items-center border-b-slate-200 box-border caret-transparent gap-x-1 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-1 px-6 py-4 border-b md:gap-x-0 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-0 md:border-b-black md:border-b-0">
                <div className="font-medium box-border caret-transparent">
                  CMS Handover
                </div>
                <div className="items-center box-border caret-transparent flex">
                  <div className="bg-red-500 box-border caret-transparent shrink-0 h-2.5 w-2.5 mr-2 rounded-[100px]"></div>
                  <div className="box-border caret-transparent">
                    In progress
                  </div>
                </div>
                <div className="box-border caret-transparent my-2 md:-my-2">
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaf4c9ca97e6dee1e3_Dash_-_Avatar_06-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaebf62f4f1b3ef035_Dash_-_Avatar_07-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3da5bf3949e3151291c5_Dash_-_Avatar_08-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                </div>
                <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                  February 10, 2020
                </div>
              </div>
            </a>
            <a
              href="/project-management"
              className="text-black box-border caret-transparent block max-w-full hover:shadow-[rgba(118,135,154,0.08)_0px_3px_8px_0px,rgba(118,135,154,0.24)_0px_1px_1px_0px]"
            >
              <div className="text-sm items-center border-b-slate-200 box-border caret-transparent gap-x-1 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-1 px-6 py-4 border-b md:gap-x-0 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-0 md:border-b-black md:border-b-0">
                <div className="font-medium box-border caret-transparent">
                  Content Review
                </div>
                <div className="items-center box-border caret-transparent flex">
                  <div className="bg-red-500 box-border caret-transparent shrink-0 h-2.5 w-2.5 mr-2 rounded-[100px]"></div>
                  <div className="box-border caret-transparent">
                    In progress
                  </div>
                </div>
                <div className="box-border caret-transparent my-2 md:-my-2">
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3da6bf39491be81291c6_Dash_-_Avatar_09-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfa3d1f8120bfc88c26_Dash_-_Avatar_02-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfa1a46298c089755f6_Dash_-_Avatar_05-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                </div>
                <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                  February 10, 2020
                </div>
              </div>
            </a>
            <a
              href="/project-management"
              className="text-black box-border caret-transparent block max-w-full hover:shadow-[rgba(118,135,154,0.08)_0px_3px_8px_0px,rgba(118,135,154,0.24)_0px_1px_1px_0px]"
            >
              <div className="text-sm items-center border-b-slate-200 box-border caret-transparent gap-x-1 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-1 px-6 py-4 border-b md:gap-x-0 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-0 md:border-b-black md:border-b-0">
                <div className="font-medium box-border caret-transparent">
                  Integrate Analytics
                </div>
                <div className="items-center box-border caret-transparent flex">
                  <div className="text-white bg-violet-600 box-border caret-transparent shrink-0 h-2.5 w-2.5 mr-2 rounded-[100px]"></div>
                  <div className="box-border caret-transparent">Next up</div>
                </div>
                <div className="box-border caret-transparent my-2 md:-my-2">
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaf4c9ca97e6dee1e3_Dash_-_Avatar_06-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3cfaebf62f4f1b3ef035_Dash_-_Avatar_07-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                  <img
                    src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605b3da5bf3949e3151291c5_Dash_-_Avatar_08-min.jpg"
                    alt=""
                    className="box-border caret-transparent inline-block h-10 max-w-full w-10 -ml-3.5 rounded-[100px] border-[3px] border-solid border-white"
                  />
                </div>
                <div className="box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto">
                  February 10, 2020
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="text-slate-500 text-sm box-border caret-transparent px-9 py-4">
          <div className="box-border caret-transparent">
            Showing all items from Work Performance dataset
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-4 md:grid-cols-[1fr_2fr]">
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
      </div>
    </div>
  );
};
