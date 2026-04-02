import { useEffect, useMemo, useState } from "react";

const API_URL = "http://localhost:3000/bookings";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    pickup: "",
    dropoff: "",
    service: "",
    date: ""
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    try {
      setLoadingBookings(true);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Unable to load bookings.");
      }

      const data = await response.json();
      setBookings([...data].reverse());
    } catch (error) {
      setStatusMessage(
        "Could not load bookings. Make sure JSON Server is running."
      );
      setStatusType("error");
    } finally {
      setLoadingBookings(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: ""
    }));
  }

  function validateForm() {
    const newErrors = {};
    const phonePattern = /^[0-9]{10,15}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phonePattern.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must contain 10 to 15 digits only.";
    }

    if (!formData.pickup.trim()) {
      newErrors.pickup = "Pickup location is required.";
    }

    if (!formData.dropoff.trim()) {
      newErrors.dropoff = "Drop-off location is required.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a ride date.";
    }

    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage("Please correct the highlighted form errors.");
      setStatusType("error");
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Booking submission failed.");
      }

      setStatusMessage("Booking submitted successfully.");
      setStatusType("success");

      setFormData({
        fullName: "",
        phone: "",
        pickup: "",
        dropoff: "",
        service: "",
        date: ""
      });

      setErrors({});
      fetchBookings();
    } catch (error) {
      setStatusMessage(
        "Could not submit booking. Make sure JSON Server is running."
      );
      setStatusType("error");
    }
  }

  return (
    <section className="page">
      <div className="section-header">
        <p className="eyebrow">Booking</p>
        <h2>Book a ride</h2>
        <p>
          Fill out the form below to schedule a taxi ride. This form includes
          basic client-side validation and saves data to JSON Server.
        </p>
      </div>

      <div className="booking-layout">
        <div className="info-card booking-card">
          <h3>Ride Details</h3>

          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="error">{errors.fullName}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="text"
                name="phone"
                placeholder="Enter digits only"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="pickup">Pickup Location</label>
              <input
                id="pickup"
                type="text"
                name="pickup"
                placeholder="Enter pickup location"
                value={formData.pickup}
                onChange={handleChange}
              />
              {errors.pickup && <p className="error">{errors.pickup}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="dropoff">Drop-off Location</label>
              <input
                id="dropoff"
                type="text"
                name="dropoff"
                placeholder="Enter destination"
                value={formData.dropoff}
                onChange={handleChange}
              />
              {errors.dropoff && <p className="error">{errors.dropoff}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="service">Service Type</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="City Ride">City Ride</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Hourly Booking">Hourly Booking</option>
                <option value="Out-of-Town Trip">Out-of-Town Trip</option>
              </select>
              {errors.service && <p className="error">{errors.service}</p>}
            </div>

            <div className="form-field">
              <label htmlFor="date">Ride Date</label>
              <input
                id="date"
                type="date"
                name="date"
                min={today}
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <p className="error">{errors.date}</p>}
            </div>

            <button type="submit" className="btn btn-primary full-width">
              Submit Booking
            </button>

            {statusMessage && (
              <p className={`status-message ${statusType}`}>{statusMessage}</p>
            )}
          </form>
        </div>

        <div className="info-card booking-card">
          <h3>Recent Bookings</h3>

          {loadingBookings ? (
            <p>Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <p>No bookings saved yet.</p>
          ) : (
            <div className="booking-list">
              {bookings.map((booking) => (
                <article className="booking-item" key={booking.id}>
                  <h4>{booking.fullName}</h4>
                  <p>
                    <strong>Service:</strong> {booking.service}
                  </p>
                  <p>
                    <strong>From:</strong> {booking.pickup}
                  </p>
                  <p>
                    <strong>To:</strong> {booking.dropoff}
                  </p>
                  <p>
                    <strong>Date:</strong> {booking.date}
                  </p>
                  <p>
                    <strong>Phone:</strong> {booking.phone}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Booking;
