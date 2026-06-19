import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";

const faqItems = [
  {
    q: "What services do you offer?",
    a: "Residential and commercial welding, mobile call-outs, and custom fabrication. Gates, fences, railings, structural work, decorative metalwork — if it's metal and broken, bent, or needs to exist, we handle it.",
  },
  {
    q: "Do you come to us, or do we bring work to you?",
    a: "We come to you. Our mobile rig is fully equipped — we work at homes, businesses, job sites, wherever the work is. You don't move the problem; we come to it.",
  },
  {
    q: "Do you work with property managers and HOAs?",
    a: "Yes, and we take that relationship seriously. If you manage multiple properties, you need a welder who answers the phone and stays consistent. We do both.",
  },
  {
    q: "Can you repair wrought iron fences and gates?",
    a: "Yes — it's some of our most common work. Rust, bent sections, broken hinges, missing pickets. We restore them so they look right and hold strong again.",
  },
  {
    q: "Do you offer emergency repairs?",
    a: "Yes. When something critical fails, reach out and tell us what happened. We'll do everything we can to get there fast.",
  },
  {
    q: "What metals can you weld?",
    a: "Steel, stainless, aluminum, wrought iron — and depending on the job, other alloys too. Tell us what you're working with and we'll tell you exactly what's possible.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, on every single job. We do it right so you never have to worry about what happens after we leave.",
  },
  {
    q: "How much does welding cost?",
    a: "Every job is different — materials, hours, and whether we're coming to you all play a role. That's why we give free estimates. A real number before anything starts.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="section-label">Where Heat Meets Precision</p>
            <h1 className="hero__headline">Metal That Holds. Work You Can Stand Behind.</h1>
            <ul className="hero__features">
              <li>Licensed &amp; fully insured — every job, no exceptions</li>
              <li>Mobile welding — we come to you</li>
              <li>Custom fabrication built to your exact specs</li>
              <li>Straight timelines, no runaround</li>
              <li>Emergency repairs when you need them most</li>
            </ul>
            <div className="btn-group">
              <a href="#contact" className="btn btn--primary">Get a Free Estimate</a>
              <a href="tel:[phone]" className="btn btn--secondary">Call Us Now</a>
            </div>
          </div>
          <div className="hero__image">
            <div className="img-placeholder">
              <span>[Hero image: welder on job site, sparks flying — 900×540]</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar__inner">
            <span className="trust-badge">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 2L17 5V10C17 14 13.8 17.5 10 19C6.2 17.5 3 14 3 10V5L10 2Z"/><polyline points="7,10 9,12 13.5,7.5"/></svg>
              Licensed &amp; Insured
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="1" y="6" width="11" height="8" rx="1"/><path d="M12 8H15.5L19 12V14H12V8Z"/><circle cx="4.5" cy="15.5" r="1.5"/><circle cx="15.5" cy="15.5" r="1.5"/></svg>
              Mobile — We Come to You
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 2C7 2 4.5 4.5 4.5 7.5C4.5 12 10 18 10 18C10 18 15.5 12 15.5 7.5C15.5 4.5 13 2 10 2Z"/><circle cx="10" cy="7.5" r="2"/></svg>
              Locally Rooted
            </span>
            <span className="trust-badge">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 2H9L18 11C18.6 11.6 18.6 12.4 18 13L13 18C12.4 18.6 11.6 18.6 11 18L2 9V2Z"/><circle cx="6" cy="6" r="1.2"/></svg>
              Free Estimates
            </span>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section className="section" id="services">
        <div className="container">
          <p className="section-label">What We Do</p>
          <h2 className="section-heading">Built for Every Job, Big or Small</h2>
          <p className="section-intro">From a bent gate at your house to structural steel at a commercial site — we handle it all. Fully equipped, fully insured, and showing up when we say we will.</p>

          <div className="service-grid">
            <article className="service-card">
              <div className="img-placeholder img-placeholder--card">
                <span>[Residential gate repair — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Residential Welding</h3>
                <ul className="bullet-list">
                  <li>Gate repair &amp; fabrication</li>
                  <li>Fence welding &amp; repair</li>
                  <li>Handrails &amp; stair railings</li>
                  <li>Decorative metalwork</li>
                  <li>Structural repairs</li>
                </ul>
                <Link href="/residential-welding" className="service-card__link">All residential services →</Link>
              </div>
            </article>

            <article className="service-card">
              <div className="img-placeholder img-placeholder--card">
                <span>[Commercial security gate — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Commercial Welding</h3>
                <ul className="bullet-list">
                  <li>Security gates &amp; bollards</li>
                  <li>Structural steel welding</li>
                  <li>Property management work</li>
                  <li>ADA handrails &amp; guardrails</li>
                  <li>Restaurant &amp; retail metalwork</li>
                </ul>
                <Link href="/commercial-welding" className="service-card__link">All commercial services →</Link>
              </div>
            </article>

            <article className="service-card">
              <div className="img-placeholder img-placeholder--card">
                <span>[Mobile welding truck at job site — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Mobile Welding</h3>
                <ul className="bullet-list">
                  <li>Homes, businesses, job sites</li>
                  <li>Emergency same-day call-outs</li>
                  <li>Fully equipped mobile rig</li>
                  <li>No haul-in required</li>
                  <li>Available throughout [Service Area]</li>
                </ul>
                <Link href="/mobile-welding" className="service-card__link">About mobile welding →</Link>
              </div>
            </article>

            <article className="service-card">
              <div className="img-placeholder img-placeholder--card">
                <span>[Custom metal fabrication in shop — 560×180]</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__heading">Custom Fabrication</h3>
                <ul className="bullet-list">
                  <li>Steel, aluminum, stainless</li>
                  <li>Custom brackets, frames &amp; supports</li>
                  <li>Decorative ironwork</li>
                  <li>Built to your exact spec</li>
                  <li>Napkin sketch to finished piece</li>
                </ul>
                <Link href="/custom-fabrication" className="service-card__link">About custom fabrication →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA BANNER */}
      <div className="cta-banner">
        <svg className="spark-burst" viewBox="0 0 400 400" aria-hidden="true">
          <g transform="translate(200,200)" stroke="currentColor" strokeLinecap="round" opacity="0.12">
            <line x1="0" y1="-28" x2="0" y2="-118" strokeWidth="2"/>
            <line x1="0" y1="-26" x2="0" y2="-98" strokeWidth="1.5" transform="rotate(22.5)"/>
            <line x1="0" y1="-28" x2="0" y2="-112" strokeWidth="2" transform="rotate(45)"/>
            <line x1="0" y1="-26" x2="0" y2="-90" strokeWidth="1.5" transform="rotate(67.5)"/>
            <line x1="0" y1="-28" x2="0" y2="-120" strokeWidth="2" transform="rotate(90)"/>
            <line x1="0" y1="-26" x2="0" y2="-95" strokeWidth="1.5" transform="rotate(112.5)"/>
            <line x1="0" y1="-28" x2="0" y2="-108" strokeWidth="2" transform="rotate(135)"/>
            <line x1="0" y1="-26" x2="0" y2="-88" strokeWidth="1.5" transform="rotate(157.5)"/>
            <line x1="0" y1="-28" x2="0" y2="-115" strokeWidth="2" transform="rotate(180)"/>
            <line x1="0" y1="-26" x2="0" y2="-93" strokeWidth="1.5" transform="rotate(202.5)"/>
            <line x1="0" y1="-28" x2="0" y2="-110" strokeWidth="2" transform="rotate(225)"/>
            <line x1="0" y1="-26" x2="0" y2="-96" strokeWidth="1.5" transform="rotate(247.5)"/>
            <line x1="0" y1="-28" x2="0" y2="-118" strokeWidth="2" transform="rotate(270)"/>
            <line x1="0" y1="-26" x2="0" y2="-90" strokeWidth="1.5" transform="rotate(292.5)"/>
            <line x1="0" y1="-28" x2="0" y2="-106" strokeWidth="2" transform="rotate(315)"/>
            <line x1="0" y1="-26" x2="0" y2="-94" strokeWidth="1.5" transform="rotate(337.5)"/>
          </g>
        </svg>
        <div className="container">
          <h2 className="cta-banner__heading">Stop Putting It Off. Let&apos;s Fix It.</h2>
          <p className="cta-banner__sub">Free estimates, no pressure. A real number before anything starts — no games.</p>
          <div className="btn-group" style={{ justifyContent: "center" }}>
            <a href="#contact" className="btn btn--inverse">Get My Free Estimate</a>
            <a href="tel:[phone]" className="btn btn--outline-inv">Call Us Now</a>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="section" id="about">
        <div className="container">
          <p className="section-label">Why ECWelding</p>
          <h2 className="section-heading">We&apos;re Not the Cheapest — We&apos;re the Right Call</h2>

          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-item__icon">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 4C18 4 26 11 26 19C26 24.5 22.5 28 18 28C13.5 28 10 24.5 10 19C10 14 13 10 13 10C13 10 14 16 18 16C18 16 16 12 18 4Z"/></svg>
              </div>
              <h3 className="trust-item__heading">Battle-Tested Experience</h3>
              <p className="trust-item__body">We&apos;ve burned through bad beads and learned from every one. What you get is expertise earned on real jobs — not from a textbook.</p>
            </div>

            <div className="trust-item">
              <div className="trust-item__icon">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="14"/><polyline points="11,18 15.5,22.5 25,13"/></svg>
              </div>
              <h3 className="trust-item__heading">No Shortcuts. Ever.</h3>
              <p className="trust-item__body">Bad welds fail. We use the right materials, the right technique, and we own the result. Your job gets our name on it — that means something to us.</p>
            </div>

            <div className="trust-item">
              <div className="trust-item__icon">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="18" cy="18" r="14"/><polyline points="18,10 18,18 24,24"/></svg>
              </div>
              <h3 className="trust-item__heading">We Actually Show Up</h3>
              <p className="trust-item__body">We give you a time, we&apos;re there. We give you a price, we stick to it. No vanishing acts, no vague timelines.</p>
            </div>

            <div className="trust-item">
              <div className="trust-item__icon">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 3L32 8.5V17C32 25 25.5 31.5 18 34C10.5 31.5 4 25 4 17V8.5L18 3Z"/><polyline points="12,18 16,22 24,14"/></svg>
              </div>
              <h3 className="trust-item__heading">Licensed &amp; Insured</h3>
              <p className="trust-item__body">Covered on every single job so you never have to worry about what happens after we leave.</p>
            </div>

            <div className="trust-item">
              <div className="trust-item__icon">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6C4 4.9 4.9 4 6 4H30C31.1 4 32 4.9 32 6V22C32 23.1 31.1 24 30 24H13L4 32V6Z"/></svg>
              </div>
              <h3 className="trust-item__heading">Straight Talk, Always</h3>
              <p className="trust-item__body">You&apos;ll know what you&apos;re getting, what it costs, and when it&apos;ll be done — before we strike an arc. No surprise invoices, no fine print.</p>
            </div>

            <div className="trust-item">
              <div className="trust-item__icon">
                <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2C12 2 7 7 7 13C7 21 18 34 18 34C18 34 29 21 29 13C29 7 24 2 18 2Z"/><circle cx="18" cy="13" r="4"/></svg>
              </div>
              <h3 className="trust-item__heading">This Is Our Backyard</h3>
              <p className="trust-item__body">We live and work right here. Same neighborhoods, same codes, same neighbors — and we protect our reputation with every job.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* PROJECTS GALLERY */}
      <section className="section section--light" id="projects">
        <div className="container">
          <p className="section-label">The Work Speaks for Itself</p>
          <h2 className="section-heading">Recent Jobs</h2>

          <div className="gallery-grid">
            <div className="gallery-item gallery-item--large">
              <div className="img-placeholder">
                <span>[Custom driveway gate installation — 560×332]</span>
              </div>
              <div className="gallery-caption">Custom Driveway Gate — Residential</div>
            </div>
            <div className="gallery-item">
              <div className="img-placeholder img-placeholder--thumb"><span>[Wrought iron fence repair]</span></div>
              <div className="gallery-caption">Fence Repair</div>
            </div>
            <div className="gallery-item">
              <div className="img-placeholder img-placeholder--thumb"><span>[Commercial handrail system]</span></div>
              <div className="gallery-caption">Commercial Handrails</div>
            </div>
            <div className="gallery-item">
              <div className="img-placeholder img-placeholder--thumb"><span>[Apartment complex gate]</span></div>
              <div className="gallery-caption">Apartment Gate</div>
            </div>
            <div className="gallery-item">
              <div className="img-placeholder img-placeholder--thumb"><span>[Structural beam reinforcement]</span></div>
              <div className="gallery-caption">Structural Repair</div>
            </div>
            <div className="gallery-item">
              <div className="img-placeholder img-placeholder--thumb"><span>[Custom pergola steel frame]</span></div>
              <div className="gallery-caption">Custom Pergola</div>
            </div>
            <div className="gallery-item">
              <div className="img-placeholder img-placeholder--thumb"><span>[Retail storefront metalwork]</span></div>
              <div className="gallery-caption">Retail Storefront</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <div className="container">
          <p className="section-label">Don&apos;t Take Our Word for It</p>
          <h2 className="section-heading">Real People. Real Jobs. Real Results.</h2>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="review-quote">&ldquo;Our gate had been dragging for two years. ECWelding came out, fixed it same week, and it swings better than when it was brand new. I wish I&apos;d called sooner.&rdquo;</blockquote>
              <div className="review-author">
                <div className="img-placeholder img-placeholder--avatar"><span></span></div>
                <div>
                  <p className="review-author__name">[Homeowner Name]</p>
                  <p className="review-author__role">Residential Customer</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="review-quote">&ldquo;I manage five properties and I can&apos;t have vendors who disappear. ECWelding is on every work order list I have — they pick up the phone and I&apos;ve never had to call them back for the same issue twice.&rdquo;</blockquote>
              <div className="review-author">
                <div className="img-placeholder img-placeholder--avatar"><span></span></div>
                <div>
                  <p className="review-author__name">[Property Manager Name]</p>
                  <p className="review-author__role">Property Manager</p>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="review-quote">&ldquo;In this industry a bad weld costs you way more than it saves. ECWelding is the only crew I trust on structural work. They understand tolerances and don&apos;t cut corners under pressure.&rdquo;</blockquote>
              <div className="review-author">
                <div className="img-placeholder img-placeholder--avatar"><span></span></div>
                <div>
                  <p className="review-author__name">[Contractor Name]</p>
                  <p className="review-author__role">General Contractor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* SERVICE AREAS */}
      <section className="section section--light">
        <div className="container">
          <div className="areas-layout">
            <div>
              <div className="img-placeholder img-placeholder--wide" style={{ height: "320px" }}>
                <span>[Map: service area coverage — 560×320]</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-32)" }}>
              <div>
                <p className="section-label">Close Enough to Count</p>
                <h2 className="section-heading">We Work Right in Your Neighborhood</h2>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  We&apos;re not dispatching from two counties over. Same communities, same roads, same neighbors — that means faster response and someone with real skin in the game.
                </p>
              </div>

              <div>
                <p className="section-label">Cities &amp; Communities Served</p>
                <ul className="areas-list">
                  <li>[Primary City]</li>
                  <li>[Neighboring City]</li>
                  <li>[Community Name]</li>
                  <li>[Community Name]</li>
                  <li>[Community Name]</li>
                  <li>[Community Name]</li>
                  <li>[Community Name]</li>
                  <li>[Community Name]</li>
                </ul>
              </div>

              <div>
                <p className="section-label">Available Throughout the Area</p>
                <ul className="check-list">
                  <li>Residential welding</li>
                  <li>Commercial welding</li>
                  <li>Mobile welding</li>
                  <li>Custom fabrication</li>
                </ul>
              </div>

              <a href="#contact" className="btn btn--primary" style={{ alignSelf: "flex-start" }}>Check Service Availability</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <p className="section-label">Before You Call</p>
          <h2 className="section-heading">Questions We Hear All the Time</h2>
          <FaqSection items={faqItems} />
        </div>
      </section>

      {/* WELD BEAD DIVIDER */}
      <div className="weld-bead-divider">
        <svg viewBox="0 0 800 14" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="weldbead" x="0" y="0" width="20" height="14" patternUnits="userSpaceOnUse">
              <path d="M0,7 Q5,1 10,7 Q15,13 20,7" stroke="#C8C8C8" strokeWidth="1.5" fill="none"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="800" height="14" fill="url(#weldbead)"/>
        </svg>
      </div>

      {/* CONTACT */}
      <section className="section section--dark" id="contact">
        <div className="container">
          <div className="contact-layout">
            <div>
              <p className="section-label" style={{ color: "#888" }}>Let&apos;s Get to Work</p>
              <h2 className="section-heading" style={{ color: "var(--text-inverse)", fontSize: "clamp(24px, 4vw, 34px)" }}>
                Tell Us What You&apos;ve Got — We&apos;ll Give You a Real Answer
              </h2>
              <p style={{ fontSize: "16px", color: "#AAAAAA", lineHeight: "1.7", marginBottom: "var(--sp-32)" }}>
                No sales pitch. Describe what&apos;s broken or what you want built and we&apos;ll get back to you with a straight estimate. Free, always.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-item__label">Phone</span>
                  <span className="contact-item__value">[Phone Number]</span>
                </div>
                <div className="contact-item">
                  <span className="contact-item__label">Email</span>
                  <span className="contact-item__value">[Email Address]</span>
                </div>
                <div className="contact-item">
                  <span className="contact-item__label">Service Area</span>
                  <span className="contact-item__value">[City, State] &amp; Surrounding Areas</span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <p className="form-label">Free Estimate — No Obligation</p>
              <form style={{ display: "flex", flexDirection: "column", gap: "var(--sp-16)" }}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" placeholder="First name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" placeholder="Last name" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="(555) 000-0000" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="your@email.com" />
                </div>
                <div className="form-field">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service">
                    <option value="">Select a service...</option>
                    <option>Residential Welding</option>
                    <option>Commercial Welding</option>
                    <option>Mobile Welding</option>
                    <option>Custom Fabrication</option>
                    <option>Emergency Repair</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="desc">Project Description</label>
                  <textarea id="desc" rows={4} placeholder="Describe your project or what needs fixing..."></textarea>
                </div>
                <button type="submit" className="btn btn--primary btn--full">Send My Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
