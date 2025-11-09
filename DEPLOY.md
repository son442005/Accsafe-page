# Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo Repository trên GitHub

1. Đăng nhập vào GitHub
2. Tạo repository mới (ví dụ: `accsafe-landing`)
3. **KHÔNG** tích vào "Initialize this repository with a README"

## Bước 2: Cấu hình Base Path

Nếu tên repository của bạn khác `accsafe-landing`, cần cập nhật `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/tên-repository-của-bạn/' : '/',
```

Ví dụ: Nếu repository là `my-landing`, thì:
```typescript
base: process.env.NODE_ENV === 'production' ? '/my-landing/' : '/',
```

## Bước 3: Khởi tạo Git và Push code

```bash
# Khởi tạo git (nếu chưa có)
git init

# Thêm remote repository
git remote add origin https://github.com/username/accsafe-landing.git

# Thêm tất cả files
git add .

# Commit
git commit -m "Initial commit"

# Push lên main branch
git branch -M main
git push -u origin main
```

## Bước 4: Deploy lên GitHub Pages

### Cách 1: Sử dụng npm script (Đơn giản nhất)

```bash
npm run deploy
```

Script này sẽ:
1. Build ứng dụng (`npm run build`)
2. Deploy folder `dist` lên branch `gh-pages`

### Cách 2: Deploy thủ công

```bash
# Build ứng dụng
npm run build

# Deploy lên gh-pages
npx gh-pages -d dist
```

## Bước 5: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Vào **Settings** → **Pages**
3. Trong phần **Source**, chọn:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

## Bước 6: Truy cập Website

Sau vài phút, website sẽ có sẵn tại:
```
https://username.github.io/accsafe-landing/
```

Thay `username` bằng tên GitHub của bạn và `accsafe-landing` bằng tên repository của bạn.

## Cập nhật Website

Mỗi khi bạn muốn cập nhật website:

```bash
# Thực hiện thay đổi code
# ...

# Commit và push code
git add .
git commit -m "Update website"
git push

# Deploy lại
npm run deploy
```

## Lưu ý

- Base path trong `vite.config.ts` phải khớp với tên repository
- Nếu bạn đổi tên repository, nhớ cập nhật base path
- Có thể mất vài phút để GitHub Pages cập nhật sau khi deploy

