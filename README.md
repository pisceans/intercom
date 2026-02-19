REWARD ADDRESS: trac1u5f59uaq2pqjw9xraxdjy8tt4rgv66fhjgsh6wlcmlkce6vac8ysrwqfdq




# 🚀 Crypto Semi Trading Dashboard

Web-based Crypto Tracking & Semi-Trading Dashboard  
Built using HTML, CSS, JavaScript & Chart.js  
Runs directly from Termux (Android friendly)

---

## 📊 Features

- 📈 Candlestick Chart (Trading Style)
- 🏆 Top 20 Market Cap
- 🔄 Timeframe Selector (1D / 7D / 30D)
- 🌗 Dark / Light Mode Toggle
- ⭐ Save Favorite Coin (localStorage)
- 📱 Responsive Design
- ⚡ Lightweight & Fast
- 🆓 Uses Free CoinGecko API

---

## 🛠 Built With

- HTML5
- CSS3
- JavaScript (Vanilla)
- Chart.js
- CoinGecko Public API

---

## 📦 Installation (Termux)

### 1️⃣ Install Required Packages

```bash
pkg update && pkg upgrade -y
pkg install git nodejs python nano -y

2️⃣ Clone Repository

git clone https://github.com/pisceans/crypto-tracker.git
cd crypto-tracker

3️⃣ Run Local Server

python -m http.server 8000

Open in browser:

http://localhost:8000
http://127.0.0.1:8000

🌍 API Used

This project uses the free public API from:
https://www.coingecko.com/�
Endpoints used:
/coins/markets
/coins/{id}/ohlc
No API key required.

📌 Future Improvements
📊 RSI Indicator
📉 EMA Indicator
📈 Volume Indicator
🔔 Price Alerts
💰 Portfolio Tracker
🌍 Deploy to Vercel / Netlify
📱 Convert to Android APK

