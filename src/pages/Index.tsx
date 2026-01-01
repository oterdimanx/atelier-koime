import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import heroArtwork from "@/assets/hero-artwork.png";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Hero Image */}
          <div className="animate-fade-in">
            {/* Tweak md:w-[140%] to adjust image size: try 120%, 150%, 160% etc */}
            <img
              src={heroArtwork}
              alt="Fantasy treehouse artwork showcasing art teaching style"
              className="w-full md:w-[140%] h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Title, Quote, Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Title */}
            <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-tight mb-12">
              <span className="text-primary">1:1 Art lessons</span>
              <br />
              <span className="text-foreground">online /</span>
              <br />
              <span className="text-foreground">in-person</span>
            </h1>

            {/* Blockquote */}
            <blockquote className="blockquote-home mb-8 relative pl-8 md:pl-10 pr-8 md:pr-10">
              <span className="text-primary text-5xl md:text-6xl leading-none absolute -left-1 -top-2">"</span>
              <span>{t("home.quote")}</span>
              <span className="text-primary text-5xl md:text-6xl leading-none absolute -right-1 bottom-0">"</span>
            </blockquote>

            {/* CTA Button */}
            <div className="text-center md:text-center">
              <Link to="/introduction" className="btn-gray inline-block">
                Explore lessons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
