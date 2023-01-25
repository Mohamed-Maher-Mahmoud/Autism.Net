import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import imgL from './img/top-view-non-binary-kids-playing-with-colorful-game_23-2148779611.webp'
import axios from 'axios'
import Joi from 'joi'





export default function Login({saveUserData}) {

  let navigate = useNavigate();

  const [errorList, seterrorList] = useState([]);
 
  const [isLoading, setisLoading] = useState(false);
  const [user, setuser] = useState({
    email:'',
    password:''
  })

  function getUserData(eventInfo) {
    let myUser = {...user};
    myUser[eventInfo.target.name] = eventInfo.target.value;
    setuser(myUser);
    //console.log(myUser)
  }

 async function sendLoginDataToAPi() {

 let {data} = await axios.post(`https://route-movies-api.vercel.app/signin` , user);
 if(data.message === 'success') {

  setisLoading(false)
  localStorage.setItem('userToken' , data.token); // بحطو ف local
  saveUserData();
  navigate('/')

  //login
 }
 else {
  setisLoading(false)

 }

  }

  function submitLoginForm(e) {

    e.preventDefault();
    setisLoading(true)
   let validate = validateLoginForm();
   if(validate.error) {

    setisLoading(false);
    seterrorList(validate.error.details);
   }
   else {

    sendLoginDataToAPi();
  }
}

  function validateLoginForm() {
 let schema = Joi.object({
      
      email:Joi.string().email({tlds: {allow: ['com' , 'net']}}),
      password:Joi.string().pattern(/^[A-Z][a-z]{3,8}/)
    });
    return schema.validate(user , {abortEarly:false});
  }



  return <>
  
  <div className='main-cont my-5'>
    <div className='container p-lg-5'>
      <div className='Login card o-hidden border-0 shadow-lg'>
         <div className='card-body p-0'>
           <div className='row'>

             <div className='col-lg-6 d-none d-lg-block bg-Login-image'>
              <img className='w-100 h-100' src={imgL} alt=''/>
             </div>

             <div className='col-lg-6 graay'>
             <div className='py-5 px-2'>

             <div className='text-center'>
              <h1 className='h4 text-gray-900 mb-4' >تسجيل الدخول  </h1>
             </div>



<form onSubmit={submitLoginForm}   className='user text-white'>

  <div  className='form-group'>
  <input  onChange={getUserData} type="email" name="email" id="email" placeholder='Email Address'
        className='my-3 form-control form-control-user' />
        {errorList.filter(
                  (err) => err.context.label === "email"
                )[0] ? (
                  <div className="text-danger ">
                    {
                    'ادخل البريد الألكتروني'
                    }
                  </div>
                ) : null}
  </div>


  <div  className='form-group'>
  <input onChange={getUserData} type="password" name="password" id="password" placeholder='Password'
  className='my-3 form-control form-control-user' />
  {errorList.filter(
                  (err) => err.context.label === "password"
                )[0] ? (
                  <div className="text-danger ">
                    {
                      "كلمة السر خاطئه"
                    }
                  </div>
                ) : null}
  </div>

  <button type="submit" name="submitButton" 
  className='btn btn-primary text-white submitButton w-100 py-2 btn-user btn-block'>
    {isLoading === true?<i className='fas fa-spinner fa-spin'></i>:'Log In'}
    

    </button>
</form>

<hr/>
<div className='text-center'>
  <span className='small' >هل نسيت كلمة السر ؟ </span>
  <Link to='/register' className='small a2 cursor ms-2'>
انشاء حساب
  <i className='fas fa-chevron-right small'></i>
  </Link>

</div>
 </div>
  </div>
   </div>
    </div>
      </div>
        </div>
          </div>
  
  </>
  
}
