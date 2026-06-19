import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";

export const metadata: Metadata = {
  title: "Residential Welding Services — Gate Repair, Fences & Railings | ECWelding",
  description: "Licensed residential welding. Gate repair, fence welding, custom handrails, decorative metalwork, and structural repairs. Mobile — we come to you. Free estimates.",
};

const faqItems = [
  {
    q: "Can you repair a dragging or stuck gate?",
    a: "Yes — a sagging or dragging gate is one of our most common calls. It's usually the hinges, the frame, or both. We assess, repair, and adjust so it swings clean and holds position.",
  },
  {
    q: "Can you fix a rusty wrought iron fence without replacing the whole thing?",
    a: "Most of the time, yes. We can weld in replacement sections, repair corroded areas, and reinforce weak spots — often without touching the sections that are still solid.",
  },
  {
    q: "Do handrails need to meet code?",
    a: "Yes, especially for stairs and exterior entry points. We're familiar with ADA and local building requirements and can fabricate compliant railings for both residential and permit-required work.",
  },
  {
    q: "Can you match an existing fence or gate style?",
    a: "Usually yes. Bring us photos or we'll assess on-site. For decorative ironwork, we can replicate most patterns or create a close match that blends in.",
  },
  {
    q: "How long does a typical residential job take?",
    a: "Repairs are often same-day or next-day. Custom fabrication jobs take longer depending on scope — we'll give you a realistic timeline up front, not an optimistic guess.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Always. Call or fill out the form on our main page — no commitment, no pressure, just a straight conversation about what you need.",
  },
];

