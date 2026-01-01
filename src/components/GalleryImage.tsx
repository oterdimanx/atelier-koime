import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  caption?: string;
  captionPosition?: 'top' | 'bottom';
  aspectRatio?: string;
}

const GalleryImage = ({ src, alt, caption, captionPosition, aspectRatio }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Use object-contain for 'auto' aspect ratio to show full image, object-cover otherwise
  const objectFit = aspectRatio === 'auto' ? 'object-contain' : 'object-cover';

  return (
    <div className="relative overflow-hidden rounded-lg group h-full">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full ${objectFit} transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } group-hover:scale-105`}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary animate-pulse" />
      )}
      
      {caption && (
        <div
          className={`absolute left-0 right-0 bg-primary text-primary-foreground py-3 px-4 text-center font-medium ${
            captionPosition === 'top' ? 'top-0' : 'bottom-0'
          }`}
        >
          {caption}
        </div>
      )}
    </div>
  );
};

export default GalleryImage;
