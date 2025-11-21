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
  'nav.intro': {
    vi: 'Giới thiệu',
    en: 'About',
  },
  'nav.features': {
    vi: 'Tính năng',
    en: 'Features',
  },
  'nav.guide': {
    vi: 'Hướng dẫn',
    en: 'Guide',
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
    vi: 'Bảo lưu mọi quyền.',
    en: 'All rights reserved.',
  },
  'footer.follow': {
    vi: 'Theo dõi chúng tôi',
    en: 'Follow Us',
  },
  'footer.navigation': {
    vi: 'Dịch vụ',
    en: 'Services',
  },
  // Policy pages
  'policy.back': {
    vi: '← Quay lại trang chủ',
    en: '← Back to Home',
  },
  'policy.nav.privacy': {
    vi: ' Chính sách Bảo mật',
    en: ' Privacy Policy',
  },
  'policy.nav.cookie': {
    vi: ' Chính sách Cookie',
    en: ' Cookie Policy',
  },
  'policy.nav.terms': {
    vi: ' Điều khoản Dịch vụ',
    en: ' Terms of Service',
  },
  // Cookie Policy
  'cookie.title': {
    vi: 'Chính sách Cookie',
    en: 'Cookie Policy',
  },
  'cookie.what.title': {
    vi: 'Cookie là gì?',
    en: 'What are Cookies?',
  },
  'cookie.what.desc': {
    vi: 'Cookie là các tệp tin nhỏ được lưu trữ trên thiết bị của bạn (máy tính, điện thoại, tablet) khi bạn truy cập website. Chúng giúp website ghi nhớ thông tin về chuyến thăm của bạn, giúp cải thiện trải nghiệm người dùng.',
    en: 'Cookies are small files stored on your device (computer, phone, tablet) when you visit a website. They help the website remember information about your visit and improve user experience.',
  },
  'cookie.types.title': {
    vi: 'Các loại Cookie chúng tôi sử dụng',
    en: 'Types of Cookies We Use',
  },
  'cookie.types.th1': {
    vi: 'Loại Cookie',
    en: 'Cookie Type',
  },
  'cookie.types.th2': {
    vi: 'Mục đích',
    en: 'Purpose',
  },
  'cookie.types.th3': {
    vi: 'Thời gian lưu',
    en: 'Duration',
  },
  'cookie.types.essential': {
    vi: 'Cookie thiết yếu',
    en: 'Essential Cookies',
  },
  'cookie.types.essential.desc': {
    vi: 'Đảm bảo website hoạt động bình thường, duy trì phiên đăng nhập',
    en: 'Ensure website functions properly, maintain login sessions',
  },
  'cookie.types.essential.duration': {
    vi: 'Phiên làm việc',
    en: 'Session',
  },
  'cookie.types.security': {
    vi: 'Cookie bảo mật',
    en: 'Security Cookies',
  },
  'cookie.types.security.desc': {
    vi: 'Xác thực người dùng, phòng chống gian lận và bảo vệ dữ liệu',
    en: 'Authenticate users, prevent fraud and protect data',
  },
  'cookie.types.security.duration': {
    vi: '24 giờ',
    en: '24 hours',
  },
  'cookie.types.performance': {
    vi: 'Cookie hiệu năng',
    en: 'Performance Cookies',
  },
  'cookie.types.performance.desc': {
    vi: 'Phân tích cách sử dụng website, cải thiện hiệu suất',
    en: 'Analyze website usage, improve performance',
  },
  'cookie.types.performance.duration': {
    vi: '30 ngày',
    en: '30 days',
  },
  'cookie.types.functional': {
    vi: 'Cookie chức năng',
    en: 'Functional Cookies',
  },
  'cookie.types.functional.desc': {
    vi: 'Ghi nhớ tùy chọn người dùng (ngôn ngữ, khu vực)',
    en: 'Remember user preferences (language, region)',
  },
  'cookie.types.functional.duration': {
    vi: '1 năm',
    en: '1 year',
  },
  'cookie.manage.title': {
    vi: 'Quản lý Cookie',
    en: 'Manage Cookies',
  },
  'cookie.manage.desc': {
    vi: 'Bạn có toàn quyền kiểm soát và xóa cookie thông qua cài đặt trình duyệt:',
    en: 'You have full control to manage and delete cookies through browser settings:',
  },
  'cookie.manage.chrome': {
    vi: '<strong>Google Chrome:</strong> Cài đặt → Quyền riêng tư và bảo mật → Cookie và dữ liệu site khác',
    en: '<strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data',
  },
  'cookie.manage.firefox': {
    vi: '<strong>Firefox:</strong> Tùy chọn → Quyền riêng tư & Bảo mật → Cookie và Dữ liệu Site',
    en: '<strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data',
  },
  'cookie.manage.safari': {
    vi: '<strong>Safari:</strong> Tùy chọn → Quyền riêng tư → Quản lý Dữ liệu Website',
    en: '<strong>Safari:</strong> Preferences → Privacy → Manage Website Data',
  },
  'cookie.manage.edge': {
    vi: '<strong>Edge:</strong> Cài đặt → Cookie và quyền site → Quản lý và xóa cookie',
    en: '<strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies',
  },
  'cookie.thirdparty.title': {
    vi: 'Cookie của bên thứ ba',
    en: 'Third-party Cookies',
  },
  'cookie.thirdparty.desc': {
    vi: 'Chúng tôi không sử dụng cookie của bên thứ ba cho mục đích theo dõi hoặc quảng cáo. Tất cả cookie đều được quản lý trực tiếp bởi chúng tôi.',
    en: 'We do not use third-party cookies for tracking or advertising purposes. All cookies are managed directly by us.',
  },
  'cookie.disable.title': {
    vi: 'Tắt Cookie',
    en: 'Disable Cookies',
  },
  'cookie.disable.desc': {
    vi: 'Lưu ý: Nếu bạn tắt cookie, một số tính năng của website có thể không hoạt động bình thường. Các chức năng cơ bản vẫn sẽ khả dụng nhưng trải nghiệm có thể bị ảnh hưởng.',
    en: 'Note: If you disable cookies, some website features may not work properly. Basic functions will still be available but the experience may be affected.',
  },
  'cookie.contact.title': {
    vi: 'Liên hệ',
    en: 'Contact',
  },
  'cookie.contact.desc': {
    vi: 'Nếu bạn có bất kỳ câu hỏi nào về chính sách cookie, vui lòng liên hệ:',
    en: 'If you have any questions about our cookie policy, please contact:',
  },
  // Privacy Policy
  'privacy.title': {
    vi: 'Chính sách bảo mật',
    en: 'Privacy Policy',
  },
  'privacy.general.title': {
    vi: 'Điều khoản chung',
    en: 'General Terms',
  },
  'privacy.general.desc': {
    vi: 'Chúng tôi cung cấp dịch vụ trình duyệt ảo với mục tiêu mang lại sự an toàn, riêng tư và khả năng ẩn danh tối đa cho người dùng. Khi sử dụng dịch vụ, bạn đồng ý rằng mọi hoạt động liên quan đến việc duyệt web, tạo phiên trình duyệt ảo và sử dụng các tính năng của nền tảng đều tuân theo chính sách này. Chúng tôi có thể điều chỉnh hoặc cải tiến hệ thống để đảm bảo chất lượng dịch vụ tốt hơn, đồng thời cam kết mọi thay đổi sẽ không ảnh hưởng đến quyền riêng tư cốt lõi của bạn.',
    en: 'We provide virtual browser services with the goal of bringing maximum security, privacy and anonymity to users. By using the service, you agree that all activities related to web browsing, creating virtual browser sessions and using platform features are subject to this policy. We may adjust or improve the system to ensure better service quality, while committing that any changes will not affect your core privacy rights.',
  },
  'privacy.collection.title': {
    vi: 'Thông tin thu thập',
    en: 'Information Collection',
  },
  'privacy.collection.desc': {
    vi: 'Chúng tôi chỉ thu thập những dữ liệu kỹ thuật tối thiểu nhằm phục vụ quá trình vận hành, bao gồm trạng thái phiên trình duyệt ảo, thông số cấu hình bạn tự chọn, lỗi hệ thống và dữ liệu cần thiết để đảm bảo tính ổn định. Chúng tôi không thu thập dữ liệu nhận dạng cá nhân, không theo dõi lịch sử truy cập, không lưu cookie, không ghi lại thông tin đăng nhập hoặc nội dung bạn xem. Tất cả dữ liệu được giữ ở mức tối thiểu cần thiết để dịch vụ hoạt động trơn tru.',
    en: 'We only collect minimal technical data necessary for operation, including virtual browser session status, your chosen configuration parameters, system errors and data needed to ensure stability. We do not collect personally identifiable information, do not track browsing history, do not store cookies, do not record login information or content you view. All data is kept at the minimum level necessary for the service to operate smoothly.',
  },
  'privacy.security.title': {
    vi: 'Bảo mật thông tin',
    en: 'Information Security',
  },
  'privacy.security.desc': {
    vi: 'Tất cả dữ liệu mà hệ thống xử lý được tách biệt và bảo vệ nhiều lớp, đảm bảo không thể truy cập trái phép từ bên ngoài hoặc bên trong. Nhân viên kỹ thuật không thể xem, mở, hoặc truy cập nội dung hoạt động của bất kỳ phiên trình duyệt nào. Toàn bộ mô hình được thiết kế để bảo đảm rằng quyền riêng tư của bạn luôn được duy trì trong mọi điều kiện.',
    en: 'All data processed by the system is isolated and protected with multiple layers, ensuring no unauthorized access from outside or inside. Technical staff cannot view, open, or access the content of any browser session. The entire model is designed to ensure that your privacy is always maintained under all conditions.',
  },
  'privacy.encryption.title': {
    vi: 'Mã hóa dữ liệu',
    en: 'Data Encryption',
  },
  'privacy.encryption.desc': {
    vi: 'Kết nối giữa bạn và hệ thống luôn được mã hóa hoàn toàn nhằm tránh nguy cơ xem trộm hoặc can thiệp. Mật khẩu và thông tin nhạy cảm được mã hóa một chiều theo tiêu chuẩn mạnh, không thể giải ngược, kể cả bởi quản trị viên. Mọi dữ liệu tạm phát sinh trong phiên trình duyệt ảo đều được xử lý trong môi trường cô lập và tự động xóa ngay khi phiên kết thúc, đảm bảo không để lại bất kỳ dấu vết nào.',
    en: 'Connections between you and the system are always fully encrypted to avoid the risk of eavesdropping or interference. Passwords and sensitive information are one-way encrypted to strong standards, irreversible even by administrators. All temporary data generated in virtual browser sessions is processed in an isolated environment and automatically deleted when the session ends, ensuring no traces are left.',
  },
  'privacy.purpose.title': {
    vi: 'Mục đích sử dụng',
    en: 'Purpose of Use',
  },
  'privacy.purpose.1': {
    vi: 'Tạo và duy trì phiên trình duyệt ảo',
    en: 'Create and maintain virtual browser sessions',
  },
  'privacy.purpose.2': {
    vi: 'Kiểm soát tải máy chủ',
    en: 'Control server load',
  },
  'privacy.purpose.3': {
    vi: 'Phòng chống abuse (spam, DDOS, bot độc hại)',
    en: 'Prevent abuse (spam, DDOS, malicious bots)',
  },
  'privacy.purpose.4': {
    vi: 'Theo dõi lỗi',
    en: 'Error tracking',
  },
  'privacy.purpose.5': {
    vi: 'Tối ưu hóa tốc độ khởi chạy trình duyệt',
    en: 'Optimize browser launch speed',
  },
  'privacy.purpose.6': {
    vi: 'Ổn định hệ thống',
    en: 'System stability',
  },
  'privacy.rights.title': {
    vi: 'Quyền của người dùng',
    en: 'User Rights',
  },
  'privacy.rights.desc': {
    vi: 'Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa dữ liệu liên quan đến tài khoản (nếu bạn có tài khoản). Bạn có thể yêu cầu ngừng nhận thông báo, vô hiệu hóa tài khoản hoặc yêu cầu giải thích về bất kỳ phần nào của chính sách bảo mật. Với dữ liệu kỹ thuật không nhận diện cá nhân, chúng tôi chỉ lưu ở mức cần thiết để đảm bảo dịch vụ vận hành.',
    en: 'You have the right to request to view, edit or delete data related to your account (if you have an account). You can request to stop receiving notifications, disable your account or request clarification on any part of the privacy policy. For non-personally identifiable technical data, we only store what is necessary to ensure service operation.',
  },
  'privacy.protection.title': {
    vi: 'Bảo mật',
    en: 'Security',
  },
  'privacy.protection.desc': {
    vi: 'Hệ thống được xây dựng theo mô hình bảo mật nhiều tầng, sử dụng container tách biệt để chạy từng phiên trình duyệt ảo, đảm bảo việc bạn làm trong một phiên hoàn toàn không liên quan và không ảnh hưởng đến phiên khác. Hạ tầng được giám sát liên tục để phát hiện sớm bất kỳ hành vi bất thường nào, đồng thời các chính sách hạn chế truy cập nội bộ được áp dụng nghiêm ngặt để ngăn mọi nguy cơ rò rỉ thông tin. Mỗi phiên được sinh ra sạch, chạy sạch và kết thúc sạch — đúng tinh thần "tách biệt tuyệt đối".',
    en: 'The system is built on a multi-layered security model, using separate containers to run each virtual browser session, ensuring that what you do in one session is completely unrelated and does not affect other sessions. Infrastructure is continuously monitored to detect any abnormal behavior early, while strict internal access restriction policies are applied to prevent any risk of information leakage. Each session is born clean, runs clean and ends clean — true to the spirit of "absolute isolation".',
  },
  'privacy.summary.title': {
    vi: 'Tổng kết',
    en: 'Summary',
  },
  'privacy.summary.desc': {
    vi: 'Chúng tôi hướng đến việc tạo ra một công cụ ẩn danh thực sự, nơi quyền riêng tư không chỉ là lời hứa mà được thực hiện từ nền tảng kỹ thuật đến cách vận hành. Mọi dữ liệu đều được xử lý ở mức tối thiểu, mọi kết nối đều được mã hóa, mọi phiên đều tách biệt hoàn toàn và không để lại dấu vết. Mục tiêu cuối cùng là giúp bạn an tâm sử dụng mà không phải bận tâm đến chuyện bị theo dõi hay thu thập thông tin trái ý muốn. Bạn chỉ cần tập trung vào công việc, còn phần an toàn — để chúng tôi lo.',
    en: 'We aim to create a truly anonymous tool, where privacy is not just a promise but is implemented from the technical foundation to the way it operates. All data is processed at a minimum level, all connections are encrypted, all sessions are completely isolated and leave no traces. The ultimate goal is to help you use it with peace of mind without worrying about being tracked or having information collected against your will. You just need to focus on your work, and leave the security to us.',
  },
  'privacy.contact.title': {
    vi: 'Liên hệ',
    en: 'Contact',
  },
  'privacy.contact.desc': {
    vi: 'Nếu bạn có bất kỳ thắc mắc nào liên quan đến chính sách bảo mật hoặc cần hỗ trợ về dịch vụ, vui lòng liên hệ với chúng tôi qua:',
    en: 'If you have any questions related to the privacy policy or need support about the service, please contact us via:',
  },
  // Terms of Service
  'terms.title': {
    vi: ' Điều khoản Dịch vụ',
    en: ' Terms of Service',
  },
  'terms.acceptance.title': {
    vi: 'Chấp nhận điều khoản',
    en: 'Acceptance of Terms',
  },
  'terms.acceptance.desc': {
    vi: 'Bằng cách truy cập và sử dụng dịch vụ của chúng tôi, bạn đồng ý với tất cả các điều khoản được nêu trong tài liệu này. Nếu bạn không đồng ý, vui lòng không sử dụng dịch vụ.',
    en: 'By accessing and using our services, you agree to all terms stated in this document. If you do not agree, please do not use the service.',
  },
  'terms.description.title': {
    vi: 'Mô tả dịch vụ',
    en: 'Service Description',
  },
  'terms.description.desc': {
    vi: 'Chúng tôi cung cấp dịch vụ trình duyệt ảo với mục tiêu mang lại sự an toàn, riêng tư và khả năng ẩn danh tối đa cho người dùng. Dịch vụ cho phép bạn duyệt web một cách an toàn và bảo mật.',
    en: 'We provide virtual browser services with the goal of bringing maximum security, privacy and anonymity to users. The service allows you to browse the web safely and securely.',
  },
  'terms.rights.title': {
    vi: 'Quyền và trách nhiệm người dùng',
    en: 'User Rights and Responsibilities',
  },
  'terms.allowed.title': {
    vi: 'Bạn được phép:',
    en: 'You are allowed to:',
  },
  'terms.allowed.1': {
    vi: 'Sử dụng dịch vụ cho mục đích hợp pháp và chính đáng',
    en: 'Use the service for legal and legitimate purposes',
  },
  'terms.allowed.2': {
    vi: 'Truy cập dịch vụ từ nhiều thiết bị khác nhau',
    en: 'Access the service from multiple devices',
  },
  'terms.allowed.3': {
    vi: 'Đề xuất cải tiến và tính năng mới cho dịch vụ',
    en: 'Suggest improvements and new features for the service',
  },
  'terms.allowed.4': {
    vi: 'Báo cáo lỗi kỹ thuật và vấn đề bảo mật',
    en: 'Report technical bugs and security issues',
  },
  'terms.allowed.5': {
    vi: 'Sử dụng dịch vụ theo đúng hướng dẫn được cung cấp',
    en: 'Use the service according to the provided guidelines',
  },
  'terms.prohibited.title': {
    vi: 'Bạn không được phép:',
    en: 'You are not allowed to:',
  },
  'terms.prohibited.1': {
    vi: 'Thực hiện hành vi phá hoại hoặc tấn công hệ thống',
    en: 'Perform destructive actions or attack the system',
  },
  'terms.prohibited.2': {
    vi: 'Spam, tấn công DDoS hoặc gây quá tải dịch vụ',
    en: 'Spam, DDoS attack or overload the service',
  },
  'terms.prohibited.3': {
    vi: 'Khai thác lỗ hổng bảo mật cho mục đích xấu',
    en: 'Exploit security vulnerabilities for malicious purposes',
  },
  'terms.prohibited.4': {
    vi: 'Sử dụng dịch vụ cho hoạt động bất hợp pháp',
    en: 'Use the service for illegal activities',
  },
  'terms.prohibited.5': {
    vi: 'Phân phối lại dịch vụ mà không được cho phép',
    en: 'Redistribute the service without permission',
  },
  'terms.prohibited.6': {
    vi: 'Vi phạm bản quyền và sở hữu trí tuệ',
    en: 'Violate copyright and intellectual property',
  },
  'terms.liability.title': {
    vi: 'Giới hạn trách nhiệm',
    en: 'Limitation of Liability',
  },
  'terms.liability.desc': {
    vi: 'Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp nào phát sinh từ việc sử dụng hoặc không thể sử dụng dịch vụ. Dịch vụ được cung cấp "nguyên trạng" và "theo khả năng có sẵn".',
    en: 'We are not responsible for any direct or indirect damages arising from the use or inability to use the service. The service is provided "as is" and "as available".',
  },
  'terms.ip.title': {
    vi: 'Quyền sở hữu trí tuệ',
    en: 'Intellectual Property',
  },
  'terms.ip.desc': {
    vi: 'Tất cả nội dung, công nghệ, phần mềm và tài liệu trên nền tảng là tài sản của chúng tôi và được bảo vệ bởi luật sở hữu trí tuệ. Bạn không được sao chép, phân phối hoặc sửa đổi mà không có sự cho phép bằng văn bản.',
    en: 'All content, technology, software and materials on the platform are our property and protected by intellectual property laws. You may not copy, distribute or modify without written permission.',
  },
  'terms.termination.title': {
    vi: 'Chấm dứt dịch vụ',
    en: 'Service Termination',
  },
  'terms.termination.desc': {
    vi: 'Chúng tôi có quyền chấm dứt hoặc tạm ngừng dịch vụ của bạn nếu phát hiện vi phạm điều khoản sử dụng. Quyết định này là cuối cùng và không thể bị khiếu nại.',
    en: 'We reserve the right to terminate or suspend your service if we detect violations of the terms of use. This decision is final and cannot be appealed.',
  },
  'terms.changes.title': {
    vi: 'Thay đổi điều khoản',
    en: 'Changes to Terms',
  },
  'terms.changes.desc': {
    vi: 'Chúng tôi có quyền cập nhật và thay đổi các điều khoản này. Khi có thay đổi quan trọng, chúng tôi sẽ thông báo trước 30 ngày qua email hoặc thông báo trên website.',
    en: 'We reserve the right to update and change these terms. When there are significant changes, we will notify you 30 days in advance via email or website notification.',
  },
  'terms.law.title': {
    vi: 'Luật áp dụng',
    en: 'Applicable Law',
  },
  'terms.law.desc': {
    vi: 'Điều khoản này được điều chỉnh bởi luật pháp Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại tòa án có thẩm quyền tại Việt Nam.',
    en: 'These terms are governed by the laws of Vietnam. Any disputes arising will be resolved in the competent courts of Vietnam.',
  },
  'terms.contact.title': {
    vi: 'Liên hệ',
    en: 'Contact',
  },
  'terms.contact.desc': {
    vi: 'Nếu bạn có bất kỳ câu hỏi nào về điều khoản dịch vụ, vui lòng liên hệ:',
    en: 'If you have any questions about the terms of service, please contact:',
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

