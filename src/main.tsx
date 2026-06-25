import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store'
import './styles/index.css'
import './lang/i18n'
import App from './App.tsx'
import LangSwitcher from './components/common/LangSwitcher.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <LangSwitcher />
      <App />
    </Provider>
  </StrictMode>,
)
