import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  page: { backgroundColor: "#f5f5f5", minHeight: "100vh", color: "#222" },
  header: { backgroundColor: "#0d1b2a", color: "white", padding: "48px 0", textAlign: "center" },
  title: { fontSize: "32px", fontWeight: 700 },
  subtitle: { marginTop: "8px", fontSize: "20px" },
  section: { maxWidth: "900px", margin: "0 auto", padding: "24px" },
  card: {
    backgroundColor: "white",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "24px",
  },
  cardTitle: { fontSize: "24px", fontWeight: 600, marginBottom: "12px" },
  galleryImg: { width: "100%", borderRadius: "12px" },
  footer: {
    textAlign: "center",
    padding: "16px 0",
    backgroundColor: "#0d1b2a",
    color: "white",
    marginTop: "40px",
  },
});

export default function AryabhataPortfolio() {
  return (
    <div {...stylex.props(styles.page)}>
      <header {...stylex.props(styles.header)}>
        <h1 {...stylex.props(styles.title)}>
          Aryabhata Science & Exploration Center
        </h1>
        <p {...stylex.props(styles.subtitle)}>Portfolio & Overview</p>
      </header>

      <section {...stylex.props(styles.section)}>
        <div {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.cardTitle)}>About</h2>
          <p>
            The Aryabhata Science & Exploration Center is dedicated to promoting
            scientific learning and astronomy awareness.
          </p>
        </div>

        <div {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.cardTitle)}>Programs & Activities</h2>
          <ul>
            <li>Science Exhibits</li>
            <li>Astronomy Sessions</li>
            <li>Workshops</li>
            <li>Outreach Programs</li>
          </ul>
        </div>

        <div {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.cardTitle)}>Gallery</h2>
          <img
            src="https://via.placeholder.com/800x300"
            {...stylex.props(styles.galleryImg)}
          />
        </div>

        <div {...stylex.props(styles.card)}>
          <h2 {...stylex.props(styles.cardTitle)}>Contact</h2>
          <p>Email: info@aryabhataexplore.com</p>
          <p>Phone: +91 90000 00000</p>
        </div>
      </section>

      <footer {...stylex.props(styles.footer)}>
        © 2025 Aryabhata Science & Exploration Center
      </footer>
    </div>
  );
}
