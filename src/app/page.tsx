import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { Contact } from "lucide-react";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <EducationSection></EducationSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </div>
  );
}
