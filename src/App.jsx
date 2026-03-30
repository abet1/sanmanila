import { useEffect, useMemo, useState } from "react";

const sisters = {
  teresa: {
    id: "teresa",
    name: "Teresa Ting Tan",
    credentials: "MD, FPARM, RMSK",
    batch: "Batch 2010-A | MEDICINE",
    initial: "T",
    bio: "Dr. Tan's practice centers on helping patients recover function, manage chronic pain, and regain their independence. She combines expertise in interventional procedures with imaging guidance to deliver precise, personalized care.",
    quote:
      "\"After going through medicine, residency, and fellowship, I've learned that sometimes the limits we feel are just fears we can outgrow. This Women's Month, I'm proud of how far I've come - and I hope my journey inspires other women to believe in themselves and keep going too.\"",
    achievements: [
      "Most Outstanding Intern - Internal Medicine, Baguio General Hospital and Medical Center",
      "Most Outstanding Intern - Pediatrics, Radiology, Pathology, and Ophthalmology",
      "3rd Place - Philippine General Hospital 26th Annual Research Week",
      "3rd Place - PARM Scientific Research Forum, oral presentations",
      "Active volunteer in medical missions and community outreach",
    ],
  },
};

const placeholderSisters = ["A", "S", "M", "R", "C"];

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
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const activeSister = useMemo(() => (activeId ? sisters[activeId] : null), [activeId]);

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

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <nav className={isScrolled ? "nav-scrolled" : ""}>
        <div className="nav-logo">SIGMA ALPHA NU SORORITY MANILA</div>
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
          <p className="sorority-badge">SIGMA ALPHA NU SORORITY - UNIVERSITY OF THE PHILIPPINES MANILA</p>
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
        <div className="featured-card reveal">
          <div className="featured-photo-wrap">
            <div className="featured-photo-fallback">
              <div className="featured-photo-initial">T</div>
            </div>
            <div className="featured-photo-overlay" />
          </div>
          <div className="featured-info">
            <div className="featured-nameblock">
              <h3 className="featured-name">Teresa Ting Tan</h3>
              <p className="featured-batch">Batch 2010-A | MEDICINE</p>
            </div>
            <p className="featured-bio">
              Dr. Tan specializes in helping patients improve their function, manage pain, and reclaim
              independence in daily life. Her work sits at the intersection of clinical care and patient dignity.
            </p>
            <div className="featured-quote">
              "After going through medicine, residency, and fellowship, I&apos;ve learned that sometimes the limits we
              feel are just fears we can outgrow."
            </div>
            <div className="achievements">
              <p className="achievements-header">Achievements &amp; Awards</p>
              <div className="achievement-item">
                Most Outstanding Intern - Internal Medicine, Pediatrics, Radiology, Pathology &amp; Ophthalmology,
                Baguio General Hospital
              </div>
              <div className="achievement-item">
                3rd Place - PGH 26th Annual Research Week, hospital-wide competition
              </div>
              <div className="achievement-item">3rd Place - PARM Scientific Research Forum, oral presentation</div>
              <div className="achievement-item">Active medical missions and community outreach advocate</div>
            </div>
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
          <button
            type="button"
            className="sister-card sister-card-button featured-sister"
            onClick={() => setActiveId("teresa")}
            aria-label="Open profile for Teresa Ting Tan"
          >
            <div className="sister-card-real">
              <div className="sister-featured-fallback">
                <span className="sister-featured-initial">T</span>
              </div>
              <div className="sister-card-overlay">
                <span className="sister-card-field">Medicine - Batch 2010-A</span>
                <div className="sister-card-name">Teresa Ting Tan</div>
                <div className="sister-card-field">MD, FPARM, RMSK</div>
                <p className="featured-bio">
                  Specialist in Physical Medicine &amp; Rehabilitation. Pain medicine. Musculoskeletal ultrasound.
                  Advocate for accessible healthcare.
                </p>
              </div>
            </div>
          </button>

          {placeholderSisters.map((initial) => (
            <div key={initial} className="sister-card">
              <div className="sister-card-placeholder">
                <div className="sister-monogram">{initial}</div>
                <div className="sister-card-hover-info">
                  <div className="sister-card-name">Alumni Sister</div>
                  <span className="sister-card-field">Coming Soon</span>
                </div>
              </div>
            </div>
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
            <div className="modal-photo-fallback">
              <span className="modal-initial">{activeSister?.initial ?? "T"}</span>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-name-block">
              <h2 className="modal-name">{activeSister?.name}</h2>
              <p className="modal-batch">{activeSister?.batch}</p>
            </div>
            <p className="modal-bio">{activeSister?.bio}</p>
            <div className="featured-quote modal-quote">{activeSister?.quote}</div>
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
