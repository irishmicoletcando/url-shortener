import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ConvertedUrlProvider } from './context/ConvertedUrlContext';

createRoot(document.getElementById('root')!).render(
  <ConvertedUrlProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ConvertedUrlProvider>
)
