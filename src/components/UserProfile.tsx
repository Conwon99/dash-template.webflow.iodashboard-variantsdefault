export const UserProfile = () => {
  return (
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
  );
};
