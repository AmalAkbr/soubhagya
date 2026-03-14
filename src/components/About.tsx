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
              alt="Soubhagya artisan weaver at the handloom"
              fill
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeNum}>35+</span>
            <span className={styles.badgeLabel}>Years of Craft</span>
          </div>
        </div>

        <div className={styles.textCol}>
          <p className={`section-label fade-in fade-in-delay-1`}>Our Heritage</p>
          <h2 className={`section-title fade-in fade-in-delay-2`}>
            Threads of <em>Tradition</em>
          </h2>
          <div className={`divider divider-left fade-in fade-in-delay-2`} />
          <p className={`${styles.body} fade-in fade-in-delay-3`}>
            Soubhagya was born from a deep love for India&apos;s rich weaving traditions. For over seven decades, our family of artisans has hand-crafted some of the finest silk sarees, Banarasi weaves, and heritage fabrics — each piece a living testament to the skill passed down through generations.
          </p>
          <p className={`${styles.body} fade-in fade-in-delay-3`}>
            We believe that true luxury lies not in the price tag, but in the story behind every thread — the patient hands of the weaver, the ancient looms, the natural dyes, and the cultural pride stitched into every drape.
          </p>
          <div className={`${styles.pillars} fade-in fade-in-delay-4`}>
            {[
              { icon: "✦", title: "Handwoven", desc: "Every piece crafted on traditional looms" },
              { icon: "✦", title: "Pure Fabrics", desc: "Finest silk, cotton & zari threads" },
              { icon: "✦", title: "Heritage", desc: "Designs rooted in Indian culture" },
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
