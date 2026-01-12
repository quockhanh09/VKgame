
import logo from "../assets/img/logovk.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../utils/translations";
import "../style/App.css";


function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";
  const { language, toggleLanguage } = useLanguage();

  return (
    <header
      id="header"
      className="header d-flex align-items-center"
      style={{
        background: "#6B5DB1",
        borderRadius: "0",
        margin: "0",
        padding: "12px 48px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img src={logo} alt="VCPC Logo" style={{ height: 60, marginRight: 32, flexShrink: 0, cursor: 'pointer' }} />
      </Link>
      <nav id="navmenu" className="navmenu" style={{ flexShrink: 0 }}>
        <ul style={{
         
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          listStyle: "none",
          margin: 0,
          padding: 0,
          minWidth: 700,
        }}>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>{t(language, 'header.home')}</Link></li>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>{t(language, 'header.news')}</Link></li>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>{t(language, 'header.store')}</Link></li>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>{t(language, 'header.topup')}</Link></li>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>{t(language, 'header.community')}</Link></li>
        </ul>
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 32 }}>
  <img 
    src={iconGlobal} 
    alt="Globe Icon" 
    onClick={toggleLanguage}
    style={{ 
      width: 24, 
      height: 24, 
      marginRight: 8, 
      filter: "brightness(0) invert(1)",
      cursor: "pointer",
      transition: "transform 0.2s"
    }}
    onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
  />
        <Link to="/">
          <button className="Login-nav" style={{
            background: "#4569BC",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "6px 18px",
            fontWeight: 500,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}>
            {t(language, 'header.login')}
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;