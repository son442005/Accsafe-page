# Accsafe Landing Page

Trang web quảng bá hiện đại cho ứng dụng Accsafe, được xây dựng với React + Vite + TypeScript + Tailwind CSS.

## Tính năng

- ✨ **Thiết kế hiện đại**: Giao diện đẹp mắt với nhiều hiệu ứng animation
- 🌐 **Đa ngôn ngữ**: Hỗ trợ Tiếng Việt và English
- 📱 **Responsive**: Tối ưu cho mọi thiết bị
- ⚡ **Hiệu suất cao**: Sử dụng Vite để build nhanh chóng
- 🎨 **Tailwind CSS**: Styling hiện đại với utility classes
- 🎭 **Animations**: Các hiệu ứng fade-in, hover, và transitions mượt mà

## Công nghệ sử dụng

- **React 19**: UI framework
- **Vite**: Build tool và dev server
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **React Context**: Quản lý state cho i18n

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy dev server
npm run dev

# Build cho production
npm run build

# Preview build
npm run preview
```

## Cấu trúc dự án

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── WhyChoose.tsx
│   ├── MultiFeatures.tsx
│   ├── ProxyBlock.tsx
│   ├── HowTo.tsx
│   └── Footer.tsx
├── contexts/           # React contexts
│   └── I18nContext.tsx
├── assets/             # Images và assets
│   └── images/
└── App.tsx             # Main app component
```

## Tính năng chính

### 1. Header
- Logo Accsafe
- Navigation links
- Nút Download
- Language switcher (Vi/En)

### 2. Hero Section
- Tiêu đề chính với gradient background
- Danh sách tính năng
- Preview image

### 3. Features Section
- 5 tính năng chính với hình ảnh
- Layout xen kẽ (alternating layout)
- Hover effects

### 4. Why Choose Section
- Lý do chọn Accsafe
- Hình ảnh minh họa

### 5. Multi Features Section
- 5 tính năng đăng nhập nhiều lần
- Icon cards với hover effects

### 6. Proxy Block
- Thông tin về proxy pool
- Danh sách proxy với flags
- CTA button

### 7. How To Section
- 3 bước để bắt đầu
- Step-by-step guide

### 8. Footer
- Copyright
- Social links

## Customization

### Thay đổi màu sắc

Chỉnh sửa `tailwind.config.js`:

```js
colors: {
  navy: {
    DEFAULT: '#07263f',
    dark: '#09283c',
  },
  accent: '#0ea5a4',
  muted: '#61708a',
  bg: '#f1f6fb',
}
```

### Thêm ngôn ngữ mới

Chỉnh sửa `src/contexts/I18nContext.tsx` và thêm translations mới vào object `translations`.

## Deploy lên GitHub Pages

Xem hướng dẫn chi tiết trong file [DEPLOY.md](./DEPLOY.md)

### Quick Start

1. Tạo repository trên GitHub
2. Cập nhật `base` trong `vite.config.ts` theo tên repository của bạn
3. Khởi tạo git và push code:
   ```bash
   git init
   git remote add origin https://github.com/username/accsafe-landing.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
5. Cấu hình GitHub Pages:
   - Vào Settings → Pages
   - Chọn branch `gh-pages` và folder `/ (root)`
   - Save

Website sẽ có sẵn tại: `https://username.github.io/accsafe-landing/`

## License

© 2025 Accsafe. All rights reserved.
