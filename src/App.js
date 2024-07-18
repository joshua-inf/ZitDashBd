import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import MyNav from './Nav.js/Nav';
import UpperNav from './Nav.js/UpperNav';
import Users from './Component/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="" style={{ overflow: 'hidden', position: 'relative', minHeight: '100vh' }}>

        <div className='d-flex' style={{}}>
          <div style={{
            width: '150px'
          }}>
            <Nav />
          </div>
          <div style={{width:'100%'}} className="">
            <div className="">
              <div>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Users' element={<Users />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
