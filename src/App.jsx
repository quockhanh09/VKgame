import trendingImg1 from "./assets/img/image109.png";
import trendingImg2 from "./assets/img/image106.png";
import trendingImg3 from "./assets/img/image107.png";
import trendingAvatar1 from "./assets/img/image108.png";
import trendingAvatar3 from "./assets/img/Group-143726086.png";

import iconTreanding from "./assets/img/CollectorLog-ETH.png";
import iconTreanding1 from "./assets/img/imageA.png";
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// import Layout from "./Layout.jsx";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Details from "./components/Deatails";
import News from "./components/News";
import Register from "./signup-in/Register";
import Login from "./signup-in/Login";
import Letter from "./components/Letter";
import Comingsoon from "./components/comingsoon";
import ListDeatails from "./components/ListDeatails";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { t } from "./utils/translations";
import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

//
import logo from "./assets/img/Logo-name.png";
// import iconGlobal from "./assets/img/Icon.svg";
import heroBg from "./assets/img/herobanner-1.png";
import tabDot from "./assets/img/tab-dot.png";

import hero1 from "./assets/img/image1.png";
import heroInput from "./assets/img/bginput.png";
import bgI3 from "./assets/img/bgI3.png";
import g1 from "./assets/img/g1.png";
import g2 from "./assets/img/g2.png";
import g3 from "./assets/img/g3.png";
import g4 from "./assets/img/g4.png";
import g5 from "./assets/img/g5.png";
import g6 from "./assets/img/g6.png";

// Social media icons
import facebookIcon from "./assets/img/Facebook.svg";
import zaloIcon from "./assets/img/zalo-logo.png";
import youtubeIcon from "./assets/img/Youtube.svg";


import event1 from "./assets/img/lucarly-08.png";
import event2 from "./assets/img/lucarly-02.png";
import event3 from "./assets/img/lucarly-01.png";
import event4 from "./assets/img/kram-11.png";


const eventImages = [event1, event2, event3, event4];

const gameStoreList = [
  { img: g3 },
  { img: g4 },
  { img: g5 },
  { img: g6 },
];

