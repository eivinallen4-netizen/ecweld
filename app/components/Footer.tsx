import Link from "next/link";

interface FooterLink { label: string; href: string }

interface FooterProps {
  tagline?: string;
  servicesTitle?: string;
  servicesLinks?: FooterLink[];
}

export default function Footer({
  tagline = "Real welding. Real craftsmanship. Done right the first time — by people who live right here.",
  servicesTitle = "Services",
  servicesLinks = [
    { label: "Residential Welding", href: "/residential-welding" },
    { label: "Commercial Welding", href: "/commercial-welding" },
    { label: "Mobile Welding", href: "/mobile-welding" },
    { label: "Custom Fabrication", href: "/custom-fabrication" },
  ],
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-logo">ECWelding</p>
            <p className="footer-tagline">{tagline}</p>
            <div className="footer-contact">
              <span>[Phone Number]</span>
              <span>[Email Address]</span>
              <span>[City, State]</span>
            </div>
          </div>

          <div>
            <p className="footer-col__heading">{servicesTitle}</p>
            <ul className="footer-links">
              {servicesLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-col__heading">Common Jobs</p>
            <ul className="footer-links">
              <li><Link href="/residential-welding">Gate Repair</Link></li>
              <li><Link href="/residential-welding">Fence Welding</Link></li>
              <li><Link href="/residential-welding">Handrail Fabrication</Link></li>
              <li><Link href="/commercial-welding">Structural Steel</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col__heading">Company</p>
            <ul className="footer-links">
              <li><a href="/#about">About</a></li>
              <li><a href="/#projects">Projects</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#contact">Free Estimate</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom__copy">&copy; 2025 ECWelding. All rights reserved. Licensed &amp; Insured.</p>
          <div className="footer-bottom__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
