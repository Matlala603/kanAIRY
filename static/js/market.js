const dayRefAt = {};
const FALLBACK_INSTRUMENTS = [
  ['EURUSD', 'Euro / US Dollar', 'Forex', 5], ['GBPUSD', 'British Pound / US Dollar', 'Forex', 5], ['USDJPY', 'US Dollar / Japanese Yen', 'Forex', 3],
  ['USDCHF', 'US Dollar / Swiss Franc', 'Forex', 5], ['AUDUSD', 'Australian Dollar / US Dollar', 'Forex', 5], ['USDCAD', 'US Dollar / Canadian Dollar', 'Forex', 5],
  ['USDZAR', 'US Dollar / South African Rand', 'Forex', 4], ['XAUUSD', 'Gold futures (GC)', 'Metals', 2], ['USOIL', 'WTI crude oil futures', 'Energy', 2],
  ['US500', 'S&P 500', 'Indices', 2], ['NAS100', 'Nasdaq 100', 'Indices', 2], ['BTCUSD', 'Bitcoin', 'Crypto', 2], ['ETHUSD', 'Ethereum', 'Crypto', 2], ['AAPL', 'Apple', 'Stocks', 2],
].map(([symbol, name, cat, digits]) => ({ symbol, name, cat, digits }));
