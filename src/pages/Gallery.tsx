import { useState } from 'react';
import Layout from '@/components/Layout';
import GalleryImage from '@/components/GalleryImage';
import GalleryCarouselView from '@/components/GalleryCarouselView';
import { LayoutGrid, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import all gallery images
//import gallery01 from '@/assets/gallery/01-7c735bab1628004af8e5fb096ce177cb.png';
//import gallery02 from '@/assets/gallery/02-8a76ae86fe0a1a8465229df73857a218.png';
//import gallery03 from '@/assets/gallery/03-9ff2b09591fc1ea6127c3f9f239ab327.png';
//import gallery04 from '@/assets/gallery/04-e823d1939ac5d9e8b721b11101800c02.png';
//import gallery05 from '@/assets/gallery/05-e609deb71d156d8a055cd489d337840e.png';
//import gallery06 from '@/assets/gallery/06-979af4fd71a006715d5e38e0a2cc97de.png';
//import gallery07 from '@/assets/gallery/07-7bef1b3c2d761f6a2c3b23fbd1960795.png';
//import gallery08 from '@/assets/gallery/08-45d4a1116b45d821165cf4b87d61ce65.jpg';
//import gallery09 from '@/assets/gallery/09-e7e52e82996aac21834ca74d95169620.png';
import gallery01 from '@/assets/gallery/01.png';
import gallery02 from '@/assets/gallery/02.png';
import gallery03 from '@/assets/gallery/03.png';
import gallery04 from '@/assets/gallery/04.png';
import gallery05 from '@/assets/gallery/05.png';
import gallery06 from '@/assets/gallery/06.png';
import gallery07 from '@/assets/gallery/07.png';
import gallery08 from '@/assets/gallery/08.png';
import gallery09 from '@/assets/gallery/09.png';

import gallery10 from '@/assets/gallery/10-3b6e11b1258cea347fad84b7df9830e5.png';
import gallery11 from '@/assets/gallery/11-f80050e4c3e0809bd78d43fbaf6622ba.png';
import gallery12 from '@/assets/gallery/12-d7d97c798ada0574f163bb24cd0e7635.png';
import gallery13 from '@/assets/gallery/13-33d734fb4452eb48c0007a1e39fbe182.png';
import gallery14 from '@/assets/gallery/14-378d9c1b357de968980a18d953083047.png';
import gallery15 from '@/assets/gallery/15-804efc4004edba8bcd2c2b2752596917.png';
import gallery16 from '@/assets/gallery/16-301c80fb5ed0ec83b9c26ed6b230471c.jpg';
import gallery17 from '@/assets/gallery/17-8971cc0fc4caad69c79cadb41f986bc3.png';
import gallery18 from '@/assets/gallery/18-4f2eb38c49403c62bec68ded02925aef.png';
import gallery19 from '@/assets/gallery/19-dedf4d4ded98741485887ad8c6d7279c.png';
import gallery20 from '@/assets/gallery/20-5cadf4eaafeab697923532f01cf531b4.png';
import gallery21 from '@/assets/gallery/21-72220c4c578507fd1948e078330ac0df.png';
import gallery22 from '@/assets/gallery/22-1fda10230bda07dd7a5d0a7df4a1ca1c.png';
import gallery23 from '@/assets/gallery/23-087070b9133655dfd82f851983bda86d.png';
import gallery24 from '@/assets/gallery/24-c1b1b62c71bd64b047dd22a193ec51a8.png';

interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  captionPosition?: 'top' | 'bottom';
  flex?: number;        // Default 1, higher = takes more space in row (e.g., 2 = twice as wide)
  aspectRatio?: string; // Override aspect ratio, e.g., 'square', '4/3', '16/9', 'auto'
}

