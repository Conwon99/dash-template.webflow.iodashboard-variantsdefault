export const Footer = () => {
  return (
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
  );
};
