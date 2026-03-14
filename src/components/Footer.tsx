import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.topBand}>
        <div className="container">
          <div className={styles.topInner}>
            <div className={styles.brand}>
              <a href="#">
                <Image
                  src="/images/logo-transparent.png"
                  alt="Soubhagya Wedding Center Logo"
                  width={200}
                  height={100}
                  className={styles.logoImg}
                />
              </a>
              <p className={styles.tagline}>Where tradition meets elegance.</p>
              <div className={styles.socialRow}>
                {[
                  { id: "social-instagram", href: "#", label: "Instagram" },
                  { id: "social-facebook", href: "#", label: "Facebook" },
                  { id: "social-pinterest", href: "#", label: "Pinterest" },
                ].map((s) => (
                  <a key={s.id} id={s.id} href={s.href} className={styles.socialLink}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.contactGrid}>
              <div className={styles.contactBlock}>
                <h4 className={styles.contactHeading}>Visit Us</h4>
                <p>123, Silk Bazaar Lane,</p>
                <p>Varanasi, Uttar Pradesh — 221001</p>
                <p>India</p>
              </div>
              <div className={styles.contactBlock}>
                <h4 className={styles.contactHeading}>Reach Out</h4>
                <p>soubhagya@textiles.in</p>
                <p>+91 98765 43210</p>
                <p>Mon–Sat: 10am – 7pm</p>
              </div>
              <div className={styles.contactBlock}>
                <h4 className={styles.contactHeading}>Explore</h4>
                <a href="#about">Our Story</a>
                <a href="#collections">Collections</a>
                <a href="#lookbook">Lookbook</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Soubhagya Textiles. All rights reserved. Crafted with love in India.</p>
      </div>
    </footer>
  );
}
