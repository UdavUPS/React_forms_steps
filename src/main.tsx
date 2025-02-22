import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/resetStyle.css';
import './css/style.css';
import App from './components/App/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
