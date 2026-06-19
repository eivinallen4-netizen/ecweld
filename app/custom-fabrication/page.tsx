import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";

export const metadata: Metadata = {
  title: "Custom Metal Fabrication — Steel, Aluminum & Stainless | ECWelding",
  description: "Custom metal fabrication. Steel, aluminum, and stainless work built to your exact spec. Bring a sketch or an idea — we build it. Gates, railings, frames, decorative ironwork, and more.",
};

const faqItems = [
  {
    q: "What do I need to bring to get a quote?",
    a: "Anything helps — a photo, a rough sketch, a written description, or even just a verbal explanation of what you're trying to do. We've worked from napkin drawings and full engineering plans. Just start the conversation.",
  },
  {
    q: "Can you match an existing piece?",
    a: "Usually yes. Bring a photo or the existing piece if it's portable. For decorative ironwork and custom profiles, we can replicate most designs or create something close enough to blend in.",
  },
  {
    q: "How long does custom fabrication take?",
    a: "Depends on complexity, material availability, and current workload. Simple pieces can be turned around in a few days. Larger or more complex jobs take longer. We give you a realistic timeline during the quoting process — not an optimistic guess.",
  },
  {
    q: "Do you do small one-off pieces?",
    a: "Yes. We don't require minimum order quantities. If you need one custom bracket, one gate, or one decorative piece, we build it. Small jobs get the same care as large ones.",
  },
  {
    q: "Can you do both fabrication and installation?",
    a: "Yes. We can fabricate in-shop and then install on-site, or we can do the whole job in the field if that makes more sense. We'll confirm which approach fits your job during the quote.",
  },
  {
    q: "Is there a design or consultation fee?",
    a: "No. The initial conversation and quote are free. We talk through your project, confirm the scope, and give you a price before any money changes hands.",
  },
];

