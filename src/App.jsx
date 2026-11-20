import Home from './pages/Home';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import WebDevelopment from './pages/WebDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import ContentWriting from './pages/ContentWriting';
import SEO from './pages/SEO';

function App() {
 

  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/services/web-development' element={<WebDevelopment/>}/>
         <Route path='/services/ui-ux-design' element={<UIUXDesign/>}/>
         <Route path='/services/content-writing' element={<ContentWriting/>}/>
         <Route path='/services/seo' element={<SEO/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
