// src/App.jsx
import React from "react";

import { projects, skills, certs, websites, contact } from "./data/siteData.js";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import SocialList from "./components/layout/SocialList.jsx";
import EmailList from "./components/layout/EmailList.jsx";

import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Coding from "./sections/Coding.jsx";
import Certs from "./sections/Certs.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-navy text-slate relative antialiased">
      <Navbar />
      
      <SocialList contact={contact} />
      <EmailList email={contact.email} />
      
      <main id="content" className="mx-auto w-full max-w-[1600px] min-h-[100vh] px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
        <Hero />
        <Projects projects={projects} websites={websites} />
        <Skills skills={skills} />
        <Certs certs={certs} />
        <Coding />
        <Contact contact={contact} />
      </main>

      <Footer />
    </div>
  );
}
