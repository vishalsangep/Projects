import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css'
export default function Signin() {

    const [username,usernameupdate]=useState('');
    const [pass,passupdate]=useState('');

    const navigate =useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
    },[])

    const ProceedLogin=(e)=>{
        e.preventDefault();
        console.log('wokay');
        fetch("http://localhost:8000/user/"+username).then((res)=>{
           return res.json(); 

        }).then((resp)=>{
            console.log(resp);
            if(Object.keys(resp).length === 0){
                alert("Enter valid username");
            }else{
                if(resp.pass === pass){
                    sessionStorage.setItem('username',username);
                    sessionStorage.setItem('userrole',resp.role);
                    navigate('/Customer');
                    window.location.reload(true);
                }else{
                    alert("Enter valid password");
                }
            }
        }).catch((err)=>{
            alert('login falied'+err.message);
        })
    }

    const handlenewuser=()=>{
        navigate('/Home')
    }

    
  return (
    <div >
      <form class="container-signin" onSubmit={ProceedLogin}>
        <div class="card">
            <a class="login">Sign in</a>
            <div class="inputBox">
                <input value={username} onChange={e => usernameupdate(e.target.value)} type="text" required="required"/>
                <span class="user">Username</span>
            </div>

            <div class="inputBox">
                <input value={pass} onChange={e => passupdate(e.target.value)} type="password" required="required"/>
                <span>Password</span>
            </div>

            <button type='submit' class="enter">Enter</button>
            <button onClick={handlenewuser} class="enter">New user</button>
            {/* <Link  class="enter" to={'/home'}>New User</Link> */}
            
        </div>
    </form>
    </div>
  )
}