function AppContent() {
  const location = useLocation();
  const { language } = useLanguage();

  const newsData = {
    copyright: [
      {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        title: "젠지-T1의 바론 vs 한화생명-KT의 장로…LCK컵, 오는 14일 개막",
        desc: "Trung tâm Bảo vệ Bản quyền Việt Nam vừa tổ chức hội thảo chuyên sâu nhằm tăng cường kiến thức và kỹ năng cho các cán bộ quản lý. Sự kiện đã cập nhật những quy định mới nhất của pháp luật, đồng thời chia sẻ kinh nghiệm quốc tế trong việc bảo vệ quyền sở hữu trí tuệ.",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80",
        title: "VNGGAMES CLUB HỢP TÁC CHIẾN LƯỢC CÙNG ZALOPAY TẶNG HÀNG LOẠT ƯU ĐÃI ĐỘC QUYỀN",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=120&q=80",
        title: "VNGGAMES CLUB HỢP TÁC CHIẾN LƯỢC CÙNG ZALOPAY TẶNG HÀNG LOẠT ƯU ĐÃI ĐỘC QUYỀN",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=120&q=80",
        title: "VNGGAMES CLUB HỢP TÁC CHIẾN LƯỢC CÙNG ZALOPAY TẶNG HÀNG LOẠT ƯU ĐÃI ĐỘC QUYỀN",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
        title: "Lễ Trao Giấy Chứng Nhận Bản Quyền: Vun Đắp Nền Tảng Cho Sự Sáng Tạo",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=120&q=80",
        title: "Cảnh Báo: Các Chiêu Trò Lừa Đảo Mạo Danh Cơ Quan Bản Quyền Ngày Càng Phức Tạp",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      }
    ],
    event: [
      {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Sự kiện: Ngày hội Sáng tạo Việt Nam 2025",
        desc: "Ngày hội quy tụ hàng trăm tác giả, nghệ sĩ, doanh nghiệp sáng tạo với nhiều hoạt động giao lưu, triển lãm, workshop hấp dẫn.",
        author: "VCPC Event",
        date: "15 tháng 07, 2025"
      },
      {
        img: "https://www.centrala.vn/storage/news/1744355533BACKDOOR%20-%20T%E1%BA%A4T%20T%E1%BA%A6N%20T%E1%BA%ACT%20V%E1%BB%80%20BACKDOOR%20B%E1%BA%A0N%20C%E1%BA%A6N%20N%C3%8AN%20BI%E1%BA%BET%20(3).png",
        title: "Hội thảo: Bảo vệ bản quyền trong thời đại số",
        author: "VCPC Event",
        date: "10 tháng 07, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
        title: "Triển lãm tác phẩm sáng tạo trẻ",
        author: "VCPC Event",
        date: "05 tháng 07, 2025"
      }
    ],
    law: [
      {
        img: "https://cdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2025/LTN/thang5/luat-shtt.jpg",
        title: "Luật Sở hữu trí tuệ sửa đổi 2025",
        desc: "Luật mới cập nhật nhiều quy định quan trọng về bảo vệ quyền tác giả, quyền liên quan và xử lý vi phạm.",
        author: "VCPC Law",
        date: "01 tháng 06, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&q=80",
        title: "Nghị định hướng dẫn thi hành Luật Sở hữu trí tuệ",
        author: "VCPC Law",
        date: "15 tháng 05, 2025"
      },
       {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Sự kiện: Ngày hội Sáng tạo Việt Nam 2025",
        desc: "Ngày hội quy tụ hàng trăm tác giả, nghệ sĩ, doanh nghiệp sáng tạo với nhiều hoạt động giao lưu, triển lãm, workshop hấp dẫn.",
        author: "VCPC Event",
        date: "15 tháng 07, 2025"
      },
    ]
  };

  const [tab, setTab] = useState("copyright");
  const [news, setNews] = useState(newsData);



  const tabList = [
    { key: "copyright", label: t(language, 'tabs.copyright'), color: "#BFD6FF", text: "#224394" },
    { key: "event", label: t(language, 'tabs.event'), color: "#224394", text: "#fff" },
    { key: "law", label: t(language, 'tabs.law'), color: "#10214B", text: "#fff" }
  ];

  const current = news[tab];
  const main = current[0];
  const list = current.slice(1);

  const [storeActive, setStoreActive] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // ===== TAB MENU =====
    const buttons = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    const handleTabClick = (btn) => {
      if (!btn || !btn.dataset?.tab) return;
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");

      const tabContent = document.getElementById(btn.dataset.tab);
      if (tabContent) tabContent.classList.add("active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => handleTabClick(btn));
    });

    // ===== CHARACTER CARD =====
    

    // ===== INIT CHARACTER SIZE =====
    const setDefaultSize = () => {
      document.querySelectorAll(".character-card").forEach((card) => {
        const defaultImg = card.querySelector("img.default");
        if (defaultImg) {
          card.style.width = defaultImg.naturalWidth + "px";
          card.style.height = defaultImg.naturalHeight + "px";
        }
      });
    };

    if (document.readyState === "complete") {
      setDefaultSize();
    } else {
      window.addEventListener("load", setDefaultSize);
    }

    // ===== COUNTDOWN =====
    const targetDate = new Date("Sep 15, 2025 20:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", setDefaultSize);
    };
  }, []);


  return (
    <div className="index-page" style={{ background: "#FFFAF2" }}>
        {location.pathname !== "/Comingsoon" && <Header />}
      
      <Routes>

        <Route
            path="/"
            element={
              <>
                <section
                  id="hero"
                  className="hero section"
                  style={{
                    margin: 0,
                    padding: 0,
                    background: "linear-gradient(180deg, #b4a388ea 0%, #6B5D8C 50%, #4a4a6a 100%)",
                    minHeight: "650px",
                    height: "92vh",
                    width: "100vw",
                    marginTop: "0",
                  }}
                >
                  <div
                    className="parallax-window fullscreen hero-flex"
                    style={{
                      width: "100vw",
                      height: "92vh",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Social media icons on the left */}
                    <div style={{
                      position: "absolute",
                      left: "40px",
                      bottom: "40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      zIndex: 10
                    }}>
                      <a href="#" style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background: "#4267B2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        padding: "10px"
                      }}>
                        <img src={facebookIcon} alt="Facebook" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      </a>
                      <a href="#" style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        padding: "8px"
                      }}>
                        <img src={zaloIcon} alt="Zalo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      </a>
                      <a href="#" style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background: "#5865F2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "22px",
                        textDecoration: "none"
                      }}>
                        <i className="bi bi-discord"></i>
                      </a>
                      <a href="#" style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background: "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "20px",
                        textDecoration: "none"
                      }}>
                        <i className="bi bi-tiktok"></i>
                      </a>
                      <a href="#" style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "10px",
                        background: "#FF0000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        padding: "10px"
                      }}>
                        <img src={youtubeIcon} alt="YouTube" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      </a>
                    </div>

                    {/* Center content */}
                    <div style={{
                      textAlign: "center",
                      color: "#fff"
                    }}>
                      <h1 style={{
                        fontSize: "48px",
                        fontWeight: "700",
                        marginBottom: "12px",
                        letterSpacing: "3px"
                      }}>
                        {t(language, 'hero.title')}
                      </h1>
                      <p style={{
                        fontSize: "18px",
                        fontWeight: "400",
                        opacity: 1,
                        color: "#fff"
                      }}>
                        {t(language, 'hero.subtitle')}
                      </p>
                    </div>
                  </div>
                </section>

