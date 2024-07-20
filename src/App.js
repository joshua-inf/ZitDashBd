import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import MyNav from './Nav.js/Nav';
import UpperNav from './Nav.js/UpperNav';
import Users from './Component/Users/Users';
import { MyConctext } from './Component/Context/Context';

function App() {
  return (
    <BrowserRouter>
      <MyConctext>
        <div className="" style={{ overflow: 'hidden', position: 'relative', minHeight: '100vh' }}>

          <div className='d-flex' style={{}}>
            <div className='d-none d-md-block' style={{
              width: '360px'
            }}>
              <Nav />
            </div>
            <div style={{width:'100%'}} className="">
              <UpperNav/>
              <div className="" style={{ paddingTop:'80px'}}>
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
      </MyConctext>
    </BrowserRouter>
  );
}

export default App;
