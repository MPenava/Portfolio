import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { GetImageResult } from "astro";
import { H2, Lead } from "../ui/typography";

interface Certificate {
  id: string;
  image: GetImageResult;
}

interface CertificatesCaruselProps {
  certificates: Certificate[];
}

const CertificatesCarusel = ({ certificates }: CertificatesCaruselProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section id="certificates" className="scroll-mt-24">
      <div className="mb-8 flex items-end justify-between md:mb-10">
        <div className="flex flex-col gap-4">
          <H2>Certificates</H2>
          <Lead>Which skills are backed by certificates?</Lead>
        </div>
        <div className="hidden shrink-0 gap-2 md:flex">
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollPrev();
            }}
            disabled={!canScrollPrev}
            className="disabled:pointer-events-auto"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              carouselApi?.scrollNext();
            }}
            disabled={!canScrollNext}
            className="disabled:pointer-events-auto"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent>
            {certificates.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative aspect-square h-full max-w-full overflow-hidden rounded-xl border-2 md:aspect-square lg:aspect-square">
                  <img
                    src={item.image.src}
                    alt={item.id}
                    className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesCarusel;
