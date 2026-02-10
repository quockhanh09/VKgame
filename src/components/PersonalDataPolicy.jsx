

import React from "react";
import "../style/App.css";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../utils/translations";
import { useNavigate, useParams } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";



function PersonalDataPolicy() {
  const navigate = useNavigate();
  const params = useParams();
  const { language } = useLanguage();

  // Section 1: Introduction
  const getIntroContent = () => {
    if (language === 'en') {
      return {
        title: "1. INTRODUCTION",
        content: [
          {
            number: "1.1.",
            text: "This Personal Data Processing Policy describes how VK Entertainment Joint Stock Company (\"VK\") collects, uses, processes, and protects your personal data in accordance with applicable laws. By using our services, you agree to the terms outlined in this policy."
          },
          {
            number: "1.2.",
            text: "Personal data includes any information that can identify you directly or indirectly, such as your name, email, address, and other relevant details."
          },
          {
            number: "1.3.",
            text: "VK is committed to ensuring the security and confidentiality of your personal data and will only process it for legitimate purposes as described in this policy."
          }
        ]
      };
    }
    return {
      title: "Điều 1: Người dùng cung cấp những thông tin nào cho ứng dụng?",
      content: [
        {
          type: "bold",
          text: "Ứng dụng này không yêu cầu người dùng đăng ký tài khoản hoặc thực hiện thủ tục đăng nhập để sử dụng dịch vụ. Do đó, Nhà cung cấp dịch vụ không yêu cầu và không thu thập các thông tin có thể trực tiếp xác định danh tính cá nhân như họ tên, địa chỉ, số điện thoại hay địa chỉ email. Người dùng có thể tự do sử dụng toàn bộ chức năng của ứng dụng mà không cần cung cấp dữ liệu cá nhân."
        },
        {
          type: "section",
          text: "[Ngoại lệ liên quan đến hỗ trợ khách hàng]"
        },
        {
          type: "normal",
          text: "Tuy nhiên, trong trường hợp người dùng chủ động gửi email cho nhà phát triển để báo lỗi trò chơi hoặc gửi yêu cầu hỗ trợ, địa chỉ email và nội dung liên hệ của người dùng có thể được lưu trữ trong một khoảng thời gian giới hạn nhằm mục đích xử lý yêu cầu và phản hồi kết quả. Các thông tin này sẽ không được sử dụng cho bất kỳ mục đích nào khác ngoài hỗ trợ khách hàng và sẽ được hủy theo quy định nội bộ sau khi việc xử lý hoàn tất."
        }
      ]
    };
  };

  // Section 2: Data Collection
  const getSection2Content = () => {
    if (language === 'en') {
      return {
        title: "2. WHAT PERSONAL DATA DO WE COLLECT?",
        items: [
          "Full name, email address, phone number, date of birth, address.",
          "Identification documents (ID card, Passport, etc.).",
          "Account information, payment information, and any other information you provide when using our services."
        ]
      };
    }
    return {
      title: "Điều 2: Ứng dụng tự động thu thập những thông tin nào?",
      intro: "Nhằm mục đích cải thiện dịch vụ, phân tích lỗi và cung cấp quảng cáo được cá nhân hóa, trong quá trình sử dụng ứng dụng có thể <b>thông qua các nhà cung cấp dịch vụ bên thứ ba (SDK)</b> tự động tạo ra và thu thập các thông tin sau.",
      items: [
        {
          label: "Thông tin thiết bị:",
          text: "Tên mẫu thiết bị, phiên bản hệ điều hành (OS), thông tin nhà mạng, cài đặt ngôn ngữ, địa chỉ IP."
        },
        {
          label: "Định danh:",
          text: "Mã định danh quảng cáo (Google ADID), App Set ID, Android ID (chỉ sử dụng hạn chế cho các mục đích như phòng chống gian lận, v.v.)."
        },
        {
          label: "Thông tin hoạt động và hiệu suất ứng dụng:",
          text: "Lịch sử sử dụng ứng dụng, <b>nhật ký sự cố (Crash Logs), dữ liệu chẩn đoán (Diagnostics)</b> và các dữ liệu khác liên quan đến hiệu suất ứng dụng."
        }
      ],
      note: "Các thông tin nêu trên được thu thập dưới dạng không trực tiếp xác định danh tính cá nhân và được xử lý theo chính sách bảo mật của các nhà cung cấp dịch vụ bên thứ ba."
    };
  };

  // Section 3: Purpose
  const getSection3Content = () => {
    if (language === 'en') {
      return {
        title: "3. PURPOSE OF PERSONAL DATA PROCESSING",
        items: [
          "To provide, maintain, and improve our services.",
          "To comply with legal obligations.",
          "To protect your rights and interests and those of VK."
        ]
      };
    }
    return {
      title: "Điều 3: Việc thu thập vị trí chính xác theo thời gian thực",
      desc: "Ứng dụng <b>không thu thập dữ liệu vị trí chính xác theo thời gian thực dựa trên GPS (Precise Location)</b> của người dùng."
    };
  };

  // Section 4: Rights
  const getSection4Content = () => {
    if (language === 'en') {
      return {
        title: "4. YOUR RIGHTS",
        items: [
          "Access, correct, or delete your personal data.",
          "Withdraw consent for data processing.",
          "Request restriction or object to processing as provided by law."
        ]
      };
    }
    return {
      title: "Điều 4: Việc sử dụng thông tin vị trí ước lượng (Approximate Location)",
      intro: "Ứng dụng này, nhằm mục đích cung cấp và cải thiện dịch vụ, có thể ước lượng thông tin vị trí ở mức độ gần đúng (Coarse) theo cấp quốc gia hoặc thành phố <b>dựa trên địa chỉ IP và thông tin mạng</b>, và sử dụng như sau:",
      items: [
        {
          label: "Quảng cáo và nội dung được cá nhân hóa:",
          text: "Các bên quảng cáo thứ ba như AdMob sử dụng để cung cấp cài đặt ngôn ngữ phù hợp và quảng cáo có mức độ liên quan cao với khu vực hiện tại của bạn."
        },
        {
          label: "Phân tích và cải thiện hiệu suất:",
          text: "Dữ liệu được phân tích dưới dạng tổng hợp nhằm cải thiện chất lượng dịch vụ, chẳng hạn như thống kê người truy cập theo quốc gia và tối ưu hóa tốc độ mạng."
        },
        {
          label: "Chia sẻ với bên thứ ba:",
          text: "Để đạt được các mục đích nêu trên (quảng cáo và phân tích), thông tin vị trí ước lượng được thu thập có thể được chia sẻ với các nhà cung cấp dịch vụ bên thứ ba đáng tin cậy như Google (AdMob, Firebase), Unity."
        }
      ]
    };
  };

  // Section 5: Contact
  const getSection5Content = () => {
    if (language === 'en') {
      return {
        title: "5. CONTACT",
        content: "If you have any questions about this policy, please contact us at game.cskh@vkentertainment.vn."
      };
    }
    return {
      title: "Điều 5: Ứng dụng có sử dụng công nghệ trí tuệ nhân tạo (AI) không?",
      content: "Ứng dụng này không sử dụng công nghệ trí tuệ nhân tạo (AI) để xử lý dữ liệu của bạn hoặc cung cấp các chức năng."
    };
  };


  const intro = getIntroContent();
  const section2 = getSection2Content();
  const section3 = getSection3Content();
  const section4 = getSection4Content();
  const section5 = getSection5Content();

  // Section 6: Third-party services (Vietnamese only)
  const section6 = language !== 'en' ? {
    title: 'Điều 6: Dịch vụ bên thứ ba',
    desc1: 'Ứng dụng có thể tích hợp các dịch vụ bên thứ ba nhằm mục đích quảng cáo, phân tích hoặc cải thiện trải nghiệm người dùng. Các dịch vụ này có thể thu thập dữ liệu phi cá nhân hoặc dữ liệu ẩn danh theo chính sách riêng của từng bên.',
    desc2: 'Danh sách các dịch vụ bên thứ ba phổ biến có thể được tích hợp:',
    services: [
      { name: 'Google AdMob', url: 'https://policies.google.com/privacy' },
      { name: 'Google Firebase', url: 'https://firebase.google.com/support/privacy' },
      { name: 'Unity Ads', url: 'https://unity3d.com/legal/privacy-policy' },
      { name: 'Facebook Audience Network', url: 'https://www.facebook.com/policy.php' },
    ]
  } : null;

  const getMainTitle = () => {
    return t(language, 'footer.personalDataPolicy') || (language === 'en' ? 'Personal Data Processing Policy' : 'Chính sách xử lý dữ liệu cá nhân');
  };

  const getLastUpdated = () => {
    return language === 'en' ? 'Last updated: January, 2026' : 'Cập nhật lần cuối: Tháng 1, 2026';
  };

  // Danh sách game mẫu
  const gameListVi = [
    { value: '', label: 'Chung' },
    { value: 'bubble_cushion', label: 'Vương Quốc Bong Bóng' },
    { value: 'chain_link', label: 'Dây Xích Ma Thuật' },
    { value: 'port_port', label: 'Đường Ống Liên Hoàn' },
    { value: 'jewel_liberation', label: 'Xếp Ngọc 3D' },
    { value: 'jelly_1010', label: 'Thạch Đại Chiến' },
    { value: 'pixel_coloring', label: 'Họa Sĩ Pixel' },
    { value: 'flask_water_sort', label: 'Bậc Thầy Pha Chế' },
    { value: 'screw_one', label: 'Giải Mã Ốc Vít' },
    { value: 'spearman', label: 'Giáo Chiến' },
    { value: 'fall_man', label: 'Vua Sinh tồn' },
    { value: 'bubble_equation', label: 'Phương Trình Bong Bóng' },
    { value: 'screw_two', label: 'Giải Mã Ốc Vít 2' },
    { value: 'toothpick_pro', label: 'Que Tăm Trí Tuệ' },
    { value: 'sudoku_star', label: 'Siêu Sao Sudoku' },
    { value: 'food_biz_master', label: 'Vua Đầu Bếp' },
    { value: 'block_shredder', label: 'Phá Khối' },
    { value: 'parking_lot_valet', label: 'Trông Xe Chuyên Nghiệp' },
    { value: 'bee_math_connect', label: 'Ong Vàng Làm Toán' },
    { value: 'fly_shot', label: 'Phản Lực Trên Không' },
    { value: 'paint_the_box', label: 'Hộp Sắc Màu' },
    { value: 'hexa_flip', label: 'Sắc Màu Lục Giác' },
    { value: 'infinite_tap_tap', label: 'Cú Chạm Vô Hạn' },
    { value: 'car_transport', label: 'Chở Xe Siêu Tốc' },
    { value: 'circuit_magic', label: 'Liên Kết Ma Thuật' },
    { value: 'icy_bear_match', label: 'Vương Quốc Gấu Băng' },
    { value: 'hit_run', label: 'Đường Đua Vô Hạn' },
    { value: 'honeycom_build', label: 'Xây Dựng Tổ Ong' },
    { value: 'chem_work', label: 'Cân Bằng Hoá Học' },
    { value: 'island_together', label: 'Đảo Sinh Tồn' },
    { value: 'infinite_roll', label: 'Lăn Siêu Tốc' },
    { value: 'hit_race_one', label: 'Vua Tốc Độ' },
    { value: 'stickman_protector', label: 'Vệ Sĩ Người Que' },
    { value: 'poly_world', label: 'Hành Tinh Đa Giác' },
    { value: 'screw_three', label: 'Giải Mã Ốc Vít 3' },
    { value: 'paint_the_road', label: 'Giao Lộ Cầu Vồng' },
    { value: 'packing_ball', label: 'Xưởng Phân Loại' },
    { value: 'g_conqueror', label: 'Phi Đội Ngân Hà' },
    { value: 'tic_tac_down', label: 'Nhịp Rơi Thời Gian' },
    { value: 'jelly_lab', label: 'Thạch Viện' },
    { value: 'split_beads', label: 'Tách Hạt' },
  ];

  const gameListEn = [
    { value: '', label: 'Game' },
    { value: 'bubble_cushion', label: 'Bubble Cushion' },
    { value: 'chain_link', label: 'Chain Link' },
    { value: 'port_port', label: 'Port Port' },
    { value: 'jewel_liberation', label: 'Jewel Liberation' },
    { value: 'jelly_1010', label: 'Jelly 1010' },
    { value: 'pixel_coloring', label: 'Pixel Coloring' },
    { value: 'flask_water_sort', label: 'Flask Water Sort' },
    { value: 'screw_one', label: 'Screw One' },
    { value: 'spearman', label: 'Spearman' },
    { value: 'fall_man', label: 'Fall Man' },
    { value: 'bubble_equation', label: 'Bubble Equation' },
    { value: 'screw_two', label: 'Screw TWO' },
    { value: 'toothpick_pro', label: 'Toothpick Pro' },
    { value: 'sudoku_star', label: 'Sudoku Star' },
    { value: 'food_biz_master', label: 'Food Biz Master' },
    { value: 'block_shredder', label: 'Block Shredder' },
    { value: 'parking_lot_valet', label: 'Parking Lot Valet' },
    { value: 'bee_math_connect', label: 'Bee Math Connect' },
    { value: 'fly_shot', label: 'Fly Shot' },
    { value: 'paint_the_box', label: 'Paint The Box' },
    { value: 'hexa_flip', label: 'Hexa Flip' },
    { value: 'infinite_tap_tap', label: 'Infinite Tap Tap' },
    { value: 'car_transport', label: 'Car Transport' },
    { value: 'circuit_magic', label: 'Circuit Magic' },
    { value: 'icy_bear_match', label: 'Icy Bear Match' },
    { value: 'hit_run', label: 'HIT RUN' },
    { value: 'honeycom_build', label: 'Honeycom Build' },
    { value: 'chem_work', label: 'CHEM WORK' },
    { value: 'island_together', label: 'Island Together' },
    { value: 'infinite_roll', label: 'Infinite Roll' },
    { value: 'hit_race_one', label: 'HIT Race One' },
    { value: 'stickman_protector', label: 'Stickman Protector' },
    { value: 'poly_world', label: 'Poly World' },
    { value: 'screw_three', label: 'SCREW 3' },
    { value: 'paint_the_road', label: 'Paint The Road' },
    { value: 'packing_ball', label: 'Packing Ball' },
    { value: 'g_conqueror', label: 'G Conqueror' },
    { value: 'tic_tac_down', label: 'Tic Tac Down' },
    { value: 'jelly_lab', label: 'Jelly LAB' },
    { value: 'split_beads', label: 'Split Beads' },
  ];
  // Lấy tên game từ URL nếu có
  const [selectedGame, setSelectedGame] = React.useState(params.game || '');

  // Cập nhật selectedGame khi URL params thay đổi
  React.useEffect(() => {
    if (params.game) {
      setSelectedGame(params.game);
    } else {
      setSelectedGame('');
    }
  }, [params.game]);

  // Lấy danh sách game theo ngôn ngữ
  const gameList = language === 'en' ? gameListEn : gameListVi;

  // Nếu không chọn game, hiển thị PrivacyPolicy
  if (!selectedGame) {
    return (
      <>
        <section style={{ background: "#fcf8f2", minHeight: "auto", padding: 0 }}>
          <div style={{ height: 36 }} />
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: 0, position: "relative" }}>
            <div style={{ width: "100%", position: "relative", zIndex: 2 }}>
              <select
                value={selectedGame}
                onChange={e => {
                  setSelectedGame(e.target.value);
                  if (e.target.value) {
                    window.history.replaceState(null, '', `/privacy-policy/${e.target.value}`);
                  } else {
                    window.history.replaceState(null, '', `/privacy-policy`);
                  }
                }}
                style={{
                  minWidth: 270,
                  padding: "10px 22px",
                  borderRadius: 10,
                  border: "1.5px solid #a89ad1",
                  fontSize: 18,
                  color: "#6B5E93",
                  background: "#faf8ff",
                  fontWeight: 500,
                  outline: "none",
                  marginTop: 8,
                  marginBottom: 24,
                  marginLeft: 1000,
                  boxShadow: "0 2px 8px rgba(168,154,209,0.08)"
                }}
              >
                {gameList.map(g => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
        <PrivacyPolicy />
      </>
    );
  }

  return (
    <section style={{ background: "#fcf8f2", minHeight: "100vh", padding: 0 }}>
      {/* Tạo khoảng cách với header */}
      <div style={{ height: 36 }} />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: 0, position: "relative" }}>
        {/* Game Select ở sát mép phải */}
        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 2, right: 200 }}>
          <select
            value={selectedGame}
            onChange={e => {
              setSelectedGame(e.target.value);
              if (e.target.value) {
                window.history.replaceState(null, '', `/privacy-policy/${e.target.value}`);
              } else {
                window.history.replaceState(null, '', `/privacy-policy`);
              }
            }}
            style={{
              minWidth: 270,
              padding: "10px 22px",
              borderRadius: 10,
              border: "1.5px solid #a89ad1",
              fontSize: 18,
              color: "#6B5E93",
              background: "#faf8ff",
              fontWeight: 500,
              outline: "none",
              marginTop: 8,
              marginBottom: 24,
              boxShadow: "0 2px 8px rgba(168,154,209,0.08)"
            }}
          >
            {gameList.map(g => (
              <option key={g.value} value={g.value}>{g.label}</option>
            ))}
          </select>
        </div>
        <h1 style={{ color: "#181818", fontSize: 40, fontWeight: 400, marginBottom: 32, textAlign: "center", letterSpacing: 1, fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', marginTop: 20 }}>
          {getMainTitle()}
        </h1>
        <div style={{ color: "#181818", fontSize: 17, lineHeight: 1.8, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: "0 auto", marginTop: 12 }}>
          {/* Phần hiệu lực và giải thích luật */}
          <div style={{ marginBottom: 24 }}>
            {language === 'en' ? (
              <>
                <p style={{ fontWeight: 700, marginBottom: 6 }}>
                  Effective from: <span style={{ fontWeight: 400 }}>30 January 2026</span>
                </p>
                <p style={{ marginBottom: 6 }}>
                  This personal data processing policy applies to the <b>{
                    selectedGame
                      ? (gameList.find(g => g.value === selectedGame)?.label || '[Game Name]')
                      : '[Game Name]'
                  }</b> service provided by <b>VK Entertainment</b> (hereinafter referred to as the “Service Provider”).
                </p>
                <p style={{ marginBottom: 6 }}>
                  The Service Provider complies with relevant legal regulations, including <b>Decree No. 13/2023/ND-CP of Vietnam on the protection of personal data</b>. This policy is only effective when the user expresses explicit consent, such as by clicking the “Agree” button on the pop-up window displayed when first launching the application.
                </p>
              </>
            ) : (
              <>
                <p style={{ fontWeight: 700, marginBottom: 6 }}>
                  Bắt đầu có hiệu lực từ: <span style={{ fontWeight: 400 }}>30 ngày 1 tháng năm 2026</span>
                </p>
                <p style={{ marginBottom: 6 }}>
                  Chính sách xử lý dữ liệu cá nhân này áp dụng cho dịch vụ <b>{
                    selectedGame
                      ? (gameList.find(g => g.value === selectedGame)?.label || '[Tên game]')
                      : '[Tên game]'
                  }</b> do <b>VK Entertainment</b> (sau đây gọi là “Nhà cung cấp dịch vụ”) cung cấp.
                </p>
                <p style={{ marginBottom: 6 }}>
                  Nhà cung cấp dịch vụ tuân thủ các quy định pháp luật liên quan, bao gồm <b>Nghị định số 13/2023/NĐ-CP của Việt Nam về bảo vệ dữ liệu cá nhân</b>. Chính sách này chỉ có hiệu lực khi người dùng thể hiện sự đồng ý rõ ràng, chẳng hạn như nhấn nút “Đồng ý” trên cửa sổ pop-up được hiển thị khi lần đầu khởi chạy ứng dụng.
                </p>
              </>
            )}
          </div>
          {/* Nội dung chính */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{language === 'en' ? 'Article 1: What information do users provide to the application?' : intro.title}</h2>
            {language === 'en' ? (
              <>
                <p style={{ marginBottom: 12, textAlign: "justify" }}>
                  This application <b>does not require users to register an account or log in</b> to use the service. Therefore, the Service Provider <b>does not request and does not collect</b> information that could directly identify an individual, such as full name, address, phone number, or email address. Users are <b>free to use all the application's functions without providing personal data.</b>
                </p>
                <p style={{ fontWeight: 700, marginBottom: 8, textAlign: "justify" }}>[Exceptions related to customer support]</p>
                <p style={{ marginBottom: 12, textAlign: "justify" }}>
                  However, in cases where users proactively email the developer to report game bugs or request support, the user's email address and contact content may be stored for a limited time for the purpose of processing the request and responding. This information will not be used for any purpose other than customer support and will be deleted according to internal regulations after processing is complete.
                </p>
              </>
            ) : (
              <>
                <p style={{  marginBottom: 12, textAlign: "justify" }}>
                  Ứng dụng này <b>không yêu cầu người dùng đăng ký tài khoản hoặc thực hiện thủ tục đăng nhập</b> để sử dụng dịch vụ. Do đó, Nhà cung cấp dịch vụ <b>không yêu cầu và không thu thập</b> các thông tin có thể trực tiếp xác định danh tính cá nhân như họ tên, địa chỉ, số điện thoại hay địa chỉ email. Người dùng có thể <b>tự do sử dụng toàn bộ chức năng của ứng dụng mà không cần cung cấp dữ liệu cá nhân.</b>
                </p>
                <p style={{ fontWeight: 700, marginBottom: 8, textAlign: "justify" }}>[Ngoại lệ liên quan đến hỗ trợ khách hàng]</p>
                <p style={{ marginBottom: 12, textAlign: "justify" }}>
                  Tuy nhiên, trong <b>trường hợp người dùng chủ động gửi email cho nhà phát triển</b> để báo lỗi trò chơi hoặc gửi yêu cầu hỗ trợ, địa chỉ email và nội dung liên hệ của người dùng có thể được lưu trữ trong một khoảng thời gian giới hạn nhằm mục đích xử lý yêu cầu và phản hồi kết quả. Các thông tin này sẽ không được sử dụng cho bất kỳ mục đích nào khác ngoài hỗ trợ khách hàng và sẽ được hủy theo quy định nội bộ sau khi việc xử lý hoàn tất.
                </p>
              </>
            )}
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{language === 'en' ? 'Article 2: What Information Does the Application Automatically Collect?' : section2.title}</h2>
            {language === 'en' ? (
              <>
                <p style={{ marginBottom: 10, textAlign: "justify" }}>
                  For the purpose of improving services, analyzing errors, and providing personalized advertising, the application may, through <b>third-party service providers (SDKs)</b>, automatically generate and collect the following information during use:
                </p>
                <ul style={{ paddingLeft: 24, marginBottom: 10 }}>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    <b>Device Information:</b> Device model name, operating system (OS) version, carrier information, language settings, IP address.
                  </li>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    <b>Identifiers:</b> Advertising identifier (Google <b>ADID</b>), App Set ID, Android ID (used only for limited purposes such as fraud prevention, etc.).
                  </li>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    <b>Application Activity and Performance Information:</b> Application usage history, <b>crash logs, diagnostic data</b>, and other data related to application performance.
                  </li>
                </ul>
                <p style={{ fontSize: 16, marginBottom: 0, textAlign: "justify" }}>
                  The above information is collected in a way that does not directly identify individuals and is processed according to the privacy policies of the third-party service providers.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: 10, textAlign: "justify" }} dangerouslySetInnerHTML={{__html: section2.intro}} />
                <ul style={{ paddingLeft: 24, marginBottom: 10 }}>
                  {section2.items.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 8, textAlign: "justify" }}>
                      <b>{item.label}</b> {item.text.includes('<b>') ? <span dangerouslySetInnerHTML={{__html: item.text}} /> : item.text}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 16, marginBottom: 0, textAlign: "justify" }}>{section2.note}</p>
              </>
            )}
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{language === 'en' ? 'Article 3: Real-time precise location data collection' : section3.title}</h2>
            {language === 'en' ? (
              <p style={{ marginBottom: 0, textAlign: "justify" }}>
                The application <b>does not collect real-time precise location data based on the user's GPS (Precise Location)</b>.
              </p>
            ) : (
              <p style={{ marginBottom: 0, textAlign: "justify" }} dangerouslySetInnerHTML={{__html: section3.desc}} />
            )}
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{language === 'en' ? 'Article 4: Use of Approximate Location Information' : section4.title}</h2>
            {language === 'en' ? (
              <>
                <p style={{ marginBottom: 10, textAlign: "justify" }}>
                  This application, for the purpose of providing and improving services, may estimate location information at a coarse level at the country or city level <b>based on IP address and network information</b>, and use it as follows:
                </p>
                <ul style={{ paddingLeft: 24, marginBottom: 10 }}>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    <b>Personalized advertising and content:</b> Third-party advertisers such as AdMob use it to provide appropriate language settings and highly relevant advertisements to your current location.
                  </li>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    <b>Analysis and performance improvement:</b> Data is analyzed in aggregated form to improve service quality, such as visitor statistics by country and network speed optimization.
                  </li>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    <b>Sharing with third parties:</b> To achieve the above purposes (advertising and analytics), collected approximate location information may be shared with trusted third-party service providers such as Google (AdMob, Firebase), Unity
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p style={{ marginBottom: 10, textAlign: "justify" }} dangerouslySetInnerHTML={{__html: section4.intro}} />
                <ul style={{ paddingLeft: 24, marginBottom: 10 }}>
                  {section4.items.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 8, textAlign: "justify" }}>
                      <b>{item.label}</b> {item.text}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{language === 'en' ? 'Article 5: Does the application use artificial intelligence (AI) technology?' : section5.title}</h2>
            <p style={{ textAlign: "justify", marginBottom: 0 }}>
              {language === 'en'
                ? 'This application does not use artificial intelligence (AI) technology to process your data or provide functions.'
                : section5.content}
            </p>
          </div>

          {/* Điều 6 - chỉ tiếng Việt, đặt sau điều 5 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{language === 'en' ? 'Article 6: Sharing Information with Third-Party Service Providers' : section6.title}</h2>
            {language === 'en' ? (
              <>
                <p style={{ marginBottom: 10, textAlign: "justify" }}>
                  Service providers, in order to improve application functionality, analyze bugs, and provide personalized advertising, may share aggregated data and identifiers (ad IDs, device information, etc.) with trusted third-party services (SDKs). Your data may be transferred and processed on third-party servers located outside Vietnam (such as the United States, Singapore, etc.) to serve the provision of services; by agreeing to this policy, you consent to such international data transfer. This information is transmitted <b>in a partially pseudo-anonymized form</b>, cannot directly identify individuals, and is managed according to the privacy policies of each third-party service provider.
                </p>
                <ul style={{ paddingLeft: 24, marginBottom: 0 }}>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    Google Play Services (<a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/</a>)
                  </li>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    AdMob (<a href="https://support.google.com/admob/answer/6128543?hl=ko" target="_blank" rel="noopener noreferrer">https://support.google.com/admob/answer/6128543?hl=ko</a>)
                  </li>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    Google Analytics for Firebase (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>)
                  </li>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    Firebase Crashlytics (<a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>)
                  </li>
                  <li style={{ marginBottom: 8, textAlign: "justify" }}>
                    Unity (<a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://unity3d.com/legal/privacy-policy</a>)
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p style={{ marginBottom: 10, textAlign: "justify" }}>{section6.desc1}</p>
                <p style={{ marginBottom: 10, textAlign: "justify" }} dangerouslySetInnerHTML={{__html: section6.desc2}} />
                <ul style={{ paddingLeft: 24, marginBottom: 0 }}>
                  {section6.services.map((s, idx) => (
                    <li key={s.url} style={{ marginBottom: 8, textAlign: "justify" }}>
                      <span style={{ fontWeight: 500 }}>{s.name}</span> (<a href={s.url} target="_blank" rel="noopener noreferrer">{s.url}</a>)
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Điều 7 - Công bố thông tin theo yêu cầu pháp lý và bảo vệ quyền lợi */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              {language === 'en'
                ? 'Article 7: Disclosure of Information Upon Legal Requirement and Protection of Rights'
                : 'Điều 7: Công bố thông tin theo yêu cầu pháp lý và bảo vệ quyền lợi'}
            </h2>
            {language === 'en' ? (
              <>
                <div style={{ fontSize: 17, marginBottom: 10, textAlign: 'justify' }}>
                  In principle, service providers (and publishers in Vietnam) do not disclose your personal information to third parties without your consent. However, according to <b>Article 17 of Decree 13/2023/ND-CP on the protection of personal data in Vietnam</b>, in the following cases, personal information may be processed or provided to competent authorities without the individual consent of the data subject:
                </div>
                <ol style={{ fontSize: 17, marginLeft: 24, marginBottom: 0, textAlign: 'justify' }}>
                  <li style={{ marginBottom: 12 }}>
                    <b>Legal Compliance:</b> When the Ministry of Public Security of Vietnam, courts, procuratorates, or other competent state agencies request information in accordance with the law to serve investigation, prosecution, trial, or execution of judgments.
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <b>Emergency Situations:</b> In emergency situations requiring immediate measures to protect the life and health of the data subject (user) or others. (Clause 1, Article 17)
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <b>National Security and Public Order:</b> When requested by competent authorities to serve national defense, national security, maintain social order and safety, or respond to serious national disaster situations. (Clause 3, Article 17)
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <b>Contractual Obligations:</b> In unavoidable circumstances to fulfill obligations under the terms of service or to comply with applicable legal obligations of the service provider.
                  </li>
                </ol>
              </>
            ) : (
              <>
                <div style={{ fontSize: 17, marginBottom: 10, textAlign: 'justify' }}>
                  Về nguyên tắc, nhà cung cấp dịch vụ (và nhà phát hành tại Việt Nam) không công bố thông tin cá nhân của bạn cho bên thứ ba khi chưa có sự đồng ý của bạn. Tuy nhiên, căn cứ theo <b>Điều 17 Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân của Việt Nam</b>, trong các trường hợp hợp sau, thông tin cá nhân có thể được xử lý hoặc cung cấp cho cơ quan có thẩm quyền mà không cần sự đồng ý riêng của chủ thể dữ liệu:
                </div>
                <ol style={{ fontSize: 17, marginLeft: 24, marginBottom: 0, textAlign: 'justify' }}>
                  <li style={{ marginBottom: 12 }}>
                    <b>Yêu cầu hợp pháp của cơ quan nhà nước (Legal Compliance):</b> Khi Bộ Công an Việt Nam, tòa án, viện kiểm sát hoặc các cơ quan nhà nước có thẩm quyền khác yêu cầu cung cấp thông tin theo quy định pháp luật để phục vụ điều tra, truy tố, xét xử hoặc thi hành án.
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <b>Bảo vệ tính mạng và sức khỏe (Emergency Situations):</b> Trong trường hợp khẩn cấp cần có biện pháp tức thời để bảo vệ tính mạng và sức khỏe của chủ thể dữ liệu (người dùng) hoặc của người khác. (Khoản 1 Điều 17)
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <b>An ninh quốc gia và trật tự công cộng (National Security):</b> Khi cơ quan có thẩm quyền yêu cầu nhằm phục vụ quốc phòng, an ninh quốc gia, duy trì trật tự, an toàn xã hội hoặc ứng phó với các tình huống thảm họa quốc gia nghiêm trọng. (Khoản 3 Điều 17)
                  </li>
                  <li style={{ marginBottom: 12 }}>
                    <b>Thực hiện hợp đồng và nghĩa vụ pháp lý (Contractual Obligations):</b> Trong trường hợp không thể tránh khỏi để thực hiện các nghĩa vụ theo điều khoản sử dụng dịch vụ hoặc để tuân thủ các nghĩa vụ pháp lý được áp dụng đối với nhà cung cấp dịch vụ.
                  </li>
                </ol>
              </>
            )}
          </div>

          {/* Điều 8 - Quyền từ chối thu thập dữ liệu (Opt-out) */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              {language === 'en'
                ? 'Article 8: What is the right to opt out of data collection?'
                : 'Điều 8: Quyền từ chối thu thập dữ liệu (Opt-out) là gì?'}
            </h2>
            {language === 'en' ? (
              <>
                <div style={{ fontSize: 17, marginBottom: 10, textAlign: 'justify' }}>
                  You can withdraw or refuse consent to the collection and use of personal data at any time through the following methods:
                </div>
                <ol style={{ fontSize: 17, marginLeft: 24, marginBottom: 0, textAlign: 'justify' }}>
                  <li style={{ marginBottom: 18 }}>
                    <b>Uninstalling the application (stopping all data collection):</b><br />
                    You can immediately stop all data collection by uninstalling the application. Uninstallation can be done through the standard uninstallation process of your mobile device or through the app store (such as Google Play).
                  </li>
                  <li style={{ marginBottom: 18 }}>
                    <b>Opt out of personalized advertising (blocking advertising identifiers):</b><br />
                    Even without uninstalling the application, you can still block the collection of advertising identifiers (Advertising IDs) used for personalized advertising through your mobile device settings.
                    <ul style={{ marginTop: 8, marginBottom: 8, marginLeft: 24, listStyleType: 'disc' }}>
                      <li style={{ marginBottom: 0 }}>
                        <b>Android:</b> Settings &gt; Google &gt; Ads &gt; <b>Delete Ad ID or Reset Ad ID</b>
                      </li>
                      <li style={{ fontSize: 15, fontStyle: 'italic', marginBottom: 0 }}>
                        (The installation path may vary depending on the iOS operating system version.)
                      </li>
                    </ul>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    <b>Changing access settings:</b><br />
                    In the Settings &gt; App Management menu of your mobile device, you can revoke access permissions granted to an app. However, revoking mandatory permissions may restrict service usage.
                  </li>
                </ol>
              </>
            ) : (
              <>
                <div style={{ fontSize: 17, marginBottom: 10, textAlign: 'justify' }}>
                  Bạn có thể rút lại hoặc từ chối sự đồng ý đối với việc thu thập và sử dụng dữ liệu cá nhân bất cứ lúc nào thông qua các cách sau:
                </div>
                <ol style={{ fontSize: 17, marginLeft: 24, marginBottom: 0, textAlign: 'justify' }}>
                  <li style={{ marginBottom: 18 }}>
                    <b>Gỡ cài đặt ứng dụng (dừng mọi hoạt động thu thập):</b><br />
                    Bạn có thể ngay lập tức dừng toàn bộ việc thu thập thông tin của ứng dụng bằng cách gỡ cài đặt (Uninstall) ứng dụng. Việc gỡ có thể thực hiện thông qua quy trình gỡ cài đặt tiêu chuẩn của thiết bị di động hoặc thông qua cửa hàng ứng dụng (như Google Play).
                  </li>
                  <li style={{ marginBottom: 18 }}>
                    <b>Từ chối quảng cáo được cá nhân hóa (chặn mã định danh quảng cáo):</b><br />
                    Ngay cả khi không gỡ cài đặt ứng dụng, bạn vẫn có thể chặn việc thu thập mã định danh quảng cáo (Advertising ID) dùng cho quảng cáo được cá nhân hóa thông qua cài đặt của thiết bị di động.
                    <ul style={{ marginTop: 8, marginBottom: 8, marginLeft: 24, listStyleType: 'disc' }}>
                      <li style={{ marginBottom: 0 }}>
                        <b>Android:</b> Cài đặt (Settings) &gt; Google &gt; Quảng cáo (Ads) &gt; <b>Xóa ID quảng cáo hoặc Đặt lại ID quảng cáo</b>
                      </li>
                      <li style={{ fontSize: 15, fontStyle: 'italic', marginBottom: 0 }}>
                        (Đường dẫn cài đặt có thể khác nhau tùy theo phiên bản hệ điều hành.)
                      </li>
                    </ul>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    <b>Thay đổi cài đặt quyền truy cập:</b><br />
                    Trong menu Cài đặt &gt; Quản lý ứng dụng của thiết bị di động, bạn có thể thu hồi các quyền truy cập đã cấp cho ứng dụng. Tuy nhiên, nếu thu hồi các quyền bắt buộc, việc sử dụng dịch vụ có thể bị hạn chế
                  </li>
                </ol>
              </>
            )}
          </div>
          {/* Điều 9 - Chính sách lưu trữ dữ liệu */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
              {language === 'en'
                ? 'Article 9: What is the data storage policy and how can you manage your information?'
                : 'Điều 9: Chính sách lưu trữ dữ liệu là gì và bạn có thể quản lý thông tin như thế nào?'}
            </h2>
            {language === 'en' ? (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  1. Data Storage Location and Non-Collection Principle
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  This service is a non-account-based service. The service provider does not collect or store personally identifiable information such as your name, email, or phone number on its servers.
                </div>
                <ul style={{ fontSize: 17, marginLeft: 24, marginBottom: 8, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 4 }}>
                    <b>Game Data:</b> All game progress data (levels, items, etc.) is stored only in the internal memory of your mobile device.
                  </li>
                  <li>
                    <b>Server Log Exception:</b> During communication with the server to ensure service stability, security, and version testing, access logs such as IP addresses may be temporarily recorded. This information is used only for security purposes and will be automatically and permanently deleted after a certain period of time.
                  </li>
                </ul>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Third-Party Data Processing
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  To provide in-app advertising (AdMob) and error analysis (Firebase), this application allows verified third-party services to collect information from your device such as Ad ID (ADID), cookies, device information, etc. This data may be transmitted and processed on servers overseas (such as Google), in compliance with the regulations of the Vietnamese Ministry of Information and Communications and relevant laws, and is protected according to the policies of each provider.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Data Retention Period and Data Deletion Procedure
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Since the service provider does not directly store users' personal information, no separate retention period is set. Data deletion and related rights exercise follow these principles:
                </div>
                <ul style={{ fontSize: 17, marginLeft: 24, marginBottom: 0, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>
                    <b>Local data deletion:</b> As soon as the user uninstalls the application or performs a “data deletion” in the device settings, <b>all game data stored on the device will be permanently deleted and cannot be recovered.</b>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    <b>Third-party data deletion:</b> Data collected by third parties, such as advertising IDs, can be controlled by the user through device settings (e.g., resetting advertising IDs) and will be automatically deleted according to the data storage policy of each third-party service (e.g., Google Analytics data retention settings).
                  </li>
                  <li>
                    <b>User rights exercise:</b> Since this service does not create user accounts on the server, there is no need to send a separate “membership cancellation” request. As soon as the application is uninstalled, the service contract will terminate and data collection will stop.
                  </li>
                </ul>
              </>
            ) : (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  1. Vị trí lưu trữ dữ liệu và nguyên tắc không thu thập
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Dịch vụ này là dịch vụ không yêu cầu tạo tài khoản (Non-account based service). Nhà cung cấp dịch vụ không thu thập hoặc lưu trữ trên máy chủ của mình các thông tin có thể nhận dạng cá nhân như tên, email, số điện thoại của bạn.
                </div>
                <ul style={{ fontSize: 17, marginLeft: 24, marginBottom: 8, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 4 }}>
                    <b>Dữ liệu trò chơi:</b> Tất cả dữ liệu tiến trình trò chơi (màn chơi, vật phẩm, v.v.) chỉ được lưu trữ trong bộ nhớ nội bộ của thiết bị di động của bạn.
                  </li>
                  <li>
                    <b>Ngoại lệ về nhật ký máy chủ:</b> Trong quá trình liên lạc với máy chủ nhằm đảm bảo tính ổn định dịch vụ, bảo mật và kiểm tra phiên bản, các nhật ký truy cập như địa chỉ IP có thể được ghi lại tạm thời. Những thông tin này chỉ được sử dụng cho mục đích bảo mật và sẽ tự động bị xóa vĩnh viễn sau một khoảng thời gian nhất định.
                  </li>
                </ul>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Thu thập tự động bởi dịch vụ bên thứ ba (Third-Party Data Processing)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Để cung cấp quảng cáo trong ứng dụng (AdMob) và phân tích lỗi (Firebase), ứng dụng này cho phép các dịch vụ bên thứ ba đã được xác minh thu thập từ thiết bị của bạn các thông tin như ID quảng cáo (ADID), cookie, thông tin thiết bị, v.v. Dữ liệu này có thể được truyền và xử lý trên các máy chủ ở nước ngoài (như Google), tuân thủ quy định của Bộ Thông tin và Truyền thông Việt Nam cũng như các pháp luật liên quan, và được bảo vệ theo chính sách của từng nhà cung cấp.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Thời hạn lưu trữ dữ liệu và quy trình hủy dữ liệu
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Do nhà cung cấp dịch vụ không trực tiếp lưu trữ thông tin cá nhân của người dùng, nên không thiết lập thời hạn lưu trữ riêng. Việc hủy dữ liệu và thực hiện các quyền liên quan tuân theo các nguyên tắc sau:
                </div>
                <ul style={{ fontSize: 17, marginLeft: 24, marginBottom: 0, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>
                    <b>Hủy dữ liệu cục bộ:</b> Ngay khi người dùng gỡ cài đặt (Uninstall) ứng dụng hoặc thực hiện “xóa dữ liệu” trong cài đặt thiết bị, <b>toàn bộ dữ liệu trò chơi được lưu trữ trên thiết bị sẽ bị xóa vĩnh viễn và không thể khôi phục.</b>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    <b>Hủy dữ liệu của bên thứ ba:</b> Các dữ liệu do bên thứ ba thu thập như ID quảng cáo có thể được người dùng kiểm soát thông qua cài đặt thiết bị (ví dụ: đặt lại ID quảng cáo) và sẽ được tự động hủy theo chính sách lưu trữ dữ liệu của từng dịch vụ bên thứ ba (ví dụ: cài đặt thời gian lưu trữ dữ liệu của Google Analytics).
                  </li>
                  <li>
                    <b>Thực hiện quyền của người dùng:</b> Do dịch vụ này không tạo tài khoản người dùng trên máy chủ, nên không cần gửi yêu cầu “hủy tư cách thành viên” riêng. Ngay khi ứng dụng bị gỡ cài đặt, hợp đồng sử dụng dịch vụ sẽ chấm dứt và việc thu thập dữ liệu sẽ dừng lại.
                  </li>
                </ul>
              </>
            )}
          </div>
          {/* Điều 10 - Ứng dụng xử lý dữ liệu cá nhân của trẻ em như thế nào? */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
              {language === 'en'
                ? "Article 10: How does the application process children's personal data?"
                : 'Điều 10: Ứng dụng xử lý dữ liệu cá nhân của trẻ em như thế nào?'}
            </h2>
            {language === 'en' ? (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  1. Definition of children and processing principles
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  This service can be used by all ages; however, in accordance with Vietnamese law and the principles of protecting children's rights, the service provider applies special protective measures for children <b>under 16 years of age (according to Vietnamese standards)</b>. We do not intentionally collect personally identifiable information from children and always prioritize protecting the best interests and rights of children.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Advertising and data processing for children (Compliance with Google Play's Family Policy)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  This application complies with Google Play's Families Policy. In cases where a user is identified as a child or content is classified as child-friendly, the following measures will be automatically applied:
                </div>
                <ul style={{ fontSize: 17, marginLeft: 24, marginBottom: 8, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>
                    <b>Restriction of Advertising Identifier (ADID) collection:</b> Sending a “Tag For Child Directed Treatment” signal to advertising partners (such as AdMob, Unity Ads, etc.) to restrict data collection for behavioral tracking or user profile creation.
                  </li>
                  <li>
                    <b>Providing non-personalized ads:</b> Children will only be shown contextual ads related to app content, not interest-based ads.
                  </li>
                </ul>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Parental Rights and Data Deletion
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  Because this service does not store user information on its own servers, children's data is not stored separately. If a parent or legal guardian discovers that a child is using the service via a device without their consent, they can uninstall the application to immediately stop all data collection and delete all information stored on the device. For further assistance, please contact our data security department at <a href="mailto:cskh.game@vkentertainment.vn">cskh.game@vkentertainment.vn</a>
                </div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  1. Định nghĩa trẻ em và nguyên tắc xử lý
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Dịch vụ này có thể được sử dụng bởi mọi lứa tuổi; tuy nhiên, theo quy định pháp luật Việt Nam và các nguyên tắc bảo vệ quyền trẻ em, nhà cung cấp dịch vụ áp dụng các biện pháp bảo vệ đặc biệt đối với trẻ em dưới 16 tuổi (theo tiêu chuẩn Việt Nam). Chúng tôi không cố ý thu thập thông tin nhận dạng cá nhân của trẻ em và luôn đặt việc bảo vệ quyền lợi và lợi ích tốt nhất của trẻ em làm nguyên tắc hàng đầu.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Quảng cáo và xử lý dữ liệu đối với trẻ em (Tuân thủ chính sách Gia đình của Google Play)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Ứng dụng này tuân thủ Chính sách Gia đình (Families Policy) của Google Play. Trong trường hợp người dùng được xác định là trẻ em hoặc nội dung được phân loại là dành cho trẻ em, các biện pháp sau sẽ được tự động áp dụng:
                </div>
                <ul style={{ fontSize: 17, marginLeft: 24, marginBottom: 8, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>
                    <b>Hạn chế thu thập mã định danh quảng cáo (ADID):</b> Gửi tín hiệu “Tag For Child Directed Treatment” đến các đối tác quảng cáo (như AdMob, Unity Ads, v.v.) để hạn chế việc thu thập dữ liệu phục vụ theo dõi hành vi hoặc tạo hồ sơ người dùng.
                  </li>
                  <li>
                    <b>Cung cấp quảng cáo không cá nhân hóa (Non-Personalized Ads):</b> Trẻ em chỉ được hiển thị quảng cáo theo ngữ cảnh (Contextual Ads) liên quan đến nội dung ứng dụng, không phải quảng cáo dựa trên sở thích.
                  </li>
                </ul>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Quyền của phụ huynh và việc xóa dữ liệu
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  Do dịch vụ này không lưu trữ thông tin người dùng trên máy chủ riêng, nên không lưu giữ dữ liệu của trẻ em một cách riêng biệt. Trong trường hợp phụ huynh hoặc người giám hộ hợp pháp phát hiện trẻ sử dụng dịch vụ thông qua thiết bị mà không có sự đồng ý của mình, họ có thể gỡ cài đặt (Uninstall) ứng dụng để ngay lập tức dừng mọi hoạt động thu thập dữ liệu và xóa toàn bộ thông tin được lưu trữ trên thiết bị. Nếu cần hỗ trợ thêm, vui lòng liên hệ với bộ phận phụ trách bảo mật thông tin tại <a href="mailto:cskh.game@vkentertainment.vn">cskh.game@vkentertainment.vn</a>
                </div>
              </>
            )}
          </div>
          {/* Điều 11 - Thông tin của bạn được bảo vệ an toàn như thế nào? */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
              {language === 'en'
                ? 'Article 11: How is your information protected?'
                : 'Điều 11: Thông tin của bạn được bảo vệ an toàn như thế nào?'}
            </h2>
            {language === 'en' ? (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  1. Device-Level Security
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  This application, in principle, does not transmit users' personal information to the developer's servers but only stores it in the internal memory of the mobile device. Therefore, data is protected at the first level by the <b>sandbox mechanism and encryption system</b> of the Android operating system.
                </div>
                <div style={{ fontSize: 16, marginBottom: 8, marginLeft: 16, fontStyle: 'italic', color: '#222' }}>
                  <b>Note:</b> In the case of rooting the device or using a modified operating system, these security mechanisms may be disabled; the service provider is not responsible for data leakage risks arising from these cases.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Encryption in Transit
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  All data generated during communication with third-party services necessary for the application's operation (such as Google AdMob, Firebase, etc.), including IP addresses, ad IDs, etc., is encrypted during transmission via the secure <b>HTTPS protocol (SSL/TLS)</b>. This measure aims to prevent third parties from intercepting or eavesdropping on data during transmission.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Organizational Measures
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  To comply with Vietnamese personal data protection laws (Decree 13/2023/ND-CP), the service provider applies the following organizational measures:
                </div>
                <ul style={{ fontSize: 17, marginLeft: 24, marginBottom: 8, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>
                    <b>Minimum access:</b> Strictly restrict the integration of unverified third-party SDKs; only use services from partners that meet Google Play's Family Policy and security standards (Google Certified Ad Networks).
                  </li>
                  <li>
                    <b>Self-testing and evaluation:</b> Regularly check for security vulnerabilities in the libraries used in the application and update them as needed.
                  </li>
                </ul>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  4. Limitations of security
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  While we strive to implement industry-standard security measures, please note that data transmission over the Internet or electronic storage cannot guarantee 100% security.
                </div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  1. Bảo mật dữ liệu cục bộ (Device-Level Security)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Ứng dụng này, theo nguyên tắc, không truyền thông tin cá nhân của người dùng lên máy chủ của nhà phát triển mà chỉ lưu trữ trong bộ nhớ nội bộ của thiết bị di động. Do đó, dữ liệu được bảo vệ ở mức độ đầu tiên bởi cơ chế sandbox và hệ thống mã hóa của hệ điều hành Android.
                </div>
                <div style={{ fontSize: 16, marginBottom: 8, marginLeft: 16, fontStyle: 'italic', color: '#222' }}>
                  <b>Lưu ý:</b> Trong trường hợp người dùng root thiết bị (rooting) hoặc sử dụng hệ điều hành đã bị chỉnh sửa, các cơ chế bảo mật này có thể bị vô hiệu hóa; nhà cung cấp dịch vụ không chịu trách nhiệm đối với các rủi ro rò rỉ dữ liệu phát sinh từ những trường hợp này.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Mã hóa trong quá trình truyền dữ liệu (Encryption in Transit)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Mọi dữ liệu phát sinh trong quá trình liên lạc với các dịch vụ bên thứ ba cần thiết cho hoạt động của ứng dụng (như Google AdMob, Firebase, v.v.), bao gồm địa chỉ IP, ID quảng cáo…, đều được mã hóa khi truyền tải thông qua giao thức bảo mật <b>HTTPS (SSL/TLS)</b>. Biện pháp này nhằm ngăn chặn việc bên thứ ba chặn hoặc nghe lén dữ liệu trong quá trình truyền.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Biện pháp bảo vệ về mặt quản lý (Organizational Measures)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Để tuân thủ pháp luật bảo vệ dữ liệu cá nhân của Việt Nam (Nghị định 13/2023/NĐ-CP), nhà cung cấp dịch vụ áp dụng các biện pháp quản lý sau:
                </div>
                <ul style={{ fontSize: 17, marginLeft: 24, marginBottom: 8, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 8 }}>
                    <b>Quyền truy cập tối thiểu:</b> Nghiêm ngặt hạn chế việc tích hợp các SDK của bên thứ ba chưa được xác minh; chỉ sử dụng dịch vụ của các đối tác đáp ứng Chính sách Gia đình của Google Play và các tiêu chuẩn bảo mật (Google Certified Ad Networks).
                  </li>
                  <li>
                    <b>Tự kiểm tra, đánh giá:</b> Định kỳ kiểm tra các lỗ hổng bảo mật của các thư viện được sử dụng trong ứng dụng và thực hiện cập nhật khi cần thiết.
                  </li>
                </ul>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  4. Giới hạn của bảo mật
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  Mặc dù chúng tôi nỗ lực áp dụng các biện pháp bảo mật theo tiêu chuẩn ngành, xin lưu ý rằng việc truyền dữ liệu qua Internet hoặc lưu trữ điện tử không thể đảm bảo an toàn tuyệt đối 100%.
                </div>
              </>
            )}
          </div>

              {/* Điều 12 - Bạn sẽ được thông báo về các thay đổi của Chính sách quyền riêng tư này như thế nào? */}
              {/* Điều 12 - Bạn sẽ được thông báo về các thay đổi của Chính sách quyền riêng tư này như thế nào? */}
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, lineHeight: 1.3 }}>
                  {language === 'en'
                    ? 'Article 12: How will you be notified of changes to this Privacy Policy?'
                    : 'Điều 12: Bạn sẽ được thông báo về các thay đổi của Chính sách quyền riêng tư này như thế nào?'}
                </h2>
                {language === 'en' ? (
                  <>
                    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
                      1. Updates and Notification Methods
                    </div>
                    <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                      The service provider may modify this Privacy Policy when reasonable reasons arise, such as changes in legislation or changes to the service (e.g., adding new SDKs). Changes will be notified in the following ways:
                    </div>
                    <ul style={{ fontSize: 17, marginLeft: 32, marginBottom: 8, textAlign: 'justify', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: 8 }}>
                        <b>Regular Changes:</b> Modified content will be posted on this page and updated with the <b>“Last Updated Date”</b>.
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        <b>Significant Changes:</b> In the event that changes significantly affect your rights, such as expanding the types of personal data collected or changing third-party data recipients, we will provide clear prior notice <b>through application update notes or a pop-up window</b> when launching the application.
                      </li>
                    </ul>
                    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                      2. Effectiveness and Consent
                    </div>
                    <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                      The modified Policy will be effective from the <b>“Effective Date”</b> published. If you continue using the app after the policy changes are posted, it will be considered that you agree to the changes. If you do not agree, you can terminate your use of the service and stop data collection by uninstalling the app.
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                      3. Manage Change History
                    </div>
                    <ul style={{ fontSize: 17, marginLeft: 32, marginBottom: 0, textAlign: 'justify', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: 4 }}><b>Publication Date:</b> January 5, 2026</li>
                      <li><b>Effective Date:</b> January 5, 2026</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
                      1. Cập nhật và phương thức thông báo
                    </div>
                    <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                      Nhà cung cấp dịch vụ có thể sửa đổi Chính sách quyền riêng tư này khi có lý do hợp lý như thay đổi pháp luật hoặc thay đổi dịch vụ (ví dụ: bổ sung SDK mới). Các thay đổi sẽ được thông báo theo các cách sau:
                    </div>
                    <ul style={{ fontSize: 17, marginLeft: 32, marginBottom: 8, textAlign: 'justify', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: 8 }}>
                        <b>Thay đổi thông thường:</b> Nội dung đã sửa đổi sẽ được đăng tải trên trang này và cập nhật <b>“Ngày cập nhật cuối cùng (Last Updated)”</b>.
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        <b>Thay đổi quan trọng:</b> Trong trường hợp các thay đổi ảnh hưởng đáng kể đến quyền lợi của bạn, chẳng hạn như mở rộng loại dữ liệu cá nhân được thu thập hoặc thay đổi bên thứ ba nhận dữ liệu, chúng tôi sẽ thông báo rõ ràng trước thông qua <b>thông báo cập nhật ứng dụng (Release Notes)</b> hoặc <b>cửa sổ bật lên</b> khi khởi chạy ứng dụng.
                      </li>
                    </ul>
                    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                      2. Hiệu lực và sự đồng ý
                    </div>
                    <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                      Chính sách đã được sửa đổi sẽ có hiệu lực kể từ <b>“Ngày hiệu lực (Effective Date)”</b> được công bố. Nếu bạn tiếp tục sử dụng ứng dụng sau khi chính sách thay đổi được đăng tải, điều đó được xem là bạn đã đồng ý với các nội dung đã thay đổi. Nếu bạn không đồng ý, bạn có thể chấm dứt việc sử dụng dịch vụ và ngừng thu thập dữ liệu bằng cách gỡ cài đặt ứng dụng.
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                      3. Quản lý lịch sử thay đổi
                    </div>
                    <ul style={{ fontSize: 17, marginLeft: 32, marginBottom: 0, textAlign: 'justify', listStyleType: 'disc' }}>
                      <li style={{ marginBottom: 4 }}><b>Ngày công bố:</b> 05 tháng 01 năm 2026</li>
                      <li><b>Ngày áp dụng:</b> 05 tháng 01 năm 2026</li>
                    </ul>
                  </>
                )}
              </div>
          {/* Điều 13 - Bạn đồng ý như thế nào? */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
              {language === 'en'
                ? 'Article 13: How do you consent?'
                : 'Điều 13: Bạn đồng ý như thế nào?'}
            </h2>
            {language === 'en' ? (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
                  1. Explicit Consent
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  This application complies with Vietnam's Personal Data Protection Decree (Decree 13) and will not process any personal data without your express consent. When first launching the application, you confirm that you fully understand and agree to the contents of this Privacy Policy (types of data collected, purposes, sharing with third parties, etc.) by <b>pressing the [I Agree] button or selecting the checkbox</b> in the consent pop-up window.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Silence or lack of response will not be considered consent
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Simply installing or opening the application without any express consent (silence or lack of response) will not be considered valid consent. To use the service, active consent through technical settings (such as pressing a confirmation button) is required.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Definition of “Processing”
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  “Processing” is understood as one or more activities related to personal data, including: collection, recording, analysis, storage, modification, publication, access, retrieval, search, recovery, encryption, decryption, copying, sharing, transmission, provision, transfer, international transfer, deletion, destruction, or other related activities.
                </div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
                  1. Sự đồng ý rõ ràng (Explicit Consent)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Ứng dụng này tuân thủ Nghị định bảo vệ dữ liệu cá nhân của Việt Nam (Nghị định 13) và không xử lý bất kỳ dữ liệu cá nhân nào nếu không có sự thể hiện ý chí rõ ràng của bạn. Khi lần đầu khởi chạy ứng dụng, bạn xác nhận rằng mình đã hiểu đầy đủ và đồng ý với nội dung của Chính sách quyền riêng tư này (các loại dữ liệu được thu thập, mục đích, việc chia sẻ cho bên thứ ba, v.v.) bằng cách nhấn nút <b>[Tôi đồng ý (I Agree)]</b> hoặc chọn ô đánh dấu trong cửa sổ pop-up xin ý kiến đồng ý.
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Không coi im lặng hay không phản hồi là sự đồng ý
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Việc bạn chỉ cài đặt hoặc mở ứng dụng mà không có bất kỳ biểu hiện ý chí rõ ràng nào (im lặng hoặc không phản hồi) sẽ không được xem là sự đồng ý hợp lệ. Để sử dụng dịch vụ, bắt buộc phải có quy trình đồng ý chủ động thông qua các thiết lập kỹ thuật (như nhấn nút xác nhận).
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Định nghĩa về “xử lý” (Definition of Processing)
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  “Xử lý” (Processing) được hiểu là một hoặc nhiều hoạt động liên quan đến dữ liệu cá nhân, bao gồm: thu thập, ghi nhận, phân tích, lưu trữ, chỉnh sửa, công bố, truy cập, truy xuất, tìm kiếm, khôi phục, mã hóa, giải mã, sao chép, chia sẻ, truyền tải, cung cấp, chuyển giao, chuyển ra nước ngoài, xóa, tiêu hủy hoặc các hoạt động liên quan khác.
                </div>
              </>
            )}
          </div>

          {/* Điều 14 - Phương thức liên hệ */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
              {language === 'en'
                ? 'Article 14: Contact Methods'
                : 'Điều 14: Phương thức liên hệ'}
            </h2>
            {language === 'en' ? (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
                  1. Designation of Responsible Person and Department
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  In order to comply with the Vietnamese Decree on Personal Data Protection (Decree 13) and protect users' personal information, the service provider has designated a Data Protection Officer and a dedicated contact person as follows:
                  <ul style={{ marginTop: 8, marginBottom: 8, marginLeft: 32, listStyleType: 'disc', fontSize: 17 }}>
                    <li><b>Department / Title:</b> [Privacy Team]</li>
                    <li><b>Email:</b> cskh.game@vkentertainment.vn</li>
                    <li><b>Address:</b> [VK Entertainment Address]</li>
                  </ul>
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Complaint Processing Procedure and Timeline
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  You can submit any complaints related to personal data protection arising during the use of the application (such as requests for data deletion, restrictions on processing, withdrawal of consent, etc.) to the contact information above.
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  To comply with legal obligations, the service provider will respond with the processing results or progress updates <b>within 72 hours of receiving the request</b>, especially for requests regarding data deletion (Article 16) and restrictions on processing (Article 9).
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Resolving Infringement of Rights
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  If you believe that the service provider's self-correction measures are insufficient to remedy the damage caused by the breach of personal data, or require assistance from Vietnamese authorities, you can contact the following agency:
                  <ul style={{ marginTop: 8, marginBottom: 0, marginLeft: 32, listStyleType: 'disc', fontSize: 17 }}>
                    <li><b>Cyber ​​Security and High-Tech Crime Prevention Department – ​​Ministry of Public Security of Vietnam (A05):</b> [Website or related guidance information]</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
                  1. Chỉ định người phụ trách và bộ phận chịu trách nhiệm
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Nhà cung cấp dịch vụ, nhằm tuân thủ Nghị định bảo vệ dữ liệu cá nhân của Việt Nam (Nghị định 13) và bảo vệ thông tin cá nhân của người dùng, đã chỉ định Người phụ trách bảo vệ dữ liệu (Data Protection Officer) và đầu mối liên hệ chuyên trách như sau:
                  <ul style={{ marginTop: 8, marginBottom: 8, marginLeft: 32, listStyleType: 'disc', fontSize: 17 }}>
                    <li><b>Bộ phận / Chức danh:</b> [Đội Bảo vệ Quyền riêng tư (Privacy Team)]</li>
                    <li><b>Email:</b> cskh.game@vkentertainment.vn</li>
                    <li><b>Địa chỉ:</b> [Địa chỉ VK Entertainment]</li>
                  </ul>
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Quy trình và thời hạn xử lý khiếu nại
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Bạn có thể gửi mọi khiếu nại liên quan đến bảo vệ dữ liệu cá nhân phát sinh trong quá trình sử dụng ứng dụng (như yêu cầu xóa dữ liệu, hạn chế xử lý, rút lại sự đồng ý, v.v.) tới các thông tin liên hệ nêu trên.<br/>
                  Nhà cung cấp dịch vụ, để tuân thủ nghĩa vụ pháp lý, sẽ phản hồi kết quả xử lý hoặc thông báo tiến độ <b>trong vòng 72 giờ kể từ khi tiếp nhận yêu cầu</b>, đặc biệt đối với các yêu cầu về xóa dữ liệu (Điều 16) và hạn chế xử lý (Điều 9).
                </div>
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Giải quyết khi quyền lợi bị xâm phạm
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  Trong trường hợp bạn cho rằng các biện pháp tự xử lý của nhà cung cấp dịch vụ là chưa đủ để khắc phục thiệt hại do vi phạm dữ liệu cá nhân, hoặc cần sự hỗ trợ từ cơ quan chức năng của Việt Nam, bạn có thể liên hệ với cơ quan sau:
                  <ul style={{ marginTop: 8, marginBottom: 0, marginLeft: 32, listStyleType: 'disc', fontSize: 17 }}>
                    <li><b>Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao – Bộ Công an Việt Nam (A05):</b> [Trang web hoặc thông tin hướng dẫn liên quan]</li>
                  </ul>
                </div>
              </>
            )}
          </div>

          <div style={{ marginTop: 40, paddingTop: 20, borderTop: "2px solid #ece6fa", textAlign: "left", fontSize: 14, color: "#888" }}>
            <p>{getLastUpdated()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default PersonalDataPolicy;
