import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-voci-dark-blue">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src="/VOCI OFFICIAL LOGO.png"
            alt="Voice of Change Initiative Official Logo"
            height={40}
            width={40}
            className="rounded-circle border border-2 border-white"
          />
          <span className="ms-2">VOCI</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/programs">
                Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/resources">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/progress-report">
                Progress Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/todo-list">
                TO DO LIST
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}