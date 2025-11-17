import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'vi' | 'en';

interface Translations {
  [key: string]: {
    vi: string;
    en: string;
  };
}

const translations: Translations = {
  'top.account': {
    vi: 'Tài khoản',
    en: 'Account',
  },
  'top.download': {
    vi: 'Tải xuống',
    en: 'Download',
  },
  'top.lang': {
    vi: 'Tiếng Việt ▾',
    en: 'English ▾',
  },
  'hero.title': {
    vi: 'Xóa sổ Dấu vết Trình duyệt.<br> Duyệt web ẩn danh như chưa từng có.',
    en: 'Erase browser fingerprints.<br> Browse anonymously like never before.',
  },
  'hero.b1': {
    vi: 'Tạo Hồ Sơ Trình Duyệt Độc Lập',
    en: 'Create Independent Browser Profiles',
  },
  'hero.b2': {
    vi: 'Thay Đổi Vân Tay Trình Duyệt',
    en: 'Change Browser Fingerprinting',
  },
  'hero.b3': {
    vi: 'Quản Lý Proxy Tích Hợp',
    en: 'Integrated Proxy Management',
  },

  'hero.cta': {
    vi: 'Bắt đầu trải nghiệm',
    en: 'Start Experience',
  },
  'feat.p1.title': {
    vi: 'Tạo Hồ Sơ Trình Duyệt Độc Lập',
    en: 'Create Independent Browser Profiles',
  },
  'feat.p1.desc': {
    vi: 'Tạo nhiều "chiếc máy ảo" chỉ trong một trình duyệt. Mỗi hồ sơ là một thực thể trực tuyến riêng biệt, hoàn hảo để quản lý nhiều tài khoản cùng lúc.',
    en: 'Create many "virtual machines" inside a single browser. Each profile is a separate online entity, ideal for managing multiple accounts simultaneously.',
  },
  'feat.p2.title': {
    vi: 'Thay Đổi Vân Tay Trình Duyệt',
    en: 'Change Browser Fingerprinting',
  },
  'feat.p2.desc': {
    vi: 'Ẩn mình khỏi sự theo dõi của website. Mỗi hồ sơ có một dấu vân tay kỹ thuật số độc nhất, khiến bạn trở nên vô hình.',
    en: 'Hide from website trackers. Each profile gets a unique digital fingerprint, making you effectively invisible.',
  },
  'feat.p3.title': {
    vi: 'Quản Lý Proxy Tích Hợp',
    en: 'Integrated Proxy Management',
  },
  'feat.p3.desc': {
    vi: 'Duyệt web từ bất kỳ đâu trên thế giới. Dễ dàng thiết lập proxy để thay đổi địa chỉ IP, truy cập nội dung khu vực và tăng cường bảo mật.',
    en: 'Browse from anywhere in the world. Easily configure proxies to change IP, access geo content and increase security.',
  },
  'feat.p4.title': {
    vi: 'Tự Động Hóa & Hỗ Trợ API',
    en: 'Automation & API Support',
  },
  'feat.p4.desc': {
    vi: 'Sức mạnh tự động hóa trong tay bạn. Tích hợp dễ dàng với các dự án của bạn thông qua API mạnh mẽ. Tự động hóa mọi thứ từ tạo hồ sơ đến chạy tác vụ.',
    en: 'Powerful automation at your fingertips. Integrate easily with your projects via a robust API. Automate everything from profile creation to task runs.',
  },
  'feat.p5.title': {
    vi: 'Lưu Trữ và Đồng Bộ Hóa Đám Mây',
    en: 'Cloud Storage & Sync',
  },
  'feat.p5.desc': {
    vi: 'Làm việc mọi lúc, mọi nơi. Lưu trữ đám mây giúp bạn truy cập các hồ sơ của mình trên bất kỳ máy tính nào, giữ cho công việc luôn liền mạch.',
    en: 'Work anytime, anywhere. Cloud storage lets you access your profiles from any machine and keeps work seamless.',
  },
  'feat.cta': {
    vi: 'Trải nghiệm ngay',
    en: 'Try it now',
  },
  'choose.title': {
    vi: 'Tại sao nên chọn Accsafe?',
    en: 'Why choose Accsafe?',
  },
  'choose.desc': {
    vi: 'Accsafe là giải pháp all-in-one giúp bạn làm chủ không gian số. Công nghệ chống nhận diện mạnh mẽ bảo vệ bạn khỏi bị theo dõi và quản lý nhiều tài khoản an toàn.',
    en: 'Accsafe is an all-in-one solution that helps you take control of your digital space. Anti-detection technology protects you from tracking and allows safe multi-account management.',
  },
  'multi.title': {
    vi: 'Tính năng đăng nhập nhiều lần',
    en: 'Multi-login features',
  },
  'multi.p1.title': {
    vi: 'Quản lý hồ sơ an toàn',
    en: 'Secure profile management',
  },
  'multi.p1.desc': {
    vi: 'Quản lý các cấu hình trình duyệt riêng biệt một cách an toàn cho các dự án.',
    en: 'Manage isolated browser configurations securely for projects.',
  },
  'multi.p2.title': {
    vi: 'Hợp tác nhóm',
    en: 'Team collaboration',
  },
  'multi.p2.desc': {
    vi: 'Chia sẻ hồ sơ và làm việc với các thành viên trong nhóm.',
    en: 'Share profiles and collaborate with team members.',
  },
  'multi.p3.title': {
    vi: 'Đồng bộ dữ liệu qua Đám mây',
    en: 'Cloud data sync',
  },
  'multi.p3.desc': {
    vi: 'Đồng bộ hồ sơ trên nhiều thiết bị hoặc phiên bản VPS.',
    en: 'Sync profiles across devices or VPS instances.',
  },
  'multi.p4.title': {
    vi: 'Đồng bộ hóa với proxy',
    en: 'Proxy integration',
  },
  'multi.p4.desc': {
    vi: 'Hoạt động linh hoạt với nhiều loại proxy khác nhau.',
    en: 'Operate flexibly with many proxy types.',
  },
  'multi.p5.title': {
    vi: 'Giao diện quen thuộc',
    en: 'Familiar UI',
  },
  'multi.p5.desc': {
    vi: 'Giao diện mở rộng cho Chrome & Firefox giúp trải nghiệm liền mạch.',
    en: 'Extensions for Chrome & Firefox provide a seamless user experience.',
  },
  'proxy.title': {
    vi: 'Kho proxy',
    en: 'Proxy pool',
  },
  'proxy.muted': {
    vi: 'Proxy trung tâm dữ liệu',
    en: 'Data-center proxies',
  },
  'proxy.countries': {
    vi: '40+ quốc gia',
    en: '40+ countries',
  },
  'proxy.ipv4': {
    vi: '10.000+ IPv4',
    en: '10,000+ IPv4',
  },
  'proxy.cta': {
    vi: 'Xem bảng giá',
    en: 'See pricing',
  },
  'howto.title': {
    vi: 'Cách bắt đầu sử dụng Accsafe',
    en: 'How to get started with Accsafe',
  },
  'howto.desc': {
    vi: 'Chỉ với 3 bước đơn giản, bạn đã sẵn sàng khám phá thế giới bảo mật và tự động hóa.',
    en: 'In 3 simple steps you are ready to explore security and automation.',
  },
  'howto.s1.title': {
    vi: 'Bước 1: Tạo & Thiết Lập Hồ Sơ',
    en: 'Step 1: Create & configure a profile',
  },
  'howto.s1.desc': {
    vi: 'Đăng ký và tạo hồ sơ mới. Tuỳ chỉnh cài đặt, proxy và fingerprint.',
    en: 'Register and create a profile. Configure settings, proxy and fingerprint.',
  },
  'howto.s2.title': {
    vi: 'Bước 2: Tuỳ chỉnh & Kết nối',
    en: 'Step 2: Customize & connect',
  },
  'howto.s2.desc': {
    vi: 'Thêm tiện ích mở rộng, cookie và lưu cấu hình. Chạy profile khi cần.',
    en: 'Add extensions, cookies and save configuration. Run the profile when needed.',
  },
  'howto.s3.title': {
    vi: 'Bước 3: Sử dụng & Quản lý',
    en: 'Step 3: Use & manage',
  },
  'howto.s3.desc': {
    vi: 'Chạy nhiều profile, đồng bộ và phân quyền nhóm theo nhu cầu.',
    en: 'Run multiple profiles, sync and manage team permissions as needed.',
  },
  'footer.products': {
    vi: 'Sản phẩm',
    en: 'Products',
  },
  'footer.company': {
    vi: 'Công ty',
    en: 'Company',
  },
  'footer.resources': {
    vi: 'Tài nguyên',
    en: 'Resources',
  },
  'footer.legal': {
    vi: 'Pháp lý',
    en: 'Legal',
  },
  'footer.features': {
    vi: 'Tính năng',
    en: 'Features',
  },
  'footer.pricing': {
    vi: 'Bảng giá',
    en: 'Pricing',
  },
  'footer.api': {
    vi: 'API',
    en: 'API',
  },
  'footer.about': {
    vi: 'Về chúng tôi',
    en: 'About Us',
  },
  'footer.blog': {
    vi: 'Blog',
    en: 'Blog',
  },
  'footer.careers': {
    vi: 'Tuyển dụng',
    en: 'Careers',
  },
  'footer.contact': {
    vi: 'Liên hệ',
    en: 'Contact',
  },
  'footer.docs': {
    vi: 'Tài liệu',
    en: 'Documentation',
  },
  'footer.support': {
    vi: 'Hỗ trợ',
    en: 'Support',
  },
  'footer.community': {
    vi: 'Cộng đồng',
    en: 'Community',
  },
  'footer.privacy': {
    vi: 'Chính sách bảo mật',
    en: 'Privacy Policy',
  },
  'footer.terms': {
    vi: 'Điều khoản sử dụng',
    en: 'Terms of Service',
  },
  'footer.cookie': {
    vi: 'Chính sách Cookie',
    en: 'Cookie Policy',
  },
  'footer.copy': {
    vi: '© 2025 Accsafe. Bảo lưu mọi quyền.',
    en: '© 2025 Accsafe. All rights reserved.',
  },
  'footer.follow': {
    vi: 'Theo dõi chúng tôi',
    en: 'Follow Us',
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('siteLang');
    return (saved === 'en' ? 'en' : 'vi') as Language;
  });

  useEffect(() => {
    localStorage.setItem('siteLang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language];
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};

