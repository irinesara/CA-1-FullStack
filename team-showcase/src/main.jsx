import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TeamMemberCard from './components/TeamMemberCard.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
    <TeamMemberCard/>
  </StrictMode>,
  </BrowserRouter>
)
