import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const sliderItems = [
    {
      bgImage:
        "https://images.pexels.com/photos/8640331/pexels-photo-8640331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title1: "FIBER POWER",
      title2: "UNLEASHED",
      subtitle1: "Leading Internet Service Provider In Bangladesh",
      subtitle2: "BTRC Approved & BDIX Connectivity",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title1: "NEXT GEN",
      title2: "SPEED",
      subtitle1: "Experience blazing fast internet for work and play.",
      subtitle2: "Reliable and Affordable Packages For Everyone.",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title1: "ALWAYS",
      title2: "CONNECTED",
      subtitle1: "Stay connected with our robust fiber network.",
      subtitle2: "24/7 Customer Support Ready To Assist You.",
    },
  ];

  return (
    <section
      id="hero-section"
      className="relative h-full w-full scroll-mt-16 sm:scroll-mt-20"
    >
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            jump: true,
          }),
        ]}
        setApi={setApi}
        className="w-full h-full"
        opts={{ loop: true, align: "start", duration: 16 }}
      >
        <CarouselContent className="h-[calc(100vh-4rem)]">
          {sliderItems.map((item, index) => (
            <CarouselItem key={index} className="h-full relative">
              <div className="h-full">
                <Card className="h-full border-none rounded-none shadow-none bg-transparent py-0">
                  <CardContent className="flex items-center justify-center p-0 h-full relative">
                    <img
                      src={item.bgImage}
                      alt={`Slide ${index + 1}: ${item.title1} ${item.title2}`}
                      className="absolute inset-0 w-full h-full object-cover -z-10 brightness-[.65]" // Slightly adjusted brightness
                    />
                    <div
                      className="relative z-10 text-center text-white p-4 sm:p-8 max-w-4xl mx-auto"
                      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
                    >
                      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight uppercase">
                        {item.title1}
                      </h2>
                      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-lime-400 uppercase mb-3 sm:mb-4">
                        {item.title2}
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-rose-400 font-semibold mb-1 sm:mb-2">
                        {item.subtitle1}
                      </p>
                      <p className="text-xl sm:text-2xl md:text-3xl text-red-500 font-bold">
                        {item.subtitle2}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 border-none h-8 w-8 sm:h-10 sm:w-10" />
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 hover:bg-black/60 border-none h-8 w-8 sm:h-10 sm:w-10" />
      </Carousel>
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-1.5 sm:space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <Button
            key={index}
            variant="outline"
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full p-0 transition-all duration-300 ease-in-out
              ${index === current - 1 ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}
              border-none focus-visible:ring-0 focus-visible:ring-offset-0`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
