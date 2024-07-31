import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo({ images }) {
  return (
    <Carousel className="w-full max-w-96 ">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              className="h-full w-full"
              src={image.src}
              height={400}
              width={400}
              alt={image.src}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
