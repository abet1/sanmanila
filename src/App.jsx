import { useEffect, useMemo, useState } from "react";
import ferdzImage from "./pictures of sisters/Dr. Ferdz.PNG?url";
import elmaImage from "./pictures of sisters/LATAYAN, ELMA PATRISHA.jpeg?url";
import jamiImage from "./pictures of sisters/Sis Jami.jfif?url";
import jeanneImage from "./pictures of sisters/Sis Jeanne.jpeg?url";
import mariaImage from "./pictures of sisters/Sis Maria.png?url";
import marianeImage from "./pictures of sisters/Sis Mariane.PNG?url";
import ritaImage from "./pictures of sisters/Sis Rita.PNG?url";
import logoImage from "./sanmanilalogo.png?url";
import teresaImage from "./pictures of sisters/Sis Teresa.jpg?url";

const sisters = [
  {
    id: "teresa",
    name: "Teresa Ting Tan",
    credentials: "MD, FPARM, RMSK",
    batch: "Batch 2010-A",
    category: "Medicine",
    field: "Physical Medicine and Rehabilitation",
    initial: "T",
    image: teresaImage,
    bio: "Dr. Tan is a specialist in Physical Medicine and Rehabilitation with expertise in Interventional Pain Medicine and Musculoskeletal Ultrasound. Her work focuses on improving patients' function, relieving pain, and helping individuals regain independence in their daily lives.",
    shortBio:
      "Specialist in Physical Medicine and Rehabilitation, Interventional Pain Medicine, and Musculoskeletal Ultrasound.",
    quote:
      "After going through medicine, residency, and fellowship, I've learned that sometimes the limits we feel are just fears we can outgrow. This Women's Month, I'm proud of how far I've come and I hope my journey inspires other women to believe in themselves and keep going too.",
    achievements: [
      "Most Outstanding Intern - Internal Medicine, Baguio General Hospital and Medical Center",
      "Most Outstanding Intern - Pediatrics, Radiology, Pathology, and Ophthalmology",
      "3rd Place - Philippine General Hospital 26th Annual Research Week",
      "3rd Place - PARM Scientific Research Forum, oral presentations",
      "Active volunteer in medical missions and community outreach",
    ],
  },
  {
    id: "elma",
    name: "Elma Patrisha B. Latayan",
    credentials: "Junior Legal Officer",
    batch: "Batch 2016-D",
    category: "Law",
    field: "Law Student",
    initial: "E",
    image: elmaImage,
    bio: "Elma is a 5th year evening student at the UP College of Law and works as a Junior Legal Officer at the Institute of International Legal Studies. While balancing the demands of being a working student, she remains active in leadership, internships, and advocacy for women and persons with disabilities.",
    shortBio:
      "UP College of Law student balancing legal work, leadership, and advocacy for women and PWD empowerment.",
    quote:
      "Never stop pursuing your passion and your dreams just because you are a woman. Women are built with the capabilities to excel in any and all fields they choose. Always take up space, have a voice, and don't let any man tell you what you can and can't do.",
    achievements: [
      "2024 UP College Bar Operations Commissioner",
      "Editor-in-Chief, OSG Legal Internship Journal and OSG Intern Batch Salimbay (2025)",
      "Merit Awardee for Academic Excellence, BS Speech Pathology (2019)",
    ],
  },
  {
    id: "maria",
    name: "Maria Raquel Devera Legaspi",
    credentials: "Team Canada National Coach",
    batch: "Batch 1993-B",
    category: "Nursing",
    field: "Nursing",
    initial: "M",
    image: mariaImage,
    bio: "Kelly Legaspi's journey reflects how women can excel across different fields while embodying resilience and leadership. Beyond her training in Nursing, she has achieved remarkable success in martial arts as a black belt and one of Team Canada's National Coaches.",
    shortBio:
      "Nursing alumna, black belt martial artist, and one of Team Canada's National Coaches.",
    quote:
      "Be strong in your convictions and gentle in your grace. Be brave enough to step into rooms and places where your voice has never been heard. Let our achievements be loud. Let our presence be undeniable. Let our spirit be unbreakable.",
    achievements: [
      "Black belt martial artist",
      "One of Team Canada's National Coaches",
      "Leader who redefined excellence beyond her original field",
    ],
  },
  {
    id: "ferdiliza",
    name: "Ferdiliza Dandah Soledo Garcia",
    credentials: "Educator and Advocate",
    batch: "Batch 1995-C",
    category: "Health and Development",
    field: "Policy and Program Advocacy",
    initial: "F",
    image: ferdzImage,
    bio: "Dr. Garcia is a social development advocate, educator, and professional volunteer dedicated to health and development policy, disability inclusion, and community empowerment. She has served in major leadership roles in the Philippine Association of Speech-Language Pathologists and contributed globally through the World Health Organization World Rehabilitation Alliance.",
    shortBio:
      "Policy advocate, educator, and community development leader advancing disability-inclusive empowerment.",
    quote:
      "Women are blessed to become women with various abilities to lead and facilitate the empowerment of others. So dream, develop, and help other girls, women, and other marginalized sectors along this journey of empowerment.",
    achievements: [
      "2025 Quezon City Persons with Disability Affairs Office Inclusivity Partner",
      "2024 UP CAMP Outstanding Teacher",
      "2021 Miriam College Alumni Association Amazing Alumni Achiever Award",
      "2016 UP Alumni Association Distinguished Alumna Award in Community Empowerment",
    ],
  },
  {
    id: "rita",
    name: "Rita Jennifer Plamenco Batara",
    credentials: "Hospitality Executive",
    batch: "Batch 1993-D",
    category: "Business",
    field: "Hospitality Management and Leadership",
    initial: "R",
    image: ritaImage,
    bio: "Jennifer Batara is a hospitality executive based in Honolulu, Hawai'i and currently works as a General Manager under one of Hawai'i's largest hotel management companies. With more than 15 years of leadership experience, she is known for operational excellence, team-building, and mentoring future women leaders.",
    shortBio:
      "Hospitality executive in Hawai'i known for leadership, operational excellence, and mentoring women in tourism.",
    quote:
      "There is power in competence, grace in resilience, and strength in choosing to lead with integrity. Take the seat at the table. Own your expertise. The future is shaped by women who dare to lead.",
    achievements: [
      "General Manager, properties under Aqua-Aston Hospitality",
      "Communications Committee Chair, Hawai'i Women in Lodging and Tourism",
      "Recognized for operational excellence and leadership in Hawai'i's hospitality industry",
      "Active mentor and advocate for women in leadership",
    ],
  },
  {
    id: "jami",
    name: "Jami Briones",
    credentials: "Business Development Director",
    batch: "Batch 2015-A",
    category: "Business",
    field: "Logistics and International Trade",
    initial: "J",
    image: jamiImage,
    bio: "Jami serves as the Business Development Director of Iphios Logistics Corp., a Philippine-based international freight forwarding company specializing in global logistics and supply chain solutions. She focuses on developing global partnerships and expanding the company's international network through major logistics organizations and conferences.",
    shortBio:
      "Logistics and international trade leader building global partnerships and expanding cross-border networks.",
    quote:
      "Our paths may not always follow the plans we once imagined, but women have an incredible ability to learn, evolve, and thrive wherever we are placed. Trust in your ability to grow, adapt, and lead.",
    achievements: [
      "Business Development Director, Iphios Logistics Corp.",
      "Co-founder, PAGBANGON Relief Operations",
      "Leader in global logistics partnerships and international trade expansion",
    ],
  },
  {
    id: "mariane",
    name: "Mariane Altamera-Briones",
    credentials: "SLP and Financial Professional",
    batch: "Batch 2003-B",
    category: "Allied Medical and Finance",
    field: "Speech and Language Pathology, Finance",
    initial: "M",
    image: marianeImage,
    bio: "Mariane is a licensed Speech and Language Pathologist and Financial Professional committed to helping families thrive by supporting children's development and guiding parents toward financial security. Her work bridges care, communication, and long-term family stability.",
    shortBio:
      "Licensed speech and language pathologist and financial professional helping families flourish across generations.",
    quote:
      "To every woman building her dreams while caring for others, you are stronger than you think, braver than you feel, and more capable than you sometimes allow yourself to believe. Keep dreaming boldly. Flourish in every season.",
    achievements: [
      "3x Million Dollar Round Table Qualifier",
      "Among the top 2% of financial professionals globally",
      "Advocate for children's development and family financial security",
    ],
  },
  {
    id: "jeanne",
    name: "Jeanne Marian D. Budiongan",
    credentials: "Corporate Law and Entrepreneurship",
    batch: "Batch 2016-A",
    category: "Corporate Law",
    field: "Corporate Law and Entrepreneurship",
    initial: "J",
    image: jeanneImage,
    bio: "Jeanne is an Area Studies graduate from UP Manila who finished Cum Laude and later pursued further studies at the University of Amsterdam. In addition to her professional work in Corporate Law, she founded an Amsterdam-based microbakery where she brings together entrepreneurship, craftsmanship, and a love of baking.",
    shortBio:
      "Corporate law professional and Amsterdam-based microbakery founder with a multidisciplinary global journey.",
    quote:
      "Too often, women are placed into narrow roles defined by expectations rather than potential. I hope more women continue to challenge those expectations, take up space, and pursue paths that truly reflect who they are and what they aspire to become.",
    achievements: [
      "Cum Laude, College Scholar, and University Scholar",
      "Outstanding Employee Award",
      "Led an initiative resulting in over EUR100,000 in cost savings",
      "Founder of an Amsterdam-based microbakery",
    ],
  },
];