export default function ResidentialWelding() {
  return (
    <>
      <Header />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="container">
          <Link href="/">Home</Link>
          <span>›</span>
          Residential Welding
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="section-label">For Your Home &amp; Property</p>
            <h1 className="hero__headline">Residential Welding — Gate Repair, Fences &amp; More</h1>
            <ul className="hero__features">
              <li>Driveway gate repair &amp; custom fabrication</li>
              <li>Wrought iron &amp; steel fence repair</li>
              <li>Custom handrails &amp; stair railings</li>
              <li>Decorative metalwork for your home</li>
              <li>Structural repairs — carports, beams &amp; more</li>
            </ul>
            <div className="btn-group">
              <a href="/#contact" className="btn btn--primary">Get a Free Estimate</a>
              <a href="tel:[phone]" className="btn btn--secondary">Call Now</a>
            </div>
          </div>
          <div className="hero__image">
            <div className="img-placeholder">
              <span>[Residential welding hero: custom driveway gate install — 900×540]</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-badge">Licensed &amp; Insured</span>
            <span className="trust-badge">Mobile — We Come to You</span>
            <span className="trust-badge">Free Estimates</span>
            <span className="trust-badge">Serving [City] &amp; Surrounding Areas</span>
          </div>
        </div>
      </div>

      {/* SERVICES DETAIL */}
      <section className="section">
        <div className="container">
          <p className="section-label">What We Handle</p>
          <h2 className="section-heading">Residential Welding Services</h2>
          <p className="section-intro">A bent gate, a busted railing, a fence that&apos;s seen better days — these aren&apos;t just eyesores. They&apos;re security risks. We fix them right, and we build things that last longer than the problem did.</p>

          <div className="service-grid">
            <article className="service-card" id="gate-repair">
              <div className="img-placeholder img-placeholder--card">
                <span>[Custom driveway gate — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Gate Repair &amp; Fabrication</h3>
                <ul className="bullet-list">
                  <li>Driveway gates — repair or full replacement</li>
                  <li>Side yard &amp; pedestrian gates</li>
                  <li>Security gate frame repairs</li>
                  <li>Automatic gate frame and hinge work</li>
                  <li>Custom gate fabrication to any spec</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="fence">
              <div className="img-placeholder img-placeholder--card">
                <span>[Wrought iron fence repair — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Fence Welding &amp; Repair</h3>
                <ul className="bullet-list">
                  <li>Wrought iron fence repair</li>
                  <li>Steel fence panels</li>
                  <li>Rust damage restoration</li>
                  <li>Fence extensions &amp; modifications</li>
                  <li>Broken post &amp; picket replacement</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="handrails">
              <div className="img-placeholder img-placeholder--card">
                <span>[Custom stair handrail — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Handrails &amp; Stair Railings</h3>
                <ul className="bullet-list">
                  <li>Interior &amp; exterior railings</li>
                  <li>Balcony and deck railings</li>
                  <li>ADA-compliant handrails</li>
                  <li>Custom staircase fabrication</li>
                  <li>Railing repairs &amp; reinforcements</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="custom">
              <div className="img-placeholder img-placeholder--card">
                <span>[Decorative metal pergola — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Custom &amp; Decorative Metalwork</h3>
                <ul className="bullet-list">
                  <li>Decorative ironwork &amp; artistic pieces</li>
                  <li>Furniture frames &amp; supports</li>
                  <li>Fire pit structures</li>
                  <li>Pergolas &amp; outdoor metal structures</li>
                  <li>One-off custom steel designs</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="structural">
              <div className="img-placeholder img-placeholder--card">
                <span>[Steel beam reinforcement — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Structural Repairs</h3>
                <ul className="bullet-list">
                  <li>Steel support and beam repairs</li>
                  <li>Carport frame repairs</li>
                  <li>Beam reinforcement</li>
                  <li>Structural modifications</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* WHY US */}
      <section className="section section--light">
        <div className="container">
          <p className="section-label">Why Homeowners Choose Us</p>
          <h2 className="section-heading">We Treat Your Property Like It&apos;s Ours</h2>

          <div className="trust-grid">
            <div className="trust-item">
              <h3 className="trust-item__heading">We Come to You</h3>
              <p className="trust-item__body">No haul-in, no drop-off. Our fully equipped mobile rig comes to your property. We work on-site so you can see the job getting done.</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-item__heading">Built to Last</h3>
              <p className="trust-item__body">A repaired gate that breaks again in six months isn&apos;t a repair — it&apos;s a delay. We use the right materials and technique the first time.</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-item__heading">No Surprise Costs</h3>
              <p className="trust-item__body">Free estimate before we start. You&apos;ll know the price before we touch anything. No additions, no mystery charges when the invoice arrives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__heading">Ready to Get It Fixed?</h2>
          <p className="cta-banner__sub">Free estimates, no pressure. We come to you, assess the job, and give you a straight number.</p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <a href="/#contact" className="btn btn--inverse">Get My Free Estimate</a>
            <a href="tel:[phone]" className="btn btn--outline-inv">Call Us Now</a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <p className="section-label">Common Questions</p>
          <h2 className="section-heading">Residential Welding FAQ</h2>
          <FaqSection items={faqItems} />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section section--light">
        <div className="container">
          <p className="section-label">Also Available</p>
          <h2 className="section-heading">More Services from ECWelding</h2>
          <div className="service-grid" style={{ marginTop: "var(--sp-32)" }}>
            <Link href="/mobile-welding" className="service-card" style={{ textDecoration: "none" }}>
              <div className="img-placeholder img-placeholder--card">
                <span>[Mobile welding truck]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Mobile Welding</h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)" }}>We come to your property fully equipped. Emergency call-outs available.</p>
              </div>
            </Link>
            <Link href="/custom-fabrication" className="service-card" style={{ textDecoration: "none" }}>
              <div className="img-placeholder img-placeholder--card">
                <span>[Custom fabrication shop]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Custom Fabrication</h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)" }}>Bring us a sketch or an idea. We build it from steel to spec.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer
        tagline="Real welding. Real craftsmanship. Done right the first time."
        servicesTitle="Residential"
        servicesLinks={[
          { label: "Gate Repair", href: "#gate-repair" },
          { label: "Fence Welding", href: "#fence" },
          { label: "Handrail Fabrication", href: "#handrails" },
          { label: "Structural Repairs", href: "#structural" },
        ]}
      />
    </>
  );
}
