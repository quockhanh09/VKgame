import "../style/App.css";

function Terms() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #262335 10%, #463699 40%, #8A83DA 70%, #FBD5BD 100%)',
      padding: "80px 20px",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px",
      }}>
        {/* Header */}
        <h1 style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 40,
          textAlign: "center",
          letterSpacing: 2,
          fontFamily: 'Montserrat, sans-serif'
        }}>
          ĐIỀU KHOẢN SỬ DỤNG DỊCH VỤ
        </h1>

        {/* Content */}
        <div style={{
          color: "#fff",
          fontSize: 15,
          lineHeight: 1.8,
          fontFamily: 'Arial, sans-serif'
        }}>
          {/* Section 1 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              1. CHẤP NHẬN ĐIỀU KHOẢN
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              Bằng việc truy cập và sử dụng các dịch vụ của Công Ty Cổ Phần VK Entertainment (sau đây gọi là "VK", "chúng tôi", "chúng mình"), bạn đồng ý tuân thủ và bị ràng buộc bởi các Điều Khoản Sử Dụng này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép sử dụng dịch vụ của chúng tôi.
            </p>
          </div>

          {/* Section 2 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              2. ĐỊNH NGHĨA DỊCH VỤ
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              "Dịch Vụ" bao gồm tất cả các trò chơi, ứng dụng, trang web, và các sản phẩm khác do VK cung cấp. Dịch vụ có thể bao gồm nhưng không giới hạn ở:
            </p>
            <ul style={{ paddingLeft: 30, marginBottom: 12 }}>
              <li>Các trò chơi trực tuyến và ngoại tuyến</li>
              <li>Dịch vụ nạp tiền và thanh toán</li>
              <li>Cộng đồng và diễn đàn người chơi</li>
              <li>Các tính năng mạng xã hội</li>
              <li>Hỗ trợ khách hàng và dịch vụ liên quan</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              3. TÀI KHOẢN NGƯỜI DÙNG
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              3.1 Để sử dụng một số tính năng của Dịch Vụ, bạn cần tạo tài khoản. Bạn cam kết cung cấp thông tin chính xác, đầy đủ và cập nhật khi đăng ký.
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              3.2 Bạn chịu trách nhiệm bảo mật thông tin đăng nhập tài khoản của mình và chịu trách nhiệm về mọi hoạt động diễn ra dưới tài khoản của bạn.
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              3.3 Bạn phải từ 18 tuổi trở lên hoặc có sự đồng ý của cha mẹ/người giám hộ hợp pháp để sử dụng Dịch Vụ.
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              3.4 Bạn không được phép chuyển nhượng tài khoản cho người khác mà không có sự đồng ý bằng văn bản từ VK.
            </p>
          </div>

          {/* Section 4 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              4. QUY ĐỊNH SỬ DỤNG
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              Khi sử dụng Dịch Vụ, bạn đồng ý KHÔNG thực hiện các hành vi sau:
            </p>
            <ul style={{ paddingLeft: 30, marginBottom: 12 }}>
              <li>Vi phạm bất kỳ luật pháp hiện hành nào</li>
              <li>Sử dụng hack, cheat, bot hoặc phần mềm gian lận</li>
              <li>Lạm dụng lỗi hệ thống để trục lợi</li>
              <li>Mạo danh người khác hoặc tổ chức</li>
              <li>Đăng tải nội dung xúc phạm, đe dọa, phân biệt đối xử</li>
              <li>Spam, quảng cáo trái phép</li>
              <li>Giao dịch tài khoản, vật phẩm ngoài hệ thống</li>
              <li>Làm gián đoạn hoặc can thiệp vào hoạt động của Dịch Vụ</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              5. THANH TOÁN VÀ HOÀN TIỀN
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              5.1 Tất cả các giao dịch nạp tiền đều được thực hiện qua các phương thức thanh toán được VK chấp nhận.
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              5.2 Các khoản thanh toán là không hoàn lại, trừ trường hợp VK xét thấy có lỗi kỹ thuật hoặc theo quy định của pháp luật.
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              5.3 VK có quyền thay đổi giá và chính sách khuyến mãi bất kỳ lúc nào.
            </p>
          </div>

          {/* Section 6 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              6. SỞ HỮU TRÍ TUỆ
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              Tất cả nội dung, thương hiệu, logo, đồ họa, và tài sản trí tuệ khác trong Dịch Vụ đều thuộc quyền sở hữu của VK hoặc các bên cấp phép. Bạn không được phép sao chép, phân phối, hoặc sử dụng các nội dung này mà không có sự cho phép bằng văn bản.
            </p>
          </div>

          {/* Section 7 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              7. GIỚI HẠN TRÁCH NHIỆM
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              VK không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, hoặc hậu quả phát sinh từ việc sử dụng hoặc không thể sử dụng Dịch Vụ. Dịch vụ được cung cấp "nguyên trạng" không có bất kỳ bảo đảm nào.
            </p>
          </div>

          {/* Section 8 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              8. THAY ĐỔI ĐIỀU KHOẢN
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              VK có quyền sửa đổi các Điều Khoản này bất kỳ lúc nào. Việc bạn tiếp tục sử dụng Dịch Vụ sau khi các thay đổi có hiệu lực đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
            </p>
          </div>

          {/* Section 9 */}
          <div style={{ marginBottom: 30 }}>
            <h2 style={{
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 15,
              color: "#fff"
            }}>
              9. LIÊN HỆ
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              Nếu bạn có bất kỳ câu hỏi nào về Điều Khoản Sử Dụng này, vui lòng liên hệ:
            </p>
            <p style={{ marginBottom: 8 }}>
              <strong>Email:</strong> support@vkentertainment.com
            </p>
            <p style={{ marginBottom: 8 }}>
              <strong>Điện thoại:</strong> 1900 xxxx
            </p>
            <p>
              <strong>Địa chỉ:</strong> [Địa chỉ công ty]
            </p>
          </div>

          {/* Last Update */}
          <div style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: "2px solid rgba(255,255,255,0.3)",
            textAlign: "center",
            fontSize: 14,
            color: "#fff"
          }}>
            <p>Cập nhật lần cuối: Tháng 1, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;
