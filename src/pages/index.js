import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Ben Davies" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <InterestsSection sectionId="interests" heading="Things I like" />
        <ContactSection sectionId="contact" heading="Let's Talk" />
      </Page>
    </>
  );
}
