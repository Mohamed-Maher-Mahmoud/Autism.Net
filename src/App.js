import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import Fun from './Component/Activities/Fun/Fun';
import Practicale from './Component/Activities/Practical/Practical';
import Articlesone from './Component/Library/Article/Articleone';
import ArticlesTwo from './Component/Library/Article/ArticleTwo';
import ArticleThree from './Component/Library/Article/ArticleThree'
import VidioOne from './Component/Activities/Vidios/VidioOne';
import VidioTwo from './Component/Activities/Vidios/VidioTwo';
import VidioThree from './Component/Activities/Vidios/VidioThree';
import Program from './Component/Program/Program';
import Queries from './Component/Queries/Queries';
import Scale from './Component/Scale/Scale';
import StartScale from './Component/Scale/StartScale';
import ConnectFour from './Component/Activities/Fun/ConnectFour/ConnectFour';
import Similar from './Component/Activities/Fun/ConnectFour/Similar';
import Puzzle from './Component/Activities/Fun/ConnectFour/Puzzle';
import Program1 from './Component/Program/Program1'
import Program2 from './Component/Program/Program2'
import Program3 from './Component/Program/Program3'
import Program4 from './Component/Program/Program4'
import Program5 from './Component/Program/Program5'
import Program6 from './Component/Program/Program6'
import Program7 from './Component/Program/Program7'
import Program8 from './Component/Program/Program8'
import Program9 from './Component/Program/Program9'
import Particle1 from './Component/Particle/Particle1';
import Particle2 from './Component/Particle/Particle2';
import Particle3 from './Component/Particle/Particle3';
import Particle4 from './Component/Particle/Particle4';
import Particle5 from './Component/Particle/Particle5';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import {Offline} from 'react-detect-offline';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute'







function App() {

  useEffect(()=>{

    if(localStorage.getItem('userToken') !==null){
      saveUserData();
    }

  } , []) 
  
  const [userData, setuserData] = useState(null);

  function saveUserData() {
    let encodedToken = localStorage.getItem('userToken'); 
  let decodedToken =  jwtDecode(encodedToken);
  setuserData(decodedToken); 
  }


  let routers = createBrowserRouter([

    {path:'/' , element:<Layout setuserData={setuserData} userData={userData}/> , children:[
      {index:true , element:<ProtectedRoute userData={userData}><Home/></ProtectedRoute>},
      {path:"fun" , element:<Fun/>},
      {path:"practicale" , element:<ProtectedRoute userData={userData}><Practicale/></ProtectedRoute>},
      {path:"articleone" , element:<ProtectedRoute userData={userData}><Articlesone/></ProtectedRoute>},
      {path:"articletwo" , element:<ProtectedRoute userData={userData}><ArticlesTwo/></ProtectedRoute>},
      {path:"articlethree" , element:<ProtectedRoute userData={userData}><ArticleThree/></ProtectedRoute>},
      {path:"program" , element:<ProtectedRoute userData={userData}><Program/></ProtectedRoute>},
      {path:"queries" , element:<ProtectedRoute userData={userData}><Queries/></ProtectedRoute>},
      {path:"scale" , element:<ProtectedRoute userData={userData}><Scale/></ProtectedRoute>},
      {path:"startscale" , element:<ProtectedRoute userData={userData}><StartScale/></ProtectedRoute>},
      {path:"connectfour" , element:<ProtectedRoute userData={userData}><ConnectFour/></ProtectedRoute>},
      {path:"similar" , element:<ProtectedRoute userData={userData}><Similar/></ProtectedRoute>},
      {path:"puzzle" , element:<ProtectedRoute userData={userData}><Puzzle/></ProtectedRoute>},
      {path:"program1" , element:<ProtectedRoute userData={userData}><Program1/></ProtectedRoute>},
      {path:"program2" , element:<ProtectedRoute userData={userData}><Program2/></ProtectedRoute>},
      {path:"program3" , element:<ProtectedRoute userData={userData}><Program3/></ProtectedRoute>},
      {path:"program4" , element:<ProtectedRoute userData={userData}><Program4/></ProtectedRoute>},
      {path:"program5" , element:<ProtectedRoute userData={userData}><Program5/></ProtectedRoute>},
      {path:"program6" , element:<ProtectedRoute userData={userData}><Program6/></ProtectedRoute>},
      {path:"program7" , element:<ProtectedRoute userData={userData}><Program7/></ProtectedRoute>},
      {path:"program8" , element:<ProtectedRoute userData={userData}><Program8/></ProtectedRoute>},
      {path:"program9" , element:<ProtectedRoute userData={userData}><Program9/></ProtectedRoute>},
      {path:"particle1" , element:<ProtectedRoute userData={userData}><Particle1/></ProtectedRoute>},
      {path:"particle2" , element:<ProtectedRoute userData={userData}><Particle2/></ProtectedRoute>},
      {path:"particle3" , element:<ProtectedRoute userData={userData}><Particle3/></ProtectedRoute>},
      {path:"particle4" , element:<ProtectedRoute userData={userData}><Particle4/></ProtectedRoute>},
      {path:"particle5" , element:<ProtectedRoute userData={userData}><Particle5/></ProtectedRoute>},
      {path:"videoone" , element:<ProtectedRoute userData={userData}><VidioOne/></ProtectedRoute>},
      {path:"videotwo" , element:<ProtectedRoute userData={userData}><VidioTwo/></ProtectedRoute>},
      {path:"videothree" , element:<ProtectedRoute userData={userData}><VidioThree/></ProtectedRoute>},
      {path:"register" , element:<Register/>},
      {path:"login" , element:<Login saveUserData={saveUserData} />},
      {path:'*' , element:<ErrorPage/>}

      
      


    ]}

  ])




  return <>
  <Offline> <div className='offline'>النت غير موصل </div> </Offline>
<RouterProvider router={routers}/>
  
  </>
}

export default App;
