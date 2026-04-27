import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.tsx'

registerSW({
  onNeedRefresh() {
    if (confirm('Nouvelle version disponible. Recharger ?')) {
      window.location.reload()
    }
  },
  onOfflineReady() {
    console.log('Quiz disponible hors-ligne ✓')
  },
})

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('Élément #root introuvable')

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
