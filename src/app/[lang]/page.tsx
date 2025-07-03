import { getDictionary } from "../i18n/dictionary";

// import components
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>
}) {
  const lang = (await params).lang;
  const t = await getDictionary(lang);
  
  return (
      <main>
        <HeroSection t={t.hero} />
        <AboutSection t={t.about_section} />
        <SkillsSection t={t.skills_section} />
        <ProjectsSection t={t.project_section} />
        <ContactSection t={t.contact_section} />
      </main>  
  );
}
