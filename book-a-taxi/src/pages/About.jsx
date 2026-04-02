function About() {
  return (
    <section className="page">
      <div className="section-header">
        <p className="eyebrow">About Us</p>
        <h2>Who we are</h2>
        <p>
          Book_A_Taxi is a front-end taxi ride booking application designed to
          provide a clean, organized, and user-friendly experience.
        </p>
      </div>

      <div className="card-grid">
        <article className="info-card">
          <h3>Our Mission</h3>
          <p>
            To make transportation booking simple, efficient, and accessible for
            everyday riders.
          </p>
        </article>

        <article className="info-card">
          <h3>Our Focus</h3>
          <p>
            We focus on clear navigation, easy service browsing, and quick ride
            booking with basic validation.
          </p>
        </article>

        <article className="info-card">
          <h3>Our Promise</h3>
          <p>
            Safe, comfortable, and reliable travel options for local and
            long-distance needs.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
