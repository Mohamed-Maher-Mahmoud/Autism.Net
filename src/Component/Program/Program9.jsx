import React from 'react'
import styleprogram from './Program.module.css'
import { Link } from 'react-router-dom';

export default function Program9() {

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
      <td colspan="2">يجيب على أسئلة لماذا</td>
      <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td colspan="2">يجيب على اسئلة اذا كان</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">3</th>
        <td colspan="2">يصنع تكملة منطقية للجمل</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">4</th>
        <td colspan="2">يصف الغريب في الصور</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">5</th>
        <td colspan="2">يجيب بنعم اولا (معلومات حقيقية)</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">6</th>
        <td colspan="2">يتوقع النتائج</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>



      <tr>
        <th scope="row">7</th>
        <td colspan="2">يأخذ أفكار أخرى</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">8</th>
        <td colspan="2">يستنتج أفكار الأخرين</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">9</th>
        <td colspan="2">يقدم توضيح او تفسير</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">9</th>
        <td colspan="2">يستبعد عناصر معتمداً على خصائصها ومجموعتها</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">9</th>
        <td colspan="2">يقدم توضيح او تفسير</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

      <tr>
        <th scope="row">9</th>
        <td colspan="2">يعرف الموضوع الرئيسي في قصة ومحادثة</td>
        <td><input type="checkbox"/>مهارة منتهية<input type="checkbox"/>غير منهية مع الاستمرار<input type="checkbox"/>غير موجودة</td>
      </tr>

    </tbody>
  </table>
  <button onClick={btn} className={styleprogram.ready}>طباعه</button>
  <button onClick={btn} className={styleprogram.ready}>تدريبات الحضور والانتباه:</button>


  </>
}