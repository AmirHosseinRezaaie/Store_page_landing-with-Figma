import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.tsx';
import '../styles/index.css';  // اگر index.css داری، نگه دار (یا tailwind.css یا theme.css)

// اگر Tailwind داری، این خط‌ها رو هم اضافه کن (اختیاری اما توصیه می‌شه)
import '../styles/tailwind.css';
import '../styles/theme.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);