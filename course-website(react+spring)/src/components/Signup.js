import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Signup.css'

export default function Signup() {
   
  // username is id
  const [username,usernamechange] = useState('');
  const [pass,passchange] = useState('');
  const [id,idchange] = useState('');
  const [role,rolechange] = useState('user')
  
  const [email,emailchange] = useState('');


  

  const navigate = useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    let regobj={id,username,pass,email,role};
    console.log(regobj);


    fetch("http://localhost:8000/user",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(regobj)
    }).then((res)=>{
        // toast.success('Registered successfully');
        alert("Registered successfully");
        navigate('/About')
    }).catch((err)=>{
        // toast.error('Failed:'+err.message);
    });
  }
  return (
    <div>
      <form class="container" onSubmit={handlesubmit }>
        <div class="card-signup">
            <a class="singup">Sign Up</a>
            <div class="inputBox1">
                <input value={email} onChange={e=>emailchange(e.target.value)} type="text" required="required"/>
                <span class="user">Email</span>
            </div>

            <div class="inputBox">
                <input value={username} onChange={e=>usernamechange(e.target.value) + idchange(e.target.value) +rolechange('user')} type="text" required="required"/>
                <span>Username</span>
            </div>

            <div class="inputBox">
                <input value={pass} onChange={e=>passchange(e.target.value) } type="password" required="required"/>
                <span>Password</span>
            </div>

            <button type='submit'   class="enter">Enter</button>

        </div>
    </form>
    </div>
  )
}
