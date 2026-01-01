import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  captionPosition?: 'top' | 'bottom';
}

interface GalleryCarouselViewProps {
  items: GalleryItem[];
}

const GalleryCarouselView = ({ items }: GalleryCarouselViewProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const currentItem = items[current];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative flex items-center justify-center p-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-[70vh] w-auto object-contain rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 md:left-4" />
        <CarouselNext className="right-2 md:right-4" />
      </Carousel>

      {/* Caption and counter */}
      <div className="mt-4 text-center space-y-2">
        {currentItem?.caption && (
          <div className="inline-block px-4 py-2 bg-pink-500/90 text-white text-sm font-medium rounded">
            {currentItem.caption}
          </div>
        )}
        <p className="text-muted-foreground text-sm">
          {current + 1} / {items.length}
        </p>
      </div>
    </div>
  );
};

export default GalleryCarouselView;
