"use client";
import { useEffect, useRef } from "react";
import styles from "./Collections.module.css";

const collections = [
  {
    id: "col-banarasi",
    name: "Banarasi Silks",
    desc: "Opulent weaves from Varanasi's ancient looms, interlaced with gold and silver zari.",
    tag: "Signature Collection",
    accent: "#9e7c4a",
  },
  {
    id: "col-kanjivaram",
    name: "Kanjivaram",
    desc: "The pride of South India — pure mulberry silk sarees with bold contrast borders.",
    tag: "Heritage Weave",
    accent: "#6b1e2f",
  },
  {
    id: "col-chanderi",
    name: "Chanderi Classics",
    desc: "Sheer, lightweight fabric with subtle golden motifs — perfect for every season.",
    tag: "Everyday Elegance",
    accent: "#2e5a4b",
  },
  {
    id: "col-handblock",
    name: "Hand Block Prints",
    desc: "Natural dyes and hand-carved wooden blocks create one-of-a-kind earthy patterns.",
    tag: "Artisan Craft",
    accent: "#4a3520",
  },
];

export default function Collections() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.collections} id="collections" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Offer</p>
          <h2 className={`section-title ${styles.title}`}>
            Our <em>Collections</em>
          </h2>
          <div className="divider" />
          <p className={styles.intro}>
            Each collection is a chapter — woven from the finest materials, rooted in tradition, and curated for the modern Indian woman.
          </p>
        </div>

        <div className={styles.grid}>
          {collections.map((col, i) => (
            <div
              key={col.id}
              id={col.id}
              className={`${styles.card} fade-in fade-in-delay-${i + 1}`}
              style={{ "--accent": col.accent } as React.CSSProperties}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardTag}>{col.tag}</span>
                <div className={styles.cardPattern}>
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3" />
                    <circle cx="50" cy="10" r="2" fill="currentColor" />
                    <circle cx="90" cy="50" r="2" fill="currentColor" />
                    <circle cx="50" cy="90" r="2" fill="currentColor" />
                    <circle cx="10" cy="50" r="2" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardName}>{col.name}</h3>
                <p className={styles.cardDesc}>{col.desc}</p>
                <div className={styles.cardLine} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
