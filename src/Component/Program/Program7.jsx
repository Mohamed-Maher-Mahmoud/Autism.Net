import React from 'react'
import styleprogram from './Program.module.css'
import { Link } from 'react-router-dom';

export default function Program7() {

  function btn() {
    window.print();
    return false
    
  }
  return <>
  <h3 className={styleprogram.programtitle}>المجال الأجتماعي:</h3>

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
      <th id="M1" scope="row">منهج متقدم</th>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td colspan="2">يقلد حركات قرنائه</td>
      <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td colspan="2">يتبع توجيهات زملائه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td colspan="2">يجيب على أسئلة قرنائه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">4</th>
        <td colspan="2">يستجيب إلى عبارات بداية اللعب</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">5</th>
        <td colspan="2">يلعب مع قرنائه بالألعاب على اللافتات والألواح</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">6</th>
        <td colspan="2">يبادر بالرغبة باللعب مع أقرانه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>



      <tr>
        <th scope="row">7</th>
        <td colspan="2">يتبادل المعلومات مع أقرانه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">8</th>
        <td colspan="2">يعلق مع زملائه خلال اللعب</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">9</th>
        <td colspan="2">يطلب المساعدة من أقرانه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">10</th>
        <td colspan="2">يعرض المساعدة على أقرانه</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

    </tbody>
  </table>
  <button onClick={btn} className={styleprogram.ready}>طباعه</button>
  <button onClick={btn} className={styleprogram.ready}>تدريبات الحضور والانتباه:</button>



</>
}