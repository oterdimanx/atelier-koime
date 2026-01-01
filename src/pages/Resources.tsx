import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Mail, Calendar } from 'lucide-react';
import workingGirl from '@/assets/working-girl.png';

const Resources = () => {
  const { t } = useLanguage();

  // Generate dynamic Koalendar URL with current date
  const getKoalendarUrl = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `https://koalendar.com/e/book-a-class-koai0NCK?month=${year}-${month}&duration=60&date=${year}-${month}-${day}`;
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Column - Image with blue background */}
        <div 
          className="lg:w-[30%] flex flex-col"
          style={{ backgroundColor: '#88a2e0' }}
        >
          <div className="p-8 lg:p-12 pb-4">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium"
              style={{ color: '#f4db8e' }}
            >
              {t('resources.title')}
            </h1>
          </div>
          <div>
            <img 
              src={workingGirl} 
              alt="Artist working" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="lg:w-[60%] bg-background p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            {/* Pricing & Options H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-8">
              <span className="text-foreground">{t('resources.pricingAndOptions')}</span>
              <br />
              <span className="text-primary">{t('resources.options')}</span>
            </h1>

            {/* Pricing paragraph */}
            <p 
              className="text-foreground leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: t('resources.pricingText') }}
            />

            {/* Flexible learning H2 */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium mb-6">
              <span className="text-foreground">{t('resources.flexibleLearning')}</span>
              <br />
              <span className="text-primary">{t('resources.differentNeeds')}</span>
            </h2>

            {/* Description paragraphs */}
            <p className="text-foreground leading-relaxed mb-6">
              {t('resources.description1')}
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              {t('resources.description2')}
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              {t('resources.lookingForward')}
            </p>

            {/* Signature */}
            <p className="text-foreground font-display text-xl mb-8">{t('resources.signature')}</p>

            {/* Buttons - centered */}
            <div className="flex flex-col items-center gap-4">
              <Button 
                asChild
                className="btn-primary w-full max-w-xs"
              >
                <a href="mailto:inpersonartschool@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  {t('resources.emailMe')}
                </a>
              </Button>

              <Button 
                asChild
                variant="outline"
                className="btn-outline w-full max-w-xs"
              >
                <a href={getKoalendarUrl()} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('resources.bookCalendar')}
                </a>
              </Button>

              <Button 
                asChild
                variant="outline"
                className="btn-outline w-full max-w-xs"
              >
                <a href="https://preply.in/GI7EN3039135610?ts=17662781" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('resources.bookPreply')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