const galleryItems: GalleryItem[] = [
  { src: gallery01, alt: 'Gallery image 1' },
  { src: gallery02, alt: 'Gallery image 2', caption: 'Constructing shapes, volumes & rhythms', captionPosition: 'top' },
  { src: gallery03, alt: 'Gallery image 3', aspectRatio: 'auto', flex: 1 },
  { src: gallery04, alt: 'Gallery image 4', aspectRatio: 'square', flex: 1 },
  { src: gallery05, alt: 'Gallery image 5', aspectRatio: 'square', flex: 1 },
  { src: gallery06, alt: 'Gallery image 6', aspectRatio: 'square', flex: 1 },
  { src: gallery07, alt: 'Gallery image 7', caption: 'Gesture, silhouette', captionPosition: 'bottom', aspectRatio: '9/16', flex: 0.6 },
  { src: gallery08, alt: 'Gallery image 8', aspectRatio: '16/9' },
  { src: gallery09, alt: 'Gallery image 9', aspectRatio: '16/9' },
  { src: gallery10, alt: 'Gallery image 10', aspectRatio: 'auto', flex: 3 },
  { src: gallery11, alt: 'Gallery image 11', aspectRatio: '4/3', flex: 1.5 },
  { src: gallery12, alt: 'Gallery image 12', aspectRatio: '4/3', flex: 3 },
  { src: gallery13, alt: 'Gallery image 13', caption: 'Composition', captionPosition: 'bottom', aspectRatio: 'auto', flex: 3 },
  { src: gallery14, alt: 'Gallery image 14', aspectRatio: '16/9', flex: 2 },
  { src: gallery15, alt: 'Gallery image 15', aspectRatio: 'square', flex: 0.8 },
  { src: gallery16, alt: 'Gallery image 16', aspectRatio: '9/16', flex: 0.8 },
  { src: gallery17, alt: 'Gallery image 17', aspectRatio: '16/9', flex: 1.1 },
  { src: gallery18, alt: 'Gallery image 18', aspectRatio: '16/9', flex: 1.5, caption: 'Design (character/environment)', captionPosition: 'top'   },
  { src: gallery19, alt: 'Gallery image 19', aspectRatio: '16/9', flex: 1.1 },
  { src: gallery20, alt: 'Gallery image 20' },
  { src: gallery21, alt: 'Gallery image 21' },
  { src: gallery22, alt: 'Gallery image 22' },
  { src: gallery23, alt: 'Gallery image 23' },
  { src: gallery24, alt: 'Gallery image 24' },
];

// Define row layouts for chaotic display
const rowLayouts = [
  [0, 1],              // Row 1: 2 images
  [2, 3, 4, 5],        // Row 2: 4 images
  [6, 7, 8],           // Row 3: 3 images
  [9, 10, 11, 12],     // Row 4: 4 images
  [13, 15],        // Row 5: 2 images
  [14, 16],            // Row 7: 2 images
  [17, 18, 19],        // Row 8: 4 images
  [20, 21, 22],            // Row 9: 2 images
  [23],                // Row 10: 1 image (centered)
];

const getAspectRatioClass = (aspectRatio?: string) => {
  switch (aspectRatio) {
    case 'square': return 'aspect-square';
    case '4/3': return 'aspect-[4/3]';
    case '3/4': return 'aspect-[3/4]';
    case '16/9': return 'aspect-video';
    case '9/16': return 'aspect-[9/16]';
    case 'auto': return '';
    default: return 'aspect-square';
  }
};

const Gallery = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <section className="section-container py-4 md:py-6">
        {/* View Mode Toggle */}
        <div className="flex justify-end mb-4">
          <div className="flex gap-1 p-1 bg-muted rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="h-8 w-8 p-0"
              aria-label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'carousel' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('carousel')}
              className="h-8 w-8 p-0"
              aria-label="Carousel view"
            >
              <Image className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {viewMode === 'carousel' ? (
          <GalleryCarouselView items={galleryItems} />
        ) : (
          <div className="flex flex-col gap-4">
            {rowLayouts.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex flex-wrap gap-4 ${row.length === 1 ? 'justify-center max-w-xl mx-auto' : ''}`}
                style={{ animationDelay: `${rowIndex * 0.1}s` }}
            >
              {row.map((imageIndex) => {
                const item = galleryItems[imageIndex];
                const flexValue = item.flex || 1;
                const aspectClass = getAspectRatioClass(item.aspectRatio);
                
                return (
                  <div
                    key={imageIndex}
                    className={`${aspectClass} animate-fade-in min-w-0 cursor-pointer`}
                    style={{ 
                      animationDelay: `${imageIndex * 0.05}s`,
                      flex: `${flexValue} 1 0%`,
                    }}
                    onClick={() => handleImageClick(item)}
                  >
                    <GalleryImage
                      src={item.src}
                      alt={item.alt}
                      caption={item.caption}
                      captionPosition={item.captionPosition}
                      aspectRatio={item.aspectRatio}
                    />
                  </div>
                );
                })}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-in"
          onClick={closeLightbox}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
