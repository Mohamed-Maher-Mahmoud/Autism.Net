import React from 'react'
import styleParticle from './Particle.module.css'

export default function Particle3() {
  return <>
    <h3 className={styleParticle.Particletitle}>مجال فهم اللغة</h3>

    <div className={styleParticle.accordion} >هذا البرنامج مصمم ليعلم طفلك ان يفهم ما يقال له بشكل محدد، فبتطبيق هذا البرنامج سوف يرد الطفل بشكل صحيح على الاوامر والطلبات البسيطة
        مثل (انهض)(عانقني) (ارفع يديك)..الخ.
    </div>

    <div className={styleParticle.header}>
    <div className="my-5 p-3 rounded shadow-sm">
    <h3 className="border-bottom pb-2 mb-0">الاوامر اللفظية</h3>
    <h6 className="border-bottom pb-2 mb-0" >الأمر الأول (ارفع يديك)</h6>
    
    <div className="d-flex text-muted pt-3">
      <p className="pb-3 mb-0 small lh-sm border-bottom" >
        <strong className="d-block text-gray-dark"> 1- ابدأ بتعليم طفلك بتقديم الأمر (ارفع يديك) يجب ان تقولها بصوت عال ببطء ووضوح، تأكد بأن الطفل لا ينشغل ببعض الامور مثل الاثارة الذاتية
              (تدوير- هز اليدين) يحب ان يكون الطفل جالساً بشكل مستقيم ينظر إليك.        </strong></p>
    </div>
    
    <div className="d-flex text-muted pt-3">
      <p className="pb-3 mb-0 small lh-sm border-bottom" >
        <strong className="d-block text-gray-dark">2- يمكن ان تساعد الطفل هنا برفع يديك انت، لأن الطفل قد تعلم ان يقلدك سابقاً، اذا فشل الطفل اعد الكرة مرة ثانية
            ويمكن هنا ان تحث الطفل جسدياً، يجب ان تحفظ ذراعيه فوق ل(2-3) ثوان ويجب ان يكافأ هنا ليعرف ماذا يفعل.
        </strong></p></div>

    <div className="d-flex text-muted pt-3">
      <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">3- تخفيف المساعدة البصرية، يجب ان تخفف من رفع يديك تدريجياً حتى يصبح
            رد فعل الطفل من امرك فقط وليس من المحاكاة البصرية، يجب عليك أولاً رفع يديك الى الأعلى مثل المطلوب وبعد (4-5) مرات ناجحة تخفض رفع يديك تدريجياً حتى تصل الى مرحلة لا ترفع فيها يديك أبداً.
        </strong></p></div>

    <div className="d-flex text-muted pt-3">
        <p className="pb-3 mb-0 small lh-sm border-bottom">
          <strong className="d-block text-gray-dark">بعض الاطفال يتجاوبوا بسهولة مع هذا الأمر وهنا يجب ان نكافئهم فوراً</strong></p>
      </div>

    <div className="d-flex text-muted pt-3">
        <p className="pb-3 mb-0 small lh-sm border-bottom">
          <strong className="d-block text-gray-dark">4- يجب تخفيف الصوت ثم المحاولة بنفس الطريقة، واذا لم يتجاوب الطفل يجب ان يشجع على ذلك، ويجب ان يخفض الصوت بشكل تدريجي حتى يتجاوب الطفل من دون اي صوت</strong></p>
      </div>

  </div>
  </div>

  

  <div className={styleParticle.header}>
  <div className="my-3 p-3 rounded shadow-sm">
    <h3 className="border-bottom pb-2 mb-0">الاوامر اللفظية</h3>
    <h6 className="border-bottom pb-2 mb-0" >الأمر الثاني (اشعل النور)</h6>
    
    <div className="d-flex text-muted pt-3">
      <p className="pb-3 mb-0 small lh-sm border-bottom" >
        <strong className="d-block text-gray-dark"> 1- أمر الطفل بأن يشعل الضوء، اذا استجاب الطفل انتقل الى امر اخر، لذا لم يستجب اعد تكرار الامر حتى تحصل على الجواب الصحيح</strong>
        </p></div>
    
    <div className="d-flex text-muted pt-3">
      <p className="pb-3 mb-0 small lh-sm border-bottom" >
        <strong className="d-block text-gray-dark">2- قف انت والطفل بجانب المفتاح بحيث يكون في متناول يده، ثم قل (اشعل النور)، اذا لم يستجب ساعده بوضع يده على المفتاح، 
            ساعده في اشعاله، ثم قل (اطفيء النور) بنفس الطريقة السابقة حتى ينفذ الطفل الأمر وحده.
        </strong></p></div>

    <div className="d-flex text-muted pt-3">
      <p className="pb-3 mb-0 small lh-sm border-bottom">
        <strong className="d-block text-gray-dark">3- خفف المساعدة في كل مرة حتى ينجح الطفل عدة مرات في تنفيذ الامر.</strong>
        </p></div>


    <div className="d-flex text-muted pt-3">
        <p className="pb-3 mb-0 small lh-sm border-bottom">
          <strong className="d-block text-gray-dark">4- باعد بين الطفل والمفتاح ثم اعد الأمر.</strong>
          </p></div>

  </div>
  </div>
  
  
  
  </>
}
