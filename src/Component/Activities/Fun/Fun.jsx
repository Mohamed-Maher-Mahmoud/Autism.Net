import React from 'react'
import { Link } from 'react-router-dom'
import GamesStayle from './Fun.module.css'
import imgconnect from './img/Connect4.jfif'
import imgeaster from './img/pairmatches.png'
import puzzle from './img/puzzle.webp'



export default function Fun() {
  return <>
  
<div className={GamesStayle.games} >
<div id="game_card" className="card" >
   
    <div className="card-body">
    <Link to="/Connect4.html"><div className="col-md-4">
        <img src={imgconnect} alt='connectfour' className={GamesStayle.imgconnect}/>
    </div>
    </Link>
      <h3 className={GamesStayle.gamestitle} >كونكت فور</h3>
      <p className={GamesStayle.lead}>
        تُعد لعبة كونكت فور لعبة استراتيجية يمكن لعبها على الحاسب الآلي أو باستخدام اللوح والأقراص. تتكون اللعبة من صفوف أفقية ورأسية تُكوِّن الخانات الفارغة، حيث يتناوب اللاعبين على إسقاط الأقراص لملء الخانات. الهدف من اللعبة هو أن يكوِّن أحد اللاعبيْن صفًا أفقيًا أو رأسيًا أو مائلًا مكونًا من أربع خانات متصلة بأقراص اللعب الخاصة به.</p>

        <p className={GamesStayle.leadd}>- تقوم اللعبة بتنمية مهارة الانتباه البصري للطفل.</p>
       
        <Link to="/connectfour"><button className={GamesStayle.ready}  >  العب </button></Link>
    </div>
      </div>
  </div>


  <div className={GamesStayle.games} >
<div id="game_card" className="card" >
   
    <div className="card-body">
    <Link to=""><div className="col-md-4">
        <img src={imgeaster} alt='connectfour' className={GamesStayle.imgconnect}/>
    </div>
    </Link>
      <h3 className={GamesStayle.gamestitle} >لعبة الذاكرة - الازواج المتشابهة </h3>
      <p className={GamesStayle.lead}>
      لعبة الذاكرة، الازواج المتشابهة، هي لعبة ورق يتم فيها وضع جميع البطاقات مقلوبة على السطح ويتم قلب ورقتين مكشوفتين على كل منعطف. الهدف من اللعبة هو اخراج زوجين متطابقين من بين البطاقات المقلوبة
</p>
        <p className={GamesStayle.leadd}>- تقوم اللعبة بزيادة مستوى التركيز البصري عند الطفل.
        </p>
        <p className={GamesStayle.leadd}>- قياس قوة الذاكرة قصيرة المدي عند الطفل</p>
          
       
        <Link to="/similar"><button className={GamesStayle.ready}  >  العب </button></Link>
    </div>
      </div>
  </div>

  <div className={GamesStayle.games} >
<div id="game_card" className="card" >
   
    <div className="card-body">
    <Link to="similar"><div className="col-md-4">
        <img src={puzzle} alt='connectfour' className={GamesStayle.imgconnect}/>
    </div>
    </Link>
      <h3 className={GamesStayle.gamestitle} > بازل الصورة المقطعة</h3>

      <p className={GamesStayle.lead}>
      أحجية الصور المقطوعة هي أحجية تبليط تتطلب تجميع قطع موزعة ومتشابكة بأشكال غريبة في كثير من الأحيان ، ولكل منها جزء من الصورة ؛ عند تجميعها ، فإنها تنتج صورة كاملة
        </p>

        <p className={GamesStayle.leadd}>- تقوم اللعبة بزيادة مستوى التركيز البصري عند الطفل.</p>
        <p className={GamesStayle.leadd}>- قياس قوة الذاكرة قصيرة المدي عند الطفل </p>
       
        <Link to="/puzzle"><button className={GamesStayle.ready}>  العب </button></Link>
    </div>
      </div>
  </div>

  
  </>
}

  
  

