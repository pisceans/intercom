REWARD ADDRESS: trac1u5f59uaq2pqjw9xraxdjy8tt4rgv66fhjgsh6wlcmlkce6vac8ysrwqfdq

<div align="center">

<img src="assets/img/logo.svg" width="120" />

# 🚀 Crypto Semi Trading Dashboard

Modern Web-Based Crypto Monitoring & Semi-Trading Dashboard  
Built for Mobile (Termux Compatible)

<br>

[![Status](https://img.shields.io/badge/status-active-success.svg)]
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]
[![API](https://img.shields.io/badge/API-CoinGecko-orange.svg)]
[![Mobile Ready](https://img.shields.io/badge/Mobile-Termux%20Ready-brightgreen.svg)]
[![Responsive](https://img.shields.io/badge/UI-Responsive-blue.svg)]
[![Built With](https://img.shields.io/badge/Built%20With-HTML%20%7C%20CSS%20%7C%20JS-green.svg)]

</div>

---

## 📌 Overview

Crypto Semi Trading Dashboard is a lightweight, responsive, and mobile-friendly crypto tracking dashboard designed to run directly from Termux or any local environment.

This project provides real-time market data, candlestick charts, and top market cap rankings using the free CoinGecko Public API — no backend and no API key required.

---

## 📸 Application Preview

<div align="center">

<img src="screenshots/dashboard-preview.jpg" width="85%" />

<br><br>

Running locally via Termux server (http://localhost:8000)

</div>

---

## ✨ Features

- 📊 Candlestick Chart (OHLC Trading Style)
- 🏆 Top 20 Market Cap Coins
- 📅 Timeframe Selector (1D / 7D / 30D)
- 🌗 Dark / Light Mode Toggle
- ⭐ Save Favorite Coin (Local Storage)
- 📱 Fully Responsive UI
- ⚡ Lightweight & Fast
- 🆓 No Backend Required
- 🔐 No API Key Needed

---

## 🏗 Project Structure

crypto-tracker/ │ ├── index.html ├── README.md ├── LICENSE │ ├── assets/ │   ├── css/ │   │   └── style.css │   ├── js/ │   │   └── app.js │   └── img/ │       └── logo.svg │ └── screenshots/ └── dashboard-preview.jpg



---

## 🛠 Installation (Termux)

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


🌐 API Reference
This project uses:
CoinGecko Public API
Endpoints used:
/coins/markets
/coins/{id}/ohlc
Documentation:
https://www.coingecko.com/en/api�

👨‍💻 Author
PISCEANS
