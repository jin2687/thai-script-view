# 🇹🇭 Thai Script Dual-View

タイ文字学習Webアプリケーション | Thai Script Learning Application

## 📝 概要 | Overview

タイ文字の**Loop（有頭）フォント**と**No-Loop（無頭）フォント**を切り替えて比較できる学習アプリです。子音・母音・数字・声調記号を視覚的に学習できます。

A Thai script learning application that allows you to switch between **Loop (有頭)** and **No-Loop (無頭)** fonts for visual comparison. Learn consonants, vowels, numbers, and tone marks interactively.

## ✨ 特徴 | Features

- 🔄 **フォント切り替え**: Loop（Sarabun）/ No-Loop（Kanit）フォントの即時切り替え
- 🎯 **カテゴリフィルタ**: 子音（44文字）・母音・数字・声調記号で分類表示
- 🎨 **色分けレンダリング**: 高・中・低子音を色分けして視覚的に区別
- 📱 **レスポンシブデザイン**: スマホ・タブレット・PC対応のグリッドレイアウト
- ⚡ **モダン技術スタック**: React 18 + TypeScript + Vite + Tailwind CSS

## 🚀 クイックスタート | Quick Start

### インストール | Installation

```bash
npm install
```

### 開発サーバー起動 | Development Server

```bash
npm run dev
```

### テスト実行 | Run Tests

```bash
npm test
```

### プロダクションビルド | Production Build

```bash
npm run build
```

### プレビュー | Preview

```bash
npm run preview
```

## 🛠️ 技術スタック | Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Testing**: Vitest + React Testing Library
- **Deployment**: GitHub Pages
- **Fonts**: Google Fonts (Sarabun, Kanit)

## 📂 プロジェクト構造 | Project Structure

```
thai-script-view/
├── src/
│   ├── components/
│   │   ├── CharCard.tsx           # 文字カードコンポーネント
│   │   └── CharCard.test.tsx      # テスト
│   ├── data/
│   │   └── thaiData.ts            # タイ文字データ
│   ├── test/
│   │   └── setup.ts               # テストセットアップ
│   ├── App.tsx                    # メインアプリケーション
│   ├── App.test.tsx               # アプリテスト
│   ├── main.tsx                   # エントリーポイント
│   └── index.css                  # グローバルスタイル
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actionsデプロイ設定
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 🎓 学習ポイント | Learning Points

### 子音クラス | Consonant Classes

- 🔴 **高子音 (High)**: 11文字 - 赤枠で表示
- 🔵 **中子音 (Mid)**: 9文字 - 青枠で表示
- 🟢 **低子音 (Low)**: 24文字 - 緑枠で表示

### フォントの違い | Font Differences

- **Loop（有頭）**: 公文書などで使用される伝統的なスタイル（Sarabun）
- **No-Loop（無頭）**: 現代的でモダンなスタイル（Kanit）

## 📦 デプロイ | Deployment

GitHub Actionsを使用して自動デプロイされます。

```bash
git push origin main
```

プッシュ後、GitHub Pagesに自動的にデプロイされます。

## 📄 ライセンス | License

MIT License

## 👤 作者 | Author

Created with ❤️ for Thai language learners
