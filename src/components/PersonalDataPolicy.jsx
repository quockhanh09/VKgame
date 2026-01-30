

import React from "react";
import "../style/App.css";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../utils/translations";
import { useNavigate, useParams } from "react-router-dom";



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
    { value: '', label: 'Game Select' },
    { value: 'vuong-quoc-bong-bong', label: 'Vương Quốc Bong Bóng' },
    { value: 'day-xich-ma-thuat', label: 'Dây Xích Ma Thuật' },
    { value: 'duong-ong-lien-hoan', label: 'Đường Ống Liên Hoàn' },
    { value: 'xep-ngoc-3d', label: 'Xếp Ngọc 3D' },
    { value: 'thach-dai-chien', label: 'Thạch Đại Chiến' },
    { value: 'hoa-si-pixel', label: 'Họa Sĩ Pixel' },
    { value: 'bac-thay-pha-che', label: 'Bậc Thầy Pha Chế' },
    { value: 'giai-ma-oc-vit', label: 'Giải Mã Ốc Vít' },
    { value: 'giao-chien', label: 'Giáo Chiến' },
    { value: 'vua-sinh-ton', label: 'Vua Sinh tồn' },
    { value: 'phuong-trinh-bong-bong', label: 'Phương Trình Bong Bóng' },
    { value: 'giai-ma-oc-vit-2', label: 'Giải Mã Ốc Vít 2' },
    { value: 'que-tam-tri-tue', label: 'Que Tăm Trí Tuệ' },
    { value: 'sieu-sao-sudoku', label: 'Siêu Sao Sudoku' },
    { value: 'vua-dau-bep', label: 'Vua Đầu Bếp' },
    { value: 'pha-khoi', label: 'Phá Khối' },
    { value: 'trong-xe-chuyen-nghiep', label: 'Trông Xe Chuyên Nghiệp' },
    { value: 'ong-vang-lam-toan', label: 'Ong Vàng Làm Toán' },
    { value: 'phan-luc-tren-khong', label: 'Phản Lực Trên Không' },
    { value: 'hop-sac-mau', label: 'Hộp Sắc Màu' },
    { value: 'sac-mau-luc-giac', label: 'Sắc Màu Lục Giác' },
    { value: 'cu-cham-vo-han', label: 'Cú Chạm Vô Hạn' },
    { value: 'cho-xe-sieu-toc', label: 'Chở Xe Siêu Tốc' },
    { value: 'lien-ket-ma-thuat', label: 'Liên Kết Ma Thuật' },
    { value: 'vuong-quoc-gau-bang', label: 'Vương Quốc Gấu Băng' },
    { value: 'duong-dua-vo-han', label: 'Đường Đua Vô Hạn' },
    { value: 'xay-dung-to-ong', label: 'Xây Dựng Tổ Ong' },
    { value: 'can-bang-hoa-hoc', label: 'Cân Bằng Hoá Học' },
    { value: 'dao-sinh-ton', label: 'Đảo Sinh Tồn' },
    { value: 'lan-sieu-toc', label: 'Lăn Siêu Tốc' },
    { value: 'vua-toc-do', label: 'Vua Tốc Độ' },
    { value: 've-si-nguoi-que', label: 'Vệ Sĩ Người Que' },
    { value: 'hanh-tinh-da-giac', label: 'Hành Tinh Đa Giác' },
    { value: 'giai-ma-oc-vit-3', label: 'Giải Mã Ốc Vít 3' },
    { value: 'giao-lo-cau-vong', label: 'Giao Lộ Cầu Vồng' },
    { value: 'xuong-phan-loai', label: 'Xưởng Phân Loại' },
    { value: 'phi-doi-ngan-ha', label: 'Phi Đội Ngân Hà' },
    { value: 'nhip-roi-thoi-gian', label: 'Nhịp Rơi Thời Gian' },
    { value: 'thach-vien', label: 'Thạch Viện' },
    { value: 'pha-khoi-2', label: 'Phá Khối' },
  ];

  const gameListEn = [
    { value: '', label: 'Game Select' },
    { value: 'vuong-quoc-bong-bong', label: 'Bubble Cushion' },
    { value: 'day-xich-ma-thuat', label: 'Chain Link' },
    { value: 'duong-ong-lien-hoan', label: 'Port Port' },
    { value: 'xep-ngoc-3d', label: 'Jewel Liberation' },
    { value: 'thach-dai-chien', label: 'Jelly 1010' },
    { value: 'hoa-si-pixel', label: 'Pixel Coloring' },
    { value: 'bac-thay-pha-che', label: 'Flask Water Sort' },
    { value: 'giai-ma-oc-vit', label: 'Screw One' },
    { value: 'giao-chien', label: 'Spearman' },
    { value: 'vua-sinh-ton', label: 'Fall Man' },
    { value: 'phuong-trinh-bong-bong', label: 'Bubble Equation' },
    { value: 'giai-ma-oc-vit-2', label: 'Screw TWO' },
    { value: 'que-tam-tri-tue', label: 'Toothpick Pro' },
    { value: 'sieu-sao-sudoku', label: 'Sudoku Star' },
    { value: 'vua-dau-bep', label: 'Food Biz Master' },
    { value: 'pha-khoi', label: 'Block Shredder' },
    { value: 'trong-xe-chuyen-nghiep', label: 'Parking Lot Valet' },
    { value: 'ong-vang-lam-toan', label: 'Bee Math Connect' },
    { value: 'phan-luc-tren-khong', label: 'Fly Shot' },
    { value: 'hop-sac-mau', label: 'Paint The Box' },
    { value: 'sac-mau-luc-giac', label: 'Hexa Flip' },
    { value: 'cu-cham-vo-han', label: 'Infinite Tap Tap' },
    { value: 'cho-xe-sieu-toc', label: 'Car Transport' },
    { value: 'lien-ket-ma-thuat', label: 'Circuit Magic' },
    { value: 'vuong-quoc-gau-bang', label: 'Icy Bear Match' },
    { value: 'duong-dua-vo-han', label: 'HIT RUN' },
    { value: 'xay-dung-to-ong', label: 'Honeycom Build' },
    { value: 'can-bang-hoa-hoc', label: 'CHEM WORK' },
    { value: 'dao-sinh-ton', label: 'Island Together' },
    { value: 'lan-sieu-toc', label: 'Infinite Roll' },
    { value: 'vua-toc-do', label: 'HIT Race One' },
    { value: 've-si-nguoi-que', label: 'Stickman Protector' },
    { value: 'hanh-tinh-da-giac', label: 'Poly World' },
    { value: 'giai-ma-oc-vit-3', label: 'SCREW 3' },
    { value: 'giao-lo-cau-vong', label: 'Paint The Road' },
    { value: 'xuong-phan-loai', label: 'Packing Ball' },
    { value: 'phi-doi-ngan-ha', label: 'G Conqueror' },
    { value: 'nhip-roi-thoi-gian', label: 'Tic Tac Down' },
    { value: 'thach-vien', label: 'Jelly LAB' },
    { value: 'pha-khoi-2', label: 'Split Beads' },
  ];
  // Lấy tên game từ URL nếu có
  const [selectedGame, setSelectedGame] = React.useState(params.game || '');

  // Lấy danh sách game theo ngôn ngữ
  const gameList = language === 'en' ? gameListEn : gameListVi;

  return (
    <section style={{ background: "#fcf8f2", minHeight: "100vh", padding: 0 }}>
      {/* Tạo khoảng cách với header */}
      <div style={{ height: 36 }} />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: 0, position: "relative" }}>
        {/* Game Select ở sát mép phải */}
        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: 2, marginLeft:40 }}>
          <select
            value={selectedGame}
            onChange={e => {
              setSelectedGame(e.target.value);
              if (e.target.value) {
                window.history.replaceState(null, '', `/personal-data-policy/${e.target.value}`);
              } else {
                window.history.replaceState(null, '', `/personal-data-policy`);
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
        <h1 style={{ color: "#181818", fontSize: 40, fontWeight: 400, marginBottom: 32, textAlign: "center", letterSpacing: 1, fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', marginTop: 0 }}>
          {getMainTitle()}
        </h1>
        <div style={{ color: "#181818", fontSize: 17, lineHeight: 1.8, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: "0 auto", marginTop: 12 }}>
          {/* Phần hiệu lực và giải thích luật */}
          <div style={{ marginBottom: 24 }}>
            <p style={{ fontWeight: 700, marginBottom: 6 }}>
              Bắt đầu có hiệu lực từ: <span style={{ fontWeight: 400 }}>30 ngày 1 tháng năm 2026</span>
            </p>
            <p style={{ marginBottom: 6 }}>
              Chính sách xử lý dữ liệu cá nhân này áp dụng cho dịch vụ <b>{
                selectedGame
                  ? (gameList.find(g => g.value === selectedGame)?.label || (language === 'en' ? '[Game name]' : '[Tên game]'))
                  : (language === 'en' ? '[Game name]' : '[Tên game]')
              }</b> do <b>VK Entertainment</b> (sau đây gọi là “Nhà cung cấp dịch vụ”) cung cấp.
            </p>
            <p style={{ marginBottom: 6 }}>
              Nhà cung cấp dịch vụ tuân thủ các quy định pháp luật liên quan, bao gồm <b>Nghị định số 13/2023/NĐ-CP của Việt Nam về bảo vệ dữ liệu cá nhân</b>. Chính sách này chỉ có hiệu lực khi người dùng thể hiện sự đồng ý rõ ràng, chẳng hạn như nhấn nút “Đồng ý” trên cửa sổ pop-up được hiển thị khi lần đầu khởi chạy ứng dụng.
            </p>
          </div>
          {/* Nội dung chính */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{intro.title}</h2>
            {language === 'en' ? (
              intro.content.map((item, idx) => (
                <p key={idx} style={{ marginBottom: 12, textAlign: "justify" }}>
                  {item.number} {item.text}
                </p>
              ))
            ) : (
              <>
                <p style={{ fontWeight: 600, marginBottom: 12, textAlign: "justify" }}>
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
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{section2.title}</h2>
            {language === 'en' ? (
              <ul style={{ paddingLeft: 24 }}>
                {section2.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 10, textAlign: "justify" }}>{item}</li>
                ))}
              </ul>
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
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{section3.title}</h2>
            {language === 'en' ? (
              <ul style={{ paddingLeft: 24 }}>
                {section3.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 10, textAlign: "justify" }}>{item}</li>
                ))}
              </ul>
            ) : (
              <p style={{ marginBottom: 0, textAlign: "justify" }} dangerouslySetInnerHTML={{__html: section3.desc}} />
            )}
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{section4.title}</h2>
            {language === 'en' ? (
              <ul style={{ paddingLeft: 24 }}>
                {section4.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: 10, textAlign: "justify" }}>{item}</li>
                ))}
              </ul>
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
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{section5.title}</h2>
            <p style={{ textAlign: "justify", marginBottom: 0 }}>{section5.content}</p>
          </div>

          {/* Điều 6 - chỉ tiếng Việt, đặt sau điều 5 */}
          {language !== 'en' && section6 && (
            <div style={{ marginBottom: 30 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15 }}>{section6.title}</h2>
              <p style={{ marginBottom: 10, textAlign: "justify" }}>{section6.desc1}</p>
              <p style={{ marginBottom: 10, textAlign: "justify" }} dangerouslySetInnerHTML={{__html: section6.desc2}} />
              <ul style={{ paddingLeft: 24, marginBottom: 0 }}>
                {section6.services.map((s, idx) => (
                  <li key={s.url} style={{ marginBottom: 8, textAlign: "justify" }}>
                    <span style={{ fontWeight: 500 }}>{s.name}</span> (<a href={s.url} target="_blank" rel="noopener noreferrer">{s.url}</a>)
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Điều 7 - Công bố thông tin theo yêu cầu pháp lý và bảo vệ quyền lợi */}
          {language !== 'en' && (
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
                Điều 7: Công bố thông tin theo yêu cầu pháp lý và bảo vệ quyền lợi
              </h2>
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
            </div>
          )}

          {/* Điều 8 - Quyền từ chối thu thập dữ liệu (Opt-out) */}
          {language !== 'en' && (
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
                Điều 8: Quyền từ chối thu thập dữ liệu (Opt-out) là gì?
              </h2>
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
            </div>
          )}
          {/* Điều 9 - Chính sách lưu trữ dữ liệu */}
          {language !== 'en' && (
            <div style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
                Điều 9: Chính sách lưu trữ dữ liệu là gì và bạn có thể quản lý thông tin như thế nào?
              </h2>
              {/* 1. Vị trí lưu trữ dữ liệu và nguyên tắc không thu thập */}
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
              {/* 2. Thu thập tự động bởi dịch vụ bên thứ ba */}
              <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                2. Thu thập tự động bởi dịch vụ bên thứ ba (Third-Party Data Processing)
              </div>
              <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                Để cung cấp quảng cáo trong ứng dụng (AdMob) và phân tích lỗi (Firebase), ứng dụng này cho phép các dịch vụ bên thứ ba đã được xác minh thu thập từ thiết bị của bạn các thông tin như ID quảng cáo (ADID), cookie, thông tin thiết bị, v.v. Dữ liệu này có thể được truyền và xử lý trên các máy chủ ở nước ngoài (như Google), tuân thủ quy định của Bộ Thông tin và Truyền thông Việt Nam cũng như các pháp luật liên quan, và được bảo vệ theo chính sách của từng nhà cung cấp.
              </div>
              {/* 3. Thời hạn lưu trữ dữ liệu và quy trình hủy dữ liệu */}
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
            </div>
          )}
          {/* Điều 10 - Ứng dụng xử lý dữ liệu cá nhân của trẻ em như thế nào? */}
          {language !== 'en' && (
            <>
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
                  Điều 10: Ứng dụng xử lý dữ liệu cá nhân của trẻ em như thế nào?
                </h2>
                {/* 1. Định nghĩa trẻ em và nguyên tắc xử lý */}
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  1. Định nghĩa trẻ em và nguyên tắc xử lý
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Dịch vụ này có thể được sử dụng bởi mọi lứa tuổi; tuy nhiên, theo quy định pháp luật Việt Nam và các nguyên tắc bảo vệ quyền trẻ em, nhà cung cấp dịch vụ áp dụng các biện pháp bảo vệ đặc biệt đối với trẻ em dưới 16 tuổi (theo tiêu chuẩn Việt Nam). Chúng tôi không cố ý thu thập thông tin nhận dạng cá nhân của trẻ em và luôn đặt việc bảo vệ quyền lợi và lợi ích tốt nhất của trẻ em làm nguyên tắc hàng đầu.
                </div>
                {/* 2. Quảng cáo và xử lý dữ liệu đối với trẻ em */}
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
                {/* 3. Quyền của phụ huynh và việc xóa dữ liệu */}
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Quyền của phụ huynh và việc xóa dữ liệu
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  Do dịch vụ này không lưu trữ thông tin người dùng trên máy chủ riêng, nên không lưu giữ dữ liệu của trẻ em một cách riêng biệt. Trong trường hợp phụ huynh hoặc người giám hộ hợp pháp phát hiện trẻ sử dụng dịch vụ thông qua thiết bị mà không có sự đồng ý của mình, họ có thể gỡ cài đặt (Uninstall) ứng dụng để ngay lập tức dừng mọi hoạt động thu thập dữ liệu và xóa toàn bộ thông tin được lưu trữ trên thiết bị. Nếu cần hỗ trợ thêm, vui lòng liên hệ với bộ phận phụ trách bảo mật thông tin tại cskh.game@vkentertainment.vn
                </div>
              </div>
              {/* Điều 11 - Thông tin của bạn được bảo vệ an toàn như thế nào? */}
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
                  Điều 11: Thông tin của bạn được bảo vệ an toàn như thế nào?
                </h2>
                {/* 1. Bảo mật dữ liệu cục bộ */}
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  1. Bảo mật dữ liệu cục bộ (Device-Level Security)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Ứng dụng này, theo nguyên tắc, không truyền thông tin cá nhân của người dùng lên máy chủ của nhà phát triển mà chỉ lưu trữ trong bộ nhớ nội bộ của thiết bị di động. Do đó, dữ liệu được bảo vệ ở mức độ đầu tiên bởi cơ chế sandbox và hệ thống mã hóa của hệ điều hành Android.
                </div>
                <div style={{ fontSize: 16, marginBottom: 8, marginLeft: 16, fontStyle: 'italic', color: '#222' }}>
                  <b>Lưu ý:</b> Trong trường hợp người dùng root thiết bị (rooting) hoặc sử dụng hệ điều hành đã bị chỉnh sửa, các cơ chế bảo mật này có thể bị vô hiệu hóa; nhà cung cấp dịch vụ không chịu trách nhiệm đối với các rủi ro rò rỉ dữ liệu phát sinh từ những trường hợp này.
                </div>
                {/* 2. Mã hóa trong quá trình truyền dữ liệu */}
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Mã hóa trong quá trình truyền dữ liệu (Encryption in Transit)
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Mọi dữ liệu phát sinh trong quá trình liên lạc với các dịch vụ bên thứ ba cần thiết cho hoạt động của ứng dụng (như Google AdMob, Firebase, v.v.), bao gồm địa chỉ IP, ID quảng cáo…, đều được mã hóa khi truyền tải thông qua giao thức bảo mật <b>HTTPS (SSL/TLS)</b>. Biện pháp này nhằm ngăn chặn việc bên thứ ba chặn hoặc nghe lén dữ liệu trong quá trình truyền.
                </div>
                {/* 3. Biện pháp bảo vệ về mặt quản lý */}
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
                {/* 4. Giới hạn của bảo mật */}
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  4. Giới hạn của bảo mật
                </div>
                <div style={{ fontSize: 17, marginBottom: 0, textAlign: 'justify' }}>
                  Mặc dù chúng tôi nỗ lực áp dụng các biện pháp bảo mật theo tiêu chuẩn ngành, xin lưu ý rằng việc truyền dữ liệu qua Internet hoặc lưu trữ điện tử không thể đảm bảo an toàn tuyệt đối 100%.
                </div>
              </div>

              {/* Điều 12 - Bạn sẽ được thông báo về các thay đổi của Chính sách quyền riêng tư này như thế nào? */}
              <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18, lineHeight: 1.3 }}>
                  Điều 12: <span style={{ fontWeight: 700 }}>Bạn sẽ được thông báo về các thay đổi của Chính sách quyền riêng tư này như thế nào?</span>
                </h2>
                {/* 1. Cập nhật và phương thức thông báo */}
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
                {/* 2. Hiệu lực và sự đồng ý */}
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  2. Hiệu lực và sự đồng ý
                </div>
                <div style={{ fontSize: 17, marginBottom: 8, textAlign: 'justify' }}>
                  Chính sách đã được sửa đổi sẽ có hiệu lực kể từ <b>“Ngày hiệu lực (Effective Date)”</b> được công bố. Nếu bạn tiếp tục sử dụng ứng dụng sau khi chính sách thay đổi được đăng tải, điều đó được xem là bạn đã đồng ý với các nội dung đã thay đổi. Nếu bạn không đồng ý, bạn có thể chấm dứt việc sử dụng dịch vụ và ngừng thu thập dữ liệu bằng cách gỡ cài đặt ứng dụng.
                </div>
                {/* 3. Quản lý lịch sử thay đổi */}
                <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, marginTop: 18 }}>
                  3. Quản lý lịch sử thay đổi
                </div>
                <ul style={{ fontSize: 17, marginLeft: 32, marginBottom: 0, textAlign: 'justify', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: 4 }}><b>Ngày công bố:</b> 05 tháng 01 năm 2026</li>
                  <li><b>Ngày áp dụng:</b> 05 tháng 01 năm 2026</li>
                </ul>
              </div>

            </>
          )}
         
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
              Điều 13: <span style={{ fontWeight: 700 }}>Bạn đồng ý như thế nào?</span>
            </h2>
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
          </div>

          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
              Điều 14: <span style={{ fontWeight: 700 }}>Phương thức liên hệ</span>
            </h2>
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
