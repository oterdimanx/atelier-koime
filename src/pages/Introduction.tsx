import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import introArtwork from '@/assets/intro-artwork.png';
import intro2 from '@/assets/intro2.png';
import conceptArt1 from '@/assets/concept-art-1.png';
import colorkeys from '@/assets/colorkeys.png';
import digital1 from '@/assets/digital-1.png';
import digital2 from '@/assets/digital-2.jpg';
import digital3 from '@/assets/digital-3.png';

const Introduction = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-container py-6 md:py-10">
        {/* Row 1: Image Left with Title Overlay, Text Right */}
        <div className="content-row mb-8 md:mb-6">
          <div className="animate-fade-in relative w-[90%]">
            <h1 className="absolute top-1 left-1 md:top-3 md:left-3 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary drop-shadow-lg z-10">
              {t('intro.title')}
            </h1>
            <img
              src={introArtwork}
              alt="Art study illustration"
              className="content-image"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-6  w-[90%] mx-auto">
              {t('intro.greeting')}
            </h2>
            <p className="content-text text-lg leading-relaxed mb-4 w-[90%] mx-auto">
              {t('intro.text1a')}
            </p>
            <p className="content-text text-lg leading-relaxed w-[90%] mx-auto">
              {t('intro.text1b')}
            </p>
            <div className="flex flex-col items-center gap-3 mt-6">
              <Link to="/introduction" className="w-48 text-center px-6 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-700 transition-colors">
                {t('intro.exploreLessons')}
              </Link>
              <Link to="/video" className="w-48 text-center px-6 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-700 transition-colors">
                {t('intro.introVideo')}
              </Link>
              <Link to="/resources" className="w-48 text-center px-6 py-2 bg-neutral-600 text-white rounded-md hover:bg-neutral-700 transition-colors">
                {t('intro.resources')}
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Images Left, Text Right (2-column square grid) */}
        <div className="content-row items-start mb-16 md:mb-24">
          <div className="animate-fade-in">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-black">
              {t('intro.fundamentals')}
            </h3>
            <img
              src={intro2}
              alt="Drawing fundamentals - shapes, anatomy, and structure studies"
              className="w-full aspect-square object-contain rounded-lg shadow-sm"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8">
              Perspective, <span className="text-primary">layout</span>, composition, story...
            </h2>
            <p className="content-text text-lg leading-relaxed">
              {t('intro.row2Text1')}
            </p>
            <p className="content-text text-lg leading-relaxed mt-6">
              {t('intro.row2Text2')}
            </p>
          </div>
        </div>

        {/* Row 3: Images Left, Text Right */}
        <div className="content-row mb-16 md:mb-24">
          <div className="animate-fade-in grid gap-3 h-64 md:h-full" style={{ animationDelay: '0.1s' }}>
            <div className="overflow-hidden rounded-lg shadow-sm">
              <img
                src={conceptArt1}
                alt="Concept art illustration"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-2">
              {t('intro.row3Title')}
            </h2>
            <p className="text-primary text-lg md:text-xl font-medium mb-4 whitespace-pre-line">
              {t('intro.row3Pink')}
            </p>
            <p className="content-text text-lg leading-relaxed whitespace-pre-line">
              {t('intro.row3Text')}
            </p>
          </div>
        </div>

        {/* Row 4: Text Left, Images Right (3 vertical images with step effect) */}
        <div className="content-row-reverse mb-16 md:mb-24">
          <div className="animate-fade-in">
            <blockquote className="text-lg md:text-xl leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-6">
              {t('intro.row4Quote')}
            </blockquote>
          </div>
          <div className="animate-fade-in flex gap-0 justify-center items-start h-full" style={{ animationDelay: '0.1s' }}>
            <div className="w-full h-full overflow-hidden rounded-lg shadow-sm">
              <img
                src={digital1}
                alt="Digital illustration - autumn scene"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div 
          className="flex flex-wrap justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <Link to="/introduction" className="btn-primary">
            {t('intro.exploreLessons')}
          </Link>
          <Link to="/video" className="btn-outline">
            {t('intro.introVideo')}
          </Link>
          <Link to="/resources" className="btn-outline">
            {t('intro.resources')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Introduction;
