import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import './App.css';
import Websites from './components/websites';
import Create from './components/create';
import Update from './components/update';
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import Signin from './components/Signin';
import Customer from './components/Customer';
import Userdetails from './components/Userdetails';
import Applicants_details from './components/Applicants_details';
import Application_form from './components/Application_form';

function App() {
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   let username=sessionStorage.getItem('username');
  //   if(username==='' || username === null){
  //     navigate('/Signin')
  //   }

  // },[]);

  const [displayusername,displayusernameupdate]=useState('');
  const [showmenu,showmenuupdate]=useState(false);
  const [adminshow,adminshowupdate] = useState(false);
  const [signinshow,signinshowupdate] = useState(true);
  const [signoutshow,signoutshowupdate] = useState(false);
  const [loggedinasshow,loggedinasshowupdate]=useState(false);

  
  useEffect(()=>{

    let adminaccess = sessionStorage.getItem('userrole');
    if(adminaccess === 'admin'){
      adminshowupdate(true)
    } 


    

    let username=sessionStorage.getItem('username');
    if(username==='' || username === null){
      //     navigate('/Signin')
      
      showmenuupdate(false);
         }else{
          displayusernameupdate(username);
          showmenuupdate(true);
          signinshowupdate(false);
          signoutshowupdate(true);
          loggedinasshowupdate(true);
         }
         
  },[])


  

  const handleSignout=(e)=>{
    console.log("signout");
    alert('signout');
    sessionStorage.clear();
    window.location.reload(true);
  }
  



  return (
    
    <Router>
    <div className="App">
      
       {/* <ToastContainer  ></ToastContainer>  */}
       <div className="navv">
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Coursera</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      
        {/* <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/create">Create</Link>
        </li>
        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/update">Update</Link>
        </li> */}

        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Home"><i class="fa fa-home" aria-hidden="true"></i> Home</Link>
        </li>

        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/About"><i class="fa fa-podcast" aria-hidden="true"></i> About Us</Link>
        </li>

        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Contact"><i class="fa fa-phone" aria-hidden="true"></i> Contact Us</Link>
        </li>
        { signinshow && 
        
        <li className="nav-item align-item-nav">
          <Link class="nav-link active" aria-current="page" to="/Signin"><i class="fa fa-address-card" aria-hidden="true"></i> Sign In</Link>
        </li>
        }

        { signoutshow &&
        <li className="nav-item">
          <Link class="nav-link active"  onClick={handleSignout} aria-current="page" >Sign out</Link>
        </li>
        }


        <div> {showmenu &&
        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Customer">Customer</Link>
        </li>}
        </div>
          {showmenu &&
        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Application_form">Apply</Link>
        </li>}
        
        

          { adminshow &&
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin Menu
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to='/Userdetails'>User Details</Link></li>
            <li><Link class="dropdown-item" to='/Applicants_details'>Applicants Details</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
          }


        {loggedinasshow &&
        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" >Logged In as:{displayusername}</Link>
        </li>
        } 
        
      </ul>
    </div>
  </div>
</nav> 
    
   <Routes>
         
          
   <Route exact path='/' element={< Websites />}></Route>
   <Route exact path='/create' element={< Create />}></Route>
   <Route exact path='/home' element={< Home />}></Route>
   <Route exact path='/About' element={< About />}></Route>
   <Route exact path='/Contact' element={< Contact />}></Route>

   <Route exact path='/update' element={< Update />}></Route>
   <Route exact path='/Signin' element={< Signin />}></Route>
   <Route exact path='/Customer' element={< Customer />}></Route>
   <Route exact path='/Userdetails' element={< Userdetails />}></Route>
   <Route exact path='/Applicants_details' element={<Applicants_details />}></Route>
   <Route exact path='/Application_form' element={<Application_form />}></Route>

   
      
       </Routes>
 
       
    </div>
    </div>
    </Router>
    
  );
}

export default App;
