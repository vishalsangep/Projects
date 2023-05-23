import React, { useEffect } from 'react'


import './Home.css'
import Logoslider from './Logoslider'
import FreeC from './FreeC.jsx'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom'



export default function Home() {
  
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   let username=sessionStorage.getItem('username');
  //   if(username==='' || username === null){
  //    // navigate('/Signin');
  //   }

  // },[]);
  return (
    <>
    {/* <Logoslider/> */}
    {/* ----------SLIDER---------- */}
    <div>
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" className="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </div>
    </div>

    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="..."/>
    </div>
  </div>
  {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button> */}
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <Signup/>
</div>
      
    </div>

    

    <Logoslider/>

    <div className="home-cont">
      <div className="home-cont-left">
      <img src="https://i2-prod.mirror.co.uk/tech/article27506644.ece/ALTERNATES/s615b/0_GettyImages-1289175443.jpg" alt="" />
      </div>
      <div className="home-cont-right">
        <h3>Why choose online certification?</h3>
        <p>Online courses have become increasingly popular over the past few years, and for good reason. They offer numerous benefits over traditional in-person courses, including:

Flexibility: Online courses allow students to learn at their own pace and on their own schedule, making them ideal for those with busy schedules or other commitments.

Accessibility: Online courses are often more accessible to individuals with disabilities or those living in remote areas, who may have difficulty accessing traditional in-person courses.

Variety: Online courses offer a wide range of topics and subjects to choose from, allowing students to explore new interests or enhance their skills in their chosen field.

Affordability: Online courses are often more affordable than traditional in-person courses, as they eliminate the need for commuting or housing expenses.
</p>

      </div>
    </div>

    <div className="banner-img">
      <p className='animate__animated animate__pulse animate__infinite	infinite'>Access available all across the world!Hurry up and resgister 20%Off</p>
      {/* <img src="https://cdn.pixabay.com/photo/2015/10/30/17/42/world-1014504_960_720.jpg" alt="" /> */}
    </div>

    <div className="swipercard-container">
    <h2>Start Learning From the Basics!</h2>
    <p>As the world becomes increasingly digitized, learning how to code is becoming more and more important. Not only can coding lead to lucrative career opportunities, but it can also give you a better understanding of how the digital world around us works.</p>
    <FreeC/>
    </div>
    
    </>
  )
}
