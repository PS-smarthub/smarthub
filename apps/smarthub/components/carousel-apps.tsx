import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@smarthub/ui";
import Image from "next/image";
import ColdStartLogo from "@/public/cold-start-logo-white.svg"

export default function CarouselApps() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full sm:max-w-3xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                  <Image src={ColdStartLogo} alt="App image" className="w-[150px]"/>
                  <p className="">Cold Start</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
