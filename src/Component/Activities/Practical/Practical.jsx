import React from 'react'
import { Link } from 'react-router-dom'
import practiclestyle from './Practical.module.css'
import imgpracticle from './img/Autism-pana.png'

export default function Practical() {
  return <>
  
  <div class={practiclestyle.practicle} >
        
    <Link to="/Particle1" ><button type="button" className={practiclestyle.ready} >تدريبات الحضور والانتباه</button></Link>
    <Link to="/Particle2"><button type="button" className={practiclestyle.ready}>تدريبات مجال التقليد</button></Link>
    <Link to="/Particle3"><button type="button" className={practiclestyle.ready}  >تدريبات مجال فهم اللغة</button></Link>

    <Link to="/Particle4"><button type="button" className={practiclestyle.ready} >تدريبات اللغة التعبيرية</button></Link>
    <Link to="/Particle5"><button type="button" className={practiclestyle.ready} >تدريبات ما قبل الاكاديمي</button></Link>

    </div>

    <img src={imgpracticle} className={practiclestyle.imgpract} alt=""/>
  
  </>
}
