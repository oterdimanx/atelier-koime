import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.introduction": { en: "Introduction", fr: "Introduction" },
  "nav.video": { en: "Video", fr: "Vidéo" },
  "nav.gallery": { en: "Gallery", fr: "Galerie" },
  "nav.resources": { en: "Resources", fr: "Ressources" },
  "nav.admin": { en: "Admin", fr: "Admin" },

  // Home page
  "home.title": { en: "1:1 Art lessons online / in-person", fr: "Cours d'art 1:1 en ligne / en personne" },
  "home.quote": {
    en: "Drawing & painting classes in 1-to-1 mentoring—whether you are looking to professionalize for the creative industries, or simply practice skills",
    fr: "Cours de dessin et de peinture en mentorat individuel—que vous cherchiez à vous professionnaliser dans les industries créatives, ou simplement à pratiquer vos compétences",
  },
  "home.cta": { en: "Learn More", fr: "En savoir plus" },

  // Introduction page
  "intro.title": { en: "Curriculum", fr: "Curriculum" },
  "intro.greeting": { en: "Hi world!", fr: "Bonjour à tous !" },
  "intro.text1a": {
    en: "Learning to draw or paint is a long process—and a really fun one too.",
    fr: "Apprendre à dessiner ou à peindre est un long processus—et vraiment amusant aussi.",
  },
  "intro.text1b": {
    en: "The goal of this class is to introduce you a structure that covers all of the fundamentals of the art while allowing you to progress at your own pace and toward your own exact goals.",
    fr: "L'objectif de ce cours est de vous présenter une structure qui couvre tous les fondamentaux de l'art tout en vous permettant de progresser à votre rythme et vers vos propres objectifs.",
  },
  "intro.fundamentals": { en: "Fundamentals", fr: "Fondamentaux" },
  "intro.row2Title": {
    en: "Perspective, layout, composition, story...",
    fr: "Perspective, mise en page, composition, histoire...",
  },
  "intro.row2Text1": {
    en: "If you're a beginner, no problem! You'll start by learning fundamental skills.",
    fr: "Si vous êtes débutant, pas de problème ! Vous commencerez par apprendre les compétences fondamentales.",
  },
  "intro.row2Text2": {
    en: "This means: thinking with shapes, perspective (and seeing your canvas as a three-dimensional space), values, composition, design, and more—all of which you can apply to your creative endeavors.",
    fr: "Cela signifie : penser avec des formes, la perspective (et voir votre toile comme un espace tridimensionnel), les valeurs, la composition, le design, et plus encore—tout cela vous pourrez l'appliquer à vos projets créatifs.",
  },
  "intro.row3Title": { en: "From concept art to storyboard", fr: "Du concept art au storyboard" },
  "intro.row3Pink": {
    en: "For the students & pros\nwith a project, or a story\nto tell",
    fr: "Pour les étudiants & pros\navec un projet, ou une histoire\nà raconter",
  },
  "intro.row3Text": {
    en: "Whether you are a newbie, a student\npreparing for art school, or a pro with an\nexisting portfolio, this can be the space\nto work on your own project and\nstorytelling skills.\n\nHow do you tell a story on screen? How\ndo you design a compelling character,\nenvironment, visual identity?",
    fr: "Que vous soyez novice, étudiant\npréparant une école d'art, ou un pro avec\nun portfolio existant, cet espace peut être\nle lieu pour travailler sur votre propre\nprojet et vos compétences narratives.\n\nComment raconter une histoire à l'écran ?\nComment concevoir un personnage, un\nenvironnement, une identité visuelle?",
  },
  "intro.row4Quote": {
    en: "While the fundamentals are best learned with pencil and paper, we can also raise your digital proficiency using Photoshop and other softwares commonly used in the illustration, animation, design and gaming industries.",
    fr: "Si les fondamentaux s'apprennent mieux au crayon et au papier, nous pouvons également améliorer votre maîtrise numérique avec Photoshop et d'autres logiciels couramment utilisés dans les industries de l'illustration, de l'animation, du design et du jeu vidéo.",
  },
  "intro.exploreLessons": { en: "Explore Lessons", fr: "Explorer les cours" },
  "intro.introVideo": { en: "Introduction Video", fr: "Vidéo d'introduction" },
  "intro.resources": { en: "Resources", fr: "Ressources" },

  // Video page
  "video.title": { en: "Video", fr: "Vidéo" },
  "video.comingSoon": { en: "Video content coming soon...", fr: "Contenu vidéo à venir..." },

  // Gallery page
  "gallery.title": { en: "Gallery", fr: "Galerie" },
  "gallery.comingSoon": { en: "Gallery content coming soon...", fr: "Contenu de la galerie à venir..." },

  // Resources page
  "resources.title": { en: "Resources", fr: "Ressources" },
  "resources.pricingAndOptions": { en: "Pricing &", fr: "Tarifs &" },
  "resources.options": { en: "Options", fr: "Options" },
  "resources.pricingText": {
    en: "Classes are currently <strong>£35/hour</strong>, with discounts available for young children, students and low-income households. If you need teaching but cannot afford class, contact me so we can discuss options.",
    fr: "Les cours sont actuellement à <strong>35£/heure</strong>, avec des réductions disponibles pour les jeunes enfants, les étudiants et les foyers à faibles revenus. Si vous avez besoin de cours mais ne pouvez pas vous le permettre, contactez-moi pour en discuter.",
  },
  "resources.flexibleLearning": { en: "Flexible learning for", fr: "Apprentissage flexible pour" },
  "resources.differentNeeds": { en: "different needs", fr: "différents besoins" },
  "resources.description1": {
    en: "Choose the frequency of your lessons, and we'll decide together on the style of mentorship you need. I currently hold classes in London (adults / children), in addition to online lessons. I studied animation with Disney and Pixar veterans, and I've been teaching drawing for 10 years.",
    fr: "Choisissez la fréquence de vos cours, et nous déciderons ensemble du style de mentorat dont vous avez besoin. Je donne actuellement des cours à Londres (adultes / enfants), en plus des cours en ligne. J'ai étudié l'animation avec des vétérans de Disney et Pixar, et j'enseigne le dessin depuis 10 ans.",
  },
  "resources.description2": {
    en: "I enjoy helping my students become more comfortable and confident in their practice, and I frequently take lessons myself to keep in touch with expectations from the creative industries. In my classes, I value mutual trust and flexibility of learning.",
    fr: "J'aime aider mes étudiants à devenir plus à l'aise et confiants dans leur pratique, et je prends fréquemment des cours moi-même pour rester en phase avec les attentes des industries créatives. Dans mes cours, je valorise la confiance mutuelle et la flexibilité d'apprentissage.",
  },
  "resources.lookingForward": {
    en: "Looking forward to meet you! (Email me at inpersonartschool@gmail.com, or use the buttons below.)",
    fr: "J'ai hâte de vous rencontrer ! (Envoyez-moi un email à inpersonartschool@gmail.com, ou utilisez les boutons ci-dessous.)",
  },
  "resources.signature": { en: "-GGM", fr: "-GGM" },
  "resources.emailMe": { en: "Email me", fr: "Contactez-moi" },
  "resources.bookCalendar": { en: "Book on Calendar", fr: "Réserver sur le calendrier" },
  "resources.bookPreply": { en: "Book on Preply", fr: "Réserver sur Preply" },

  // Admin page
  "admin.title": { en: "Administration Panel", fr: "Panneau d'administration" },
  "admin.pageContent": { en: "Page Content", fr: "Contenu de la page" },
  "admin.save": { en: "Save Changes", fr: "Enregistrer" },
  "admin.selectPage": { en: "Select a page to edit", fr: "Sélectionnez une page à modifier" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
