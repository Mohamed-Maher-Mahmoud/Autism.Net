import React from 'react'
import imggame from "./img/Connect4.jfif"
import styleconnect from './styleconnect.module.css'


export default function ConnectFour() {
  return <>


   <div className="px-4 py-5 my-5 text-center ">
   <img src={imggame} alt='connectfour'/>
    <h1 className={styleconnect.title}>كونكت فور</h1>
    <div className="col-lg-6 mx-auto">
      <p className={styleconnect.desc}  >
        تُعد لعبة كونكت فور لعبة استراتيجية يمكن لعبها على الحاسب الآلي أو باستخدام اللوح والأقراص. تتكون اللعبة من صفوف أفقية ورأسية تُكوِّن الخانات الفارغة، حيث يتناوب اللاعبين على إسقاط الأقراص لملء الخانات. الهدف من اللعبة هو أن يكوِّن أحد اللاعبيْن صفًا أفقيًا أو رأسيًا أو مائلًا مكونًا من أربع خانات متصلة بأقراص اللعب الخاصة به.
      </p>
    </div>
  </div>

  
  

      
  <div className="container">
  <div className="ratio ratio-16x9" >
  <iframe className={styleconnect.rat}  src="https://app-102371.games.s3.yandex.net/102371/qvyml5zq9c8t1dt3h2m1k4kbuntyl74i/index.html?app-id=102371&amp;lang=en&amp;utm_medium=search&amp;utm_source=google&amp;utm_campaign=en-tier2_games_general-igra_all_google_search%7C14747461139&amp;utm_term=game%20now%20online#app-id=102371&amp;catalog-session-uid=catalog-2989289b-0d5e-5e4c-befe-f37dc4470c30-1645291155784-f504&amp;rtx-reqid=11659727936363334551&amp;pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22search%22%7D&amp;origin=https%3A%2F%2Fyandex.com&amp;yandexapp=false&amp;expBoxesCrypted=Vra921e6QJNzhd8rvNClNsw1Twz_m0pJKvX3aPNzgq3LyA1q9hVcGKFlo-wlzV6YhIOccfvMnuRtZRwIs4x9dc1TwnQtvtZb&amp;experiments=%7B%22gdpr_in_usa%22%3Atrue%2C%22invalidate_games_cache_from%22%3A9505309%2C%22dark_theme%22%3Atrue%2C%22recovery_code%22%3Atrue%2C%22new_unauthorized_cookie%22%3Atrue%2C%22payments_igames%22%3Atrue%2C%22merge_conflicts%22%3Atrue%7D&amp;app-id=102371"></iframe>
  
  </div>
</div>

  
  </>
}
