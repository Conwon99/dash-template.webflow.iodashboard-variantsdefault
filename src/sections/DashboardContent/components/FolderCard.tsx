export const FolderCard = () => {
  return (
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
  );
};
