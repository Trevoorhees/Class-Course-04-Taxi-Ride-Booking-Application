function Contact() {
  return (
    <section className="page">
      <div className="section-header">
        <p className="eyebrow">Contact</p>
        <h2>Get in touch</h2>
        <p>
          Reach out with ride questions, booking support, or general inquiries.
        </p>
      </div>

      <div className="contact-grid">
        <article className="info-card">
          <h3>Office</h3>
          <p>Book_A_Taxi Headquarters</p>
          <p>123 Main Street</p>
          <p>Los Angeles, CA 90001</p>
        </article>

        <article className="info-card">
          <h3>Phone</h3>
          <p>(555) 123-4567</p>
          <p>Available daily for customer support.</p>
        </article>

        <article className="info-card">
          <h3>Email</h3>
          <p>support@bookataxi.com</p>
          <p>bookings@bookataxi.com</p>
        </article>
      </div>
    </section>
  );
}

export default Contact;
