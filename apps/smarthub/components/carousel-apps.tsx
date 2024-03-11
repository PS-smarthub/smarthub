"use client";

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
import ColdStartLogoBlue from "@/public/cold-start-logo-blue.svg";

export default function CarouselApps() {
  const appList = [
    {
      name: "Cold Start",
      logo: ColdStartLogoBlue,
      url: "http://localhost:3000",
    },
  ];
  return (
    <>
      {appList.length == 1 ? (
          <div className="p-4">
            <Card className="">
              <CardContent className="flex flex-col gap-2 aspect-square items-center justify-between p-10">
                <Image
                  src={appList[0]?.logo}
                  alt="App image"
                  className="w-[150px]"
                />
                <p className="">{appList[0]?.name}</p>
                <a href={appList[0]?.url} className="underline text-blue-400">
                  Saiba mais
                </a>
              </CardContent>
            </Card>
          </div>
      ) : (
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full sm:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {appList.map((app, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <CardContent className="flex flex-col aspect-square items-center justify-between p-6">
                      <Image
                        src={app.logo}
                        alt="App image"
                        className="w-[150px]"
                      />
                      <p className="">{app.name}</p>
                      <a href={app.url} className="underline text-blue-400">
                        Saiba mais
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </>
  );
}
