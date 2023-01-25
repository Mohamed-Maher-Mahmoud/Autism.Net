import React from 'react'
import imggame from "./img/puzzle.webp"
import styleconnect from './styleconnect.module.css'

export default function Puzzle() {
  return <>


<div className="px-4 py-5 my-5 text-center ">
   <img src={imggame} className={styleconnect.imgpair} alt='connectfour'/>
    <h1 className={styleconnect.title}>لعبة الذاكرة - الازواج المتشابهة</h1>
    <div className="col-lg-6 mx-auto">
      <p className={styleconnect.desc}>
      لعبة الذاكرة، الازواج المتشابهة، هي لعبة ورق يتم فيها وضع جميع البطاقات مقلوبة على السطح ويتم قلب ورقتين مكشوفتين على كل منعطف. الهدف من اللعبة هو اخراج زوجين متطابقين من بين البطاقات المقلوبة.
     
      </p>
    </div>
  </div>

  
  

      
  <div className="container">
  <div className="ratio ratio-16x9" >
  <iframe className={styleconnect.rat} src="https://app-167403.games.s3.yandex.net/167403/l176udx7zipkldphaqyffbjzerkc4cm6/index.html?app-id=167403&amp;lang=en&amp;utm_medium=search&amp;utm_source=google&amp;utm_campaign=en-tier2_games_general-igra_all_google_search%7C14747461139&amp;utm_term=game%20now%20online#app-id=167403&amp;catalog-session-uid=catalog-2989289b-0d5e-5e4c-befe-f37dc4470c30-1645291155784-f504&amp;rtx-reqid=11659727936363334551&amp;pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&amp;origin=https%3A%2F%2Fyandex.com&amp;yandexapp=false&amp;expBoxesCrypted=Vra921e6QJNzhd8rvNClNsw1Twz_m0pJKvX3aPNzgq3LyA1q9hVcGKFlo-wlzV6YhIOccfvMnuRtZRwIs4x9dc1TwnQtvtZb&amp;experiments=%7B%22gdpr_in_usa%22%3Atrue%2C%22invalidate_games_cache_from%22%3A9505309%2C%22dark_theme%22%3Atrue%2C%22recovery_code%22%3Atrue%2C%22new_unauthorized_cookie%22%3Atrue%2C%22payments_igames%22%3Atrue%2C%22merge_conflicts%22%3Atrue%7D&amp;app-id=167403" ></iframe>
  
  </div>
</div>
  
  </>
}
