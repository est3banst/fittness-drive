import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import App from './App.jsx'
import { MemberPlans } from './componentes/pages/MemberPlans.jsx';
import ClasesLayout from './componentes/pages/ClasesLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>} />
  <Route path='/membresias' element={<MemberPlans/>} />
  <Route path='/clases' element={<ClasesLayout/>} />
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
