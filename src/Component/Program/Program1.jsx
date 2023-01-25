import React from 'react'
import styleprogram from './Program.module.css'
import { Link } from 'react-router-dom';

export default function Program1() {

  function btn() {
    window.print();
    return false
    
  }
  return <>
  <h3 className={styleprogram.programtitle}>مجالات الحضور والانتباه</h3>

  <div>
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
        <td >يجلس بمفرده بطريقة مستقلة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>
      <tr>
          <th scope="row">2</th>
          <td >يتواصل ببصره استجابه لسماع اسمه</td>
          <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
        <tr>
          <th scope="row">3</th>
          <td >ينظر ويتصل ببصره عند سماع امر</td>
          <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
        <tr>
          <th scope="row">4</th>
          <td >يستجيب للأمر (ربع ايدك - ايديك على الترابيزة)</td>
          <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
        <tr>
          <th id="M1" scope="row">منهج متوسط</th>
        </tr>
  
        <tr>
          <th scope="row">5</th>
          <td >يتواصل بصرياً لمدة خمس ثواني استجابة لسماع اسمه</td>
          <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
        <tr>
          <th scope="row">6</th>
          <td >يتواصل بصرياً استجابه لسماع اسمه اثناء اللعب</td>
          <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
        <tr>
          <th scope="row">7</th>
          <td >يتواصل بصرياً من على مسافة</td>
          <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
        <tr>
          <th scope="row">8</th>
          <td >ينطق بنعم عندما يناديه أحد</td>
          <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
        <tr>
          <th id="M1" scope="row">منهج متقدم</th>
        </tr>
  
        <tr>
          <th scope="row">9</th>
          <td >يتصل ببصره خلال المحادثة</td>
          <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
        <tr>
          <th scope="row">10</th>
          <td >يتصل ببصره اثناءالتعلم الجماعي</td>
          <td><input id="input_style" type="checkbox"/><span id="input_style">مهارة منتهية</span><input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
        </tr>
  
  
  
  
  
      </tbody>

</table>

  </div>
  
  <button onClick={btn} className={styleprogram.ready}>طباعه</button>
<Link to='/particle1' className={styleprogram.ready}>تدريبات الحضور والانتباه: </Link>


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
