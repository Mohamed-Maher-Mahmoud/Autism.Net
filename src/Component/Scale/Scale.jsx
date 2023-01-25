import React from 'react'
import {Link} from 'react-router-dom'
import scalestyle from './Scale.module.css'
import imgscale from './img/Cars.jpg'

export default function Scale() {
  return <>
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
     <img src={imgscale} alt="carsscale" className={scalestyle.imgscale}/>
    </div>
    <div className="col-lg-6">
      <h1 className={scalestyle.cars}>مقياس كارز 2</h1>
      <p className={scalestyle.lead}> مقياس كارز للتوحد هو وسيلة تستخدم لتشخيص اضطرابات طيف التوحد في الأطفال من عمر السنتين وأكبر، وقد تم نشر هذا المقياس عام 1988، ولا يزال من أفضل مقاييس تقييم التوحد السريرية وأكثرها استخدامًا. يستخدم مقياس 
          
        كارز للتوحد فيما يأتي:
          يعمل على تحديد شدة ودرجة التوحد في الطفل ومدى تأثيرها عليه.
          يساعد على التفريق بين الأطفال المصابين بالتوحد والمصابين بإعاقة مرتبطة بالنمو.
          يحتمل إمكانية استخدام مقياس كارز للتوحد في تشخيص المراهقين والبالغين المصابين بالتوحد، بحسب ما تبين في إحدى الدراسات.
          يساعد على التفريق بين الإصابة بالتوحد والإصابة باضطراب النمو المتفشي.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
        
        <Link to="/startscale"><button type="button" className={scalestyle.ready}>ابدأ المقياس</button></Link>
        
      </div>
    </div>
  </div>
  </>
}
