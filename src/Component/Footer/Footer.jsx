import React from 'react'
import styleFooter from './Footer.module.css'



export default function Footer() {
  return <>
  
  <footer>
    <div className={styleFooter.footerarea}>
      
                <div className={styleFooter.footerl}>
                  <h1 className={styleFooter.footerl} ><span >توحد</span>.نت</h1>
                </div>

               
       <p className={styleFooter.pfooter}>منصة توحد.نت، هي منصة عربية تساعد اهالي الأطفال المصابين بالتوحد في كيفية التعامل مع اطفالهم وتوعيتهم بشكل سليم حتي يتمكنو من مساعدة الأطفال المصابين ب اضطراب طيف التوحد
       </p>
       <i className="fa-brands fa-facebook mx-2"></i>
       <i className="fa-brands fa-instagram mx-2"></i>
       <i className="fa-brands fa-twitter mx-2"></i>
       <i className="fa-brands fa-linkedin mx-2"></i>


              </div>
         
          
         
  </footer>

         
          
          
          
  

  </>
}
