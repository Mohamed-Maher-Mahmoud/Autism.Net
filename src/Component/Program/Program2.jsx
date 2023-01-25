
import React from 'react'
import styleprogram from './Program.module.css'
import { Link } from 'react-router-dom';

export default function Program2() {

  function btn() {
    window.print();
    return false
    
  }
  return <>
  <h3 className={styleprogram.programtitle}>مجالات التقليد</h3>

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
      <td >يقلد حركات الجسم الكبرى</td>
      <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td >يقلد حركات (أفعال) باستعمال أشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td >يقلد الحركات الدقيقة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">4</th>
        <td >يقلد حركات الفم والشفاه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th id="M1" scope="row">منهج متوسط</th>
      </tr>

      <tr>
        <th scope="row">5</th>
        <td >يقلد الحركات الكبرى من وضع الوقوف</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">6</th>
        <td >يقلد حركات كبرى متسلسلة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">7</th>
        <td >يقلد حركات متسلسلة بالاشياء</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">8</th>
        <td >يقلد حركات مقترنة بالاصوات</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">9</th>
        <td >يقلد نماذج بالمكعبات</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">10</th>
        <td >ينسخ رسوم بسيطة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th id="M1" scope="row">منهج متقدم</th>
      </tr>

      <tr>
        <th scope="row">11</th>
        <td >يقلد تتابع معقد</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">12</th>
        <td >يقلد لعبة معقدة</td>
        <td><input id="input_style" type="checkbox"/><span id="input_style">مهارة منتهية</span><input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">8</th>
        <td >يقلد استجابات اقرانه اللفظية</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>





      
    </tbody>
  </table>

  <button onClick={btn} className={styleprogram.ready}>طباعه</button>
  <Link to='/particle2' className={styleprogram.ready}>تدريبات مجال التقليد: </Link>

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
