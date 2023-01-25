import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav({userData , logOut}) {
  return <>
  
  <header id="header" className="fixed-top ">
  <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <Link className="navbar-brand logo" to=""> <span className='active'>توحد</span>.نت</Link>
    <span className='ourmotto'>"نسعي لنتعلم"</span>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {userData?
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to=''><span className='active'>الرئيسية</span></Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link " to="#" >
            المكتبة
            <i className="fas fa-chevron-down inav"></i>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="articleone">المقالات</Link></li>
            <li><Link className="dropdown-item" to="videoone">الفيديوهات</Link></li>
          </ul>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="scale">المقياس</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="program">البرنامج</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link " to="#" >
        الأنشطة
        <i className="fas fa-chevron-down inav"></i>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="fun">الترفيهية</Link></li>
            <li><Link className="dropdown-item" to="practicale">العملية</Link></li>
          </ul>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="#">الأستفسار</Link>
        </li>
      </ul>:''}

      {
      userData? <>
       
      
        <Link onClick={logOut} to='' className="btn btn-outline logouttt" type="submit">تسجيل الخروج</Link>


            </>:""
           
    }
    
    </div>
  </div>
</nav>
</header>
  </>
}
