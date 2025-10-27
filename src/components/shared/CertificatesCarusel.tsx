import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { H1 } from "../ui/typography";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { StarSeparator } from "./StarSeparator";

interface Certificate {
  id: string;
  image: string;
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
    <section id="certificates" className="scroll-mt-24 bg-white py-16">
      <div className="container mx-auto flex max-w-7xl flex-col gap-2 px-4">
        <div className="flex flex-col items-center gap-2">
          <H1 className="text-secondary">CERTIFICATES</H1>
          <StarSeparator variant="secondary" />
        </div>
        <div className="mb-8 flex items-end justify-end md:mb-10">
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
              aria-label="Previous certificate"
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
              aria-label="Next certificate"
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        type="button"
                        className="p-1 group relative aspect-[4/3] h-full w-full overflow-hidden rounded-xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label={`Open certificate ${item.id}`}
                      >
                        <img
                          src={item.image}
                          alt={item.id}
                          className="p-2 absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="w-[90vw] max-w-5xl border-none bg-white p-2 sm:p-6">
                      <img
                        src={item.image}
                        alt={item.id}
                        className="mx-auto max-h-[80vh] w-full object-contain"
                      />
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="mt-8 flex justify-center gap-4">
            {certificates.map((_, index) => (
              <button
                key={index}
                className={`size-3 rounded-full transition-colors ${currentSlide === index ? "bg-secondary" : "bg-secondary/20"
                  }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesCarusel;
