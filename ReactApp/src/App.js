import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login';
import './App.css'

function App() {




  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
