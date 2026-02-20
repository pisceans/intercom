🚀 Simple Crypto Tracker


🧠 Overview Skill

Simple Crypto Tracker is an enterprise-ready lightweight cryptocurrency tracking web application built using pure frontend technologies.
It is designed for:
Lightweight deployment
No backend dependency
Mobile-friendly usage
Rapid setup via Termux
Educational and prototyping purposes
The application runs entirely in the browser and uses public APIs as its data source.


🏗 Architecture Skill

Application Type
Static Frontend Application (Client-Side Only)
Data Sources
Binance Public REST API (Price Data)
TradingView Widget (Chart Rendering)
Storage Layer
Browser LocalStorage (Favorites & Alerts)
Does not use:
Database
Backend server
Authentication system
Private API keys


✨ Core Feature Skills

📊 Advanced Charting
Embedded TradingView chart

Multi-timeframe selection:
1m
5m
15m
1h
4h
1D


💹 Real-Time Price Monitoring


Auto-refresh every 5 seconds
Live price display

⭐ Favorites Management
Save selected coin as favorite
Data stored in browser LocalStorage

🔔 Target Price Alert
Custom price target setting
Automatic alert when condition is met

🌙 UI/UX Capability
Dark mode optimized
Minimalist layout
Mobile responsive design

🛠 Technology Stack Skill
Layer
Technology Used
Frontend
HTML5
Styling
CSS3
Logic
Vanilla JavaScript
Chart Engine
TradingView Widget
Market Data
Binance Public API
Runtime
Node.js (Static server for local deployment)

📦 Deployment Skill (Termux)

1️⃣ System Update
pkg update && pkg upgrade -y

2️⃣ Install Dependencies
pkg install nodejs git -y

3️⃣ Clone Repository
git clone https://github.com/pisceans/crypto-tracker.git
cd crypto-tracker

4️⃣ Install Static Server
npm install -g serve


5️⃣ Run Application
serve .

Access via browser:

http://localhost:3000


⚙️ Functional Flow Skill

User selects a trading pair.
User selects a timeframe.
TradingView widget dynamically loads the chart.
Binance API fetches live price every 5 seconds.
If the target price condition is met → Alert is triggered.
Favorite coin is stored in LocalStorage.


🔐 Security Considerations Skill

No private API keys used
No authentication required
Data fetched only from public endpoints
No user data transmitted externally
Fully client-side execution


🧪 Testing Skill

Current Version:
Manual browser testing
Mobile testing via Termux
API response validation
Future Plan:
Unit testing (Jest)
End-to-end testing (Cypress)
Performance benchmarking


📈 Performance Profile Skill

Ultra-lightweight (single HTML-based application)
No heavy frameworks
Minimal memory footprint
Fast initial load time
Suitable for low-end devices

