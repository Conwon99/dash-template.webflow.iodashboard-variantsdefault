import { Breadcrumb } from "@/components/Breadcrumb";
import { DashboardContent } from "@/sections/DashboardContent";

export const MainContent = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col">
      <div
        role="banner"
        className="fixed items-stretch box-border caret-transparent flex flex-col h-[1000px] z-[500] left-[0%] inset-y-[0%] md:z-[1000] before:accent-auto before:caret-transparent before:text-slate-900 before:table before:text-base before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:caret-transparent after:clear-both after:text-slate-900 after:table after:text-base after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter"
      >
        <div className="fixed bg-white border-b-slate-900 border-l-slate-900 border-r-slate-200 border-t-slate-900 box-border caret-transparent flex flex-col h-[1000px] translate-x-[-250px] w-[250px] z-[500] overflow-auto border-r left-[0%] inset-y-[0%] md:transform-none">
          <div className="box-border caret-transparent pt-[30px] pb-6 px-6 md:pb-12">
            <a
              href="/"
              aria-label="home"
              className="relative text-zinc-800 box-border caret-transparent block float-left pl-2.5 md:pl-0"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/60586883ea59be120545c340_Dash_Logo.svg"
                alt=""
                className="box-border caret-transparent inline-block max-h-6 max-w-[200px]"
              />
            </a>
          </div>
          <div className="relative box-border caret-transparent text-left z-[900] mr-px">
            <div
              role="button"
              className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-0 leading-5 opacity-100 text-nowrap align-top my-1 px-6 py-2 border-l-transparent border-l-2 md:grayscale-[0.2108] md:opacity-[0.93676] md:my-1.5 md:py-2.5"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058703e748ec21a46ed3b4e_Account.svg"
                alt=""
                className="box-border caret-transparent max-w-full text-nowrap mr-5"
              />
              <div className="box-border caret-transparent text-nowrap">
                Dashboards
              </div>
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/60586d393a273570ab97cc78_chevron-down.svg"
                alt=""
                className="absolute box-border caret-transparent max-w-full text-nowrap mr-6 my-auto right-[0%] inset-y-[0%]"
              />
            </div>
          </div>
          <a
            href="/project-management"
            className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 max-w-full opacity-70 my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
          >
            <img
              src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058703e233c35f06d95eeab_Projects.svg"
              alt=""
              className="box-border caret-transparent max-w-full mr-5"
            />
            <div className="box-border caret-transparent">Project</div>
          </a>
          <a
            href="/user"
            className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 max-w-full opacity-70 my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
          >
            <img
              src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058703e3a273545cf97d31b_Profile.svg"
              alt=""
              className="box-border caret-transparent max-w-full mr-5"
            />
            <div className="box-border caret-transparent">Profile</div>
          </a>
          <a
            href="/team"
            className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 max-w-full opacity-70 my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
          >
            <img
              src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058703e101182eaf273ae92_Team.svg"
              alt=""
              className="box-border caret-transparent max-w-full mr-5"
            />
            <div className="box-border caret-transparent">Team</div>
          </a>
          <a
            href="/orders"
            className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 max-w-full opacity-70 my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
          >
            <img
              src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605882dc6380b2ff7a6e9171_shopping-cart.svg"
              alt=""
              className="box-border caret-transparent max-w-full mr-5"
            />
            <div className="box-border caret-transparent">Orders</div>
          </a>
          <a
            href="/account"
            className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 max-w-full opacity-70 my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
          >
            <img
              src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605882df8063b970ea883ad9_toggle-left.svg"
              alt=""
              className="box-border caret-transparent max-w-full mr-5"
            />
            <div className="box-border caret-transparent">Account</div>
          </a>
          <div className="relative box-border caret-transparent text-left z-[900] mr-px">
            <div
              role="button"
              className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 opacity-70 text-nowrap align-top my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058703e6745533389ec44a9_CRM.svg"
                alt=""
                className="box-border caret-transparent max-w-full text-nowrap mr-5"
              />
              <div className="box-border caret-transparent text-nowrap">
                CRM
              </div>
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/60586d393a273570ab97cc78_chevron-down.svg"
                alt=""
                className="absolute box-border caret-transparent max-w-full text-nowrap mr-6 my-auto right-[0%] inset-y-[0%]"
              />
            </div>
          </div>
          <div className="bg-slate-200 box-border caret-transparent h-px mx-6 my-5 md:my-6"></div>
          <div className="relative box-border caret-transparent text-left z-[900] mr-px">
            <div
              role="button"
              className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 opacity-70 text-nowrap align-top my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605882df7148e50e7c81f2a2_tool.svg"
                alt=""
                className="box-border caret-transparent max-w-full text-nowrap mr-5"
              />
              <div className="box-border caret-transparent text-nowrap">
                Utilities
              </div>
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/60586d393a273570ab97cc78_chevron-down.svg"
                alt=""
                className="absolute box-border caret-transparent max-w-full text-nowrap mr-6 my-auto right-[0%] inset-y-[0%]"
              />
            </div>
          </div>
          <div className="relative box-border caret-transparent text-left z-[900] mr-px">
            <div
              role="button"
              className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 opacity-70 text-nowrap align-top my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605882e02b9b3466f904de5b_unlock.svg"
                alt=""
                className="box-border caret-transparent max-w-full text-nowrap mr-5"
              />
              <div className="box-border caret-transparent text-nowrap">
                Authentication
              </div>
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/60586d393a273570ab97cc78_chevron-down.svg"
                alt=""
                className="absolute box-border caret-transparent max-w-full text-nowrap mr-6 my-auto right-[0%] inset-y-[0%]"
              />
            </div>
          </div>
          <div className="relative box-border caret-transparent text-left z-[900] mr-px">
            <div
              role="button"
              className="relative text-violet-600 text-sm font-medium items-center border-b-violet-600 border-r-violet-600 border-t-violet-600 box-border caret-transparent flex grayscale-[1] leading-5 opacity-70 text-nowrap align-top my-1 px-6 py-2 border-l-transparent border-l-2 md:my-1.5 md:py-2.5"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/605882d1ba1d74c3077fed5a_edit.svg"
                alt=""
                className="box-border caret-transparent max-w-full text-nowrap mr-5"
              />
              <div className="box-border caret-transparent text-nowrap">
                Template
              </div>
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/60586d393a273570ab97cc78_chevron-down.svg"
                alt=""
                className="absolute box-border caret-transparent max-w-full text-nowrap mr-6 my-auto right-[0%] inset-y-[0%]"
              />
            </div>
          </div>
        </div>
        <div className="fixed bg-white border-b-slate-900 border-l-slate-900 border-r-slate-900 border-t-slate-200 box-border caret-transparent block z-[600] px-6 py-4 border-t bottom-[0%] inset-x-[0%] md:hidden">
          <div className="box-border caret-transparent flex justify-between max-w-[400px] mx-auto">
            <a
              href="#"
              className="text-black box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/60586b1639502416b88ec95a_home_(2).svg"
                alt=""
                className="box-border caret-transparent inline-block max-w-full"
              />
            </a>
            <a
              href="#"
              className="text-black box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058703e233c35f06d95eeab_Projects.svg"
                alt=""
                className="box-border caret-transparent inline-block max-w-full"
              />
            </a>
            <a
              href="#"
              className="text-black box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            >
              <div className="box-border caret-transparent h-8 mt-[-3px] w-8">
                <img
                  src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/icon-1.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-full w-full"
                />
              </div>
            </a>
            <a
              href="#"
              className="text-black box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058703e3a273545cf97d31b_Profile.svg"
                alt=""
                className="box-border caret-transparent inline-block max-w-full"
              />
            </a>
            <a
              href="#"
              className="text-black box-border caret-transparent block max-w-full min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0"
            >
              <img
                src="https://c.animaapp.com/mi8vbwr5PkuurH/assets/6058703ecc16b10bf2981896_Settings.svg"
                alt=""
                className="box-border caret-transparent inline-block max-w-full"
              />
            </a>
          </div>
        </div>
        <div className="absolute box-border caret-transparent hidden w-full overflow-hidden top-full inset-x-0"></div>
      </div>
      <div className="bg-white border-b-slate-200 border-l-slate-900 border-r-slate-900 border-t-slate-900 box-border caret-transparent basis-[0%] grow overflow-hidden ml-0 p-5 border-b md:ml-[250px] md:p-[30px]">
        <Breadcrumb />
      </div>
      <div className="box-border caret-transparent basis-[0%] grow overflow-hidden ml-0 p-5 md:ml-[250px] md:p-[30px]">
        <DashboardContent />
        <div className="text-slate-300 text-sm box-border caret-transparent leading-[22px] text-center mt-6">
          © Dash by{" "}
          <a
            href="https://kickstartstudio.co/"
            className="font-medium box-border caret-transparent"
          >
            Kickstart Studio
          </a>
          ・
          <a
            href="/template/licensing"
            className="font-medium box-border caret-transparent"
          >
            Licensing
          </a>
          ・Powered by{" "}
          <a
            href="https://webflow.com/"
            className="font-medium box-border caret-transparent"
          >
            Webflow
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent h-[60px] md:h-0"></div>
    </div>
  );
};
