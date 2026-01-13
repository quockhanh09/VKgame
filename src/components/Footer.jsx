import footerLogo from "../assets/img/logovk.png";
import zaloLogo from "../assets/img/zalo-logo.png";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../utils/translations";
import "../style/App.css";

function Footer() {
  const { language } = useLanguage();
  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #6B5E93 0%, #4A4168 50%, #2C2849 100%)",
        color: "#fff",
        padding: "0",
        fontFamily: "'Montserrat', Arial, sans-serif",
        marginTop: 0
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: 1600,
        margin: "0 auto",
        padding: "40px 60px 20px 60px",
        gap: 20
      }}>
        {/* Left: Logo, info, social */}
        <div style={{ flex: 0, minWidth: 320, display: "flex", flexDirection: "column", gap: 16 }}>
          <img src={footerLogo} alt="VK Entertainment" style={{ height: 60, width: 178, marginBottom: 8 }} />
          <div style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 400, lineHeight: 1.7 }}>
            Vinhomes West Point, Phường Từ Liêm, Thành phố Hà Nội, Việt Nam<br />
            Phone: (+84) 962926062<br />
            Email: vkentertainment.info@gmail.com
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
            {/* Facebook */}
            <div style={{ 
              width: 40, 
              height: 40, 
              borderRadius: "50%", 
              background: "#1877F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            
            {/* Zalo */}
            <div style={{ 
              width: 40, 
              height: 40, 
              borderRadius: "50%", 
              background: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}>
              <img src={zaloLogo} alt="Zalo" style={{ width: 22, height: 22, objectFit: "contain" }} />
            </div>
            
            {/* Discord */}
            <div style={{ 
              width: 40, 
              height: 40, 
              borderRadius: "50%", 
              background: "#5865F2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </div>
            
            {/* TikTok */}
            <div style={{ 
              width: 40, 
              height: 40, 
              borderRadius: "50%", 
              background: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            
            {/* YouTube */}
            <div style={{ 
              width: 40, 
              height: 40, 
              borderRadius: "50%", 
              background: "#FF0000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer"
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }}></div>

        {/* Middle: Hạng mục */}
        <div style={{ flex: 0, minWidth: 120, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 4 }}>{t(language, 'footer.categories')}</div>
          <a href="#" style={{ color: "#E8E8E8", fontSize: 16, fontWeight: 400, textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.home')}</a>
          <a href="#" style={{ color: "#E8E8E8", fontSize: 16, fontWeight: 400, textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.news')}</a>
          <a href="#" style={{ color: "#E8E8E8", fontSize: 16, fontWeight: 400, textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.store')}</a>
          <a href="#" style={{ color: "#E8E8E8", fontSize: 16, fontWeight: 400, textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.topup')}</a>
          <a href="#" style={{ color: "#E8E8E8", fontSize: 16, fontWeight: 400, textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.community')}</a>
        </div>

        {/* Middle Right: Hỗ trợ */}
        <div style={{ flex: 0, minWidth: 180, display: "flex", flexDirection: "column", gap: 14, marginLeft: 40 }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 4 }}>{t(language, 'footer.support')}</div>
          <a href="#" style={{ color: "#E8E8E8", fontSize: 16, fontWeight: 400, textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.faq')}</a>
          <a href="#" style={{ color: "#E8E8E8", fontSize: 16, fontWeight: 400, textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.topup')}</a>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }}></div>

        {/* Right: Subscribe */}
        <div style={{ flex: 0, minWidth: 320, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 4 }}>{t(language, 'footer.subscribe')}</div>
          <label style={{ color: "#E8E8E8", fontSize: 14, fontWeight: 400, marginBottom: 4 }}>{t(language, 'footer.email')}</label>
          <input
            type="email"
            placeholder=""
            style={{
              width: "100%",
              height: 42,
              borderRadius: 8,
              border: "none",
              padding: "0 16px",
              background: "#E8F5D5",
              color: "#333",
              fontSize: 14,
              fontWeight: 500,
              outline: "none",
              boxSizing: "border-box"
            }}
          />
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", margin: "20px auto 0 auto", maxWidth: 1600 }}></div>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        maxWidth: 1600,
        margin: "0 auto",
        padding: "16px 60px",
        color: "#E8E8E8",
        fontSize: 13,
        fontWeight: 500,
        gap: 60
      }}>
        <a href="/terms" style={{ color: "#E8E8E8", textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.terms')}</a>
        <a href="/privacy-policy" style={{ color: "#E8E8E8", textDecoration: "none", cursor: "pointer" }}>{t(language, 'footer.privacy')}</a>
      </div>
    </footer>
  );
}

export default Footer;