const featuredSisterId = "teresa";

function Rose({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <g fill="none">
        <path d="M50 120 Q48 90 50 70" stroke="#2d4a1e" strokeWidth="2.5" />
        <path d="M50 100 Q38 92 34 82" stroke="#2d4a1e" strokeWidth="1.5" />
        <ellipse cx="30" cy="80" rx="7" ry="4" fill="#3a5c26" transform="rotate(-30 30 80)" />
        <ellipse cx="50" cy="44" rx="12" ry="18" fill="#7a0000" transform="rotate(-10 50 44)" />
        <ellipse cx="62" cy="50" rx="12" ry="17" fill="#8b0000" transform="rotate(30 62 50)" />
        <ellipse cx="38" cy="50" rx="12" ry="17" fill="#8b0000" transform="rotate(-30 38 50)" />
        <ellipse cx="58" cy="38" rx="10" ry="15" fill="#9a1010" transform="rotate(60 58 38)" />
        <ellipse cx="42" cy="38" rx="10" ry="15" fill="#9a1010" transform="rotate(-60 42 38)" />
        <ellipse cx="50" cy="42" rx="9" ry="14" fill="#a51a1a" />
        <ellipse cx="60" cy="46" rx="9" ry="13" fill="#b02020" transform="rotate(25 60 46)" />
        <ellipse cx="40" cy="46" rx="9" ry="13" fill="#b02020" transform="rotate(-25 40 46)" />
        <ellipse cx="50" cy="40" rx="7" ry="10" fill="#c0302a" />
        <ellipse cx="50" cy="38" rx="5" ry="7" fill="#d04040" />
        <ellipse cx="50" cy="36" rx="3" ry="4" fill="#e05050" />
        <path
          d="M44 58 Q46 50 50 46 Q54 50 56 58 Q53 54 50 58 Q47 54 44 58Z"
          fill="#2d4a1e"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}

export default function App() {
  const [activeId, setActiveId] = useState(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const activeSister = useMemo(() => sisters.find((sister) => sister.id === activeId) ?? null, [activeId]);
  const featuredSister = useMemo(() => sisters[featuredIndex] ?? sisters[0], [featuredIndex]);
  const sisterGrid = useMemo(() => sisters, []);

  useEffect(() => {
    const defaultIndex = sisters.findIndex((sister) => sister.id === featuredSisterId);
    if (defaultIndex >= 0) {
      setFeaturedIndex(defaultIndex);
    }
  }, []);

  useEffect(() => {
    const revealEls = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeSister ? "hidden" : "";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeSister]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 14);
      setShowBackTop(y > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFeaturedIndex((current) => (current + 1) % sisters.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const showPreviousFeatured = () => {
    setFeaturedIndex((current) => (current - 1 + sisters.length) % sisters.length);
  };

  const showNextFeatured = () => {
    setFeaturedIndex((current) => (current + 1) % sisters.length);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <nav className={isScrolled ? "nav-scrolled" : ""}>
        <div className="nav-logo">
          <img className="nav-logo-image" src={logoImage} alt="ΣAN Sorority Manila logo" />
          <span className="nav-logo-text">ΣAN SORORITY MANILA</span>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${isNavOpen ? "nav-links-open" : ""}`}>
          <li>
            <a href="#featured" onClick={() => setIsNavOpen(false)}>
              Features
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsNavOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#sisters" onClick={() => setIsNavOpen(false)}>
              Sisters
            </a>
          </li>
        </ul>
      </nav>

      <main id="main-content">
      <section className="hero">
        <div className="hero-curtain-left" />
        <div className="hero-curtain-right" />
        <div className="hero-spotlight" />
        <Rose className="rose-tl" />
        <Rose className="rose-tr" />
        <Rose className="rose-bl" />
        <Rose className="rose-br" />

        <div className="hero-content">
          <p className="sorority-badge"> ΣAN SORORITY - UNIVERSITY OF THE PHILIPPINES MANILA</p>
          <h1 className="hero-title">
            Potentia
            <br />
            Femina
          </h1>
          <p className="hero-subtitle">Empowered Women at the Forefront</p>
          <div className="hero-divider" />
          <p className="hero-tagline">Celebrating the brilliance of our alumni sisters</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#featured">
              Explore Features
            </a>
            <a className="btn btn-secondary" href="#sisters">
              View Alumni
            </a>
          </div>
        </div>
        <div className="scroll-cue">
          <div className="scroll-cue-line" />
        </div>
      </section>

      <section id="featured">
        <div className="section-content">
        <h2 className="section-title upright reveal">FEATURES</h2>
        <div className="section-rule reveal" />
        <div className="featured-shell reveal">
          <div key={featuredSister.id} className="featured-card featured-card-active">
          <div className="featured-photo-wrap">
            <img className="featured-photo-image" src={featuredSister.image} alt={featuredSister.name} />
            <div className="featured-photo-overlay" />
          </div>
          <div className="featured-info">
            <div className="featured-info-scroll">
              <div className="featured-nameblock">
                <h3 className="featured-name">{featuredSister.name}</h3>
                <p className="featured-batch">
                  {featuredSister.batch} | {featuredSister.category.toUpperCase()}
                </p>
                <p className="featured-field">{featuredSister.field}</p>
              </div>
              <p className="featured-bio">{featuredSister.bio}</p>
              <div className="featured-quote">"{featuredSister.quote}"</div>
              <div className="achievements">
                <p className="achievements-header">Achievements &amp; Awards</p>
                {featuredSister.achievements.map((item) => (
                  <div key={item} className="achievement-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
          <div className="featured-controls">
            <button type="button" className="featured-nav" onClick={showPreviousFeatured} aria-label="Previous featured sister">
              Prev
            </button>
            <div className="featured-indicators" aria-label="Featured sisters">
              {sisters.map((sister, index) => (
                <button
                  key={sister.id}
                  type="button"
                  className={`featured-indicator ${index === featuredIndex ? "active" : ""}`}
                  aria-label={`Show ${sister.name}`}
                  onClick={() => setFeaturedIndex(index)}
                />
              ))}
            </div>
            <button type="button" className="featured-nav" onClick={showNextFeatured} aria-label="Next featured sister">
              Next
            </button>
          </div>
        </div>
        </div>
      </section>

      <section id="about">
        <div className="section-content">
        <p className="section-label reveal">THE CAMPAIGN</p>
        <h2 className="section-title reveal">Why Potentia Femina</h2>
        <div className="section-rule reveal" />
        <div className="about-grid reveal">
          <div className="about-tile">
            <span className="about-tile-icon">I.</span>
            <p className="about-tile-title">Recognize</p>
            <p className="about-tile-text">
              We celebrate the professional and personal milestones of our alumni sisters - their awards,
              breakthroughs, and everyday acts of courage.
            </p>
          </div>
          <div className="about-tile">
            <span className="about-tile-icon">II.</span>
            <p className="about-tile-title">Inspire</p>
            <p className="about-tile-text">
              By sharing their stories, we give younger sisters and students a living testament that excellence is
              possible - and that it looks like them.
            </p>
          </div>
          <div className="about-tile">
            <span className="about-tile-icon">III.</span>
            <p className="about-tile-title">Connect</p>
            <p className="about-tile-text">
              This campaign is also a living directory of sisterhood - a reminder that SAN&apos;s bonds extend far beyond
              graduation.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section id="sisters">
        <div className="section-content">
        <p className="section-label reveal">OUR ALUMNI</p>
        <h2 className="section-title reveal">Sisters of Distinction</h2>
        <div className="section-rule reveal" />
        <div className="sisters-grid reveal">
          {sisterGrid.map((sister) => (
            <button
              key={sister.id}
              type="button"
              className="sister-card sister-card-button"
              onClick={() => setActiveId(sister.id)}
              aria-label={`Open profile for ${sister.name}`}
            >
              <div className="sister-card-real">
                <img className="sister-card-image" src={sister.image} alt={sister.name} />
                <div className="sister-card-overlay">
                  <span className="sister-card-field">
                    {sister.category} - {sister.batch}
                  </span>
                  <div className="sister-card-name">{sister.name}</div>
                  <div className="sister-card-field">{sister.credentials}</div>
                  <p className="featured-bio">{sister.shortBio}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
        </div>
      </section>

      <div
        className={`modal-overlay ${activeSister ? "active" : ""}`}
        onClick={(e) => e.target === e.currentTarget && setActiveId(null)}
      >
        <div className="modal" role="dialog" aria-modal="true" aria-label={activeSister?.name ?? "Profile dialog"}>
          <div className="modal-photo">
            {activeSister ? (
              <img className="modal-photo-image" src={activeSister.image} alt={activeSister.name} />
            ) : (
              <div className="modal-photo-fallback">
                <span className="modal-initial">T</span>
              </div>
            )}
          </div>
          <div className="modal-body">
            <div className="modal-name-block">
              <h2 className="modal-name">{activeSister?.name}</h2>
              <p className="modal-batch">
                {activeSister ? `${activeSister.batch} | ${activeSister.category}` : ""}
              </p>
            </div>
            <p className="modal-bio">{activeSister?.bio}</p>
            <div className="featured-quote modal-quote">{activeSister ? `"${activeSister.quote}"` : ""}</div>
            <div className="achievements">
              <p className="achievements-header">Achievements &amp; Awards</p>
              {(activeSister?.achievements ?? []).map((item) => (
                <div key={item} className="achievement-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button className="modal-close" onClick={() => setActiveId(null)}>
            ×
          </button>
        </div>
      </div>

      <footer>
        <div className="footer-title">Potentia Femina</div>
        <p className="footer-sub">SIGMA ALPHA NU SORORITY - UNIVERSITY OF THE PHILIPPINES MANILA</p>
        <div className="footer-line" />
        <p className="footer-copy">Women&apos;s Month 2026 - Brought to you by SAN Sorority Manila</p>
      </footer>
      </main>
      <button
        type="button"
        className={`back-to-top ${showBackTop ? "show" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}
