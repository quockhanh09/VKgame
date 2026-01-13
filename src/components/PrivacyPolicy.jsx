import "../style/App.css";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../utils/translations";

function PrivacyPolicy() {
  const { language } = useLanguage();
  
  const getIntroContent = () => {
    if (language === 'en') {
      return {
        title: "1. INTRODUCTION",
        content: [
          {
            number: "1.1.",
            text: "Welcome to the products and services operated by VK Entertainment Joint Stock Company (hereinafter and collectively referred to as, \"VK\", \"We\", or \"Our\"). VK takes its responsibilities regarding information security seriously in accordance with the law on the protection of personal information and is committed to respecting the privacy and interests of all users of our services. VK understands the importance of the personal data you have entrusted to VK and believes that VK has a responsibility to manage, protect, and process your personal data appropriately. This Privacy Policy (\"Privacy Policy\" or \"Policy\") is designed to help you understand how VK handles the personal data you have provided to VK, both now and in the future, and to help you make informed decisions before providing us with any of your personal data. At the same time, this Privacy Policy also serves as a notification of personal data processing sent to you before we proceed with processing your personal data. This Privacy Policy is also designed to help VK customers currently residing in the European Union (EU) understand their rights to personal data as stipulated in the EU's General Data Protection Regulation when they use the Service."
          },
          {
            number: "1.2.",
            bold: "\"Service\"",
            text: " or \"Services\" means VK's online video games (\"Games\") and/or website (\"Sites\"), and/or any products or services provided by VK."
          },
          {
            number: "1.3.",
            bold: "\"Personal Data\"",
            text: " means information in the form of symbols, writing, numbers, images, sounds or similar forms in an electronic environment associated with you or helping to identify you. You provide Personal Data and are responsible for its accuracy."
          },
          {
            number: "1.4.",
            bold: "\"Process Personal Data\"",
            text: " refers to one or more activities affecting your Personal Data, such as: collecting, recording, analyzing, verifying, storing, modifying, publishing, combining, accessing, retrieving, retrieving, encrypting, decrypting, copying, sharing, transmitting, providing, transferring, deleting, destroying Personal Data, or other related actions."
          },
          {
            number: "1.5.",
            text: "By checking the box agreeing to this Privacy Policy before using the Services, registering an account with VK (\"Account\") or accessing the Website, you acknowledge and agree that you voluntarily consent to the Processing of Personal Data and you accept all methods, requirements, and/or policies described in this Privacy Policy, and hereby agree to allow VK to process your Personal Data as described in this Privacy Policy (\"Consent\")."
          },
          {
            number: "1.6.",
            bold: "IF YOU DO NOT AGREE TO ALLOW VK TO PROCESS YOUR PERSONAL DATA AS DESCRIBED IN THIS POLICY, PLEASE DO NOT REGISTER AN ACCOUNT, USE VK'S SERVICES, OR ACCESS VK'S GAMES OR WEBSITE.",
            text: " If we change our Privacy Policy, we will post those changes or the revised Privacy Policy on the Website, within our Games, and/or Services. We reserve the right to further modify this Privacy Policy at any time without prior notice to you."
          }
        ]
      };
    }
    return {
      title: "GIỚI THIỆU",
      content: [
        {
          number: "1.1.",
          bold: "\"Dịch Vụ\"",
          text: "Chào mừng Bạn đến với (các) sản phẩm, dịch vụ được vận hành bởi Công Ty Cổ Phần VK Entertainment (gọi riêng và gọi chung là, \"VK\", \"Chúng tôi\", hay \"của Chúng tôi\"). VK nghiêm túc thực hiện trách nhiệm của mình liên quan đến bảo mật thông tin theo các quy định về bảo vệ bí mật thông tin cá nhân của pháp luật và cam kết tôn trọng quyền riêng tư và sự quan tâm của tất cả người dùng đối với các dịch vụ của Chúng tôi. VK hiểu rõ tầm quan trọng của dữ liệu cá nhân mà Bạn đã tin tưởng giao cho VK và tin rằng VK có trách nhiệm quản lý, bảo vệ và xử lý dữ liệu cá nhân của Bạn một cách thích hợp. Chính sách bảo mật thông tin này (\"Chính Sách Bảo Mật\" hay \"Chính Sách\") được thiết kế để giúp Bạn hiểu được cách thức VK xử lý dữ liệu cá nhân mà Bạn đã cung cấp cho VK, cho dù là hiện nay hoặc trong tương lai, cũng như để giúp Bạn đưa ra quyết định sáng suốt trước khi cung cấp cho Chúng tôi bất kỳ dữ liệu cá nhân nào của Bạn. Đồng thời, Chính Sách Bảo Mật này cũng được xem là một thông báo xử lý dữ liệu cá nhân được gửi đến Bạn trước khi Chúng tôi tiến hành xử lý dữ liệu cá nhân của Bạn. Chính Sách Bảo Mật này cũng được thiết kế để hỗ trợ Khách hàng của VK hiện đang sống tại Liên Minh Châu Âu (EU) hiểu được các quyền của họ đối với các dữ liệu cá nhân được quy định tại Quy định chung về bảo vệ dữ liệu của EU khi họ sử dụng Dịch vụ."
        },
        {
          number: "1.2.",
          bold: "\"Dịch Vụ\"",
          text: " hoặc \"các Dịch Vụ\" có nghĩa là các trò chơi điện tử trên mạng của VK (\"Trò Chơi\") và/hoặc trang web (\"Trang Web\"), và/hoặc bất kỳ sản phẩm, dịch vụ nào do VK cung cấp."
        },
        {
          number: "1.3.",
          bold: "\"Dữ Liệu Cá Nhân\"",
          text: " có nghĩa là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với Bạn hoặc giúp xác định Bạn. Dữ Liệu Cá Nhân do Bạn cung cấp và chịu trách nhiệm về sự chính xác của dữ liệu."
        },
        {
          number: "1.4.",
          bold: "\"Xử Lý Dữ Liệu Cá Nhân\"",
          text: " là một hoặc nhiều hoạt động tác động tới Dữ Liệu Cá Nhân của Bạn, như: thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy Dữ Liệu Cá Nhân hoặc các hành động khác có liên quan."
        },
        {
          number: "1.5.",
          text: "Bằng việc đánh dấu vào ô đồng ý Chính Sách Bảo Mật này trước khi sử dụng các Dịch Vụ, đăng ký một tài khoản với VK (\"Tài Khoản\") hoặc truy cập Trang Web, Bạn xác nhận và đồng ý rằng Bạn tự nguyện, khẳng định việc cho phép Xử Lý Dữ Liệu Cá Nhân và Bạn chấp nhận tất cả các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong Chính Sách Bảo Mật này, và theo đây Bạn đồng ý cho phép VK Xử Lý Dữ Liệu Cá Nhân của Bạn như mô tả trong Chính Sách Bảo Mật này (\"Sự Đồng Ý\")."
        },
        {
          number: "1.6.",
          bold: "NẾU BẠN KHÔNG ĐỒNG Ý CHO PHÉP VK XỬ LÝ DỮ LIỆU CÁ NHÂN CỦA BẠN NHƯ MÔ TẢ TRONG CHÍNH SÁCH NÀY, VUI LÒNG KHÔNG ĐĂNG KÝ TÀI KHOẢN, SỬ DỤNG CÁC DỊCH VỤ CỦA VK HAY TRUY CẬP TRÒ CHƠI HOẶC TRANG WEB CỦA VK.",
          text: " Nếu Chúng tôi thay đổi Chính Sách Bảo Mật của mình, Chúng tôi sẽ đăng những thay đổi đó hoặc Chính Sách Bảo Mật sửa đổi trên Trang Web, bên trong Trò Chơi và/hoặc các Dịch Vụ của Chúng tôi. Chúng tôi có quyền sửa đổi bổ sung Chính Sách Bảo Mật này vào bất kỳ thời điểm nào mà không cần thông báo trước cho Bạn."
        }
      ]
    };
  };

  const introData = getIntroContent();
  
  const getSection2Content = () => {
    if (language === 'en') {
      return {
        title: "2. WHEN WILL VK COLLECT PERSONAL DATA?",
        intro: "2.1. VK will/may collect your Personal Data:",
        items: [
          "(a) When you register and/or use VK's Services, Games or Websites, or register an Account with us;",
          "(b) when you submit any forms, including, but not limited to, applications or other forms related to any VK products and services, online or otherwise;",
          "(c) when you sign any agreement or provide other documents or information relating to your interaction with VK, or when you use our products and services;",
          "(d) when you interact with us, for example through telephone calls (which may be recorded), letters, faxes, in-person meetings, social media platforms and email;",
          "(e) when you use VK's electronic services, or interact with us through VK's Games, Websites, or Services. This includes, but is not limited to, through cookies that we may deploy when you interact with our Games, Websites, or Services;",
          "(f) when you make transactions through the VK Games page or website;",
          "(g) when you provide feedback or submit a complaint to VK;",
          "(h) when you register to participate in a contest, game, event, and/or promotional program related to VK Games and Services;",
          "(i) during the time you play the Games, use the VK Website and Services; and",
          "(j) when you submit your Personal Data to VK for any reason."
        ],
        conclusion: "2.2. The above are just some common instances where VK collects your Personal Data; they do not reflect all the cases in which VK will collect your Personal Data."
      };
    }
    return {
      title: "2. KHI NÀO VK SẼ THU THẬP DỮ LIỆU CÁ NHÂN?",
      intro: "2.1. VK sẽ/có thể thu thập Dữ Liệu Cá Nhân về Bạn:",
      items: [
        "(a) Khi Bạn đăng ký và/hoặc sử dụng các Dịch Vụ, Trò Chơi hoặc Trang Web của VK, hoặc đăng ký một Tài Khoản với Chúng tôi;",
        "(b) khi Bạn gửi bất kỳ biểu mẫu nào, bao gồm, nhưng không giới hạn ở đơn đăng ký hoặc các mẫu đơn khác liên quan đến bất kỳ sản phẩm và dịch vụ nào của VK, bằng hình thức trực tuyến hay dưới hình thức khác;",
        "(c) khi Bạn ký kết bất kỳ thỏa thuận nào hoặc cung cấp các tài liệu hoặc thông tin khác liên quan đến tương tác giữa Bạn với VK, hoặc khi Bạn sử dụng các sản phẩm và dịch vụ của Chúng tôi;",
        "(d) khi Bạn tương tác với Chúng tôi, chẳng hạn như thông qua các cuộc gọi điện thoại (có thể được ghi âm lại), thư từ, fax, gặp gỡ trực tiếp, các nền tảng ứng dụng truyền thông xã hội và thư điện tử (email);",
        "(e) khi Bạn sử dụng các dịch vụ điện tử của VK, hoặc tương tác với Chúng tôi qua Trò Chơi hoặc Trang Web hoặc các Dịch Vụ của VK. Trường hợp này bao gồm, nhưng không giới hạn, thông qua tập tin Cookie mà Chúng tôi có thể triển khai khi Bạn tương tác với các Trò Chơi, Trang Web hoặc các Dịch Vụ của Chúng tôi;",
        "(f) khi Bạn thực hiện các giao dịch thông qua trang Trò Chơi hoặc Trang Web của VK;",
        "(g) khi Bạn cung cấp ý kiến phản hồi hoặc gửi khiếu nại cho VK;",
        "(h) khi Bạn đăng ký tham gia một cuộc thi, trò chơi, sự kiện và/hoặc các chương trình khuyến mại có liên quan đến Trò Chơi, các Dịch Vụ của VK;",
        "(i) trong quá trình Bạn chơi (các) Trò Chơi, sử dụng Trang Web và các Dịch Vụ của VK; và",
        "(j) khi Bạn gửi Dữ Liệu Cá Nhân của Bạn cho VK vì bất kỳ lý do gì."
      ],
      conclusion: "2.2. Trên đây chỉ là một số trường hợp phổ biến mà VK thu thập Dữ Liệu Cá Nhân của Bạn, không phản ánh hết toàn bộ các trường hợp mà VK sẽ thu thập Dữ Liệu Cá Nhân của Bạn."
    };
  };

  const section2Data = getSection2Content();
  
  const getSection3Content = () => {
    if (language === 'en') {
      return {
        title: "3. WHAT PERSONAL DATA WILL VK COLLECT?",
        intro: "3.1. Personal data that VK may collect includes, but is not limited to, the following basic personal data:",
        items: [
          "(a) full name;",
          "(b) email address;",
          "(c) date of birth;",
          "(d) information from your identification document (ID card, Citizen ID card, Passport) and date and place of issue;",
          "(e) address (registered permanent address, contact address);",
          "(f) phone number;",
          "(g) gender;",
          "(h) marital status;",
          "(i) occupation;",
          "(j) a photograph of your face taken via a device;",
          "(k) payment-related information;",
          "(l) any other information about you (i) when you log in to use VK Services, and (ii) when you use the Services, as well as (iii) information about how you use VK Services; and",
          "(m) aggregate data on user content usage."
        ],
        para32: "3.2. To avoid any doubt, in no circumstances will we process any of your Personal Data that is sensitive under applicable laws and regulations on personal data protection.",
        para33: "3.3. You agree not to provide us with any sensitive, inaccurate, or misleading personal data, and you agree to notify VK of any inaccurate data or any changes to such data. VK reserves the right (at its sole discretion) to request you to provide other necessary documents to verify the information you provide to VK.",
        para34: "3.4. If you use your social media account (such as Facebook, Google), app account (such as Apple account) (\"Social Media Account\") and/or your phone number to log in to, use VK Services or link to an Account you have registered with VK, you understand and agree that VK may access your Personal Data only when you and the Social Media Account service provider agree and allow us to do so.",
        para35: "3.5. You have the right to amend, request amendment, request the provision of, or delete the Personal Data you have provided to us, or you may withdraw your Consent at any time if you do not wish for us to continue collecting the aforementioned Personal Data. However, please note that your refusal, withdrawal of Consent to allow us to process your Personal Data, or request for the deletion of Personal Data you have provided to us may affect your use of our Services. You can find more information on this in Section 12 below."
      };
    }
    return {
      title: "3. VK SẼ THU THẬP NHỮNG DỮ LIỆU CÁ NHÂN GÌ?",
      intro: "3.1. Dữ Liệu Cá Nhân mà VK có thể thu thập bao gồm, nhưng không giới hạn các dữ liệu cá nhân cơ bản sau:",
      items: [
        "(a) họ và tên;",
        "(b) địa chỉ email;",
        "(c) ngày, tháng, năm sinh;",
        "(d) thông tin của Giấy tờ tùy thân (CMND, Căn cước công dân, Hộ chiếu) và ngày cấp, nơi cấp;",
        "(e) địa chỉ (địa chỉ đăng ký thường trú, địa chỉ liên hệ);",
        "(f) số điện thoại;",
        "(g) giới tính;",
        "(h) tình trạng hôn nhân;",
        "(i) nghề nghiệp;",
        "(j) ảnh chụp gương mặt của Bạn thông qua thiết bị;",
        "(k) thông tin liên quan đến việc thanh toán;",
        "(l) bất kỳ thông tin nào khác về Bạn (i) khi Bạn đăng nhập để sử dụng các Dịch Vụ của VK, và (ii) khi Bạn sử dụng các Dịch Vụ, cũng như (iii) thông tin về việc Bạn sử dụng các Dịch Vụ của VK như thế nào; và",
        "(m) dữ liệu tổng hợp về nội dung người dùng sử dụng."
      ],
      para32: "3.2. Để tránh nghi ngờ, trong mọi trường hợp, Chúng tôi sẽ không xử lý bất kỳ Dữ Liệu Cá Nhân nào của Bạn mà dữ liệu đó là dữ liệu cá nhân nhạy cảm theo các quy định hiện hành của pháp luật về bảo vệ dữ liệu cá nhân.",
      para33: "3.3. Bạn đồng ý không cung cấp cho Chúng tôi bất cứ dữ liệu nào là dữ liệu cá nhân nhạy cảm, dữ liệu không chính xác hoặc gây hiểu nhầm và Bạn đồng ý sẽ thông báo cho VK về bất cứ dữ liệu nào không chính xác hoặc khi có sự thay đổi liên quan đến các dữ liệu này. VK bảo lưu quyền (tùy theo quyết định riêng của VK) được yêu cầu Bạn cung cấp các tài liệu cần thiết khác để xác minh thông tin mà Bạn cung cấp cho VK.",
      para34: "3.4. Nếu Bạn sử dụng tài khoản mạng xã hội (như Facebook, Google), tài khoản ứng dụng (như tài khoản Apple) của Bạn (\"Tài Khoản Mạng Xã Hội\") và/hoặc số điện thoại của Bạn để đăng nhập, sử dụng các Dịch Vụ của VK hoặc liên kết với Tài Khoản mà Bạn đã đăng ký với VK thì Bạn hiểu rõ và đồng ý rằng, VK có thể truy cập Dữ Liệu Cá Nhân của Bạn khi và chỉ khi Bạn và nhà cung cấp dịch vụ Tài Khoản Mạng Xã Hội đồng ý và cho phép Chúng tôi được thực hiện điều đó.",
      para35: "3.5. Bạn có quyền chỉnh sửa, yêu cầu chỉnh sửa, yêu cầu cung cấp hoặc xóa Dữ Liệu Cá Nhân đã cung cấp cho Chúng tôi, hoặc Bạn cũng có thể rút lại Sự Đồng Ý vào bất kỳ lúc nào nếu Bạn không muốn Chúng tôi tiếp tục thu thập Dữ Liệu Cá Nhân nói trên. Tuy nhiên, Bạn cần lưu ý rằng, việc Bạn từ chối, rút lại Sự Đồng Ý cho phép Chúng tôi Xử Lý Dữ Liệu Cá Nhân của Bạn hoặc yêu cầu xóa Dữ Liệu Cá Nhân đã cung cấp cho Chúng tôi có thể ảnh hưởng đến việc Bạn sử dụng các Dịch Vụ của Chúng tôi. Bạn có thể tìm thấy thêm thông tin về nội dung này trong Mục 12 dưới đây."
    };
  };

  const section3Data = getSection3Content();

  const getSection4Content = () => {
    if (language === 'en') {
      return {
        title: '4. COLLECTION OF OTHER DATA',
        intro41: '4.1. As with most websites and other mobile applications, the data your device sends to us may include: data about you, recorded by a server when you use VK\'s Services. This information typically includes, but is not limited to:',
        items: [
          '(a) IP address;',
          '(b) operating system of your computer/mobile device;',
          '(c) browser type;',
          '(d) mobile device type, mobile device characteristics, unique device identifier (UDID) or mobile device identifier (MEID) of your mobile device;',
          '(e) website reference address (if any);',
          '(f) the websites you visited that lead to your VK website or mobile application and the time of access, sometimes a "Cookie" (which can be disabled using your browser options) to help the website remember your last visit.'
        ],
        para41: 'If you log in, the above information will be linked to your personal account. This information (excluding your personal data) is also included in statistics to help us analyze and evaluate how customers access and use our games and website.',
        para42: '4.2. VK\'s Services may utilize technologies such as ARKit (Augmented Reality), Camera API, TrueDepth API, or similar technologies provided by the mobile device\'s operating system; these technologies are used to record user facial expressions and for in-app features. We do not use this information for any purpose other than those provided within the application; you have the right to refuse camera access for these features at any time (but please note that when you stop granting camera access, some application features may become inoperable); and we do not store or share this information with any third parties.'
      };
    } else {
      return {
        title: '4. THU THẬP CÁC DỮ LIỆU KHÁC',
        intro41: '4.1. Như với hầu hết các trang web và các ứng dụng di động khác, các dữ liệu mà thiết bị của Bạn gửi cho Chúng tôi có thể bao gồm: dữ liệu về Bạn, được một máy chủ ghi lại khi Bạn sử dụng các Dịch Vụ của VK. Thông tin này thường bao gồm nhưng không giới hạn:',
        items: [
          '(a) địa chỉ IP;',
          '(b) hệ điều hành của máy tính/thiết bị di động;',
          '(c) loại trình duyệt;',
          '(d) loại thiết bị di động, các đặc điểm của thiết bị di động, mã định danh thiết bị duy nhất (UDID) hoặc mã định danh thiết bị di động (MEID) của thiết bị di động của Bạn;',
          '(e) địa chỉ tham chiếu của Trang Web (nếu có);',
          '(f) các trang web mà Bạn đã truy cập để dẫn đến trên trang web hoặc ứng dụng di động của VK và thời gian truy cập, đôi khi là "Cookie" (có thể vô hiệu hóa bằng cách sử dụng tùy chọn trình duyệt của Bạn) để giúp trang web ghi nhớ lần truy cập cuối cùng của Bạn.'
        ],
        para41: 'Nếu Bạn đăng nhập, các thông tin nêu trên sẽ được liên kết với Tài Khoản cá nhân của Bạn. Các thông tin này (không bao gồm Dữ Liệu Cá Nhân của Bạn) cũng được đưa vào các số liệu thống kê để giúp Chúng tôi thống kê, đánh giá được khách hàng đã truy cập sử dụng Trò Chơi và Trang Web của Chúng tôi như thế nào.',
        para42: '4.2. Các Dịch Vụ của VK có thể sử dụng các công nghệ như ARKit (Augmented Reality hay gọi tắt là AR – Công nghệ thực tế ảo), Camera API, TrueDepth API … hoặc các công nghệ tương tự được cung cấp bởi hệ điều hành của thiết bị di động; các công nghệ này được sử dụng để ghi nhận thông tin biểu hiện trên khuôn mặt của người dùng và dùng cho tính năng trong ứng dụng. Đối với các thông tin này, Chúng tôi không sử dụng cho bất kỳ mục đích nào khác ngoài các mục đích được cung cấp trong ứng dụng; Bạn có quyền từ chối cấp quyền truy cập camera cho các tính năng này bất kỳ lúc nào (nhưng Bạn cần lưu ý rằng, khi Bạn ngưng cấp quyền truy cập camera cho ứng dụng thì một số tính năng của ứng dụng sẽ không thể hoạt động được); và Chúng tôi không lưu trữ cũng như không chia sẻ các thông tin này cho bất kỳ bên thứ ba nào.'
      };
    }
  };

  const section4Data = getSection4Content();

  const getSection5Content = () => {
    if (language === 'en') {
      return {
        title: '5. COOKIES',
        para51: '5.1. We may sometimes use "cookies" or other features to allow us or third parties to collect or share information that will help us improve our Website, Games, and the Services we offer, or help us introduce new services and features. "Cookies" are identifiers we send to your computer or mobile device, allowing us to identify your computer or device and tell us when the Services or Website are used or accessed, by how many people, and to track activity on our Website or Games. We may link Cookie information to Personal Data. Cookies also link to information about the content you have selected for the shopping pages you have viewed, or the video games you have played. Cookies are also used to provide content based on your interests and to track your use of the Services.',
        para52: '5.2. You can refuse the use of cookies by selecting the appropriate settings on your browser. However, please note that if you do this, you may not be able to use the full functionality of our Website, Games, or Services.'
      };
    } else {
      return {
        title: '5. COOKIES',
        para51: '5.1. Đôi khi Chúng tôi có thể sử dụng "Cookie" hoặc các tính năng khác để cho phép Chúng tôi hoặc các bên thứ ba thu thập hoặc chia sẻ thông tin sẽ giúp Chúng tôi cải thiện Trang Web, Trò Chơi của mình và các Dịch Vụ mà Chúng tôi cung cấp, hoặc giúp Chúng tôi đưa ra các dịch vụ và tính năng mới. "Cookie" là các mã định danh Chúng tôi gửi đến máy tính hoặc thiết bị di động của Bạn, cho phép Chúng tôi nhận dạng máy tính hoặc thiết bị của Bạn và cho Chúng tôi biết khi nào các Dịch Vụ hoặc Trang Web được sử dụng hay truy cập, bởi bao nhiêu người và để theo dõi những hoạt động trong Trang Web hoặc các Trò Chơi của Chúng tôi. Chúng tôi có thể liên kết thông tin Cookie với Dữ Liệu Cá Nhân. Cookie cũng liên kết với thông tin về những nội dung Bạn đã chọn đối với các trang mua sắm bạn đã xem, hoặc các trò chơi điện tử mà Bạn đã chơi. Cookie cũng được sử dụng để cung cấp nội dung dựa trên quan tâm của Bạn và để theo dõi việc sử dụng của các Dịch Vụ.',
        para52: '5.2. Bạn có thể từ chối sử dụng Cookie bằng cách chọn các thiết lập thích hợp trên trình duyệt của Bạn. Tuy nhiên, vui lòng lưu ý rằng nếu Bạn thực hiện thao tác này Bạn có thể không sử dụng được các chức năng đầy đủ của Trang Web, Trò Chơi hoặc các Dịch Vụ của Chúng tôi.'
      };
    }
  };

  const section5Data = getSection5Content();

  const getSection6Content = () => {
    if (language === 'en') {
      return {
        title: '6. HOW DOES VK USE THE PERSONAL DATA YOU PROVIDE TO US?',
        intro: '6.1. VK may process your personal data for one or more of the following purposes:',
        items: [
          '(a) to comply with legal procedures, adhere to applicable laws and regulations, and meet the requirements of competent government authorities;',
          '(b) to review and/or process your applications/transactions with us or your transactions or correspondence with third parties through the Services;',
          '(c) to manage, operate, provide, and/or administer your use and/or access to our Services, Websites, and Games (including but not limited to), your preferences, Accounts, and your relationship with us;',
          '(d) to respond to, process, resolve, and complete a transaction and/or fulfill your requests for specific Services or products;',
          '(e) to notify you of Service issues and unusual Account activity;',
          '(f) to enforce our Terms of Service or any other applicable agreements or terms relating to end users;',
          '(g) to protect the personal safety and rights, property, or safety of others, or persons under your guardianship;',
          '(h) to identify and/or verify your Account;',
          '(i) to maintain and manage any software updates and/or other updates and support that may be required from time to time to ensure our Services operate smoothly;',
          '(j) to resolve or facilitate customer service in fulfilling your reasonable requests, responding to any inquiries submitted by you or by another person on your behalf, provided that the person acting on your behalf has full documentation proving that you have authorized them to perform such tasks or requests;',
          '(k) to contact you by phone, text message, fax, email, mail, or other means for the purpose of administering/managing your relationship with us or your use of our Services, including but not limited to communicating information to you relating to our Services. You acknowledge and agree that we may contact you by mail or send you notices through appropriate means of communication, which may disclose certain Personal Data about you (e.g., disclosure of Personal Data written on the envelope);',
          '(l) to notify you when another user has sent you a private message or posted a comment to you in our Games, on the Website, or on our Services;',
          '(m) to conduct research, analysis, and development activities (including, but not limited to, data analysis, surveys, product and Service development and/or specification), to analyze how you use our Services, with the aim of improving our Services or products and/or improving your customer experience;',
          '(n) to enable advertising and other tests and surveys, to validate the size and composition of VK\'s target audience, and to understand their experience with VK\'s Services;',
          '(o) or marketing purposes. In this case, through various communication methods, we will send you information, marketing and promotional materials related to VK\'s products and/or Services and those of its subsidiaries and affiliates, whether such products or Services are current or future;',
          '(p) to compile statistics and conduct research to meet reporting requirements and/or maintain our internal records or relevant regulations;',
          '(q) to conduct due diligence, verification or other screening activities (including but not limited to background checks) to comply with legal obligations or our risk management policies and procedures where such policies are required by law or have been implemented by us;',
          '(r) to inspect our Services or VK\'s operations;',
          '(s) to prevent or investigate any actual or suspected breach of our Terms of Service, including but not limited to fraudulent, illegal, negligent, or any other misconduct, whether or not related to your use of our Services or any other matter arising from your relationship with us;',
          '(t) to store, set up servers, and back up (possibly for disaster recovery purposes, including but not limited to war, fire, natural disasters and/or other serious incidents..., or other purposes) your Personal Data;',
          '(u) to process and/or facilitate a Business Property Transaction or a potential Business Property Transaction, where such transaction involves VK as a party or only a subsidiary or affiliate of VK as a party or involves VK and/or any one or more subsidiaries or affiliates of VK as parties, and may involve other third-party entities in such transaction. "Business Property Transaction" means the purchase, sale, lease, merger, consolidation or any acquisition, liquidation or financing of an entity or part of an entity or of any business or asset of an entity; and/or',
          '(v) any purpose that we inform you of at the time of requesting your Consent.',
          '(collectively referred to as "Purposes" or "Purposes").'
        ],
        para62: '6.2. Because the purposes for which we will/may collect, use, disclose, or process your Personal Data depend on the prevailing circumstances, such purposes may not appear above. However, we will inform you of any other purposes at the time of requesting your Consent, unless processing your Personal Data without your Consent is permitted under data protection laws or other legal regulations.',
        para63: '6.3. By Consent, you agree to allow us to process your Personal Data for all of the purposes listed above. If you only agree to one or some of the purposes, please do not check the box agreeing to this Privacy Policy. However, please note that this may affect your use of our Services.'
      };
    } else {
      return {
        title: '6. VK Sử DỤNG DỮ LIỆU CÁ NHÂN BẠN CUNG CẤP CHO VK NHƯ THẾ NÀO?',
        intro: '6.1. VK có thể Xử Lý Dữ Liệu Cá Nhân của Bạn vì một hoặc nhiều mục đích sau đây:',
        items: [
          '(a) để đáp ứng các thủ tục pháp lý, tuân thủ các quy định của pháp luật hiện hành và theo các yêu cầu của cơ quan nhà nước có thẩm quyền;',
          '(b) để xem xét và/hoặc xử lý đơn đăng ký/giao dịch của Bạn với Chúng tôi hoặc giao dịch hay thư từ của Bạn với các bên thứ ba qua các Dịch Vụ;',
          '(c) để quản lý, điều hành, cung cấp và/hoặc quản lý việc Bạn sử dụng và/hoặc truy cập các Dịch Vụ, Trang Web và các Trò Chơi của Chúng tôi (bao gồm nhưng không giới hạn), các sở thích của Bạn, Tài Khoản, cũng như quan hệ của Bạn với Chúng tôi;',
          '(d) để đáp ứng, xử lý, giải quyết, hoàn tất một giao dịch và/hoặc đáp ứng các yêu cầu của Bạn đối với các Dịch Vụ, sản phẩm nhất định;',
          '(e) để thông báo cho Bạn các vấn đề về Dịch Vụ, cũng như các hoạt động Tài Khoản bất thường;',
          '(f) để thực thi các Điều Khoản Dịch Vụ của Chúng tôi hoặc bất kỳ thỏa thuận, điều khoản khác được áp dụng liên quan đến người dùng cuối;',
          '(g) để bảo vệ sự an toàn cá nhân và các quyền, tài sản hoặc sự an toàn của người khác, hoặc người được Bạn giám hộ;',
          '(h) để nhận dạng và/hoặc xác minh Tài Khoản của Bạn;',
          '(i) để duy trì và quản lý bất kỳ bản cập nhật phần mềm nào và/hoặc các bản cập nhật khác và sự hỗ trợ có thể được yêu cầu tùy lúc nhằm đảm bảo các Dịch Vụ của Chúng tôi hoạt động suôn sẻ;',
          '(j) để giải quyết hoặc tạo điều kiện để bộ phận chăm sóc khách hàng thực hiện các yêu cầu hợp lý của Bạn;',
          '(k) để liên hệ với Bạn thông qua điện thoại, tin nhắn văn bản, email, thư hoặc cách thức khác;',
          '(l) để thông báo cho Bạn khi một người dùng khác đã gửi cho Bạn một tin nhắn riêng tư hoặc đăng nhận xét;',
          '(m) để tiến hành các hoạt động nghiên cứu, phân tích và phát triển;',
          '(n) để cho phép quảng cáo và các đợt kiểm tra và khảo sát khác;',
          '(o) vì mục đích tiếp thị;',
          '(p) để lập số liệu thống kê và nghiên cứu;',
          '(q) để thực hiện quy trình tìm hiểu, xác minh hoặc thực hiện các hoạt động sàng lọc khác;',
          '(r) để kiểm tra các Dịch Vụ của Chúng tôi hoặc hoạt động của VK;',
          '(s) để ngăn chặn hoặc điều tra bất kỳ hành vi vi phạm thực tế hoặc nghi ngờ vi phạm;',
          '(t) để lưu trữ, lập máy chủ, sao lưu đối với Dữ Liệu Cá Nhân của Bạn;',
          '(u) để xử lý và/hoặc tạo thuận tiện cho một Giao dịch tài sản kinh doanh; và/hoặc',
          '(v) bất kỳ mục đích nào mà Chúng tôi thông báo cho Bạn tại thời điểm xin phép Sự Đồng Ý của Bạn.',
          '(gọi chung là "Mục Đích" hoặc "các Mục Đích").'
        ],
        para62: '6.2. Vì các Mục Đích mà Chúng tôi sẽ/có thể thu thập, sử dụng, tiết lộ hoặc Xử Lý Dữ Liệu Cá Nhân của Bạn phụ thuộc vào hoàn cảnh hiện có, mục đích đó có thể không xuất hiện bên trên. Tuy nhiên, Chúng tôi sẽ thông báo cho Bạn biết mục đích khác đó tại thời điểm xin phép Sự Đồng Ý của Bạn, trừ khi việc Xử Lý Dữ Liệu Cá Nhân mà không cần có Sự Đồng Ý của Bạn là được phép theo các quy định của pháp luật về bảo vệ dữ liệu cá nhân hoặc theo các quy định pháp luật khác.',
        para63: '6.3. Bằng Sự Đồng Ý, Bạn đã đồng ý cho phép Chúng tôi được Xử Lý Dữ Liệu Cá Nhân của Bạn theo tất cả các Mục Đích nêu trên. Trường hợp Bạn chỉ đồng ý với một hoặc một số Mục Đích, Bạn vui lòng không đánh dấu vào ô đồng ý Chính Sách Bảo Mật này. Tuy nhiên, Bạn cần lưu ý rằng, việc này có thể ảnh hưởng đến việc Bạn sử dụng các Dịch Vụ của Chúng tôi.'
      };
    }
  };

  const section6Data = getSection6Content();

  const getSection7Content = () => {
    if (language === 'en') {
      return {
        title: '7. HOW DOES VK PROTECT AND STORE YOUR PERSONAL DATA?',
        para71: '7.1. VK implements various security measures and always strives to ensure the safety of your Personal Data on VK\'s systems. User Personal Data is stored behind secure networks and can only be accessed by certain employees with special access privileges to VK\'s systems. However, absolute security is certainly impossible.',
        para72: '7.2. The period for which VK processes your Personal Data is calculated from the time we obtain your consent until the last time you use our Services, and continues for a minimum of five (5) years from that time. Even if you request us to delete your Personal Data under Section 12.2, we may still need to continue to store, use, and/or disclose your Personal Data in accordance with this Privacy Policy to comply with our obligations under personal data protection laws and other relevant legal regulations.',
        para73: '7.3. VK will maintain Personal Data in accordance with the laws on personal data protection and/or other applicable legal regulations. This means that VK has the right to delete your Personal Data when VK has reasonable grounds to determine that (i) storing such Personal Data no longer serves the purpose of processing that Personal Data; (ii) storing it is no longer necessary for any legitimate or business purpose; and (iii) there are no other legitimate interests in continuing to store such Personal Data. Subject to applicable law, we may securely delete your Personal Data without prior notice to you.'
      };
    } else {
      return {
        title: '7. VK BẢO VỆ VÀ LƯU TRỮ DỮ LIỆU CÁ NHÂN CỦA BẠN BẰNG CÁCH NÀO?',
        para71: '7.1. VK thực hiện các biện pháp bảo mật khác nhau và luôn nỗ lực để đảm bảo sự an toàn Dữ Liệu Cá Nhân của Bạn trên các hệ thống của VK. Dữ Liệu Cá Nhân của người dùng được lưu trữ đằng sau các mạng bảo mật và chỉ có thể được truy cập bởi một số nhân viên có quyền truy cập đặc biệt đến các hệ thống của VK. Tuy nhiên, chắc chắn không thể có sự bảo đảm an toàn tuyệt đối.',
        para72: '7.2. Thời hạn VK Xử Lý Dữ Liệu Cá Nhân của Bạn được tính từ khi Chúng tôi có được Sự Đồng Ý của Bạn cho đến thời điểm cuối cùng Bạn sử dụng các Dịch Vụ của Chúng tôi và tiếp tục kéo dài thêm tối thiểu 05 (năm) năm kể từ thời điểm đó. Kể cả trong trường hợp Bạn yêu cầu Chúng tôi xóa Dữ Liệu Cá Nhân của Bạn theo Mục 12.2, Chúng tôi có thể vẫn phải tiếp tục lưu trữ, sử dụng và/hoặc tiết lộ Dữ Liệu Cá Nhân của Bạn tuân theo Chính Sách Bảo Mật này để tuân thủ các nghĩa vụ của Chúng tôi theo các quy định của pháp luật về bảo vệ dữ liệu cá nhân và các quy định pháp luật khác có liên quan.',
        para73: '7.3. VK sẽ duy trì Dữ Liệu Cá Nhân tuân theo các quy định của pháp luật về bảo vệ dữ liệu cá nhân và/hoặc các quy định pháp luật hiện hành khác. Có nghĩa là, VK có quyền xóa Dữ Liệu Cá Nhân của Bạn khi VK có lý do hợp lý để xác định rằng (i) việc lưu trữ Dữ Liệu Cá Nhân đó không còn phục vụ mục đích xử lý Dữ Liệu Cá Nhân đó nữa; (ii) việc lưu trữ không còn cần thiết cho bất kỳ mục đích hợp pháp hay mục đích kinh doanh nào và (iii) không còn các lợi ích hợp pháp nào khác để tiếp tục lưu trữ các Dữ Liệu Cá Nhân này. Tùy theo luật áp dụng, Chúng tôi có thể xóa Dữ Liệu Cá Nhân của Bạn một cách an toàn mà không cần thông báo trước cho Bạn.'
      };
    }
  };

  const section7Data = getSection7Content();

  const getSection8Content = () => {
    if (language === 'en') {
      return {
        title: '8. DOES VK DISCLOSE YOUR PERSONAL DATA?',
        intro: '8.1. In the course of conducting our business, we will/may need to disclose your Personal Data to Game developers, service providers, third parties, agents and/or subsidiaries and/or affiliates and/or member companies of VK, and/or other third parties, for one or more of the aforementioned Purposes. Third-party service providers, agents and/or subsidiaries and/or affiliates or member companies of VK and/or other third parties will process your Personal Data or on our behalf for one or more of the aforementioned Purposes. Such third parties include, but are not limited to:',
        items: [
          '(a) VK\'s subsidiaries, affiliates, and related corporations;',
          '(b) contractors, agents, service providers, and other third parties that we hire to support our business operations. These include, but are not limited to, those providing administrative or other services to us, such as postal companies, telecommunications companies, information technology companies, and data centers;',
          '(c) a buyer or other successor in the event of a merger, divestment, restructuring, reorganization, dissolution, or sale or transfer of part or all of VK\'s assets, whether the matter is ongoing or in the process of bankruptcy, liquidation, or similar proceedings, in which VK\'s Personal Data stored about our users is contained within the assets being transferred; or to a counterparty in a business asset transaction in which VK or any of its subsidiaries, affiliates, or member companies participate;',
          '(d) competent state agencies; and',
          '(e) third parties to whom we disclose information for one of the Purposes, and those third parties in turn collect and process your Personal Data for one or more purposes.'
        ],
        para82: '8.2. In this case, third parties may request that we disclose your Game play history and/or records showing which IP addresses have viewed which Games. We will also share statistical information about your use of the Services with these third parties. This will not include any information that could be used to specifically identify you or disclose Personal Data about you.',
        para83: '8.3. To clarify, we may disclose your Personal Data without your consent if data protection laws or other applicable legislation permit us to do so.',
        para84: '8.4. Third parties may intercept or illegally access Personal Data submitted to or contained on the Website, software, applications, and technologies used, which may lead to incorrect or unexpected operation, or may allow access, misuse, or misuse of information through no fault of ours. However, we will implement reasonable security measures to protect your Personal Data in accordance with the law on personal data protection; however, we cannot guarantee absolute security because a third party may illegally access Personal Data submitted to or contained in the Games, on the Website, or software, applications, and technologies used, which may lead to incorrect/unexpected operation, or may allow access, misuse, or misuse of Personal Data through no fault of ours.'
      };
    } else {
      return {
        title: '8. VK CÓ TIẾT LỘ DỮ LIỆU CÁ NHÂN CỦA BẠN HAY KHÔNG?',
        intro: '8.1. Trong quá trình thực hiện hoạt động kinh doanh, Chúng tôi sẽ/có thể cần phải tiết lộ Dữ Liệu Cá Nhân của Bạn cho các nhà phát triển Trò Chơi, nhà cung cấp dịch vụ, bên thứ ba, đại lý và/hoặc các công ty con và/hoặc các công ty liên kết và/hoặc công ty thành viên của VK, và/hoặc các bên thứ ba khác, vì một hay nhiều Mục Đích nói trên. Các nhà cung cấp dịch vụ bên thứ ba, đại lý và/hoặc các công ty con và/hoặc các công ty liên kết hoặc công ty thành viên của VK và/hoặc các bên thứ ba khác như thế sẽ Xử Lý Dữ Liệu Cá Nhân của Bạn hoặc thay mặt Chúng tôi vì một hoặc nhiều Mục Đích nói trên. Các bên thứ ba như thế bao gồm, nhưng không giới hạn ở:',
        items: [
          '(a) công ty con, công ty liên kết và công ty thành viên của VK;',
          '(b) nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên thứ ba khác mà Chúng tôi thuê để hỗ trợ hoạt động kinh doanh của Chúng tôi. Những bên này bao gồm, nhưng không giới hạn ở những bên cung cấp các dịch vụ quản trị hoặc các dịch vụ khác cho Chúng tôi chẳng hạn như công ty bưu chính, công ty viễn thông, công ty công nghệ thông tin và trung tâm dữ liệu;',
          '(c) người mua hoặc người thừa nhiệm khác trong trường hợp sáp nhập, thoái vốn, tái cơ cấu, tái tổ chức, giải thể hoặc bán hay chuyển nhượng một phần hoặc tất cả tài sản của VK, cho dù là vấn đề đang diễn ra hay đang trong quá trình thực hiện thủ tục phá sản, thanh lý hoặc thủ tục tương tự, trong đó Dữ Liệu Cá Nhân VK lưu trữ về người dùng của Chúng tôi nằm trong các tài sản được chuyển nhượng; hoặc cho một bên đối tác trong một Giao dịch tài sản kinh doanh mà VK hoặc bất kỳ công ty con, công ty liên kết hay công ty thành viên của VK có tham gia giao dịch;',
          '(d) các cơ quan nhà nước có thẩm quyền; và',
          '(e) bên thứ ba mà Chúng tôi tiết lộ thông tin vì một trong các Mục Đích và các bên thứ ba đó ngược lại họ sẽ thu thập và Xử Lý Dữ Liệu Cá Nhân của Bạn vì một hoặc nhiều mục đích.'
        ],
        para82: '8.2. Trường hợp này các bên thứ ba có thể yêu cầu Chúng tôi tiết lộ lịch sử chơi Trò Chơi của Bạn và/hoặc tiết lộ các hồ sơ cho thấy các địa chỉ IP nào đã xem các Trò Chơi nào. Chúng tôi cũng sẽ chia sẻ thông tin thống kê việc Bạn sử dụng các Dịch Vụ với các bên thứ ba này. Trường hợp này sẽ không bao gồm bất kỳ thông tin nào có thể được sử dụng để xác định danh tính cụ thể của Bạn hoặc tiết lộ Dữ Liệu Cá Nhân về Bạn.',
        para83: '8.3. Để làm rõ, Chúng tôi có thể tiết lộ Dữ Liệu Cá Nhân của Bạn mà không cần Sự Đồng Ý của Bạn trong trường hợp các quy định của pháp luật về bảo vệ dữ liệu cá nhân hoặc các điều luật hiện hành khác cho phép Chúng tôi thực hiện điều này.',
        para84: '8.4. Các bên thứ ba có thể chặn hoặc truy cập trái phép Dữ Liệu Cá Nhân được gửi đến hoặc có trên Trang Web, các phần mềm, ứng dụng, công nghệ được áp dụng có thể dẫn đến việc hoạt động không chính xác hoặc không hoạt động như dự kiến, hoặc có người có thể truy cập, lạm dụng hoặc sử dụng sai trí thông tin mà không phải lỗi của Chúng tôi. Tuy nhiên Chúng tôi sẽ triển khai các biện pháp bảo mật hợp lý để bảo vệ Dữ Liệu Cá Nhân của Bạn theo quy định của pháp luật về bảo vệ dữ liệu cá nhân; tuy nhiên Chúng tôi không thể hoàn toàn đảm bảo sự bảo mật tuyệt đối bởi vì một bên thứ ba có thể truy cập trái phép Dữ Liệu Cá Nhân được gửi đến hoặc có trong Trò Chơi, có trên Trang Web hoặc các phần mềm, ứng dụng, công nghệ được áp dụng có thể dẫn đến việc hoạt động không chính xác/không hoạt động như dự kiến, hoặc có người có thể truy cập, lạm dụng hoặc sử dụng sai trí Dữ Liệu Cá Nhân mà không phải lỗi của Chúng tôi.'
      };
    }
  };

  const section8Data = getSection8Content();

  const getSection9Content = () => {
    if (language === 'en') {
      return {
        title: '9. PERSONAL DATA OF CHILDREN (EXCEPT CHILDREN RESIDING IN THE EU)',
        para91: '9.1. Our services are diverse and cater to a wide range of age groups. For children under 16, creating an account and using our services requires the consent and supervision of their parent or guardian.',
        para92: '9.2. Parents or guardians of children under 16 years of age are kindly requested to supervise and ensure that children under their guardianship do not register for Accounts to use the Services and/or provide their Personal Data to us without the consent and supervision of the child\'s parent or guardian.',
        para93: '9.3. In the event that the Personal Data of children under 16 years of age is provided to us with the consent of their parents or guardians, the parents or guardians hereby agree to the processing and use of the relevant Personal Data of the children under 16 years of age, and agree to be governed by this Policy on behalf of the ward. Furthermore, the parents or guardians undertake and guarantee that the Personal Data of children aged 7 years and older under their guardianship has been provided to us with the consent of the child, in addition to the consent of the parents or guardians, before such data is provided to us.',
        para94: '9.4. Parents or guardians of children under 16 years of age agree that, in addition to the Personal Data of children under 16 years of age provided to us by the parent or guardian, we may request the Personal Data of the parent or guardian of that child for the Purposes stated in point (e) of Section 6.1 of this Policy.',
        para95: '9.5. We will lock any Account used by a child who does not comply with the above requirements and will remove/delete any Personal Data that we believe has been submitted by a user who is a child under 16 years of age and does not meet the above requirements.'
      };
    } else {
      return {
        title: '9. DỮ LIỆU CÁ NHÂN CỦA TRẺ EM (TRỪ TRẺ EM ĐANG SINH SỐNG TẠI EU)',
        para91: '9.1. Các Dịch Vụ của Chúng tôi rất đa dạng và cung ứng cho nhiều đối tượng với nhiều độ tuổi khác nhau. Đối với trẻ em dưới 16 tuổi, việc tạo Tài Khoản, sử dụng các Dịch Vụ của Chúng tôi cần được Sự Đồng Ý và giám sát của cha/mẹ hoặc người giám hộ của trẻ.',
        para92: '9.2. Cha/mẹ hoặc người giám hộ của trẻ em dưới 16 tuổi vui lòng giám sát và đảm bảo trẻ dưới 16 tuổi mà mình đang giám hộ không tự đăng ký Tài Khoản để sử dụng các Dịch Vụ và/hoặc tự cung cấp các Dữ Liệu Cá Nhân của trẻ cho Chúng tôi mà không có Sự Đồng Ý, giám sát của cha/mẹ hoặc người giám hộ của trẻ.',
        para93: '9.3. Trong trường hợp Dữ Liệu Cá Nhân của trẻ em dưới 16 tuổi do cha/mẹ, người giám hộ đồng ý cung cấp cho Chúng tôi thì cha/mẹ hoặc người giám hộ theo đây đồng ý với việc xử lý, sử dụng Dữ Liệu Cá Nhân của trẻ em dưới 16 tuổi có liên quan, và đồng ý chịu sự điều chỉnh của Chính Sách này thay mặt cho người được giám hộ. Đồng thời, cha/mẹ hoặc người giám hộ cam kết và đảm bảo rằng Dữ Liệu Cá Nhân của trẻ em từ đủ 07 tuổi trở lên mà mình đang giám hộ đã có Sự Đồng Ý của trẻ, bên cạnh Sự Đồng Ý của cha/mẹ hoặc người giám hộ, trước khi dữ liệu đó được cung cấp cho Chúng tôi.',
        para94: '9.4. Cha/mẹ hoặc người giám hộ của trẻ em dưới 16 tuổi đồng ý rằng, ngoài Dữ Liệu Cá Nhân của trẻ em dưới 16 tuổi do cha/mẹ, người giám hộ cung cấp cho Chúng tôi, Chúng tôi có thể yêu cầu cung cấp Dữ Liệu Cá Nhân của chính Cha/mẹ hoặc người giám hộ của trẻ em dưới 16 tuổi đó theo Mục Đích tại điểm (e) Mục 6.1 của Chính Sách này.',
        para95: '9.5. Chúng tôi sẽ khóa bất kỳ Tài Khoản nào được sử dụng bởi đối tượng trẻ em mà không tuân thủ những yêu cầu được nêu ở trên và sẽ gỡ/ xóa bất kỳ Dữ Liệu Cá Nhân nào mà Chúng tôi cho là đã được gửi bởi người dùng là trẻ em dưới 16 tuổi mà không đáp ứng những yêu cầu trên.'
      };
    }
  };

  const section9Data = getSection9Content();

  const getSection10Content = () => {
    if (language === 'en') {
      return {
        title: '10. PERSONAL DATA COLLECTED BY THIRD PARTIES',
        para101: '10.1. Our Services may use analytics tools (such as Google Analytics, Facebook Pixel, etc.) ("Analytics Tools"). These Analytics Tools may use cookies, which are text files placed on your device, to help the website analyze how users use our Services. Information generated by cookies about your use of the website (including your IP address) will be sent to and stored by the Analytics Tools provider. The Analytics Tools provider will use this information to evaluate your use of our Services, compile reports on website activity for website operators, and provide other services related to website activity and internet usage.',
        para102: '10.2. Our Services may utilize measurement tools (such as AppsFlyer, Adjust, Firebase, etc.) ("Mobile Measurement Partner", abbreviated as "MMP"). MMPs use a Software Development Kit ("SDK") installed on your device to help us track and optimize the delivery of Services to you. Information generated by the SDK about your use of our applications (including your IP address) will be sent to and stored by the MMP provider. The MMP provider will use this information to evaluate your use of our Services, compile application activity reports for developers, operate the application, and provide other services related to application activity and internet usage.',
        para103: '10.3. Our Services may also utilize TrueID, a facial recognition and identification document (such as ID card, citizen identification card, passport) application provided by VK Software Development Co., Ltd. – a subsidiary of VK ("TrueID") – to enhance identification and secure your Account. TrueID will use the camera on your device to record and capture your face and identification document, using algorithms and AI (artificial intelligence) to process and detect anomalies (such as fraud, inaccurate faces and photos on identification documents, etc.). TrueID will assist us in detecting anomalies and providing recommendations and suggestions to verify your Account. TrueID may send this information to third parties for storage and processing where required by law or where that third party processes the information on behalf of TrueID. TrueID also has the responsibility to protect your Personal Data that TrueID stores and processes, similar to VK\'s responsibility to protect it.',
        para104: '10.4. We, and third parties, may provide software application downloads for your use on or through the Services. These applications may privately access, and allow a third party to view, your identifying information, such as your name, your user ID, your device\'s IP address, or other information such as the game you are playing in any particular session, and any cookies, SDKs you may have previously installed or that have been installed for you by a third-party software application or website. Additionally, these applications may request you to provide further information directly to third parties. Third-party products or services offered through these applications are not owned or controlled by VK. You should read the terms and other policies published by those third parties on their websites or elsewhere.'
      };
    } else {
      return {
        title: '10. DỮ LIỆU CÁ NHÂN THU THẬP BỚI CÁC BÊN THỨ BA',
        para101: '10.1. Các Dịch Vụ của Chúng tôi có thể sử dụng các công cụ phân tích (như Google Analytics, Facebook Pixel,…) ("Analytics Tools"). Các Analytics Tools này có thể sử dụng Cookie, là các tập tin văn bản được đặt vào thiết bị của Bạn, để giúp trang web phân tích cách thức người dùng sử dụng các Dịch Vụ của Chúng tôi. Thông tin được tạo bởi Cookies về việc Bạn sử dụng trang web (bao gồm địa chỉ IP của Bạn) sẽ được gửi đến và lưu bởi nhà cung cấp dịch vụ Analytics Tools. Nhà cung cấp dịch vụ Analytics Tools sẽ sử dụng thông tin này để đánh giá việc Bạn sử dụng các Dịch Vụ của Chúng tôi, soạn báo cáo về hoạt động trang web dành cho các nhà điều hành trang web và cung cấp các dịch vụ khác liên quan đến hoạt động trang web và việc sử dụng Internet.',
        para102: '10.2. Các Dịch Vụ của Chúng tôi có thể sử dụng các công cụ đo lường (như AppsFlyer, Adjust, Firebase, …) ("Mobile Measurement Partner", gọi tắt là "MMP"). Các MMP sử dụng bộ Software Development Kit ("SDK") được đặt vào thiết bị của Bạn để giúp Chúng tôi theo dõi và tối ưu hóa việc cung ứng các Dịch Vụ đến cho Bạn. Thông tin được tạo bởi SDK về việc Bạn sử dụng ứng dụng của Chúng tôi (bao gồm địa chỉ IP của Bạn) sẽ được gửi đến và lưu bởi nhà cung cấp MMP. Nhà cung cấp MMP sẽ sử dụng thông tin này để đánh giá việc Bạn sử dụng các Dịch Vụ của Chúng tôi, soạn báo cáo về hoạt động của ứng dụng dành cho các nhà phát triển, vận hành ứng dụng và cung cấp các dịch vụ khác liên quan đến hoạt động của ứng dụng và việc sử dụng Internet.',
        para103: '10.3. Các Dịch Vụ của Chúng tôi cũng có thể sử dụng TrueID, một ứng dụng nhận diện gương mặt và Giấy tờ tùy thân (như chứng minh nhân dân, căn cước công dân, hộ chiếu) được cung cấp bởi Công Ty TNHH Phát Triển Phần Mềm VK – một công ty thành viên của VK ("TrueID") để tăng cường việc nhận diện nhằm bảo mật Tài Khoản của Bạn. TrueID sẽ sử dụng camera trên thiết bị của Bạn để ghi nhận, chụp lại gương mặt và Giấy tờ tùy thân của Bạn, sử dụng thuật toán và AI (trí tuệ nhân tạo) để xử lý nhằm phát hiện các điểm bất thường (như gian lận, gương mặt và ảnh trên Giấy tờ tùy thân không chính xác …). TrueID sẽ hỗ trợ Chúng tôi phát hiện các điểm bất thường, đưa ra các khuyến cáo, gợi ý để xác thực Tài Khoản của Bạn. TrueID có thể gửi các thông này cho bên thứ ba để lưu trữ, xử lý trong trường hợp luật pháp có quy định như thế hoặc trường hợp bên thứ ba đó xử lý thông tin thay mặt TrueID. TrueID cũng có nghĩa vụ bảo mật Dữ Liệu Cá Nhân của Bạn mà TrueID lưu trữ, xử lý tương tự như nghĩa vụ bảo mật của VK.',
        para104: '10.4. Chúng tôi, và các bên thứ ba, có thể cung cấp các bản tải về ứng dụng phần mềm cho Bạn sử dụng trên hoặc thông qua các Dịch Vụ. Những ứng dụng này có thể truy cập riêng, và cho phép một bên thứ ba xem, thông tin nhận dạng của Bạn, chẳng hạn như tên, ID người dùng của Bạn, địa chỉ IP của thiết bị của Bạn hoặc thông tin khác chẳng hạn như Trò Chơi mà Bạn đang chơi trong bất kỳ phiên truy cập cụ thể nào, và bất kỳ cookie, bộ SDK nào trước đây Bạn có thể đã cài đặt hoặc đã được cài đặt cho Bạn bởi một ứng dụng phần mềm hoặc trang web của bên thứ ba. Ngoài ra, các ứng dụng này có thể yêu cầu Bạn cung cấp thêm thông tin trực tiếp cho các bên thứ ba. Các sản phẩm hoặc dịch vụ của bên thứ ba được cung cấp thông qua các ứng dụng này không thuộc sở hữu hay quyền kiểm soát của VK. Bạn nên đọc các điều khoản và các chính sách khác được công bố bởi các bên thứ ba đó trên trang web của họ hoặc nơi khác.'
      };
    }
  };

  const section10Data = getSection10Content();

  const getSection11Content = () => {
    if (language === 'en') {
      return {
        title: '11. EXCLUSION OF LIABILITY FOR PRIVACY OBLIGATIONS AND THIRD-PARTY WEBSITES',
        para111: '11.1. VK DOES NOT GUARANTEE THE SECURITY OF YOUR PERSONAL DATA AND/OR OTHER INFORMATION THAT YOU PROVIDE ON THIRD-PARTY WEBSITES AND APPLICATIONS. We implement various security measures to maintain the safety of your Personal Data that we store or control. Your Personal Data is stored behind secure networks and can only be accessed by a limited number of individuals with special access privileges to our systems, and these individuals have been instructed to keep that Personal Data secure. When you begin using the Service or accessing your Personal Data, we recommend using a secure device. All Personal Data you provide will be encrypted into our databases so that it can only be accessed as described above.',
        para112: '11.2. To provide you with added value, we may select various third-party websites to link to and frame within the Website or Game. We may also engage in co-marketing and other relationships to provide e-commerce services, advertising, and other services and features to visitors. These linked sites have their own and independent privacy policies and security measures. Even if such third parties are linked to us, we do not control these linked websites, each of which has its own separate privacy protections and data collection methods, independent of us. Data collected by our co-marketing partners or third-party websites (even if provided on or through our Website or Game) may not be received by us.',
        para113: '11.3. Therefore, we assume no responsibility or liability for the content, security measures (or lack thereof), and operations of third-party websites and applications. We protect the integrity of our Websites and Games and the links placed on each of those websites, and therefore we welcome feedback on these linked websites (including, but not limited to, if a particular website is not working) using the contact information found in Section 15 of this Policy.'
      };
    } else {
      return {
        title: '11. LOẠI TRỜ TRÁCH NHIỆM VỀ NGHĨA VỤ BẢO MẬT VÀ CÁC TRANG WEB BÊN THỨ BA',
        para111: '11.1. VK KHÔNG ĐẢM BẢO TÍNH BẢO MẬT ĐỐI VỚI DỮ LIỆU CÁ NHÂN VÀ/HOẶC THÔNG TIN KHÁC MÀ BẠN CUNG CẤP TRÊN CÁC TRANG WEB, ỨNG DỤNG CỦA BÊN THỨ BA. Chúng tôi thực hiện các biện pháp bảo mật khác nhau để duy trì sự an toàn của Dữ Liệu Cá Nhân của Bạn mà Chúng tôi lưu trữ hoặc kiểm soát. Dữ Liệu Cá Nhân của Bạn được lưu đằng sau các mạng bảo mật và chỉ có thể được truy cập bởi một số cá nhân giới hạn có quyền truy cập đặc biệt đến các hệ thống của Chúng tôi, và những cá nhân này đã được yêu cầu bảo mật dữ liệu cá nhân đó. Khi Bạn bắt đầu sử dụng Dịch Vụ hoặc truy cập Dữ Liệu Cá Nhân của Bạn, Chúng tôi đề nghị sử dụng một thiết bị bảo mật. Tất cả Dữ Liệu Cá Nhân Bạn cung cấp sẽ được mã hóa vào các cơ sở dữ liệu của Chúng tôi để chỉ có thể được truy cập như mô tả bên trên.',
        para112: '11.2. Nhằm cung cấp cho Bạn giá trị gia tăng, Chúng tôi có thể chọn các trang web bên thứ ba khác nhau để liên kết, và đóng khung bên trong Trang Web hoặc Trò Chơi. Chúng tôi cũng có thể tham gia các quan hệ cùng tiếp thị và các quan hệ khác để cung cấp dịch vụ thương mại điện tử, quảng cáo và các dịch vụ và tính năng khác cho khách truy cập. Những trang được liên kết này có các chính sách về quyền riêng tư cũng như các biện pháp bảo mật riêng và độc lập. Ngay cả khi bên thứ ba đó có liên kết với Chúng tôi, Chúng tôi cũng không kiểm soát các trang web được liên kết này, mỗi trang đó có các phương pháp bảo vệ quyền riêng tư và thu thập dữ liệu riêng biệt, độc lập với Chúng tôi. Dữ liệu thu thập bởi các đối tác cùng tiếp thị của Chúng tôi hoặc các trang web bên thứ ba (ngay cả khi được cung cấp trên hoặc thông qua Trang Web hoặc Trò Chơi của Chúng tôi) có thể không được nhận bởi Chúng tôi.',
        para113: '11.3. Do đó Chúng tôi không chịu trách nhiệm hay trách nhiệm pháp lý đối với nội dung, các biện pháp bảo mật (hoặc sự thiếu biện pháp bảo mật) và các hoạt động của các trang web, ứng dụng của Bên thứ ba. Chúng tôi bảo vệ tính toàn vẹn của Trang Web và Trò Chơi của Chúng tôi và các liên kết được đặt trên từng trang web đó, và do đó Chúng tôi hoan nghênh ý kiến phản hồi về các trang web được liên kết này (bao gồm, nhưng không giới hạn nếu một trang web cụ thể không hoạt động) theo thông tin liên hệ có thể được tìm thấy tại Mục 15 của Chính Sách này.'
      };
    }
  };

  const section11Data = getSection11Content();

  const getSection12Content = () => {
    if (language === 'en') {
      return {
        title: '12. HOW CAN YOU WITHDRAW CONSENT, EDIT OR REQUEST EDITING, PROVIDE OR DELETE PERSONAL DATA YOU HAVE PROVIDED TO US?',
        subtitle1: '12.1. Withdrawal of Consent',
        para121a: '(a) You may withdraw your Consent for the collection, use and/or disclosure of your Personal Data that we store or control by following the procedures instructed on our Account settings page. We will process your request in accordance with these Privacy Policy provisions, the procedures on the Account settings page, and our obligations as prescribed by law.',
        para121b: '(b) You understand that your withdrawal of Consent will not affect the legality of our processing of data to which you consented before the withdrawal of consent.',
        para121c: '(c) However, please note that your withdrawal of Consent means that we will no longer be able to provide you with Services, and we may need to terminate our current relationship with you and/or your contract with us without compensating you for any losses.',
        subtitle2: '12.2. Edit, Request Edit, Provide or Delete, Destroy Personal Data',
        para122a: '(a) Once you have registered an Account with us, you can access, view, and edit your Personal Data that we have collected, stored, or control with your consent, through our available systems. If you have not registered an Account with us, or for some of your Personal Data for which we have separate procedures for editing, you may request to edit your Personal Data that we are storing or controlling in the ways specified on our Customer Support page. We will process your request in accordance with these Privacy Policy provisions, our Customer Support procedures, and our obligations as required by law.',
        para122b: '(b) You can monitor the Personal Data we store or control by checking the Personal Data displayed on your Account settings page or by requesting us to provide it in other ways as per our Customer Support and Care procedures. Your legal guardian or a person authorized by you may also make such a request on your behalf. We will process the request in accordance with these Privacy Policy provisions, our Customer Support and Care procedures, and our obligations as required by law.',
        para122c: '(c) You may request that we delete your Personal Data that we store or control when you (i) find that your Personal Data is no longer necessary for the Consent Purposes, (ii) withdraw your Consent under Section 12.1, (iii) object to our processing of your Personal Data and we have no legitimate reason to continue processing your Personal Data, (iv) our processing of your Personal Data is not in accordance with the Consent Purposes, and/or other reasons as prescribed by law regarding the protection of personal data. You may request the deletion of your Personal Data that we store or control by the methods instructed on our Account settings page. However, please note that your request to delete your Personal Data means that we will no longer be able to provide you with Services, and we may need to terminate our current relationship with you and/or your contract with us without compensating you for any losses.',
        para122d: '(d) Please note that, in all cases, we will need sufficient information from you to verify your identity and the nature of your request in order to process your request according to our procedures.',
        para122e: '(e) We may charge you a reasonable fee for processing your request. If we do charge a fee, we will provide you with the cost and payment deadline in writing or via email. Please pay any applicable fees on time to ensure your request is processed promptly.',
        para122f: '(f) We reserve the right to refuse to provide or delete your Personal Data in specific circumstances as prescribed by law.'
      };
    } else {
      return {
        title: '12. BẠN CÓ THỂ RÚT LẠI SỰ ĐỒNG Ý, CHỈNH SỬA HOẶC YÊU CẦU CHỈNH SỬA, CUNG CẤP HOẶC XÓA DỮ LIỆU CÁ NHÂN BẠN ĐÃ CUNG CẤP CHO CHÚNG TÔI BẰNG CÁCH NÀO?',
        subtitle1: '12.1. Rút Lại Sự Đồng Ý',
        para121a: '(a) Bạn có thể rút lại Sự Đồng Ý cho phép thu thập, sử dụng và/hoặc tiết lộ dữ liệu cá nhân của Bạn mà Chúng tôi đang lưu trữ hoặc kiểm soát bằng các cách thức được hướng dẫn tại trang thiết lập Tài Khoản của Chúng tôi. Chúng tôi sẽ xử lý yêu cầu theo các quy định Chính Sách Bảo Mật này, theo hướng dẫn, quy trình tại trang thiết lập Tài Khoản và các nghĩa vụ của Chúng tôi được quy định bởi pháp luật.',
        para121b: '(b) Bạn hiểu rõ rằng, việc Bạn rút lại Sự Đồng Ý sẽ không ảnh hưởng đến tính hợp pháp của việc Chúng tôi xử lý dữ liệu đã được Bạn đồng ý trước khi rút lại sự đồng ý.',
        para121c: '(c) Tuy nhiên, Bạn cần lưu ý rằng việc Bạn rút lại Sự Đồng Ý đồng nghĩa với việc Chúng tôi sẽ không thể tiếp tục cung cấp các Dịch Vụ cho Bạn, và Chúng tôi có thể cần phải chấm dứt quan hệ hiện tại với Bạn và/hoặc hợp đồng của Bạn với Chúng tôi mà không phải bồi thường cho bất kỳ tổn thất nào của Bạn.',
        subtitle2: '12.2. Chỉnh sửa, Yêu Cầu Chỉnh Sửa, Cung Cấp hoặc Xóa, Hủy Dữ Liệu Cá Nhân',
        para122a: '(a) Khi Bạn đã đăng ký một Tài Khoản với Chúng tôi, Bạn có thể truy cập để xem, chỉnh sửa Dữ Liệu Cá Nhân của Bạn mà Chúng tôi đã thu thập, đang lưu trữ hoặc kiểm soát theo Sự Đồng Ý, thông qua hệ thống sẵn có của Chúng tôi. Nếu Bạn chưa đăng ký Tài Khoản với Chúng tôi, hoặc đối với một số Dữ Liệu Cá Nhân của Bạn mà Chúng tôi có quy trình riêng biệt để chỉnh sửa, Bạn có thể yêu cầu chỉnh sửa Dữ Liệu Cá Nhân của Bạn mà Chúng tôi đang lưu trữ hoặc kiểm soát bằng các cách thức được quy định tại trang Hỗ trợ và Chăm sóc Khách hàng của Chúng tôi. Chúng tôi sẽ xử lý yêu cầu theo các quy định Chính Sách Bảo Mật này, theo quy trình Hỗ trợ và Chăm sóc Khách hàng và các nghĩa vụ của Chúng tôi được quy định bởi pháp luật.',
        para122b: '(b) Bạn có thể theo dõi Dữ Liệu Cá Nhân của Bạn mà Chúng tôi đang lưu trữ hoặc kiểm soát bằng cách kiểm tra Dữ Liệu Cá Nhân được hiển thị tại trang thiết lập Tài Khoản của Bạn hoặc yêu cầu Chúng tôi cung cấp theo các cách thức khác theo quy trình Hỗ trợ và Chăm sóc Khách hàng của Chúng tôi. Người giám hộ hợp pháp của Bạn hoặc người được Bạn ủy quyền cũng có thể thay mặt Bạn thực hiện yêu cầu. Chúng tôi sẽ xử lý yêu cầu theo các quy định Chính Sách Bảo Mật này, theo quy trình Hỗ trợ và Chăm sóc Khách hàng và các nghĩa vụ của Chúng tôi được quy định bởi pháp luật.',
        para122c: '(c) Bạn có thể yêu cầu Chúng tôi xóa Dữ Liệu Cá Nhân của Bạn mà Chúng tôi đang lưu trữ hoặc kiểm soát khi Bạn (i) nhận thấy Dữ Liệu Cá Nhân của Bạn không còn cần thiết cho các Mục Đích đã có Sự Đồng Ý, (ii) rút lại Sự Đồng Ý theo Mục 12.1, (iii) phản đối Chúng tôi xử lý Dữ Liệu Cá Nhân của Bạn và Chúng tôi không có lý do chính đáng để tiếp tục xử lý Dữ Liệu Cá Nhân của Bạn, (iv) việc Chúng tôi xử lý Dữ Liệu Cá Nhân của Bạn không đúng với các Mục Đích đã có Sự Đồng Ý, và/hoặc các lý do khác theo quy định của pháp luật về bảo vệ dữ liệu cá nhân. Cá nhân Bạn có thể yêu cầu xóa Dữ Liệu Cá Nhân của Bạn mà Chúng tôi đang lưu trữ hoặc kiểm soát bằng các cách thức được hướng dẫn tại trang thiết lập Tài Khoản của Chúng tôi. Tuy nhiên, Bạn cần lưu ý rằng việc Bạn yêu cầu xóa Dữ Liệu Cá Nhân của Bạn đồng nghĩa với việc Chúng tôi sẽ không thể tiếp tục cung cấp các Dịch Vụ cho Bạn, và Chúng tôi có thể cần phải chấm dứt quan hệ hiện tại với Bạn và/hoặc hợp đồng của Bạn với Chúng tôi mà không phải bồi thường cho bất kỳ tổn thất nào của Bạn.',
        para122d: '(d) Bạn cần lưu ý rằng, trong mọi trường hợp, Chúng tôi sẽ cần có đủ thông tin từ Bạn để xác định danh tính của Bạn cũng như bản chất yêu cầu của Bạn để có thể giải quyết yêu cầu của Bạn theo các quy trình của Chúng tôi.',
        para122e: '(e) Chúng tôi có thể tính một khoản chi phí hợp lý cho Bạn để giải quyết và xử lý yêu cầu của Bạn. Nếu Chúng tôi có tính phí, Chúng tôi sẽ cung cấp cho Bạn chi phí và thời hạn cần phải thanh toán bằng văn bản hoặc email. Bạn vui lòng thanh toán và thanh toán đúng thời hạn các khoản phí (nếu có) nêu trên để việc đáp ứng hay giải quyết yêu cầu của Bạn được diễn ra kịp thời.',
        para122f: '(f) Chúng tôi có quyền từ chối cung cấp hoặc xóa Dữ Liệu Cá Nhân của Bạn trong các trường hợp cụ thể theo quy định của pháp luật.'
      };
    }
  };

  const section12Data = getSection12Content();

  const getSection13Content = () => {
    if (language === 'en') {
      return {
        title: '13. SUPPLEMENTARY REGULATIONS FOR USERS IN EUROPEAN UNION (EU) COUNTRIES',
        intro: 'The provisions in this section apply only if you are residing in the European Union ("EU"). These provisions shall prevail in the event of any discrepancies with other provisions of this Privacy Policy.',
        subtitle131: '13.1. Flexibility',
        para131a: '(a) You have the right to receive from us the Personal Data you have previously provided to us and the information processed based on your permission in a structured, commonly usable and similar electronic format, and the right to request us to transfer this Personal Data to other parties.',
        para131b: '(b) If you wish for us to transfer your Personal Data to a third party, please ensure you provide the details of this third party and note that we can only comply with your request if it is technically feasible. We will not be responsible for the security of your Personal Data or any data obtained from processing your Personal Data once a third party receives it. We may also withhold certain of your Personal Data from you if doing so would interfere with other rights (for example, when providing Personal Data that we have collected could disclose the information of other individuals).',
        subtitle132: '13.2. Delete Data',
        para132a: '(a) You may request that we delete your Personal Data that we have collected in the following cases:',
        para132a1: '- You believe that this Personal Data is no longer necessary for us to retain your Personal Data;',
        para132a2: '- We process your Personal Data that we have collected based on your permission and you wish to withdraw that permission. At the same time, we no longer have any other reason or purpose to continue processing this Personal Data;',
        para132a3: '- We are processing your Personal Data based on our legitimate interests and you are the subject of this processing. Please provide details that you deem reasonable so that we can consider whether it is a more important interest than our interest in processing and storing this Personal Data;',
        para132a4: '- You no longer wish for us to continue using your Personal Data that we have collected to send advertisements, special offers, sales programs, and lucky draw programs; or',
        para132a5: '- You believe that your Personal Data that we have collected is being processed unlawfully by us.',
        para132b: '(b) Please provide as much detail as possible about your reasons to help us determine whether you have a reasonable basis for requesting data deletion. However, we may retain Personal Data if there is a legitimate basis under the law for us to do so (e.g., to comply with the laws of the country where VK\'s subsidiaries or member companies are headquartered, or to protect us from legal demands or to ensure freedom of speech), but we will notify you of these cases. Please note that after deleting Personal Data, we may not be able to provide services as before the deletion because we will no longer know your preferences.',
        para132c: '(c) Please note that regulations in some countries (such as Vietnam) and territories require service providers like VK to store users\' personal information and data for a certain period (up to 5 years) ("Retention Period") from the last time the user used the service; you agree that, in this case, the regulations of the aforementioned countries and territories will take precedence; therefore, your request to delete your personal data can only be processed after the expiration of the aforementioned Retention Period.',
        subtitle133: '13.3. Personal Data Storage',
        para133: 'We retain your Personal Data for as long as it is necessary for us to provide you with services or products, or as required or permitted by law, such as online gaming regulations, tax, or accounting regulations. If you make a request to delete your Personal Data and we determine that this request is reasonable, we will endeavor to delete your Personal Data within 30 days of your request and the end of the Retention Period, or notify you if this requires more time.',
        subtitle134: '13.4. Objections Against Customer Profile-Based and Targeted Sales Programs',
        para134: 'At any time, you have the right to object to the processing of your Personal Data for sending you promotional programs, special offers, and sales messages, including our building of customer profiles for these purposes, and we will stop processing your Personal Data for these purposes. Please provide us with details of your reasons for your objection to help us determine if you have a legitimate basis for objecting. However, we may retain your Personal Data if there are legitimate grounds for doing so.',
        subtitle135: '13.5. Restrictions of Processing For Storage Purposes Only',
        para135intro: 'You have the right to request that we limit the processing of your Personal Data that we already hold to storage purposes only, when:',
        para135a: '(a) You believe that your Personal Data is inaccurate, for the period of time necessary for us to verify whether your Personal Data is accurate;',
        para135b: '(b) We want to delete your Personal Data, but you want us to only store it;',
        para135c: '(c) We want to delete your Personal Data because it is no longer needed for our purposes, but you request that it be retained to establish, perform, or defend against legal requirements; or',
        para135d: '(d) You object to us processing your Personal Data in our legitimate interests and you want us to cease processing your Personal Data when we determine whether it is important to process and retain this Personal Data.',
        subtitle136: '13.6. Transferring Personal Data Outside the EU',
        para136: 'Your Personal Data may be transferred outside the EU. We will take necessary and appropriate steps to ensure that the recipients of your Personal Data are responsible for its confidentiality, and we implement measures such as appropriate contractual provisions to ensure that the recipients of transferred data protect and process your Personal Data in compliance with all personal data protection laws.',
        subtitle137: '13.7. Children\'s Information',
        para137: 'These Services are not intended for children under 16 years of age currently residing in the EU. We do not knowingly collect or store any personal data or non-personally identifiable information of anyone under 16 years of age residing in the EU, and no part of our Website, Games, or other Services is intended for children under 16 years of age residing in the EU. We will lock any Account used solely by such children and will remove and/or delete any personal data that we believe has been submitted by any child under 16 years of age residing in the EU.'
      };
    } else {
      return {
        title: '13. QUY ĐỊNH BỔ SUNG CHO NGƯỜI DÙNG TẠI CÁC QUỐC GIA LIÊN MINH CHÂU ÂU (EU)',
        intro: 'Quy định tại Mục này chỉ áp dụng nếu Bạn đang sinh sống tại Liên Minh Châu Âu ("EU"). Các quy định này được ưu tiên áp dụng hơn trong trường hợp có sự khác biệt trong các quy định khác của Chính Sách Bảo Mật này.',
        subtitle131: '13.1. Tính Linh Động',
        para131a: '(a) Bạn có quyền nhận từ Chúng tôi các Dữ Liệu Cá Nhân mà Bạn đã cung cấp trước đó cho Chúng tôi và các thông tin đã được xử lý dựa trên sự cho phép của Bạn theo định dạng được cấu trúc, có khả năng sử dụng thông thường và đang tương tự trên môi trường điện tử, và quyền yêu cầu Chúng tôi chuyển các Dữ Liệu Cá Nhân này cho Bên khác.',
        para131b: '(b) Nếu Bạn muốn Chúng tôi chuyển giao Dữ Liệu Cá Nhân cho Bên thứ ba, Bạn vui lòng đảm bảo các thông tin chi tiết của Bên thứ ba này và lưu ý rằng Chúng tôi chỉ có thể thực hiện theo yêu cầu của Bạn khi các yêu cầu này khả thi về mặt kỹ thuật. Chúng tôi sẽ không chịu trách nhiệm bảo mật các Dữ Liệu Cá Nhân hoặc các Dữ Liệu thu được từ kết quả xử lý Dữ Liệu Cá Nhân của Bạn khi Bên thứ ba nhận được các dữ liệu này. Chúng tôi cũng có thể không cung cấp cho Bạn các Dữ Liệu Cá Nhân nhất định của Bạn nếu việc cung cấp này gây trở ngại cho các quyền khác (ví dụ khi cung cấp Dữ Liệu Cá Nhân mà Chúng tôi đã thu thập được có thể làm lộ thông tin của cá nhân khác).',
        subtitle132: '13.2. Xóa Dữ Liệu',
        para132a: '(a) Bạn có thể yêu cầu Chúng tôi xóa Dữ Liệu Cá Nhân của Bạn mà Chúng tôi đã thu thập được trong các trường hợp sau đây:',
        para132a1: '- Bạn tin rằng các Dữ liệu Cá nhân này không còn cần thiết để Chúng tôi nắm giữ các Dữ Liệu Cá Nhân của Bạn;',
        para132a2: '- Chúng tôi xử lý Dữ Liệu Cá Nhân của Bạn mà Chúng tôi đã thu thập được dựa trên sự cho phép của Bạn và Bạn mong muốn rút lại sự cho phép này. Đồng thời, Chúng tôi không còn bất cứ lý do, mục đích nào khác để tiếp tục xử lý Dữ liệu Cá Nhân này;',
        para132a3: '- Chúng tôi đang xử lý Dữ Liệu Cá Nhân của Bạn căn cứ vào các lợi ích hợp pháp của Chúng tôi và Bạn là đối tượng của việc xử lý này. Bạn vui lòng cung cấp các thông tin chi tiết mà Bạn cho là hợp lý để Chúng tôi có thể xem xét liệu đó có phải là một quyền lợi quan trọng hơn quyền lợi của Chúng tôi để xử lý và lưu trữ các Dữ Liệu Cá Nhân này;',
        para132a4: '- Bạn không còn muốn Chúng tôi tiếp tục sử dụng Dữ Liệu Cá Nhân của Bạn đã được thu thập bởi Chúng tôi để gửi các quảng cáo, các đề xuất đặc biệt, các chương trình bán hàng và các chương trình may mắn; hoặc',
        para132a5: '- Bạn tin tưởng rằng Dữ Liệu Cá Nhân của Bạn mà Chúng tôi thu thập được được xử lý một cách trái luật bởi Chúng tôi.',
        para132b: '(b) Vui lòng cung cấp càng chi tiết càng tốt các lý do của Bạn để hỗ trợ Chúng tôi trong việc xác định liệu Bạn có cơ sở hợp lý để yêu cầu xóa dữ liệu hay không. Tuy nhiên, Chúng tôi có thể giữ lại Dữ Liệu Cá Nhân nếu có cơ sở hợp pháp theo quy định của pháp luật để Chúng tôi thực hiện việc này (ví dụ: thực hiện theo quy định của pháp luật của quốc gia sở tại – nơi công ty con, công ty thành viên của VK đặt trụ sở chính, hoặc để bảo vệ Chúng tôi trước các yêu cầu pháp lý hoặc đảm bảo quyền tự do ngôn luận) tuy nhiên Chúng tôi sẽ thông báo cho Bạn biết về các trường hợp này. Bạn vui lòng lưu ý rằng sau khi xóa Dữ Liệu Cá Nhân, Chúng tôi có thể không có khả năng cung cấp dịch vụ như trước khi xóa bởi vì Chúng tôi sẽ không thể biết về các sở thích của Bạn.',
        para132c: '(c) Bạn cần lưu ý rằng, quy định tại một số quốc gia (như Việt Nam), vùng lãnh thổ, quy định bắt buộc Nhà cung cấp dịch vụ như VK buộc phải lưu trữ thông tin, Dữ Liệu Cá Nhân của người sử dụng trong một thời hạn nhất định (có thể lên đến 05 (năm) năm) ("Thời Hạn Lưu Trữ") kể từ thời điểm cuối cùng mà người sử dụng sử dụng dịch vụ; Bạn đồng ý rằng, trong trường hợp này thì các quy định của các quốc gia, vùng lãnh thổ nêu trên sẽ được ưu tiên áp dụng; do đó, yêu cầu xóa Dữ Liệu Cá Nhân của Bạn sẽ chỉ có thể thực hiện sau khi kết thúc Thời Hạn Lưu Trữ nêu trên.',
        subtitle133: '13.3. Lưu Trữ Dữ Liệu Cá Nhân',
        para133: 'Chúng tôi lưu trữ Dữ Liệu Cá Nhân của Bạn miễn là các Dữ Liệu Cá Nhân này cần thiết để Chúng tôi cung cấp dịch vụ hoặc sản phẩm cho Bạn, hoặc theo yêu cầu hoặc được cho phép theo quy định của pháp luật, chẳng hạn như các quy định của pháp luật về trò chơi điện tử trên mạng, Thuế, Kế toán. Nếu Bạn thực hiện yêu cầu xóa bỏ Dữ Liệu Cá Nhân của Bạn và Chúng tôi xác định rằng đây là yêu cầu có căn cứ hợp lý, Chúng tôi sẽ cố gắng xóa Dữ Liệu Cá Nhân của Bạn trong vòng 30 ngày kể từ ngày Bạn yêu cầu và kết thúc Thời Hạn Lưu Trữ nêu trên, hoặc thông báo cho Bạn nếu việc này cần thêm nhiều thời gian hơn.',
        subtitle134: '13.4. Phản Đối Chống Lại Các Chương Trình Bán Hàng Dựa Trên Hồ Sơ Khách Hàng Và Khách Hàng Mục Tiêu',
        para134: 'Tại bất kỳ thời điểm nào Bạn cũng có quyền phản đối việc xử lý Dữ Liệu Cá Nhân của Bạn để gửi cho Bạn các chương trình quảng cáo, các đề xuất đặc biệt và các tin nhắn bán hàng, bao gồm việc Chúng tôi xây dựng Hồ sơ khách hàng cho các mục đích này và Chúng tôi sẽ dừng việc xử lý các Dữ Liệu Cá Nhân của Bạn để phục vụ cho các mục đích này. Bạn vui lòng cung cấp cho Chúng tôi các thông tin chi tiết về lý do Bạn yêu cầu để hỗ trợ Chúng tôi xác định liệu Bạn có cơ sở hợp pháp để phản đối hay không. Tuy nhiên, Chúng tôi có thể giữ lại Dữ Liệu Cá Nhân của Bạn nếu có các cơ sở hợp pháp để Chúng tôi thực hiện việc này.',
        subtitle135: '13.5. Hạn Chế Xử Lý Dữ Liệu Cá Nhân Chỉ Để Lưu Trữ',
        para135intro: 'Bạn có quyền yêu cầu rằng Chúng tôi giới hạn việc xử lý Dữ Liệu Cá Nhân của Bạn mà Chúng tôi đã có chỉ cho mục đích lưu trữ, khi:',
        para135a: '(a) Bạn tin rằng Dữ liệu Cá nhân của Bạn là không chính xác, trong khoảng thời gian cần thiết để Chúng tôi xác minh liệu Dữ Liệu Cá Nhân của Bạn có chính xác hay không;',
        para135b: '(b) Chúng tôi muốn xóa Dữ Liệu Cá Nhân của Bạn nhưng Bạn muốn Chúng tôi chỉ Lưu trữ;',
        para135c: '(c) Chúng tôi muốn xóa Dữ Liệu Cá Nhân của Bạn do nó không còn cần thiết cho mục đích của Chúng tôi nhưng Bạn yêu cầu lưu trữ để thiết lập, thực hiện hoặc chống lại các yêu cầu pháp lý; hoặc',
        para135d: '(d) Bạn phản đối Chúng tôi xử lý Dữ Liệu Cá Nhân của Bạn trên cơ sở các lợi ích hợp pháp của Chúng tôi và Bạn muốn Chúng tôi chấm dứt việc xử lý Dữ Liệu Cá Nhân khi Chúng tôi xác định liệu có quan trọng trong việc xử lý và giữ lại các Dữ Liệu Cá Nhân này.',
        subtitle136: '13.6. Chuyển Dữ Liệu Cá Nhân Ra Ngoài EU',
        para136: 'Dữ Liệu Cá Nhân của Bạn có thể được chuyển ra ngoài EU. Chúng tôi sẽ thực hiện các bước cần thiết và thích hợp để đảm bảo rằng Người nhận Dữ Liệu Cá Nhân của Bạn sẽ có trách nhiệm bảo mật và Chúng tôi thực hiện các biện pháp chẳng hạn như các quy định trong Hợp đồng thích hợp để đảm bảo những người nhận dữ liệu được chuyển giao bảo vệ và xử lý Dữ Liệu Cá Nhân của Bạn tuân thủ tất cả các luật về bảo vệ dữ liệu cá nhân.',
        subtitle137: '13.7. Thông Tin Trẻ Em',
        para137: 'Các Dịch Vụ này không dành cho trẻ em dưới 16 tuổi hiện đang sinh sống tại EU. Chúng tôi không cố tình thu thập hay lưu trữ bất kỳ dữ liệu cá nhân hay thông tin không nhận dạng cá nhân nào của bất kỳ ai dưới 16 tuổi đang sinh sống tại EU, bất kỳ phần nào của Trang Web, Trò Chơi của Chúng tôi hoặc các Dịch Vụ khác cũng không dành cho trẻ em dưới 16 tuổi đang sinh sống tại EU. Chúng tôi sẽ khóa bất kỳ Tài Khoản nào chỉ được sử dụng bởi đối tượng trẻ em như vậy và sẽ gỡ và/hoặc xóa bất kỳ dữ liệu cá nhân nào mà Chúng tôi cho là đã được gửi bởi bất kỳ trẻ em nào dưới 16 tuổi đang sinh sống tại EU.'
      };
    }
  };

  const section13Data = getSection13Content();

  const getSection14Content = () => {
    if (language === 'en') {
      return {
        title: '14. PLACE TO STORE AND TRANSFER PERSONAL DATA TO ANOTHER COUNTRY',
        para141: '14.1. For Services provided to the Vietnamese market by VK and/or its subsidiaries, affiliates, and member companies headquartered in Vietnam, your Personal Data will be stored in Vietnam in accordance with Vietnamese law.',
        para142: '14.2. For the Personal Data of EU users, the provisions of Section 13 of this Policy shall apply.'
      };
    } else {
      return {
        title: '14. NƠI LƯU TRỬ DỮ LIỆU CÁ NHÂN VÀ CHUYỂN GIAO SANG QUỐC GIA KHÁC',
        para141: '14.1. Đối với các Dịch Vụ được cung ứng cho thị trường Việt Nam, bởi VK và/hoặc các công ty con, công ty liên kết, công ty thành viên của VK có trụ sở chính đặt tại Việt Nam thì Dữ Liệu Cá Nhân của Bạn sẽ được lưu trữ tại Việt Nam theo đúng quy định của pháp luật Việt Nam.',
        para142: '14.2. Đối với các Dữ Liệu Cá Nhân của người dùng EU thì sẽ áp dụng theo quy định tại Mục 13 của Chính Sách này.'
      };
    }
  };

  const section14Data = getSection14Content();

  const getSection15Content = () => {
    if (language === 'en') {
      return {
        title: '15. QUESTIONS, FEEDBACK, AND CONTACT WITH VK',
        para151: 'If you have any questions, feedback, or inquiries about this Policy, please contact us at game.cskh@vkentertainment.vn.'
      };
    } else {
      return {
        title: '15. THẮC MẮC, PHẢN HỒI VÀ LIÊN HỆ VỚI VK',
        para151: 'Nếu Bạn có bất kỳ thắc mắc, phản hồi hoặc câu hỏi nào về Chính Sách này, vui lòng liên hệ với Chúng tôi theo địa chỉ email game.cskh@vkentertainment.vn.'
      };
    }
  };

  const section15Data = getSection15Content();

  const getMainTitleContent = () => {
    if (language === 'en') {
      return 'PRIVACY POLICY';
    } else {
      return 'CHÍNH SÁCH BẢO MẬT THÔNG TIN';
    }
  };

  const getDataStorageContent = () => {
    if (language === 'en') {
      return {
        title: 'DATA STORAGE LOCATION',
        content: 'Personal Data will be stored in Vietnam in accordance with Vietnamese law.'
      };
    } else {
      return {
        title: 'NƠI LƯU TRỮ DỮ LIỆU',
        content: 'Dữ Liệu Cá Nhân sẽ được lưu trữ tại Việt Nam theo đúng quy định pháp luật Việt Nam.'
      };
    }
  };

  const mainTitle = getMainTitleContent();
  const dataStorageData = getDataStorageContent();

  const getLastUpdatedContent = () => {
    if (language === 'en') {
      return 'Last updated: January, 2026';
    } else {
      return 'Cập nhật lần cuối: Tháng 1, 2026';
    }
  };

  const lastUpdatedText = getLastUpdatedContent();

  return (
    <section style={{
      background: 'linear-gradient(180deg, #262335 10%, #463699 40%, #8A83DA 70%, #FBD5BD 100%)',
      padding: "80px 20px",
      minHeight: "100vh",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px 20px",
      }}>
        <h1 style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 40,
          textAlign: "center",
          letterSpacing: 2,
          fontFamily: 'Montserrat, sans-serif'
        }}>
          {mainTitle}
        </h1>

        <div style={{
          color: "#fff",
          fontSize: 15,
          lineHeight: 1.8,
          fontFamily: 'Arial, sans-serif'
        }}>
          
          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {introData.title}
            </h2>
            {introData.content.map((item, index) => (
              <p key={index} style={{ marginBottom: 12, textAlign: "justify" }}>
                {item.number} {item.bold && <strong>{item.bold}</strong>}{item.text}
              </p>
            ))}
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section2Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section2Data.intro}
            </p>
            <div style={{ paddingLeft: 30, marginBottom: 12 }}>
              {section2Data.items.map((item, index) => (
                <p key={index} style={{ marginBottom: 8, textAlign: "justify" }}>
                  {item}
                </p>
              ))}
            </div>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section2Data.conclusion}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section3Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section3Data.intro}
            </p>
            <div style={{ paddingLeft: 30, marginBottom: 12 }}>
              {section3Data.items.map((item, index) => (
                <p key={index} style={{ marginBottom: 8, textAlign: "justify" }}>{item}</p>
              ))}
            </div>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section3Data.para32}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section3Data.para33}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section3Data.para34}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section3Data.para35}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section4Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section4Data.intro41}
            </p>
            <div style={{ paddingLeft: 30, marginBottom: 12 }}>
              {section4Data.items.map((item, index) => (
                <p key={index} style={{ marginBottom: 8, textAlign: "justify" }}>{item}</p>
              ))}
            </div>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section4Data.para41}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section4Data.para42}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section5Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section5Data.para51}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section5Data.para52}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section6Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section6Data.intro}
            </p>
            <div style={{ paddingLeft: 30, marginBottom: 12 }}>
              {section6Data.items.map((item, index) => (
                <p key={index} style={{ marginBottom: 8, textAlign: "justify" }}>{item}</p>
              ))}
            </div>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section6Data.para62}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section6Data.para63}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section7Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section7Data.para71}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section7Data.para72}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section7Data.para73}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section8Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section8Data.intro}
            </p>
            {section8Data.items.map((item, index) => (
              <p key={index} style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
                {item}
              </p>
            ))}
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section8Data.para82}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section8Data.para83}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section8Data.para84}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section9Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section9Data.para91}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section9Data.para92}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section9Data.para93}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section9Data.para94}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section9Data.para95}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section10Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section10Data.para101}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section10Data.para102}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section10Data.para103}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section10Data.para104}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section11Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section11Data.para111}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section11Data.para112}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section11Data.para113}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section12Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section12Data.subtitle1}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para121a}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para121b}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para121c}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section12Data.subtitle2}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para122a}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para122b}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para122c}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para122d}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para122e}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section12Data.para122f}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {dataStorageData.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {dataStorageData.content}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section13Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section13Data.intro}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section13Data.subtitle131}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para131a}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para131b}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section13Data.subtitle132}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para132a}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 60, textAlign: "justify" }}>
              {section13Data.para132a1}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 60, textAlign: "justify" }}>
              {section13Data.para132a2}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 60, textAlign: "justify" }}>
              {section13Data.para132a3}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 60, textAlign: "justify" }}>
              {section13Data.para132a4}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 60, textAlign: "justify" }}>
              {section13Data.para132a5}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para132b}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para132c}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section13Data.subtitle133}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para133}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section13Data.subtitle134}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para134}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section13Data.subtitle135}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para135intro}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para135a}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para135b}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para135c}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para135d}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section13Data.subtitle136}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para136}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section13Data.subtitle137}
            </p>
            <p style={{ marginBottom: 12, marginLeft: 30, textAlign: "justify" }}>
              {section13Data.para137}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section14Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section14Data.para141}
            </p>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section14Data.para142}
            </p>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#fff" }}>
              {section15Data.title}
            </h2>
            <p style={{ marginBottom: 12, textAlign: "justify" }}>
              {section15Data.para151}
            </p>
          </div>

          <div style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: "2px solid rgba(255,255,255,0.3)",
            textAlign: "center",
            fontSize: 14,
            color: "#fff"
          }}>
            <p>{lastUpdatedText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
