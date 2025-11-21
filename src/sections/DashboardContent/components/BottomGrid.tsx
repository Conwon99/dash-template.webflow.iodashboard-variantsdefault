import { ChartCard } from "@/sections/DashboardContent/components/ChartCard";
import { ProjectsList } from "@/sections/DashboardContent/components/ProjectsList";

export const BottomGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-4 md:grid-cols-[1fr_2fr]">
      <ChartCard />
      <ProjectsList />
    </div>
  );
};
