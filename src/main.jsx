import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ErrorBoundary from './ErrorBoundary.jsx';

createRoot(document.getElementById('root')).render(
  
   
   <StrictMode>
    <ErrorBoundary>
       <BrowserRouter>
    <App />
  </BrowserRouter>,
    </ErrorBoundary>
  </StrictMode>,
)
