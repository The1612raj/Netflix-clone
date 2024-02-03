import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.scss'
import Home from './Component/Home';
import Header from './Component/Header';

function App() {
  const [count, setCount] = useState(0)

  return (<>
    
    <Router>

    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}  />
    </Routes>
    </Router>
</>
  )
}

export default App
