import { TableHeader } from "@/sections/DashboardContent/components/TableHeader";
import { TableContent } from "@/sections/DashboardContent/components/TableContent";
import { TableFooter } from "@/sections/DashboardContent/components/TableFooter";

export const WorkPerformanceTable = () => {
  return (
    <div className="bg-white shadow-[rgba(118,135,154,0.24)_0px_1px_1px_0px,rgba(118,135,154,0.08)_0px_3px_8px_0px] box-border caret-transparent flex flex-col rounded-xl">
      <TableHeader />
      <div className="box-border caret-transparent overflow-auto md:overflow-visible">
        <TableContent />
      </div>
      <TableFooter />
    </div>
  );
};
