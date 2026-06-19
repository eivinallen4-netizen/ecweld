import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";

export const metadata: Metadata = {
  title: "Commercial Welding Services — Security Gates, Structural Steel & More | ECWelding",
  description: "Commercial welding. Security gates, structural steel, loading docks, ADA handrails, property management welding. Fast turnaround, licensed & insured. Free estimates.",
};

const faqItems = [
  {
    q: "Can you work after hours to avoid disrupting our business?",
    a: "Yes. We're flexible. Early mornings, evenings, weekends — we coordinate around your schedule so repairs don't shut down operations.",
  },
  {
    q: "Do you handle ongoing work for property managers?",
    a: "Absolutely. Many of our commercial clients have us on standing call for their portfolios. We become the welder on your vendor list — consistent, responsive, and already familiar with your properties.",
  },
  {
    q: "Do you carry liability insurance and are you licensed?",
    a: "Yes to both. We can provide certificates of insurance and licensing documentation as required for your records or your client's requirements.",
  },
  {
    q: "Can you weld on-site at a commercial building?",
    a: "Yes — our mobile rig is built for commercial work. We bring everything we need and work on your site without requiring you to transport anything.",
  },
  {
    q: "Do ADA handrails require permits?",
    a: "It depends on the scope and jurisdiction. We'll talk through requirements with you before the job and can help coordinate what's needed for permit-required work.",
  },
  {
    q: "Do you offer free estimates for commercial work?",
    a: "Always. For larger commercial scopes, we'll do a proper on-site assessment before quoting so you get an accurate number — not a guess.",
  },
];

