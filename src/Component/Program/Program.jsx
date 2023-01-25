import React from 'react'
import { Link } from 'react-router-dom'
import styleprogram from './Program.module.css'
import imgprogram from './img/autism-concept-illustration_114360-5049.jpg'

export default function Program() {
  return <>
  
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6" >
      <img src={imgprogram} className={styleprogram.imgprogram} alt='program autism'/>
    </div>


    <div className="col-lg-6">
      
        <h1 className={styleprogram.programtitle}>برنامج لوفاس</h1>
        <p className={styleprogram.lead} > برنامج لوفاس هو احد البرامج العلاجية الشائعة التي تستخدم مع الطفل التوحدي لتعليمه طرق الاعتماد على الذات بقدر المستطاع، هو برنامج تربوي من برامج التدخل المبكر للأطفال التوحديين للدكتور إفارلوفاس وهو دكتور نفساني حيث بدأ رحلته في عالم التوحد في أواخر الخمسينات من القرن العشرين ، وقد بنى تجاربه على نظرية تعديل السلوك , ويعتبر أول من طبق تقنيات تعديل السلوك في تعليم الأشخاص التوحديين، يهدف البرنامج إلى التدخل المبكر في حل المشكلة قدر الإمكان لمساعدة الطفل في اكتساب مهارات التواصل مع الاخرين من خلال طرق تعليمية مدروسة وتعريفه على أنشطة يومية يمكنه ممارستها.
            تشمل العملية التعليمية بشكل عام أولًا تكوين علاقة ودية مع الطفل ثم تجزيء مهارات التعلم للطفل إلى مكونات أبسط يسهل فهمها، ومكافأة الطفل بصورة إيجابية ومن ثم تعميم كل هذه المهارات في البيئة الطبيعية التي يعيش فيها كل يوم استنادًا على مواطن القوة والضعف عند كل طفل توحد.</p>
      
      

      <h3 className={styleprogram.programtitle}>طريقة اتباع البرنامج</h3>
      <p className={styleprogram.lead} id="description"> يقوم الوالدان باستخدام استمارة التقييم الخاصة بالبرنامج العلاجي لتحديد النقاط المستهدفة التي سيقوم البرنامج بالعمل عليها</p>
    </div>
  </div>
  
  
  


  <Link to="/program1"><button className={styleprogram.ready} > استمارة التقييم</button></Link>

  <Link to="/practicale"><button className={styleprogram.ready}  > مجالات البرنامج</button></Link>

 
  
  </>
}
