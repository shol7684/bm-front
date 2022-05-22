import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './component/layout/Header';
import './App.css';
import { Nav } from './component/layout/Nav';
import { Footer } from './component/layout/Footer';
import { MyPage } from './component/myPage/MyPage';
import { Login } from './component/login/Login';
import { Join } from './component/join/Join';
import { Layout } from './component/layout/Layout';
import { Main } from './component/Main/Main';
 

function App() {
  useEffect(()=>{
    console.log("app 완료");
  })

  return (
    <div>
      <BrowserRouter> 
        <Routes> 
          <Route element={ <Layout /> } >
            <Route element={<Nav />} >
              <Route path="/" element={<Main />} ></Route>
              <Route path="/myPage" element={<MyPage />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes> 
        </BrowserRouter>
    </div>

  );
}

export default App;