export default function CommercialWelding() {
  return (
    <>
      <Header />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <div className="container">
          <Link href="/">Home</Link>
          <span>›</span>
          Commercial Welding
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="section-label">For Businesses That Can&apos;t Afford Downtime</p>
            <h1 className="hero__headline">Commercial Welding — Industrial-Grade Work on Your Timeline</h1>
            <ul className="hero__features">
              <li>Security gates, bollards &amp; access control repairs</li>
              <li>Structural steel welding &amp; modifications</li>
              <li>Property management and HOA work</li>
              <li>ADA-compliant handrails &amp; guardrails</li>
              <li>Fast turnaround — we work around your schedule</li>
            </ul>
            <div className="btn-group">
              <a href="/#contact" className="btn btn--primary">Get a Free Estimate</a>
              <a href="tel:[phone]" className="btn btn--secondary">Call Now</a>
            </div>
          </div>
          <div className="hero__image">
            <div className="img-placeholder">
              <span>[Commercial welding hero: on-site structural steel work — 900×540]</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-badge">Licensed &amp; Insured</span>
            <span className="trust-badge">Mobile — On-Site Work</span>
            <span className="trust-badge">Works Around Your Schedule</span>
            <span className="trust-badge">Free Estimates</span>
          </div>
        </div>
      </div>

      {/* SERVICES DETAIL */}
      <section className="section">
        <div className="container">
          <p className="section-label">What We Handle</p>
          <h2 className="section-heading">Commercial Welding Services</h2>
          <p className="section-intro">When a gate is out, a dock is damaged, or a railing fails code — every hour costs you. We move fast, work clean, and don&apos;t leave a job half-done.</p>

          <div className="service-grid">
            <article className="service-card" id="property">
              <div className="img-placeholder img-placeholder--card">
                <span>[Commercial security gate — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Commercial Property Repairs</h3>
                <ul className="bullet-list">
                  <li>Security gates &amp; access control frames</li>
                  <li>Loading dock repairs</li>
                  <li>Bollards — installation &amp; repair</li>
                  <li>Parking structure metalwork</li>
                  <li>Entry system frames</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="structural">
              <div className="img-placeholder img-placeholder--card">
                <span>[Structural steel framing — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Structural Steel Welding</h3>
                <ul className="bullet-list">
                  <li>Steel framing &amp; modifications</li>
                  <li>Beam installation &amp; reinforcement</li>
                  <li>Tenant improvement support</li>
                  <li>Structural repairs &amp; alterations</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="property-mgmt">
              <div className="img-placeholder img-placeholder--card">
                <span>[Apartment complex gate repair — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Property Management Welding</h3>
                <ul className="bullet-list">
                  <li>Apartment complexes &amp; multi-family</li>
                  <li>HOA community gates &amp; fences</li>
                  <li>Retail centers &amp; shopping plazas</li>
                  <li>Office buildings</li>
                  <li>Ongoing maintenance contracts</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="handrails">
              <div className="img-placeholder img-placeholder--card">
                <span>[Commercial ADA handrail system — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Handrails &amp; Guardrails</h3>
                <ul className="bullet-list">
                  <li>ADA-compliant handrails</li>
                  <li>Safety guardrails &amp; barriers</li>
                  <li>Code-compliant stair rail systems</li>
                  <li>Machine guarding fabrication</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="restaurant">
              <div className="img-placeholder img-placeholder--card">
                <span>[Restaurant storefront metalwork — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Restaurant &amp; Retail Welding</h3>
                <ul className="bullet-list">
                  <li>Kitchen equipment frame repairs</li>
                  <li>Storefront metalwork &amp; grilles</li>
                  <li>Safety barriers &amp; crowd-control rails</li>
                  <li>Custom display &amp; fixture fabrication</li>
                </ul>
              </div>
            </article>

            <article className="service-card" id="industrial">
              <div className="img-placeholder img-placeholder--card">
                <span>[Industrial on-site welding — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Industrial &amp; Contractor Support</h3>
                <ul className="bullet-list">
                  <li>Equipment frame repairs</li>
                  <li>Fabrication support for GCs</li>
                  <li>Construction site welding</li>
                  <li>Pre-construction metalwork</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* PROPERTY MANAGERS CALLOUT */}
      <section className="section section--light">
        <div className="container">
          <p className="section-label">For Property Managers &amp; HOAs</p>
          <h2 className="section-heading">Consistent. Reliable. On Your Call List.</h2>
          <p className="section-intro">If you manage multiple properties, you need one welder who picks up the phone, shows up on time, and doesn&apos;t create more work for you. That&apos;s the only kind of vendor relationship we know how to have.</p>

          <div className="trust-grid">
            <div className="trust-item">
              <h3 className="trust-item__heading">Multiple Properties, One Vendor</h3>
              <p className="trust-item__body">We work with property managers who need a go-to for everything from gate repairs to handrail installations across multiple sites.</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-item__heading">We Work Around Tenants</h3>
              <p className="trust-item__body">Early morning, weekends, scheduled windows — we coordinate around your operations so repairs don&apos;t disrupt residents or customers.</p>
            </div>
            <div className="trust-item">
              <h3 className="trust-item__heading">Documentation Available</h3>
              <p className="trust-item__body">Insurance certificates, licenses, and scope documentation available for your records and compliance requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2 className="cta-banner__heading">Every Hour Down Costs Money. Let&apos;s Fix It.</h2>
          <p className="cta-banner__sub">Free estimates, fast response, work done right the first time.</p>
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
          <h2 className="section-heading">Commercial Welding FAQ</h2>
          <FaqSection items={faqItems} />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section section--light">
        <div className="container">
          <p className="section-label">Also Available</p>
          <h2 className="section-heading">More from ECWelding</h2>
          <div className="service-grid" style={{ marginTop: "var(--sp-32)" }}>
            <Link href="/mobile-welding" className="service-card" style={{ textDecoration: "none" }}>
              <div className="img-placeholder img-placeholder--card"><span>[Mobile welding truck]</span></div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Mobile Welding</h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)" }}>Fully equipped on-site service. We come to your commercial location.</p>
              </div>
            </Link>
            <Link href="/custom-fabrication" className="service-card" style={{ textDecoration: "none" }}>
              <div className="img-placeholder img-placeholder--card"><span>[Custom fabrication shop]</span></div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Custom Fabrication</h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)" }}>Custom steel, aluminum, and stainless fabrication for commercial applications.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer
        tagline="Real welding. Real craftsmanship. Done right the first time."
        servicesTitle="Commercial"
        servicesLinks={[
          { label: "Property Repairs", href: "#property" },
          { label: "Structural Steel", href: "#structural" },
          { label: "Handrails", href: "#handrails" },
          { label: "Property Management", href: "#property-mgmt" },
        ]}
      />
    </>
  );
}
