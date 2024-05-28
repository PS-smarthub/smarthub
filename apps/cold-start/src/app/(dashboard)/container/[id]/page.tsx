import { Props } from "@/types";
import { BackButton } from "@smarthub/ui";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { Chart } from "@/components/chart-container";
import CardTemperature from "@/components/temperature-view";
import { getContainer } from "@/server/actions";
import ControlPainel from "./_components/control-painel";
import { getUser } from "@/lib/getUser";
import { getToken } from "@/lib/session";

export default async function ContainerDetails({ params }: Props) {
  const container = await getContainer(params.id);
  const token = await getToken()
  console.log(token)
  // const token = getToken();
  // const queryClient = useQueryClient();
  // const [setPoint, setSetPoint] = useState<number | undefined>();
  // const [disabled, setDisabled] = useState(true);
  // const user = accounts[0];

  // const { data: validateSetpointTemperature } = useQuery({
  //   queryKey: ["get-validation"],
  //   queryFn: async () => {
  //     const response = await api.get(`/containers/validate/${params.id}`);

  //     return response.data;
  //   },
  // });
  // console.log(token);
  // const {
  //   data: container,
  //   error,
  //   isPending,
  // } = useQuery<ContainerResponse>({
  //   queryKey: ["get-container"],
  //   queryFn: async () => await getContainer(params.id),

  //   refetchInterval: 15000,
  // });'
  // const checkSetPoint = useQuery({
  //   queryKey: ["check-setpoint"],
  //   queryFn: () => {
  //     if(validateSetpointTemperature) {
  //       if(container?.temperatures[0]?.room_temperature == container?.set_point) {
  //         callMsGraph(token, user?.username)

  //       }
  //     }
  //     return null
  //   }
  // });

  // const { mutate, isPending: updatingSetpoint } = useMutation({
  //   mutationFn: updateSetpoint,
  //   onSuccess: async () => {
  //     successToast("Set point alterado com sucesso");
  //     setDisabled(true);

  //     validation({
  //       container_id: container?.id,
  //       token: token,
  //       in_validation: true,
  //     });
  //     setPoint == undefined && setSetPoint(undefined);

  //     queryClient.invalidateQueries({ queryKey: ["set-point"] });
  //   },
  // });

  // if (error) {
  //   return <p>Erro, nenhum container encontrado</p>;
  // }

  // if (isPending) {
  //   return <p>Pending...</p>;
  // }

  return (
    <section className="flex-1 max-h-full overflow-y-auto pb-32">
      <BackButton page_name={container.device} />
      <div className="flex w-full gap-20 sm:gap-10">
        {/* left*/}
        <div className="w-full">
          {/* container temperatures */}
          <div className="w-full grid grid-cols-3 gap-8 py-10 px-6">
            <CardTemperature
              temperature={container.temperatures[0]?.room_temperature}
              card_title="Temperatura Ambiente"
            />
            <CardTemperature
              temperature={container.temperatures[0]?.temperature_1}
              card_title="Posição 1"
            />
            <CardTemperature
              temperature={container.temperatures[0]?.temperature_2}
              card_title="Posição 2"
            />
          </div>

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
