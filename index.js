// ============================================
// Simple Crypto Tracker v2
// Modular + Advanced Alert System
// ============================================

const App = (() => {
  // ===============================
  // State Management
  // ===============================
  const state = {
    pair: "BTCUSDT",
    timeframe: "60", // 1h default
    price: null,
    previousPrice: null,
    target: null,
    alertMode: "above", // "above" or "below"
    interval: null
  };

  // ===============================
  // DOM Elements
  // ===============================
  const DOM = {
    pairSelect: document.getElementById("pairSelect"),
    timeframeSelect: document.getElementById("timeframeSelect"),
    priceDisplay: document.getElementById("price"),
    targetInput: document.getElementById("targetPrice"),
    alertModeSelect: document.getElementById("alertMode"),
    setAlertBtn: document.getElementById("setAlert"),
    favoriteBtn: document.getElementById("addFavorite"),
    favoritesList: document.getElementById("favorites"),
    chartContainer: document.getElementById("tvChart")
  };

  // ===============================
  // Initialization
  // ===============================
  function init() {
    loadSettings();
    loadFavorites();
    bindEvents();
    loadChart();
    startPriceMonitoring();
  }

  // ===============================
  // Binance API Price Fetch
  // ===============================
  async function fetchPrice() {
    try {
      const res = await fetch(
        `https://api.binance.com/api/v3/ticker/price?symbol=${state.pair}`
      );
      const data = await res.json();

      state.previousPrice = state.price;
      state.price = parseFloat(data.price);

      DOM.priceDisplay.textContent = state.price.toFixed(4);

      checkAlert();
    } catch (err) {
      console.error("Price fetch error:", err);
    }
  }

  function startPriceMonitoring() {
    if (state.interval) clearInterval(state.interval);
    fetchPrice();
    state.interval = setInterval(fetchPrice, 5000);
  }

  // ===============================
  // Alert System (Cross Detection)
  // ===============================
  function checkAlert() {
    if (!state.target || !state.previousPrice) return;

    if (state.alertMode === "above") {
      if (
        state.previousPrice < state.target &&
        state.price >= state.target
      ) {
        triggerAlert();
      }
    }

    if (state.alertMode === "below") {
      if (
        state.previousPrice > state.target &&
        state.price <= state.target
      ) {
        triggerAlert();
      }
    }
  }

  function triggerAlert() {
    playSound();
    alert(
      `Target ${state.alertMode} reached!\nCurrent price: ${state.price}`
    );
    state.target = null;
    localStorage.removeItem("target");
  }

  function playSound() {
    const audio = new Audio(
      "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    );
    audio.play();
  }

  // ===============================
  // TradingView Chart Loader
  // ===============================
  function loadChart() {
    DOM.chartContainer.innerHTML = "";

    new TradingView.widget({
      autosize: true,
      symbol: `BINANCE:${state.pair}`,
      interval: state.timeframe,
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      container_id: "tvChart"
    });
  }

  // ===============================
  // Favorites Management
  // ===============================
  function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  }

  function addFavorite() {
    const favorites = getFavorites();
    if (!favorites.includes(state.pair)) {
      favorites.push(state.pair);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderFavorites();
    }
  }

  function loadFavorites() {
    renderFavorites();
  }

  function renderFavorites() {
    DOM.favoritesList.innerHTML = "";
    getFavorites().forEach(pair => {
      const li = document.createElement("li");
      li.textContent = pair;
      li.onclick = () => {
        state.pair = pair;
        DOM.pairSelect.value = pair;
        loadChart();
        startPriceMonitoring();
      };
      DOM.favoritesList.appendChild(li);
    });
  }

  // ===============================
  // Event Binding
  // ===============================
  function bindEvents() {
    DOM.pairSelect.onchange = e => {
      state.pair = e.target.value;
      loadChart();
      startPriceMonitoring();
    };

    DOM.timeframeSelect.onchange = e => {
      state.timeframe = e.target.value;
      loadChart();
    };

    DOM.setAlertBtn.onclick = () => {
      const value = parseFloat(DOM.targetInput.value);
      if (!isNaN(value)) {
        state.target = value;
        state.alertMode = DOM.alertModeSelect.value;
        localStorage.setItem("target", state.target);
        localStorage.setItem("alertMode", state.alertMode);
        alert("Alert configured successfully.");
      }
    };

    DOM.favoriteBtn.onclick = addFavorite;
  }

  // ===============================
  // Persistence
  // ===============================
  function loadSettings() {
    const savedTarget = localStorage.getItem("target");
    const savedMode = localStorage.getItem("alertMode");

    if (savedTarget) state.target = parseFloat(savedTarget);
    if (savedMode) state.alertMode = savedMode;
  }

  // Public API
  return { init };
})();

// Initialize App
document.addEventListener("DOMContentLoaded", App.init);
