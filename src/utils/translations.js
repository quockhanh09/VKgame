export const translations = {
  vi: {
    header: {
      home: "Trang chủ",
      news: "Tin tức",
      store: "Cửa hàng",
      topup: "Nạp tiền",
      community: "Cộng đồng",
      login: "Đăng nhập"
    },
    hero: {
      title: "VK ENTERTAINMENT",
      subtitle: "Thế giới số tuyệt với của bạn"
    },
    news: {
      title: "TIN TỨC",
      mainTitle: "TIN TỨC",
      newsItem: "VNGGAMES CLUB HỢP TÁC CHIẾN LƯỢC CÙNG ZALOPAY TĂNG HẠNG LOẠT ƯU ĐÃI ĐỘC QUYỀN"
    },
    store: {
      title: "Cửa hàng game",
      viewAll: "Xem tất cả",
      selectGame: "Chọn trò chơi"
    },
    topup: {
      title: "NẠP TIỀN",
      subtitle: "LỢI ÍCH KHI NẠP TRỰC TIẾP TẠI VKE",
      benefit1: "Ưu đãi hấp dẫn",
      benefit2: "Vật phẩm độc quyền",
      benefit3: "Thanh toán trực tiếp",
      benefit4: "Giá tốt nhất"
    },
    tabs: {
      copyright: "Tin tức bản quyền",
      event: "Sự kiện",
      law: "Văn bản pháp luật"
    },
    footer: {
      about: "VỀ CHÚNG TÔI",
      aboutDesc: "VK Entertainment là đơn vị hàng đầu trong lĩnh vực phát hành và vận hành game tại Việt Nam",
      categories: "Hạng mục",
      home: "Trang chủ",
      news: "Tin tức",
      store: "Cửa hàng",
      topup: "Nạp tiền",
      community: "Cộng đồng",
      support: "Hỗ trợ",
      faq: "Câu hỏi thường gặp",
      subscribe: "Đăng ký nhận thông tin",
      email: "Email",
      terms: "Điều khoản sử dụng",
      privacy: "Chính sách bảo mật thông tin"
    }
  },
  en: {
    header: {
      home: "Home",
      news: "News",
      store: "Store",
      topup: "Top Up",
      community: "Community",
      login: "Login"
    },
    hero: {
      title: "VK ENTERTAINMENT",
      subtitle: "Your Amazing Digital World"
    },
    news: {
      title: "NEWS",
      mainTitle: "NEWS",
      newsItem: "VNGGAMES CLUB STRATEGIC COOPERATION WITH ZALOPAY OFFERING EXCLUSIVE PROMOTIONS"
    },
    store: {
      title: "Game Store",
      viewAll: "View All",
      selectGame: "Select game"
    },
    topup: {
      title: "TOP UP",
      subtitle: "BENEFITS WHEN TOPPING UP DIRECTLY AT VKE",
      benefit1: "Attractive Offers",
      benefit2: "Exclusive Items",
      benefit3: "Direct Payment",
      benefit4: "Best Price"
    },
    tabs: {
      copyright: "Copyright News",
      event: "Events",
      law: "Legal Documents"
    },
    footer: {
      about: "ABOUT US",
      aboutDesc: "VK Entertainment is a leading publisher and operator of games in Vietnam",
      categories: "Categories",
      home: "Home",
      news: "News",
      store: "Store",
      topup: "Top Up",
      community: "Community",
      support: "Support",
      faq: "FAQ",
      subscribe: "Subscribe to Newsletter",
      email: "Email",
      terms: "Terms of Use",
      privacy: "Privacy Policy"
    }
  }
};

export const t = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};
