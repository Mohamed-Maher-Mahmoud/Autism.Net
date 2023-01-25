import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

export default function Layout({userData , setuserData}) {

  let navigate = useNavigate(); 
  function logOut() {
    localStorage.removeItem('userToken');
    setuserData(null);
     navigate('/login');
  }
  return <>

  <Nav logOut={logOut} userData={userData} />
  <div className='container'>
  <Outlet/>
  </div>
  <Footer/>

  



  
  
  </>
}
