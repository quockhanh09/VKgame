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
    tabs: {
      copyright: "Tin tức bản quyền",
      event: "Sự kiện",
      law: "Văn bản pháp luật"
    },
    footer: {
      about: "VỀ CHÚNG TÔI",
      aboutDesc: "VK Entertainment là đơn vị hàng đầu trong lĩnh vực phát hành và vận hành game tại Việt Nam",
      quickLinks: "LIÊN KẾT NHANH",
      home: "Trang chủ",
      news: "Tin tức",
      store: "Cửa hàng",
      support: "Hỗ trợ",
      contact: "LIÊN HỆ",
      email: "Email",
      phone: "Điện thoại",
      address: "Địa chỉ",
      addressValue: "Vinhomes West Point, Phường Từ Liêm, Thành phố Hà Nội, Việt Nam",
      legal: "PHÁP LÝ",
      terms: "Điều khoản sử dụng",
      privacy: "Chính sách bảo mật",
      copyright: "Bản quyền © 2026 VK Entertainment. Tất cả quyền được bảo lưu."
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
    tabs: {
      copyright: "Copyright News",
      event: "Events",
      law: "Legal Documents"
    },
    footer: {
      about: "ABOUT US",
      aboutDesc: "VK Entertainment is a leading publisher and operator of games in Vietnam",
      quickLinks: "QUICK LINKS",
      home: "Home",
      news: "News",
      store: "Store",
      support: "Support",
      contact: "CONTACT",
      email: "Email",
      phone: "Phone",
      address: "Address",
      addressValue: "Vinhomes West Point, Tu Liem Ward, Hanoi City, Vietnam",
      legal: "LEGAL",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      copyright: "Copyright © 2026 VK Entertainment. All rights reserved."
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
