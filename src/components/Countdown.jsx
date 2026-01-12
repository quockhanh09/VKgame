import "../style/App.css";
import giftIcon from "../assets/img/Gift.png";
import dollarIcon from "../assets/img/Dollar sign.png";

function Countdown() {
  const benefits = [
    { icon: "gift", title: "Ưu đãi hấp dẫn" },
    { icon: "gift", title: "Vật phẩm độc quyền" },
    { icon: "gift", title: "Thanh toán trực tiếp" },
    { icon: "dollar", title: "Giá tốt nhất" }
  ];

  return (
    <section style={{ 
     background: 'linear-gradient(180deg, #262335 10%, #463699 40%, #8A83DA 70%, #FBD5BD 100%)',
      padding: "80px 20px",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{ maxWidth: 1000, width: "100%", textAlign: "center" }}>
        {/* Header */}
        <h1 style={{
          color: "#fff",
          fontSize: 48,
          fontWeight: 700,
          marginBottom: 16,
          letterSpacing: 2,
          fontFamily: 'Montserrat, sans-serif'
        }}>
          NẠP TIỀN
        </h1>
        
        <p style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: 500,
          marginBottom: 60,
          letterSpacing: 1
        }}>
          LỢI ÍCH KHI NẠP TRỰC TIẾP TẠI VKE
        </p>

        {/* Benefits Cards */}
        <div style={{
          display: "flex",
          gap: 24,
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
                background: 'linear-gradient(180deg, #F8FFD0 0%, #CFCCE3 50%, #FFDDD4 100%)',
              border: "4px solid #DAFF02",
              
              padding: "32px 24px",
              width: 220,
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transition: "transform 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              {/* Icon */}
              <div style={{
                marginBottom: 16,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <img 
                  src={benefit.icon === "dollar" ? dollarIcon : giftIcon} 
                  alt={benefit.title}
                  style={{ width: 64, height: 64, objectFit: "contain" }}
                />
              </div>
              
              {/* Title */}
              <h3 style={{
                color: "#333",
                fontSize: 18,
                fontWeight: 700,
                margin: 0,
                fontFamily: 'Montserrat, sans-serif'
              }}>
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countdown;
