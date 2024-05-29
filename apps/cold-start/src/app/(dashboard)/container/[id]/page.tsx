import { Props } from "@/types";
import { BackButton } from "@smarthub/ui";
import { Chart } from "@/components/chart-container";
import ControlPainel from "./_components/control-painel";
import CardTemperatureContainer from "@/components/card-temperature-container";
import { getContainer } from "@/server/actions";

export default async function ContainerDetails({ params }: Props) {
  const container = await getContainer(params.id);

  return (
    <section className="flex-1 max-h-full overflow-y-auto pb-32">
      <BackButton page_name={container.device} />
      <div className="flex w-full gap-20 sm:gap-10">
        {/* left*/}
        <div className="w-full">
          {/* container temperatures */}
          <CardTemperatureContainer id={params.id} />

          {/* Chart */}
          <div className="px-6 flex justify-center">
            <div className="border border-gray-400 w-full rounded">
              <Chart temperatures={container.temperatures} />
            </div>
          </div>
        </div>
        {/* right*/}
        <ControlPainel container={container} />
      </div>
    </section>
  );
}
