"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Lookbook.module.css";

const models = [
  {
    id: "look-teal",
    src: "/images/model1.png",
    alt: "Model in teal Kanjivaram silk saree",
    label: "Kanjivaram Teal",
    caption: "Pure silk with gold zari border",
  },
  {
    id: "look-wine",
    src: "/images/model2.png",
    alt: "Model in wine silk lehenga with embroidery",
    label: "Embroidered Silk Lehenga",
    caption: "Mirror work & heavy embroidery",
  },
  {
    id: "look-ivory",
    src: "/images/model3.png",
    alt: "Model in ivory gold tissue silk saree",
    label: "Ivory Tissue Silk",
    caption: "Ethereal gold tissue drape",
  },
  {
    id: "look-sapphire",
    src: "/images/model4.png",
    alt: "Model in sapphire Banarasi silk saree",
    label: "Banarasi Sapphire",
    caption: "Intricate gold brocade weave",
  },
];

export default function Lookbook() {
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
    <section className={styles.lookbook} id="lookbook" ref={sectionRef}>
      <div className={styles.headingBlock}>
        <p className="section-label">Editorial</p>
        <h2 className={`section-title ${styles.title}`}>
          The <em>Lookbook</em>
        </h2>
        <div className="divider" />
        <p className={styles.intro}>
          Celebrating the beauty of the Indian woman — graceful, powerful, timeless.
        </p>
      </div>

      <div className={styles.grid}>
        {models.map((model, i) => (
          <div
            key={model.id}
            id={model.id}
            className={`${styles.card} fade-in fade-in-delay-${(i % 2) + 1}`}
          >
            <div className={styles.imageWrap}>
              <Image
                src={model.src}
                alt={model.alt}
                fill
                quality={90}
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardInfo}>
                  <span className={styles.cardLabel}>{model.label}</span>
                  <span className={styles.cardCaption}>{model.caption}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
