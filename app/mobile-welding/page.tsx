import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";

export const metadata: Metadata = {
  title: "Mobile Welding Service — On-Site Welding Near You | ECWelding",
  description: "Mobile welding service. We come to your home, business, or job site fully equipped. Emergency repairs, gate fixes, fence work and more. Call for same-day availability.",
};

const faqItems = [
  {
    q: "What does your mobile rig carry?",
    a: "Our truck is stocked for the most common welding jobs — MIG, stick, and cut-off equipment, common stock material, and the tools to handle most repairs on a single visit. If a job needs specialty material, we'll confirm that before we arrive.",
  },
  {
    q: "Is there an extra charge for mobile service?",
    a: "We include travel within our normal service area in the estimate. For locations farther out, we'll be upfront about any additional cost before you commit to anything.",
  },
  {
    q: "How fast can you get to us for an emergency?",
    a: "Depends on current workload, but we prioritize true emergencies — a broken security gate, a safety-critical railing, a door that won't close. Call us and we'll tell you honestly when we can be there.",
  },
  {
    q: "Can you weld in tight spaces or indoors?",
    a: "Yes, with proper ventilation. We'll assess the work environment and make sure conditions are safe before starting. We've worked in warehouses, parking garages, enclosed courtyards, and more.",
  },
  {
    q: "Do you bring your own power?",
    a: "Yes — our rig is self-contained. We don't need to plug into your power supply. We can work at locations without access to electricity.",
  },
  {
    q: "Do you offer free estimates for mobile visits?",
    a: "Yes. Call or fill out the form and describe what you've got. We'll give you an estimate before we commit to the visit.",
  },
];

export default function MobileWelding() {
  return (
    <>
      <Header />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="container">
          <Link href="/">Home</Link>
          <span>›</span>
          Mobile Welding
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="section-label">The Shop Comes to You</p>
            <h1 className="hero__headline">Mobile Welding — Fully Equipped, Anywhere You Need Us</h1>
            <ul className="hero__features">
              <li>We come to your home, business, or job site</li>
              <li>No haul-in, no drop-off, no waiting</li>
              <li>Fully equipped mobile welding rig</li>
              <li>Emergency &amp; same-day availability</li>
              <li>Serving [City] and surrounding areas</li>
            </ul>
            <div className="btn-group">
              <a href="tel:[phone]" className="btn btn--primary">Call Now</a>
              <a href="/#contact" className="btn btn--secondary">Book a Visit</a>
            </div>
          </div>
          <div className="hero__image">
            <div className="img-placeholder">
              <span>[Mobile welding hero: truck at residential job site, welder working — 900×540]</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-badge">Licensed &amp; Insured</span>
            <span className="trust-badge">Same-Day Availability</span>
            <span className="trust-badge">Homes, Businesses &amp; Job Sites</span>
            <span className="trust-badge">Free Estimates</span>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <p className="section-label">How Mobile Welding Works</p>
          <h2 className="section-heading">You Shouldn&apos;t Have to Haul a Broken Gate Across Town</h2>
          <p className="section-intro">We load up and roll out — fully equipped, ready to work wherever the job is. No excuses, no delays. You call, we come, we fix it.</p>

          <div style={{ display: "grid", gap: "var(--sp-48)", alignItems: "start" }}>
            <div>
              <div className="process-steps">
                <div className="process-step">
                  <div className="process-step__num">1</div>
                  <span className="process-step__label">Call or request a quote — describe what&apos;s broken or what you need built.</span>
                </div>
                <div className="process-step">
                  <div className="process-step__num">2</div>
                  <span className="process-step__label">We confirm the visit and give you a time window — not a vague &ldquo;sometime today.&rdquo;</span>
                </div>
                <div className="process-step">
                  <div className="process-step__num">3</div>
                  <span className="process-step__label">Our rig shows up with the equipment to handle the job on-site.</span>
                </div>
                <div className="process-step">
                  <div className="process-step__num">4</div>
                  <span className="process-step__label">We do the work, clean up, and you&apos;re done. No second trip.</span>
                </div>
              </div>
            </div>
            <div>
              <div className="img-placeholder img-placeholder--wide" style={{ height: "280px" }}>
                <span>[Mobile rig interior showing equipment — 600×280]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* WHAT WE HANDLE */}
      <section className="section section--light">
        <div className="container">
          <p className="section-label">Common Mobile Jobs</p>
          <h2 className="section-heading">What We Fix On-Site</h2>

          <div className="service-grid" style={{ marginTop: "var(--sp-32)" }}>
            <div className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__heading">Residential Call-Outs</h3>
                <ul className="bullet-list">
                  <li>Broken or sagging driveway gates</li>
                  <li>Fence panel and post repairs</li>
                  <li>Damaged stair railings</li>
                  <li>Bent or broken structural metal</li>
                  <li>Any residential metalwork at your property</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__heading">Commercial Call-Outs</h3>
                <ul className="bullet-list">
                  <li>Security gate failures</li>
                  <li>Loading dock damage</li>
                  <li>Bollard replacement</li>
                  <li>Handrail failure or code issue</li>
                  <li>Any commercial metalwork on-site</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__heading">Job Site &amp; Construction</h3>
                <ul className="bullet-list">
                  <li>On-site fabrication support</li>
                  <li>Structural steel welding</li>
                  <li>Tack welding &amp; fit-up</li>
                  <li>Repair of damaged steel on active sites</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card__body">
                <h3 className="service-card__heading">Emergency Repairs</h3>
                <ul className="bullet-list">
                  <li>Vehicle impact gate damage</li>
                  <li>Storm damage metalwork</li>
                  <li>Security failures requiring immediate repair</li>
                  <li>Any time-sensitive structural issue</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__heading">Need Us Now? Call.</h2>
          <p className="cta-banner__sub">Same-day availability when you need it most. Tell us what happened and we&apos;ll get there.</p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <a href="tel:[phone]" className="btn btn--inverse">Call [Phone Number]</a>
            <a href="/#contact" className="btn btn--outline-inv">Book Online</a>
          </div>
        </div>
      </div>

      {/* SERVICE AREA */}
      <section className="section">
        <div className="container">
          <p className="section-label">Where We Operate</p>
          <h2 className="section-heading">Mobile Welding Throughout [City] &amp; Surrounding Areas</h2>
          <p className="section-intro">We&apos;re based right here, which means faster response, no travel surcharges for local calls, and someone who knows the area well.</p>

          <div style={{ display: "grid", gap: "var(--sp-32)" }}>
            <div>
              <div className="img-placeholder img-placeholder--wide" style={{ height: "300px" }}>
                <span>[Service area map — 800×300]</span>
              </div>
            </div>
            <div>
              <p className="section-label">Areas We Serve</p>
              <ul className="two-col-list">
                <li>[Primary City]</li>
                <li>[Neighboring City]</li>
                <li>[Community Name]</li>
                <li>[Community Name]</li>
                <li>[Community Name]</li>
                <li>[Community Name]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="container">
          <p className="section-label">Common Questions</p>
          <h2 className="section-heading">Mobile Welding FAQ</h2>
          <FaqSection items={faqItems} />
        </div>
      </section>

      <Footer
        tagline="Mobile welding done right — fully equipped, showing up when we say we will."
        servicesTitle="Mobile Service"
        servicesLinks={[
          { label: "Residential", href: "#residential" },
          { label: "Commercial", href: "#commercial" },
          { label: "Emergency", href: "#emergency" },
          { label: "Job Sites", href: "#job-site" },
        ]}
      />
    </>
  );
}