{/* Tin nổi bật section */}
        <section style={{ maxWidth: '100%', margin: '0 auto', padding: '80px 40px', background: 'linear-gradient(180deg, #262335 10%, #463699 40%, #8A83DA 70%, #FBD5BD 100%)', }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontWeight: 700, fontSize: 48, color: '#ffffff', fontFamily: 'Lora, serif', marginBottom: 40, textAlign: "center", textTransform: "uppercase", letterSpacing: 2 }}>{t(language, 'news.title')}</h2>
            
            <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
              {/* Main news left - large card */}
              <div style={{ flex: 1.3, minWidth: 340 }}>
                <div style={{ 
                  borderRadius: 20, 
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <img src={g1} alt="main-news" style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                  <div style={{
                    background: 'linear-gradient(180deg, #F8FFD0 0%, #CFCCE3 50%, #FFDDD4 100%)',
                    padding: '28px',
                    minHeight: 99,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div style={{ fontWeight: 700, fontSize: 22, color: '#1a1a1a', lineHeight: 1.5 }}>
                      {main?.title || t(language, 'news.mainTitle')}
                    </div>
                  </div>
                </div>
              </div>

              {/* List news right - horizontal cards */}
              <div style={{ flex: 1, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {list?.slice(0, 3).map((item, idx) => (
                  <div key={idx} style={{ 
                    borderRadius: 14,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                    background: 'linear-gradient(180deg, #F8FFD0 0%, #CFCCE3 50%, #FFDDD4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px',
                    minHeight: 90
                  }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a1a', lineHeight: 1.3, textTransform: 'uppercase', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                        {t(language, 'news.newsItem')}
                      </div>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      <img src={g2} alt="small-news" style={{ width: 80, height: 70, objectFit: 'cover', borderRadius: 8 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section style={{ background: 'linear-gradient(180deg, #262335 10%, #463699 40%, #8A83DA 70%, #FBD5BD 100%)', padding: '64px 24px 72px', color: '#fff' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <h2 style={{ fontWeight: 600, fontSize: 28, letterSpacing: 1.2, marginBottom: 28, textTransform: 'uppercase' }}>{t(language, 'store.title')}</h2>
            <a href="#" style={{ position: 'absolute', right: 12, top: 6, fontSize: 13, fontWeight: 600, color: '#f3f3f5', textDecoration: 'none' }}>{t(language, 'store.viewAll')} &gt;&gt;</a>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 560, maxWidth: '100%', borderRadius: 16, overflow: 'hidden', boxShadow: '0 12px 36px rgba(0,0,0,0.35)', border: '2px solid rgba(255,255,255,0.16)' }}>
                  <img
                    src={gameStoreList[storeActive]?.img}
                    alt="featured-game"
                    style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                {gameStoreList.map((item, idx) => {
                  const isActive = idx === storeActive;
                  return (
                    <button
                      key={idx}
                      onClick={() => setStoreActive(idx)}
                      style={{
                        border: isActive ? '3px solid #f6c659' : '2px solid transparent',
                        borderRadius: 14,
                        padding: 0,
                        overflow: 'hidden',
                        width: 230,
                        height: 130,
                        cursor: 'pointer',
                        background: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
                        boxShadow: isActive ? '0 8px 22px rgba(0,0,0,0.35)' : '0 6px 16px rgba(0,0,0,0.25)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
                      }}
                      aria-label={`${t(language, 'store.selectGame')} ${idx + 1}`}
                    >
                      <img src={item.img} alt={`game-${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </button>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 4 }}>
                {gameStoreList.map((_, idx) => {
                  const isActive = idx === storeActive;
                  return (
                    <span
                      key={idx}
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        background: isActive ? '#f6a340' : '#c9ea68',
                        boxShadow: isActive ? '0 0 0 4px rgba(246,163,64,0.25)' : 'none',
                        display: 'inline-block',
                        transition: 'all 0.2s ease'
                      }}
                    ></span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


             


                
              </>
            }
          />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Deatails" element={<Details />} />
          <Route path="/News" element={<News />} />
          <Route path="/Letter" element={<Letter />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Comingsoon" element={<Comingsoon />} />
          <Route path="/ListDeatails" element={<ListDeatails />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        {location.pathname !== "/Comingsoon" && location.pathname !== "/terms" && location.pathname !== "/privacy-policy" && <Countdown />}
        {/* ===== FOOTER ===== */}
        <Footer />

      </div>
    );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
