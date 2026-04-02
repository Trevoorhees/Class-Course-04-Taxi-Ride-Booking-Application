function Services() {
  const services = [
    {
      title: "City Ride",
      description:
        "Perfect for local transportation to work, shopping, appointments, and everyday travel."
    },
    {
      title: "Airport Transfer",
      description:
        "Reliable airport pickups and drop-offs scheduled in advance for convenience."
    },
    {
      title: "Hourly Booking",
      description:
        "Reserve a taxi for flexible hourly use when you need multiple stops."
    },
    {
      title: "Out-of-Town Trip",
      description:
        "Comfortable rides for longer-distance travel outside the city."
    }
  ];

  return (
    <section className="page">
      <div className="section-header">
        <p className="eyebrow">Our Services</p>
        <h2>Choose the ride that fits your trip</h2>
        <p>
          We offer multiple service categories so riders can choose the best
          option for their travel needs.
        </p>
      </div>

      <div className="card-grid">
        {services.map((service) => (
          <article className="info-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
