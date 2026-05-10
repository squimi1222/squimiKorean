# 한국어 학습 App · 部署說明

## 資料夾結構

```
korean-app/
├── index.html      ← 主程式（整個 App）
├── manifest.json   ← PWA 設定
├── sw.js           ← Service Worker（離線支援）
├── icon-192.svg    ← App 圖示（小）
└── icon-512.svg    ← App 圖示（大）
```

---

## 路徑 A · 上線 Netlify（推薦，今天就能用）

### 步驟 1 · 註冊 Netlify
前往 https://app.netlify.com → Sign up（用 GitHub 或 Email 免費註冊）

### 步驟 2 · 部署
1. 登入後，在首頁找到 **「Deploy manually」** 區塊
2. 把整個 `korean-app` 資料夾**直接拖拉**進去
3. 等約 30 秒，Netlify 會給你一個網址，例如：
   `https://elegant-goldstine-abc123.netlify.app`

### 步驟 3 · 自訂網址（可選）
- 在 Netlify 後台 → Site settings → Change site name
- 例如改成 `korean-vocab.netlify.app`

### 步驟 4 · iOS 加入主畫面
1. 在 iPhone Safari 打開你的網址
2. 點底部的 **分享** 按鈕（方框加箭頭）
3. 選 **「加入主畫面」**
4. 點右上角 **加入**
5. App 圖示會出現在主畫面，像原生 App 一樣！

---

## 路徑 B · 上架 App Store（進階，需要 Mac）

需要條件：
- Mac 電腦（M1/M2/M3 皆可）
- Apple Developer 帳號（每年 USD $99）
- Xcode（免費）
- Node.js

### 安裝 Capacitor 步驟

```bash
# 在終端機執行
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/ios

# 初始化
npx cap init "韓文學習" "com.yourname.koreanvocab" --web-dir "."

# 加入 iOS 平台
npx cap add ios

# 同步
npx cap sync ios

# 用 Xcode 打開
npx cap open ios
```

接著在 Xcode 設定 Bundle ID、簽名，然後 Archive → 上傳到 App Store Connect。

---

## 資料備份

- 資料存在瀏覽器的 `localStorage`，清除瀏覽器資料會消失
- 建議定期點 App 右上角的 **匯出** 按鈕，下載 JSON 備份
- 換手機或換瀏覽器時，用 **匯入** 按鈕載入備份

---

## 後續功能計畫

- [ ] 圖片欄位（URL 或上傳）
- [ ] 間隔複習（Spaced Repetition）
- [ ] 語法教學頁面
- [ ] 隨機抽卡複習模式
- [ ] 連結 Telegram 韓文教師頻道
