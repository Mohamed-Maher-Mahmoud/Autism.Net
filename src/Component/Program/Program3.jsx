
import React from 'react'
import styleprogram from './Program.module.css'
import { Link } from 'react-router-dom';

export default function Program3() {

  function btn() {
    window.print();
    return false
    
  }
  return <>
  <h3 className={styleprogram.programtitle}> مجال اللغة الاستقبالية:</h3>

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
      <th id="M1" scope="row">منهج مبدأي</th>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td >يتبع تعليمات من خطوة واحدة</td>
      <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td >يتعرف على أجزاء الجسم</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td >يتعرف على الاشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">4</th>
        <td >يتعرف على الصور</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">5</th>
        <td >يتعرف على الاشخاص المألوفين في الصور</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">6</th>
        <td >يتبع أوامر الفعل (أن يقوم بأفعال استجابة الامر)</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>



      <tr>
        <th scope="row">7</th>
        <td >يتعرف على الافعال في الصور</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">8</th>
        <td >يتعرف على الاشياء في البيئة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">9</th>
        <td >يشير الى صور في الكتاب</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">10</th>
        <td >يتعرف على استعمال الاشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">11</th>
        <td >يتعرف على الملكية</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">12</th>
        <td >يتعرف على الاصوات في</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th id="M1" scope="row">منهج متوسط</th>
      </tr>

      <tr>
        <th scope="row">13</th>
        <td >يتعرف على الحجرات</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">14</th>
        <td >يتعرف على المشاعر والانفعالات</td>
        <td><input id="input_style" type="checkbox"/><span id="input_style">مهارة منتهية</span><input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">15</th>
        <td >يتعرف على الاماكن</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">16</th>
        <td >يتبع تعليمات من خطوتين</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">17</th>
        <td >يعطي شيئين</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">18</th>
        <td >يستعيد أشياء لا يراها</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">19</th>
        <td >يتعرف على الصفات المميزة للأشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">20</th>
        <td >يتعرف على المساعدين في المجتمع(السائق - رجل المرور...)</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">21</th>
        <td >يتظاهر بعمل أشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">22</th>
        <td >يعرف فئات الاشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">23</th>
        <td >يعرف الضمائر</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">24</th>
        <td >يتبع التعليمات التي تحتوي على حروف جر</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">25</th>
        <td >يتعرف على الاشياء التي توصف له في مجال نظره</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">26</th>
        <td >يضع الكروت المتسلسلة بالترتيب</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">27</th>
        <td >يعرف المذكر والمؤنث</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">28</th>
        <td >يعرف العناصر الناقصة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">29</th>
        <td >يجيب على أسئلة الاشياء والصور</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">30</th>
        <td >يجيب بنعم او لا كاستجابة للأسئلة عن الاشياء والنشاطات</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">31</th>
        <td >يتعرف على الملكية</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
      <th id="M1" scope="row">منهج متقدم</th>
    </tr>

    <tr>
        <th scope="row">32</th>
        <td >يتبع تعليمات ذات ثلاثة خطوات</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">33</th>
        <td >يتبع تعليمات معقدة من على بعد</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">34</th>
        <td >يسمي (شخص/ مكان/ شيئ) عندما يوصف له</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
        <th scope="row">35</th>
        <td >يحدد اسم شيئ عندما يظهر جزء واحد منه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">36</th>
        <td >يعرف العناصر المتشابهة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">37</th>
        <td >يعرف العناصر المختلفة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">38</th>
        <td >يتعرف على الشيئ المختلف في صفاته عن مجموعته</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">39</th>
        <td >يجيب على أسئلة (ماذا، أين، كيف، من،...) عن قصة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">40</th>
        <td >يجيب على أسئلة (ماذا، أين، كيف، من،...) عن موضوع</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">41</th>
        <td >يتبع التعليمات (اسأل - أخبر)</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">42</th>
        <td >يجد شيئ مفقود أعطت له دلائل عن مكانه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">43</th>
        <td >يميز بين القاء سؤال وتبادل معلومات</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">44</th>
        <td >يعرف المفرد والجمع</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      





      
    </tbody>
  </table>

  <button onClick={btn} className={styleprogram.ready}>طباعه</button>
  <Link to='/particle3' className={styleprogram.ready}>  مجال اللغة الاستقبالية: </Link>
  <nav>
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