import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import ColdStartLogo from "../../assets/Bosch_symbol_logo_black.svg";

export function CarouselApps() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-4xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex w-full items-center justify-center p-6  ">
                  <Image alt="App Image" src={ColdStartLogo} className="w-[200px] h-[200px]"/>
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
