



import AboutUsPage from "./components/AboutUsPage.jsx"
import { BrowserRouter as Router, Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import LandingPageFirstPage from "./LandingPageFirstPage.jsx";


export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route  path="/"  element={<LandingPageFirstPage/>}/>
      <Route  path="/AboutUs"  element={<AboutUsPage/>}/>
    </Routes>
    
    </BrowserRouter>
 
      

    </>
  )
}