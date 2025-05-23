import './index.css'
import 'semantic-ui-css/semantic.min.css'
import 'animate.css/animate.min.css'
import './vendors/prettify.css'
import 'whatwg-fetch'

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import registerServiceWorker from './registerServiceWorker'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Register service worker
registerServiceWorker()
