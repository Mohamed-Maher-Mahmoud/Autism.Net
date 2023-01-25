import React from 'react'
import practiclestyle from '../Practical/Practical.module.css'
import ReactPlayer from 'react-player/youtube'



export default function VidioOne() {
  return <>
  
  <div className={practiclestyle.vidio}>
  <h3 className='pb-3' >الفرق بين التوحد وتأخر النطق من خلال علامة مؤكدة</h3>
<div className='d-flex justify-content-center ' >
    
<ReactPlayer  url='https://www.youtube.com/watch?v=WpTayimUKQk' width='80%' height='500px'  />
</div>
</div>
  </>
}
