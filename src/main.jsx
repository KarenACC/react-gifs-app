import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import { AddCategory } from './components/AddCategory'
import './styles.css';
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AddCategory/> */}
    <GifExpertApp />
  </StrictMode>
)