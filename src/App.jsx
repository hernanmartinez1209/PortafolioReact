import './components/Header'
import './App.css'
import Header from './components/Header'
import Abaut from './components/Abaut'
import Services from './components/Services'

import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Proyectos from './components/Proyectos'
import Footer from './components/Footer'


function App() {
 
  return (
    <div className="App">

      <Navbar />
      
      <Routes>
         <Route path='/' element={<Header />}/>
         <Route path='/Abaut' element={<Abaut />} />
         <Route path='/Services' element={<Services />} />
         <Route path='/Contact' element={<Contact />}/>
         <Route path='/Proyectos' element={<Proyectos />}/>   
      </Routes>
     <Footer />
      
    </div>
  )
}

export default App
