import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login';
import './App.css'
import Home from './Components/Home';

function App() {




  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
