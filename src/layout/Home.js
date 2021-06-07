import React, { Component } from "react";
import img1 from "./img1.jpg";
import{Redirect} from "react-router-dom";
function Home({authorized}) {
  if(!authorized){
    return <Redirect to="/login"/>;
  }
    return (
      <div>
        <h2>welcome Home</h2>
        <img src={img1} alt=""/>
         <p> React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it.
         If you want to work with ReactJS, you need to have solid knowledge of JavaScript, HTML5, and CSS. Even though ReactJS doesn't use HTML, the JSX is similar so your HTML knowledge will be very helpful.
         </p>
      </div>
    );
  }

 
export default Home;