export default function CustomFabrication() {
  return (
    <>
      <Header />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="container">
          <Link href="/">Home</Link>
          <span>›</span>
          Custom Fabrication
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="section-label">If You Can Draw It, We Can Build It</p>
            <h1 className="hero__headline">Custom Metal Fabrication — From Sketch to Steel</h1>
            <ul className="hero__features">
              <li>Steel, aluminum, and stainless fabrication</li>
              <li>Custom gates, railings, frames &amp; supports</li>
              <li>Decorative ironwork &amp; one-off pieces</li>
              <li>Bring a napkin sketch — we figure out the rest</li>
              <li>Built to outlast anything you&apos;ve bought off the shelf</li>
            </ul>
            <div className="btn-group">
              <a href="/#contact" className="btn btn--primary">Talk About Your Project</a>
              <a href="tel:[phone]" className="btn btn--secondary">Call Us</a>
            </div>
          </div>
          <div className="hero__image">
            <div className="img-placeholder">
              <span>[Custom fabrication hero: welder shaping steel in shop — 900×540]</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-badge">Licensed &amp; Insured</span>
            <span className="trust-badge">Steel · Aluminum · Stainless</span>
            <span className="trust-badge">Built to Your Exact Spec</span>
            <span className="trust-badge">Free Estimates</span>
          </div>
        </div>
      </div>

      {/* WHAT WE FABRICATE */}
      <section className="section">
        <div className="container">
          <p className="section-label">What We Build</p>
          <h2 className="section-heading">Custom Fabrication for Homes, Businesses &amp; Industry</h2>
          <p className="section-intro">Every great structure starts as an idea. Bring us a napkin sketch, a set of plans, or just a problem you need solved — we&apos;ll build something solid that&apos;s made to your exact spec and made to outlast the rest.</p>

          <div className="service-grid">
            <article className="service-card">
              <div className="img-placeholder img-placeholder--card">
                <span>[Custom gate fabrication — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Gates &amp; Fencing</h3>
                <ul className="bullet-list">
                  <li>Custom driveway gates — any size or style</li>
                  <li>Pedestrian gates &amp; side yard gates</li>
                  <li>Security fence panels</li>
                  <li>Decorative ironwork gates</li>
                  <li>Commercial access control frames</li>
                </ul>
              </div>
            </article>

            <article className="service-card">
              <div className="img-placeholder img-placeholder--card">
                <span>[Custom handrail — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Railings &amp; Handrails</h3>
                <ul className="bullet-list">
                  <li>Interior &amp; exterior stair railings</li>
                  <li>Balcony &amp; deck railings</li>
                  <li>ADA-compliant commercial handrails</li>
                  <li>Modern cable and rod railing systems</li>
                  <li>Custom profile and finish options</li>
                </ul>
              </div>
            </article>

            <article className="service-card">
              <div className="img-placeholder img-placeholder--card">
                <span>[Custom steel frame — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Frames, Brackets &amp; Supports</h3>
                <ul className="bullet-list">
                  <li>Custom steel frames to spec</li>
                  <li>Equipment mounting brackets</li>
                  <li>Structural supports &amp; gussets</li>
                  <li>Shelf systems &amp; industrial storage frames</li>
                  <li>One-off structural components</li>
                </ul>
              </div>
            </article>

            <article className="service-card">
              <div className="img-placeholder img-placeholder--card">
                <span>[Decorative ironwork — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Decorative &amp; Architectural Metalwork</h3>
                <ul className="bullet-list">
                  <li>Decorative ironwork panels &amp; accents</li>
                  <li>Pergolas &amp; shade structures</li>
                  <li>Furniture frames</li>
                  <li>Fire pit &amp; outdoor feature structures</li>
                  <li>Signage frames &amp; display structures</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* MATERIALS */}
      <section className="section section--light">
        <div className="container">
          <p className="section-label">What We Work With</p>
          <h2 className="section-heading">The Right Material for the Job</h2>
          <p className="section-intro">Not every job calls for the same metal. We&apos;ll help you pick the right material based on the application, environment, and budget — not just what&apos;s easiest for us.</p>

          <div className="trust-grid">
            <div className="trust-item">
              <h3 className="trust-item__heading">Steel</h3>
              <p className="trust-item__body">Raw structural strength. The choice for gates, fencing, structural frames, and anything that needs to hold load or take abuse. Available in various grades and profiles.</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-item__heading">Aluminum</h3>
              <p className="trust-item__body">Lightweight, corrosion-resistant, and clean-looking. Great for decorative work, coastal environments, and anywhere you want a long-lasting finish with lower weight.</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-item__heading">Stainless Steel</h3>
              <p className="trust-item__body">Built for the long haul. Food-safe, weather-resistant, and clean. Used for handrails, commercial kitchen work, and applications where appearance and durability both matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <p className="section-label">How It Works</p>
          <h2 className="section-heading">From Idea to Installed</h2>

          <div style={{ display: "grid", gap: "var(--sp-48)", alignItems: "start" }}>
            <div>
              <div className="process-steps">
                <div className="process-step">
                  <div className="process-step__num">1</div>
                  <span className="process-step__label">Talk — Tell us what you need. No idea is too rough. A photo, a sketch, a description — we work from all of it.</span>
                </div>
                <div className="process-step">
                  <div className="process-step__num">2</div>
                  <span className="process-step__label">Plan — We map the approach, choose materials, confirm dimensions, and lock in scope. You know exactly what you&apos;re getting before we start.</span>
                </div>
                <div className="process-step">
                  <div className="process-step__num">3</div>
                  <span className="process-step__label">Build — Steel gets cut, shaped, and welded to spec. No guesswork, no surprises. Quality checked before it leaves the shop.</span>
                </div>
                <div className="process-step">
                  <div className="process-step__num">4</div>
                  <span className="process-step__label">Deliver — Installed on-site or ready for drop-in. Done right, ready to last.</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-16)" }}>
              <div className="img-placeholder img-placeholder--card">
                <span>[Shop: cutting and shaping steel — 600×180]</span>
              </div>
              <div className="img-placeholder img-placeholder--card">
                <span>[Finished custom piece installed — 600×180]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__heading">Let&apos;s Talk About Your Project</h2>
          <p className="cta-banner__sub">Free consultation. No idea is too rough. Bring what you&apos;ve got and we&apos;ll figure out the rest.</p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <a href="/#contact" className="btn btn--inverse">Start the Conversation</a>
            <a href="tel:[phone]" className="btn btn--outline-inv">Call Us Now</a>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <p className="section-label">Common Questions</p>
          <h2 className="section-heading">Custom Fabrication FAQ</h2>
          <FaqSection items={faqItems} />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section section--light">
        <div className="container">
          <p className="section-label">Related Services</p>
          <h2 className="section-heading">More from ECWelding</h2>
          <div className="service-grid" style={{ marginTop: "var(--sp-32)" }}>
            <Link href="/residential-welding" className="service-card" style={{ textDecoration: "none" }}>
              <div className="img-placeholder img-placeholder--card"><span>[Residential gate install]</span></div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Residential Welding</h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)" }}>Gate repairs, fence work, railings, and more for your home and property.</p>
              </div>
            </Link>
            <Link href="/mobile-welding" className="service-card" style={{ textDecoration: "none" }}>
              <div className="img-placeholder img-placeholder--card"><span>[Mobile welding truck]</span></div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Mobile Welding</h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)" }}>Need it done on-site? We bring everything and come to you.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer
        tagline="Custom fabrication built to your exact spec — steel, aluminum, or stainless."
        servicesTitle="Fabrication"
        servicesLinks={[
          { label: "Custom Gates", href: "#" },
          { label: "Railings", href: "#" },
          { label: "Frames & Brackets", href: "#" },
          { label: "Decorative Ironwork", href: "#" },
        ]}
      />
    </>
  );
}
