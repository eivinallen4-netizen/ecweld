"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <Link href="/" className="site-logo">ECWelding</Link>

          <nav className="site-nav" aria-label="Primary">
            <a href="/#services">Services</a>
            <a href="/#projects">Projects</a>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="tel:[phone]" className="btn btn--secondary btn-call-desktop">Call Now</a>
            <a href="/#contact" className="btn btn--primary">Free Estimate</a>
          </div>

          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            &#9776;
          </button>
        </div>
      </div>

      <nav className={`mobile-nav${mobileOpen ? " is-open" : ""}`} aria-label="Mobile menu">
        <a href="/#services" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="/#projects" onClick={() => setMobileOpen(false)}>Projects</a>
        <a href="/#about" onClick={() => setMobileOpen(false)}>About</a>
        <a href="/#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        <a href="tel:[phone]">Call Now</a>
      </nav>
    </header>
  );
}
