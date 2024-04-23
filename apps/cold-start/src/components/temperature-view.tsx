export default function CardTemperature({
  temperature,
  card_title,
}: {
  temperature: number | undefined;
  card_title: string;
}) {
  return (
    <div className="border pb-4 border-gray-400 gap-7 rounded items-center flex flex-col">
      <h2 className="font-semibold p-2 sm:text-[14px]">{card_title}</h2>
      <p className="font-bold text-2xl ">{temperature} °C</p>
    </div>
  );
}
