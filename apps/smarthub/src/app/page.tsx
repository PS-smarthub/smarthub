import CarouselApps from "@/components/carousel-apps";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Header />

        <div className="w-full flex flex-col items-center py-14">
          <div className="text-center max-w-2xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
              Bem vindo ao Smarthub!
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 text-[#71767C] ">
              Unifique sua experiência digital, simplificando o acesso a todos
              os seus aplicativos em um só lugar.
            </p>
          </div>
        </div>

        <div className="w-full justify-center flex mt-10">
          <CarouselApps />
        </div>

      </main>
      <Footer />
    </>
  );
}
