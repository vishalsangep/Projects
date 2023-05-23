import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Swiper-home.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import Card from "./Card";

export default function FreeC() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card  imgM="https://e0.pxfuel.com/wallpapers/411/344/desktop-wallpaper-black-java-for-tech-java-programming.jpg" title="JAVA" subtitle="Core Java"  content="Java Fundamentals
                                                                                                                                                                                    OOPs Concepts
                                                                                                                                                                                    Overloading & Overriding
                                                                                                                                                                                    Inheritance with Interface and Abstract Class
                                                                                                                                                                                    Exception Handling
                                                                                                                                                                                    Packages" /></SwiperSlide>


        <SwiperSlide><Card  imgM="https://c4.wallpaperflare.com/wallpaper/544/77/284/programming-programming-language-python-programming-logo-hd-wallpaper-preview.jpg" title="PYTHON" subtitle="Python Basics"  content="Operators in Python – Assignment, Logical, Arithmetic etc. Taking User Input (Console) Conditional Statements – If else and Nested If else and elif. Python Collections (Arrays) – List, Tuple, Sets and Dictionary. Loops in Python – For Loop, While Loop & Nested Loops." /></SwiperSlide>


        <SwiperSlide><Card  imgM="https://p4.wallpaperbetter.com/wallpaper/887/817/276/html-5-html-5-logo-wallpaper-preview.jpg" title="HTML" subtitle="Html 5"  content="HTML stands for Hyper Text Markup Language.
                                                                                                                                                                                HTML is the standard markup language for creating Web pages.
                                                                                                                                                                                HTML describes the structure of a Web page.
                                                                                                                                                                                HTML consists of a series of elements.
                                                                                                                                                                                HTML elements tell the browser how to display the content" /></SwiperSlide>


        <SwiperSlide><Card  imgM="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TycZFBU5oqcFng7-QBrVRkft1Xbi_Dy7kEO0SaCJfA&usqp=CAU&ec=48665701" title="CSS" subtitle="Basic Styling"  content="CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features " /></SwiperSlide>
        

        <SwiperSlide><Card  imgM="https://besthqwallpapers.com/Uploads/19-2-2020/122227/thumb-javascript-glitter-logo-programming-language-grid-metal-background-javascript-creative.jpg" title="JAVA SCRIPT" subtitle="Core JS Concepts"  content="JavaScript Basics. React is a JS framework and you'll be using JavaScript extensively in your React code. ...
                                                                                                                                                                                                            The Ternary Operator. 
                                                                                                                                                                                                          Destructuring. 
                                                                                                                                                                                                          The Spread operator. 
                                                                                                                                                                                                          Array methods. 
                                                                                                                                                                                                          Arrow Functions. " /></SwiperSlide>


        <SwiperSlide><Card  imgM="https://c8.alamy.com/zooms/6/780d663392a84cbe8e5abf9604ebe848/2m7rgmg.jpg" title="MYSQL" subtitle="Basic Queries"  content="MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL) . A database is a structured collection of data. It may be anything from a simple shopping list to a picture gallery or a place to hold the vast amounts of information in a corporate network." /></SwiperSlide>
        
        
        
      </Swiper>
    </>
  );
}
