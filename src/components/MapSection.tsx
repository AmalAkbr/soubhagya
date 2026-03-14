import styles from "./MapSection.module.css";

export default function MapSection() {
  return (
    <section className={styles.section} id="location">
      {/* Text side */}
      <div className={styles.info}>
        <p className="section-label">Find Us</p>
        <h2 className={`section-title ${styles.title}`}>
          Visit Our <em>Store</em>
        </h2>
        <div className={`divider divider-left ${styles.divider}`} />

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.icon}>📍</span>
            <div>
              <strong>Address</strong>
              <p>Ponnani Road, Edappal</p>
              <p>Malappuram, Kerala, India</p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.icon}>📞</span>
            <div>
              <strong>Phone &amp; WhatsApp</strong>
              <a href="tel:+919048630757">+91 90486 30757</a>
            </div>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.icon}>🕘</span>
            <div>
              <strong>Working Hours</strong>
              <p>All Days: 9am – 9pm</p>
            </div>
          </div>
        </div>

        <a
          href="https://maps.app.goo.gl/ZCH1rtmvtL2wRTMu7"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.directionsBtn}
          id="get-directions-btn"
        >
          Get Directions ↗
        </a>
      </div>

      {/* Map side */}
      <div className={styles.mapWrap}>
        <iframe
          title="Soubhagya Wedding Center Location"
          src="https://www.google.com/maps?q=Soubhagya+Wedding+Center,+Ponnani+Road,+Edappal,+Malappuram,+Kerala&output=embed&t=k"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
