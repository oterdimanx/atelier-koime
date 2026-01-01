import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';
import { Save, FileText, Home, Video, Image, Book } from 'lucide-react';

type PageKey = 'home' | 'introduction' | 'video' | 'gallery' | 'resources';

interface PageContent {
  titleEn: string;
  titleFr: string;
  contentEn: string;
  contentFr: string;
}

const Admin = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedPage, setSelectedPage] = useState<PageKey | null>(null);
  const [content, setContent] = useState<Record<PageKey, PageContent>>({
    home: {
      titleEn: '1:1 Art lessons online / in-person',
      titleFr: "Cours d'art 1:1 en ligne / en personne",
      contentEn: 'Drawing & painting classes in 1-to-1 mentoring—whether you are looking to professionalize for the creative industries, or simply practice skills',
      contentFr: 'Cours de dessin et de peinture en mentorat individuel—que vous cherchiez à vous professionnaliser dans les industries créatives, ou simplement à pratiquer vos compétences',
    },
    introduction: {
      titleEn: 'Introduction',
      titleFr: 'Introduction',
      contentEn: 'Hi world! Learning to draw or paint is a long process—and a really fun one too.',
      contentFr: "Bonjour à tous ! Apprendre à dessiner ou à peindre est un long processus—et vraiment amusant aussi.",
    },
    video: {
      titleEn: 'Video',
      titleFr: 'Vidéo',
      contentEn: 'Video content coming soon...',
      contentFr: 'Contenu vidéo à venir...',
    },
    gallery: {
      titleEn: 'Gallery',
      titleFr: 'Galerie',
      contentEn: 'Gallery content coming soon...',
      contentFr: 'Contenu de la galerie à venir...',
    },
    resources: {
      titleEn: 'Resources',
      titleFr: 'Ressources',
      contentEn: 'Resources content coming soon...',
      contentFr: 'Contenu des ressources à venir...',
    },
  });

  const pages = [
    { key: 'home' as PageKey, label: 'Home', icon: Home },
    { key: 'introduction' as PageKey, label: 'Introduction', icon: FileText },
    { key: 'video' as PageKey, label: 'Video', icon: Video },
    { key: 'gallery' as PageKey, label: 'Gallery', icon: Image },
    { key: 'resources' as PageKey, label: 'Resources', icon: Book },
  ];

  const handleSave = () => {
    // In a real app, this would save to a backend
    toast({
      title: 'Changes saved',
      description: 'Your content has been updated successfully.',
    });
  };

  const updateContent = (field: keyof PageContent, value: string) => {
    if (!selectedPage) return;
    setContent(prev => ({
      ...prev,
      [selectedPage]: {
        ...prev[selectedPage],
        [field]: value,
      },
    }));
  };

  return (
    <Layout>
      <section className="section-container py-12 md:py-20">
        <h1 className="page-title text-center mb-12 md:mb-16 animate-fade-in">
          {t('admin.title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Page Selection */}
          <div className="lg:col-span-1">
            <div className="bg-secondary rounded-lg p-4 animate-fade-in">
              <h2 className="font-display text-lg mb-4">Pages</h2>
              <nav className="space-y-2">
                {pages.map((page) => (
                  <button
                    key={page.key}
                    onClick={() => setSelectedPage(page.key)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      selectedPage === page.key
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <page.icon size={18} />
                    <span>{page.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Editor */}
          <div className="lg:col-span-3">
            {selectedPage ? (
              <div className="bg-secondary rounded-lg p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-display text-xl capitalize">{selectedPage}</h2>
                  <button onClick={handleSave} className="btn-primary flex items-center gap-2">
                    <Save size={16} />
                    {t('admin.save')}
                  </button>
                </div>

                <div className="space-y-6">
                  {/* English Content */}
                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <span>🇬🇧</span> English
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input
                          type="text"
                          value={content[selectedPage].titleEn}
                          onChange={(e) => updateContent('titleEn', e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Content</label>
                        <textarea
                          value={content[selectedPage].contentEn}
                          onChange={(e) => updateContent('contentEn', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* French Content */}
                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-medium mb-4 flex items-center gap-2">
                      <span>🇫🇷</span> Français
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Titre</label>
                        <input
                          type="text"
                          value={content[selectedPage].titleFr}
                          onChange={(e) => updateContent('titleFr', e.target.value)}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Contenu</label>
                        <textarea
                          value={content[selectedPage].contentFr}
                          onChange={(e) => updateContent('contentFr', e.target.value)}
                          rows={4}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-secondary rounded-lg p-12 text-center animate-fade-in">
                <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">{t('admin.selectPage')}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admin;
