"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className={`container ${styles.inner}`}>
        <div className={`${styles.imageCol} fade-in`}>
          <div className={styles.imgFrame}>
            <Image
              src="/images/about.png"
              alt="Premium curated textile collection"
              fill
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>35+</span>
            <span className={styles.badgeLabel}>Years of Excellence</span>
          </div>
        </div>

        <div className={styles.textCol}>
          <p className={`section-label fade-in fade-in-delay-1`}>Our Heritage</p>
          <h2 className={`section-title fade-in fade-in-delay-2`}>
            Threads of <em>Tradition</em>
          </h2>
          <div className={`divider divider-left fade-in fade-in-delay-2`} />
          <p className={`${styles.body} fade-in fade-in-delay-3`}>
            Soubhagya was born from a passion for preserving and providing India&apos;s finest textiles. For over three decades, we have carefully curated an exquisite range of silk sarees, Banarasi weaves, and heritage fabrics — each piece sourced directly from master artisans across the country.
          </p>
          <p className={`${styles.body} fade-in fade-in-delay-3`}>
            We believe that true luxury lies in the curation of quality — the mastery of the artisans we source from, the authenticity of the fabrics, and the cultural pride stitched into every drape.
          </p>
          <div className={`${styles.pillars} fade-in fade-in-delay-4`}>
            {[
              { icon: "✦", title: "Curated Excellence", desc: "Each piece handpicked from master artisans" },
              { icon: "✦", title: "Pure Fabrics", desc: "Finest silk, cotton & zari threads" },
              { icon: "✦", title: "Authenticity", desc: "Directly sourced from heritage clusters" },
            ].map((p) => (
              <div key={p.title} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <strong>{p.title}</strong>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
