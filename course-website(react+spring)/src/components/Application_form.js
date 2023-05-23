import React, { useState } from 'react'
import './Application_form.scss'

export default function Application_form() {

    const [id,idupdate]=useState('')

    const [email,emailupdate]=useState('')
    const [passw,passwupdate]=useState('')

    const [eduq,eduqupdate]=useState('')

    const [firstname,firstnameupdate]=useState('')
    const [lastname,lastnameupdate]=useState('')

    const [country,countryupdate]=useState('')

    const handlesubmit=(e)=>{
        e.preventDefault();
            let detailsobj={id,email,passw,eduq,firstname,lastname,country}
            console.log(detailsobj)

            fetch("http://localhost:8001/applicants",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(detailsobj)
    }).then((res)=>{
        // toast.success('Registered successfully');
        alert("applied");
        navigate('/About')
    }).catch((err)=>{
        // toast.error('Failed:'+err.message);
    });
    }
  return (
    
      <div class="form_wrapper">
  <div class="form_container">
    <div class="title_container">
      <h2>Application Form</h2>
      
    </div>
    <div class="row clearfix">
      <div class="">
        <form >
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
            <input     value={email} onChange={e=>emailupdate(e.target.value) }   type="email" name="email" placeholder="Email" required />
          </div>
          <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
            <input  value={passw} onChange={e=>passwupdate(e.target.value)} type="password" name="password" placeholder="Password" required />
          </div>
          {/* <div class="input_field"> <span><i aria-hidden="true" class="fa fa-book"></i></span>
            <input type="password" name="password" placeholder="Re-type Password" required />
            
          </div> */}
          <p>EDUCTAION QUALIFICATION</p>
          <div class="input_field select_option"> <span><i aria-hidden="true" class="fa fa-book"></i></span>
                <select value={eduq} onChange={e=>eduqupdate(e.target.value)}>
                  
                  <option>12th </option>
                  <option>Graduate</option>
                  <option>Post Graduate</option>
                </select>
                <div class="select_arrow"></div>
              </div>
              <p>FIRSTNAME - LASTNAME</p>
          <div class="row clearfix">
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input  value={firstname} onChange={e=>firstnameupdate(e.target.value)} type="text" name="name" placeholder="First Name" />
              </div>
            </div>
            <div class="col_half">
              <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                <input value={lastname} onChange={e=>lastnameupdate(e.target.value)} type="text" name="name" placeholder="Last Name" required />
              </div>
            </div>
          </div>
            	{/* <div class="input_field radio_option">
              <input type="radio" name="radiogroup1" id="rd1"/>
              <label for="rd1">Male</label>
              <input type="radio" name="radiogroup1" id="rd2"/>
              <label for="rd2">Female</label>
              </div> */}
              <p>SELECT COUNTRY</p>
              <div class="input_field select_option"> <span><i aria-hidden="true" class="fa fa-globe"></i></span>
                <select value={country} onChange={e=>countryupdate(e.target.value)}>
                  <option>India</option>
                  <option>Usa</option>
                  <option>England</option>
                  <option>......</option>
                </select>
                <div class="select_arrow"></div>
              </div>
            <div class="input_field checkbox_option">
            	<input type="checkbox" id="cb1"/>
    			<label for="cb1">I agree with terms and conditions</label>
            </div>
            <div class="input_field checkbox_option">
            	<input type="checkbox" id="cb2"/>
    			<label for="cb2">I want to receive the newsletter</label>
            </div>
          <input class="button"  onClick={handlesubmit} type='submit' value="Register" />
          
        </form>
      </div>
    </div>
  </div>
</div>


  )
}
