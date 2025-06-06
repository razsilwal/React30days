
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './about'
import UseEffect from './UseEffect'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {< Home />} />
        <Route path='/about' element= {< About />} />
        <Route path='/contact' element= {< Contact />} />
        <Route path='/useeffect' element={< UseEffect />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
