import './App.css';
import Dashboard from './dashboard';
import Login from './login';
import Error from './error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/error' element={<Error />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
