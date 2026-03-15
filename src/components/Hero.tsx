"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const taglineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = taglineRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add(styles.visible), 300);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.imageWrap}>
        <Image
          src="/images/hero.png"
          alt="Soubhagya hero - woman in elegant silk saree"
          fill
          priority
          unoptimized
          style={{ objectFit: "cover", objectPosition: "50% 10%" }}
        />
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.label}>Est. Since Generations</p>
        <h1 className={styles.tagline} ref={taglineRef}>
          Curated for<br />
          <em>Elegance &amp; Grace</em>
        </h1>
        <p className={styles.subtitle}>
          Discover a world where every fabric tells a story of quality,<br className={styles.br} /> heritage, and timeless Indian style.
        </p>
        <div className={styles.ctas}>
          <a href="#collections" id="hero-collections-cta" className={styles.btnPrimary}>
            Explore Collections
          </a>
          <a href="#about" id="hero-story-cta" className={styles.btnSecondary}>
            Our Story
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
