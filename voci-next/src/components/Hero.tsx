export default function Hero() {
  return (
    <header className="hero-section bg-gradient text-white d-flex align-items-center" id="hero-section">
      <div className="container position-relative z-1">
        <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInDown">
          Empower Your Voice, Transform Your Future
        </h1>
        <p className="lead mb-5 animate__animated animate__fadeInUp animate__delay-1s">
          Join VOCI 2026 and develop exceptional communication skills, authentic personal branding, and principled leadership to create meaningful impact.
        </p>
        <div className="d-flex justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-2s">
          <a href="#about-section" className="btn btn-outline-light btn-lg px-5 shadow-lg">
            Learn More <i className="fas fa-arrow-down ms-2"></i>
          </a>
        </div>
      </div>
    </header>
  );
}