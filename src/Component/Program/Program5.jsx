import React from 'react'
import styleprogram from './Program.module.css'
import { Link } from 'react-router-dom';

export default function Program5() {

  function btn() {
    window.print();
    return false
    
  }
  return <>
  <h3 className={styleprogram.programtitle}>المجال الأكاديمي:</h3>
  <table className={styleprogram.table}>
    <thead>
    <tr>
      <th scope="col">م</th>
      <th scope="col">الاهداف</th>
      <th scope="col">التقييم</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th id="M1" scope="row">منهج مبدأي (ما قبل الأكاديمي)</th>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td >يستطيع أن يربط ويصل بين الاشياء المتطابقة</td>
      <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td >يستطيع ان يربط ويصل بين الصور المتماثلة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td >يستطيع ان يربط ويصل بين الاشياء وصورها</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">4</th>
        <td >يستطيع ان يربط ويصل بين الالوان/ الاشكال/ الحروف/ الارقام</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">5</th>
        <td >الاشياء الغير متماثلة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">6</th>
        <td >الاشياء في مجموعاتها</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>



      <tr>
        <th scope="row">7</th>
        <td >يستكمل النشاطات البسيطة دون مساعدة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">8</th>
        <td >يتعرف على الالوان</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">9</th>
        <td >يتعرف على الاشكال</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">10</th>
        <td >يتعرف على الحروف</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">11</th>
        <td >يتعرف على الارقام</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">12</th>
        <td >يردد الارقام حتى عشرة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">13</th>
        <td >يعد الاشياء حتى 3</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      
      <tr>
        <th id="M1" scope="row">منهج متوسط (ما قبل الاكاديمي)</th>
      </tr>


      <tr>
        <th scope="row">14</th>
        <td >يصل بين العناصر من نفس الفئة</td>
        <td><input id="input_style" type="checkbox"/><span id="input_style">مهارة منتهية</span><input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">15</th>
        <td >يعطي كمية محددة من الاشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">16</th>
        <td >يصل بين الارقام والكميات</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">17</th>
        <td > يصل بين الاشكال المختلفة للحروف (أول الكلمة وآخرها)</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">18</th>
        <td >يصل بين الكلمات المتطابقة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">19</th>
        <td >يتعرف على الاكثر و الأقل</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">20</th>
        <td >يسلسل الحروف و الارقام</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">21</th>
        <td >يستكمل واجبات منزلية بسيطة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">22</th>
        <td >ينسخ الحروف و الارقام</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">23</th>
        <td >يتعرف على الاسماء المكتوبة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">24</th>
        <td >يرسم لوحات بسيطة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">25</th>
        <td >يكتب اسمه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">26</th>
        <td >يلصق ويعجن</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">27</th>
        <td >يقص بالمقص</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">28</th>
        <td >يلون داخل جدود مرسومة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      
      <tr>
        <th id="M1" scope="row">منهج متقدم (أكاديمي)</th>
      </tr>



      <tr>
        <th scope="row">29</th>
        <td >يعرف أشخاص - أماكن وأشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">30</th>
        <td >يكمل النموذج</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">31</th>
        <td >يطابق كلمات مكتوبة بأشياء وأشياء بكلمات مكتوبة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

    <tr>
        <th scope="row">32</th>
        <td >يقرأ كلمات شائعة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">33</th>
        <td >يحدد هجاء أصوات الحروف</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">34</th>
        <td >يذكر كلمة تبدأ بصوت حرف</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">35</th>
        <td >يسمي حروف في أول الكلام ووسطه وآخره</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">36</th>
        <td >يستهجأ كلمات بسيطة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">37</th>
        <td >يذكر معنى كلمة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">38</th>
        <td >يذكر مترادفات بسيطة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">39</th>
        <td >يذكر علاقات زمنية</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">40</th>
        <td >يذكر الترتيب (الاول و الثاني)</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">41</th>
        <td >يذكر كلمات مسجوعة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">42</th>
        <td >يكتب كلمات بسيطة من الذاكرة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">43</th>
        <td >يضيف اعداد احادية (تحت العشرة)</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      
    </tbody>
  </table>
  <button onClick={btn} className={styleprogram.ready}>طباعه</button>
  <Link to='/particle5' className={styleprogram.ready}>مجال ما قبل الاكاديمي: </Link>
  
  <nav >
    <ul className="pagination pagination-sm justify-content-center">
        <li className="page-item active"><Link className="page-link" to="/program1">1</Link></li>
      <li className="page-item" aria-current="page">
        <Link className="page-link" to="/program2">2</Link>
      </li>
      <li className="page-item"><Link className="page-link" to="/program3">3</Link></li>
      <li className="page-item"><Link className="page-link" to="/program4">4</Link></li>
      <li className="page-item"><Link className="page-link" to="/program5">5</Link></li>
      
      </ul>
      </nav>
  </>

  }
