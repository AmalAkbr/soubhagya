"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Our Story" },
    { href: "#collections", label: "Collections" },
    { href: "#lookbook", label: "Lookbook" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navInner}>
        <a href="#" className={styles.logo}>
          <Image
            src="/images/logo-transparent.png"
            alt="Soubhagya Wedding Center Logo"
            width={160}
            height={80}
            priority
            className={styles.logoImg}
          />
        </a>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          id="menu-toggle"
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
