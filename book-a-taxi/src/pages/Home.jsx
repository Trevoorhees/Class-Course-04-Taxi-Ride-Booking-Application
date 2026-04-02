import { Link } from "react-router";

function Home() {
  return (
    <section className="page">
      <div className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Fast • Reliable • Comfortable</p>
          <h2>Book your next taxi ride in minutes.</h2>
          <p className="hero-text">
            Book_A_Taxi helps riders schedule city travel, airport pickups,
            hourly rides, and out-of-town trips with a clean and modern booking
            experience.
          </p>

          <div className="hero-actions">
            <Link to="/booking" className="btn btn-primary">
              Book Now
            </Link>

            <Link to="/services" className="btn btn-secondary">
              View Services
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-stat">
            <span className="hero-stat-number">24/7</span>
            <span className="hero-stat-label">Ride support</span>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-number">4</span>
            <span className="hero-stat-label">Core service types</span>
          </div>

          <div className="hero-stat">
            <span className="hero-stat-number">1</span>
            <span className="hero-stat-label">Easy booking form</span>
          </div>
        </div>
      </div>

      <div className="card-grid">
        <article className="info-card">
          <h3>Airport Transfers</h3>
          <p>
            Pre-book dependable airport pickups and drop-offs for stress-free
            travel.
          </p>
        </article>

        <article className="info-card">
          <h3>City Rides</h3>
          <p>
            Get across town quickly with affordable and convenient local taxi
            service.
          </p>
        </article>

        <article className="info-card">
          <h3>Flexible Scheduling</h3>
          <p>
            Choose your service type, pickup point, destination, and ride date
            in one place.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Home;
