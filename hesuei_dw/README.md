# 禾穗 (Hesuei) - HTML/CSS 版本

## 📋 專案介紹

這是「禾穗」刺繡作品集網站的純 HTML + CSS 版本，適合在 Adobe Dreamweaver 或其他代碼編輯器中使用。

## 📁 檔案結構

```
hesuei_dw/
├── index.html           # 首頁
├── portfolio.html       # 作品集頁面
├── about.html          # 關於頁面
├── contact.html        # 聯絡頁面
├── css/
│   └── style.css       # 主要樣式表
├── js/
│   └── portfolio.js    # 作品集篩選功能
├── images/             # 圖片資源
│   ├── floral_1.jpg
│   ├── floral_2.jpg
│   ├── floral_3.jpg
│   ├── floral_4.jpg
│   └── floral_5.jpg
└── README.md           # 本檔案
```

## 🚀 快速開始

### 1. 在 Dreamweaver 中開啟專案
- 開啟 Adobe Dreamweaver
- 選擇 **Site** → **Manage Sites**
- 點擊 **New** 建立新網站
- 設定本地資料夾為 `hesuei_dw` 目錄
- 點擊 **Save**

### 2. 預覽網站
- 在 Dreamweaver 中按 **F12** 或使用 **Live View** 預覽
- 或直接在瀏覽器中開啟 `index.html`

### 3. 編輯內容
- 在 Dreamweaver 中編輯 HTML 檔案
- 修改 CSS 樣式在 `css/style.css`
- 新增或修改 JavaScript 功能在 `js/portfolio.js`

## 🎨 色彩系統

| 色彩名稱 | 用途 | 色值 |
|---------|------|------|
| 主色 | 按鈕、連結、重點 | #A64B4B (絳紅) |
| 背景 | 頁面背景 | #F5F5F0 (米白) |
| 文字 | 主要文字 | #333333 (墨灰) |
| 淺灰 | 次要背景 | #F0F2F5 |

## 🔤 字體系統

- **標題**: Noto Serif TC / Cormorant Garamond
- **內文**: Noto Sans TC / Inter

字體已通過 Google Fonts CDN 引入，無需額外安裝。

## 📱 響應式設計

網站已針對以下裝置進行最佳化：
- 桌面電腦 (1280px 以上)
- 平板電腦 (768px - 1279px)
- 手機 (480px - 767px)
- 小型手機 (480px 以下)

## 🔧 功能說明

### 首頁 (index.html)
- Hero Section：全螢幕背景圖片展示
- Philosophy Section：品牌理念介紹
- Featured Works：精選作品展示

### 作品集 (portfolio.html)
- 分類篩選：按「全部」、「花卉刺繡」、「植物圖鑑」、「極簡風格」篩選
- 作品卡片：展示作品圖片、名稱、技法、尺寸和年份
- 互動效果：滑鼠懸停時卡片上升、圖片放大

### 關於 (about.html)
- 創作者介紹：藍亞薇的背景與創作理念
- 工藝精神：三大核心價值（專注、傳承、創新）

### 聯絡 (contact.html)
- 聯絡資訊：Email、電話、工作室地址
- 訂製流程：5 個步驟說明
- 聯絡表單：姓名、Email、主旨、訊息內容

## 🎯 自訂指南

### 修改品牌色彩
在 `css/style.css` 的最上方找到色彩變數：

```css
:root {
    --primary-color: #A64B4B;      /* 修改主色 */
    --background-color: #F5F5F0;   /* 修改背景色 */
    --text-color: #333333;         /* 修改文字色 */
}
```

### 新增作品
在 `portfolio.html` 中找到 `<!-- Artwork Grid -->` 區塊，複製一個作品卡片並修改：

```html
<div class="artwork-card" data-category="floral">
    <div class="artwork-image">
        <img src="images/your-image.jpg" alt="作品名稱">
    </div>
    <h3 class="artwork-title">作品名稱</h3>
    <p class="artwork-info">技法</p>
    <p class="artwork-detail">尺寸 | 年份</p>
</div>
```

### 修改聯絡資訊
在 `contact.html` 中找到 `<div class="contact-info">` 區塊，更新：
- Email 地址
- 電話號碼
- 工作室地址

### 更新社群媒體連結
在 Footer 中找到社群媒體連結：

```html
<div class="footer-social">
    <a href="https://instagram.com/your-profile" title="Instagram">Instagram</a>
    <a href="https://facebook.com/your-profile" title="Facebook">Facebook</a>
    <a href="mailto:your-email@example.com" title="Email">Email</a>
</div>
```

## 📧 表單設定

聯絡表單目前使用簡單的 JavaScript 提交。若要實現真正的郵件功能，需要：

1. **使用第三方服務**（如 Formspree、EmailJS）
2. **設定後端伺服器**（PHP、Node.js 等）

### 使用 Formspree（推薦）
1. 前往 [formspree.io](https://formspree.io)
2. 註冊並建立新表單
3. 修改 `contact.html` 中的表單 action：

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🌐 部署到網路

### 方案 1：使用 GitHub Pages
1. 將檔案上傳至 GitHub 倉庫
2. 在 Settings 中啟用 GitHub Pages
3. 選擇 `main` 分支作為來源

### 方案 2：使用傳統虛擬主機
1. 使用 FTP 將檔案上傳至伺服器
2. 確保 `index.html` 在根目錄
3. 設定 `.htaccess`（如需要）

### 方案 3：使用 Google Sites
1. 在 Google Sites 中建立新網站
2. 手動複製 HTML 內容到各頁面
3. 上傳圖片至 Google Sites

## 🐛 常見問題

### Q: 圖片無法顯示
**A:** 檢查圖片路徑是否正確。確保 `images/` 資料夾與 HTML 檔案在同一目錄。

### Q: 樣式沒有套用
**A:** 確保 `css/style.css` 的路徑正確。在 HTML 中應為：
```html
<link rel="stylesheet" href="css/style.css">
```

### Q: 篩選功能不工作
**A:** 確保 `js/portfolio.js` 已正確引入在 `portfolio.html` 底部：
```html
<script src="js/portfolio.js"></script>
```

### Q: 字體未正確載入
**A:** 確保網路連接正常，Google Fonts CDN 可以訪問。

## 📞 技術支援

如有任何問題，請聯絡：
- **Email**: contact@hesuei.com
- **Phone**: +886 2 1234 5678

## 📄 授權

此網站設計和內容由禾穗 (Hesuei) 所有。未經許可，不得商業使用。

---

**最後更新**: 2025 年 1 月 2 日
**版本**: 1.0
