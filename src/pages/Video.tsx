import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';

const Video = () => {
  const { t } = useLanguage();

  const mp4Url = "https://firebasestorage.googleapis.com/v0/b/portfolio-71ae9.firebasestorage.app/o/gm%2Flesson-plan-final.mp4?alt=media&token=95f08562-adb3-4b0b-b678-ffcd25c6987b";
  const movUrl = "https://firebasestorage.googleapis.com/v0/b/portfolio-71ae9.firebasestorage.app/o/gm%2Flesson-plan-final.mov?alt=media&token=e7b98027-df05-4dd5-8153-a1ac4db62486";

  return (
    <Layout>
      <section className="section-container py-12 md:py-20">
        <h1 className="page-title text-center mb-12 md:mb-16 animate-fade-in">
          {t('video.title')}
        </h1>

        <div 
          className="max-w-4xl mx-auto bg-secondary rounded-lg overflow-hidden animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <video 
            className="w-full aspect-video"
            controls
            preload="metadata"
          >
            <source src={mp4Url} type="video/mp4" />
            <source src={movUrl} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </Layout>
  );
};

export default Video;
