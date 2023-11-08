import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className='row footer__wrapper'>
          <h2 className="footer__title">My Log Travels</h2>
          <nav className="footer__nav">
            <h3 className="footer__nav-title">Quick Links</h3>
            <ul className="footer__nav-list row">
              <li className="footer__nav-list-item row">
                <a href="#" className="footer__nav-list-link">
                  Home
                </a>
                <a href="#" className="footer__nav-list-link">
                  About Us
                </a>
                <a href="#" className="footer__nav-list-link">
                  My Travel Logs
                </a>
              </li>
              <li className="footer__nav-list-item row">
                <a href="#" className="footer__nav-list-link">
                  Travels
                </a>
                <a href="#" className="footer__nav-list-link">
                  Promo Flights
                </a>
                <a href="#" className="footer__nav-list-link">
                  Travel Routes
                </a>
              </li>
              <li className="footer__nav-list-item row">
                <a href="#" className="footer__nav-list-link">
                  Recommendations
                </a>
                <a href="#" className="footer__nav-list-link">
                  Guides
                </a>
                <a href="#" className="footer__nav-list-link">
                  Blogs
                </a>
              </li>
              <li className="footer__nav-list-item row">
                <a href="#" className="footer__nav-list-link">
                  Mission Statement
                </a>
                <a href="#" className="footer__nav-list-link">
                  The Team
                </a>
                <a href="#" className="footer__nav-list-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <small>2021 - 2022 My Log Travels. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
