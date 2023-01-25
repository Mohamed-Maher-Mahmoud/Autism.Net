import React from 'react'
import { Link } from 'react-router-dom'
import imghome from './img/AboutAutism.jpg'
import cars from './img/autism-concept-illustration_114360-5049.jpg'
import lofas from './img/autism-compositions-set_1284-73935.webp'
import connectfour from './img/Connect4.jfif'
import easter from './img/pairmatches.png'
import HomeStyle from './Home.module.css'
import puzzle from './img/puzzle.webp'
import spergerimg from './img/gradient-international-asperger-day-background_23-2149241504.webp'
import dawenimg from './img/twoyearold-girl-collects-puzzles-sitting-table-nursery_383647-1245.jpg'
import awamel from './img/medium-shot-kid-wearing-headphones_23-2148551598.jpg'
import smileimg from './img/medium-shot-kid-showing-approval_23-2148551377.jpg'
import smimg from './img/kid-drawing-floor_23-2148551461.jpg'
import smsm from './img/beautiful-mommy-sits-kitchen-table-with-her-preschoolaged-daughter-makes-something_616370-2972.jpg'



export default function Home() {
  return <>
  
  <div className='about'>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className={HomeStyle.headline} >
             <h2 className='px-5'>اضطراب طيف التوحد</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="well-left">
              <div className={HomeStyle.single}>
                  <img className={HomeStyle.image} src={imghome} alt="Autism" /> 
              </div>
            </div>
          </div>
         
         
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="well-middle">
              <div className={HomeStyle.singleabout}>
                
                  <h4 className={HomeStyle.head} >ما هو اضطراب طيف التوحد</h4>
                
                <p className={HomeStyle.caption} >اضطراب طيف التوحد عبارة عن حالة ترتبط بنمو الدماغ وتؤثر على كيفية تمييز الشخص للآخرين والتعامل معهم على المستوى الاجتماعي، مما يتسبب في حدوث مشكلات في التفاعل والتواصل الاجتماعي. كما يتضمن الاضطراب أنماط محدودة ومتكررة من السلوك. يُشير مصطلح "الطيف" في عبارة اضطراب طيف التوحد إلى مجموعة كبيرة من الأعراض ومستويات الشدة.</p>
             <p className={HomeStyle.caption} >
يتضمن اضطراب طيف التوحد حالات كانت تعتبر منفصلة في السابق — التوحد، ومتلازمة أسبرجر، واضطراب التحطم الطفولي وأحد الأشكال غير المحددة للاضطراب النمائي الشامل. لا زال بعض الأفراد يستخدمون مصطلح "متلازمة أسبرجر"، والتي يعتقد بوجه عام أنها تقع على الطرف المعتدل من اضطراب طيف التوحد. </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="services" className="services-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className={HomeStyle.headline}>
              <h2> المحتوى</h2>
            </div>
          </div>
        </div>
        <div className="row text-center">
      
         
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="about-move">
              <div className="services-details">
                <div className={HomeStyle.single}>
                  <Link className={HomeStyle.iservices} to="#">
                    <i className="fas fa-book"></i>
                  </Link>
                  <h4>المكتبة</h4>
                  <p>تتضمن المكتبة العديد من المقالات والفيديوهات التعليمية، التي بدورها تساعد في توعية المجتمع ونشر العلم والمعرفة عن هذا الاضطراب</p>
                </div>
              </div>
             

              
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="about-move">
              <div className="services-details">
                <div className={HomeStyle.single}>
                  <Link className={HomeStyle.iservices} to="scale">
                  <i className="fas fa-rectangle-list"></i>
                  </Link>
                  <h4>المقياس</h4>
                  <p>
                     يستخدم مقياس كارز 2 في قياس درجة اصابة الطفل باضطراب طيف التوحد، وايضاً يتم استخدامه لتشخيص الطفل الذي يعاني من حرمان البيئة
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            
            <div className=" about-move">
              <div className="services-details">
                <div className={HomeStyle.single}>
                  <Link className={HomeStyle.iservices} to="program">
                  <i className="fas fa-file-circle-check"></i>
                  </Link>
                  <h4>البرنامج العلاجي</h4>
                  <p>يقوم البرنامج العلاجي بتأهيل الطفل للإعتماد على الذات بقدر المستطاع</p>
                </div>
              </div>
             
              
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            
            <div className=" about-move">
              <div className="services-details">
                <div className={HomeStyle.single}>
                  <Link className={HomeStyle.iservices} to="#">
                  <i className="fas fa-boxes-stacked"></i>
                  </Link>
                  <h4>الانشطة</h4>
                  <p>
                      تساعد الانشطة التدريبية المختلفة في تحسين حالة الطفل من خلال تدربه على بعض التدريبات العملية والترفيهية.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="col-md-4 col-sm-4 col-xs-12">
            
            <div className=" about-move">
              <div className="services-details">
                <div className={HomeStyle.single}>
                  <Link className={HomeStyle.iservices} to="#">
                  <i className="fas fa-hospital"></i>
                  </Link>
                  <h4>المراكز المتخصصة</h4>
                  <p>
                    اكتشف المراكز القريبة منك
                  </p>
                </div>
              </div>
             
            </div>
          </div>
          
          <div className="col-md-4 col-sm-4 col-xs-12">
           
            <div className=" about-move">
              <div className="services-details">
                <div className={HomeStyle.single}>
                  <Link className={HomeStyle.iservices} to="#">
                  <i className="fas fa-paper-plane"></i>
                  </Link>
                  <h4>تواصل مع متخصص</h4>
                  <p>
                    قم بالاستفسار عن ما تريد
                  </p>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>






    <div id="blog" className="blog-area">
          <div className="blog-inner area-padding">
            <div className="blog-overly"></div>
            <div className="container ">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className={HomeStyle.headline}>
                    <h2>المكتبة</h2>
                  </div>
                </div>
              </div>
              <div className="row">
            
              
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <Link  to="articletwo">
                 <img src={dawenimg} className={HomeStyle.spergerim} alt="libraryautism"/>
                      </Link>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <Link className={HomeStyle.sperger}  to="articletwo" >العوامل المسببة</Link>
                      </h4>
                    
                    <p>
                        العامل المسبب للإعاقة هو مجموعة من العوامل الذاتية المحيطة بالطفل فى مراحل نموه المبكرة فى نطاق الأسرة، منها أسلوب تنشئة أو تعامل الطفل مع الأسرة، وافتقاد الطفل الحب والأمان ودفء العلاقة بينه وبين أمه
                      </p>
                    
                    </div>
                    <span > <Link to="articletwo" className={HomeStyle.ready}>اقرأ المزيد</Link>
                
                    </span>
                  </div>
                  
                </div>
              
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <Link to="articleone">
                      <img src={spergerimg} className={HomeStyle.spergerim} alt="libraryautism"/>
                      </Link>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <Link className={HomeStyle.sperger} to="blog.html" >متلازمة اسبرجر</Link>
                      </h4>
                      <p>
                  ربما تجد صعوبةً في تكوين الصداقات الجديدة، أو تعاني من ارتباكٍ عند وجودك في مجموعات كبيرة من الأشخاص أو يقتصر حديثك على الأشخاص المألوفين لديك والذين تشعر بارتياح لهم، تعرف على متلازمة أسبرجر</p>
                    </div>
                    <span > <Link to="articleone" className={HomeStyle.ready}>اقرأ المزيد</Link>
                
                    </span>
                  </div>
                  
                </div>

                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="single-blog">
                    <div className="single-blog-img">
                      <Link to="articlethree">
                      <img src={awamel} className={HomeStyle.awamel} alt="libraryautism"/>
                      </Link>
                    </div>
                    <div className="blog-text">
                      <h4>
                        <Link className={HomeStyle.sperger} to="articlethree">متلازمة داون</Link>
                      </h4>
                      <p >متلازمة داون حالة خلقية، وليست مرضية، تنتج عن زيادة كروموسوم (صبغي)، مسببة تأخر في تطور الطفل عقليًّا أو جسديًّا؛ حيث تؤدي إلى إعاقة ذهنية، وتأخر في النمو. </p>
                    </div>
                    <span > <Link to="articlethree" className={HomeStyle.ready}>اقرأ المزيد</Link>
                
                    </span>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="row" >

        
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single-blog">
              <div className="single-blog-img">
                <Link to="videoone">
                <img src={smileimg} className={HomeStyle.spergerim} alt="libraryautism"/>
                  </Link>
              </div>
              <div className="blog-meta">
                <span className="date-type">
                  
                </span>
              </div>
              <div className="blog-text">
                <h4>
                  <Link className={HomeStyle.sperger} to="videoone" >تغير حياة طفل مريض بالتوحد</Link>
                </h4>
              </div>
              <span> <Link to="videoone" className={HomeStyle.ready}>شاهد</Link>
          
              </span>
            </div>
            
          </div>
         
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single-blog">
              <div className="single-blog-img">
                <Link to="videotwo">
                <img src={smimg} className={HomeStyle.spergerim} alt="libraryautism"/>
                </Link>
              </div>
              <div className="blog-meta">
                <span className="date-type">
                  
                </span>
              </div>
              <div className="blog-text">
                <h4>
                  <Link className={HomeStyle.sperger} to="videotwo" > 10 أعراض للتوحّد</Link>
                </h4>
                    </div>
              <span> <Link to="videotwo" className={HomeStyle.ready}>شاهد</Link>
          
              </span>
            </div>
            </div>
            

          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single-blog">
              <div className="single-blog-img">
                <Link to="videothree">
                <img src={smsm} className={HomeStyle.spergerim} alt="libraryautism"/>
                </Link>
              </div>
              <div className="blog-meta">
                <span className="date-type">
                  
                </span>
              </div>
              <div className="blog-text">
                <h4>
                  <Link className={HomeStyle.sperger} to="videothree" > الفرق بين التوحد وتأخر النطق 
</Link>
                </h4>
                
              </div>
              <span> <Link to="videothree" className={HomeStyle.ready}>شاهد</Link>
          
              </span>
            </div>
            
          </div>
          
        </div>

        
  <div className="col-md-12 col-sm-12 col-xs-12">
    <div className={HomeStyle.headline}>
      <h2>مقياس كارز 2</h2>
    </div>
  </div>

    <div className="reviews">
      <div className="row g-0">
        <div className="col-lg-6">
        <img className={HomeStyle.imgcars} src={cars} alt='imgcars'/>
        </div>
        
        <div className="col-lg-6 ">    
          <div className="px-5 py-5">
            <h2 className={HomeStyle.titlecars} >مقياس كارز 2</h2>
            <h5 className={HomeStyle.pcars}>اختبار كارز CARS هو اختصار لعبارة Childhood Autism Rating Scale ويُعني مقياس تصنيف التوحد لدى الأطفال، 
              يتم استخدامها من أجل تقييم وتصنيف وتشخيص مرض التوحد عند الأطفال، هذا الاختبار يأتي بميزة فريدة يكمن في قدرته على تقييم حالة الطفل بشكل دقيق جدًا
               واكتشف هل الطفل بالفعل يُعاني من التوحد أم اضطرابات و تأخر في النمو مثل التخلف العقلي وغيره</h5>
            <Link to="scale" className={HomeStyle.ready}>اعرف اكثر</Link>
          </div>
        </div>
      </div>
    </div>



         
  <div className="col-md-12 col-sm-12 col-xs-12">
    <div className={HomeStyle.headline}>
      <h2>البرنامج العلاجي</h2>
    </div>
  </div>

    <div className={HomeStyle.reviews}>
      <div className="row g-0">
        <div className="col-lg-6">
        <img className={HomeStyle.imglofas} src={lofas} alt='imgcars'/>
        </div>
        
        <div className="col-lg-6 ">    
          <div className="px-5 py-5">
            <h2 className={HomeStyle.titlecars} >برنامج لوفاس</h2>
            <h5 className={HomeStyle.pcars}> يعد برنامج لوفاس لعلاج التوحد أحد البرامج الشاملة والمتكاملة التي تستخدم التحليل السلوكي التطبيقي مع الطفل من عمر الثانية حتى الثامنة كعلاج مبكر للتوحد أو في الأطفال الذين يعانون من مشكلات في عملية التطور.
            </h5><Link to="program" className={HomeStyle.ready}>اتبع</Link>
          </div>
        </div>
      </div>
    </div>



    <div id="services" className="services-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className={HomeStyle.headline}>
              <h2> العب معنا</h2>
            </div>
          </div>
        </div>

    <div className="row">
            
              
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <Link  to="blog.html">
             <img src={connectfour} className={HomeStyle.libraryimg} alt="libraryautism"/>
                  </Link>
                </div>
                <div className="blog-text">
                  <h4>
                    <Link className={HomeStyle.sperger}  to="blog.html" >لعبة كونكت فور </Link>
                  </h4>
                
                <p>
                تساعد لعبة كونكت فور على زيادة مدى تركيز وانتباه الطفل </p>
                
                </div>
                <span > <Link to="connectfour" className={HomeStyle.ready}> العب</Link>
            
                </span>
              </div>
              
            </div>
          
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <Link to="blog.html">
                  <img src={puzzle} className={HomeStyle.puzzle} alt="libraryautism"/>
                  </Link>
                </div>
                <div className="blog-text">
                  <h4>
                    <Link className={HomeStyle.sperger} to="blog.html" >لعبة البازل</Link>
                  </h4>
                  <p>تساعد لعبة البازل في زيادة مستوى التركيز وتحسن نشاط العقل</p>
                </div>
                <span > <Link to="puzzle" className={HomeStyle.ready}>العب</Link>
            
                </span>
              </div>
              
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="single-blog">
                <div className="single-blog-img">
                  <Link to="blog.html">
                  <img src={easter} className={HomeStyle.imgplaye} alt="libraryautism"/>
                  </Link>
                </div>
                <div className="blog-text">
                  <h4>
                    <Link className={HomeStyle.sperger} to="blog.html">لعبة الازواج المتشابهة</Link>
                  </h4>
                  <p >تساعد لعبة التوصيل في عملية تحسن الطفل من ناحية التركيز والانتباه </p>
            
                <span > <Link to="similar" className={HomeStyle.ready}>العب</Link>
            
                </span>
              </div>
              
            </div>
            
          </div>
        </div>
  </div>
  </div>

     




  <div id="services" className="services-area area-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className={HomeStyle.headline}>
              <h2>ابرز المراكز المتخصصة </h2>
            </div>
          </div>
        </div>

  <div  className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">حلوان</h4>
            </div>
            <div className="card-body">
              <h3 className="card-title pricing-card-title"><small className="text-muted fw-light">مركز متخصص أ</small></h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>خدمات المركز</li>
                <li>خدمات المركز</li>
                <li>خدمات المركز</li>
                <li>خدمات المركزط</li>
              </ul>
              <button type="button" className={HomeStyle.ready} data-bs-toggle="popover" data-bs-content="رقم الهاتف: 01553179907" data-bs-original-title="رقم الهاتف - العنوان">تواصل معنا</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">المعادي - شارع 9</h4>
            </div>
            <div className="card-body">
              <h3 className="card-title pricing-card-title"><small className="text-muted fw-light">مركز متخصص ب</small></h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>خدمات المركز</li>
                <li>خدمات المركز</li>
                <li>خدمات المركز</li>
                <li>خدمات المركز</li>
              </ul>
              <button type="button" className={HomeStyle.ready}> تواصل معنا</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 text-white">
              <h4 className="my-0 fw-normal">الجيزة</h4>
            </div>
            <div className="card-body">
              <h3 className="card-title pricing-card-title"><small className="text-muted fw-light">مركز متخصص ت</small></h3>
              <ul className="list-unstyled mt-3 mb-4">
                <li>خدمات المركز</li>
                <li>خدمات المركز</li>
                <li>خدمات المركز</li>
                <li>حدمات المركز</li>
              </ul>
              <button type="button" className={HomeStyle.ready}>تواصل معنا</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  






  </>
}
