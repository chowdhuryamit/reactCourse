import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();

  useEffect(()=>{
    authService.getUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .finally(()=>setLoading(false))
  },[])

  if(loading){
    return(
      <div className="loading">....Loading</div>
    )
  }
  else{
    return(
      <div className='min-h-screen flex flex-wrap content-between bg-grey-400'>
        <div className='w-full block'>
          <Header/>
           <main>
            {/* <Outlet/> */}
           </main>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App
