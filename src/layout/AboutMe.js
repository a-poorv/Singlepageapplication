import React,{Component} from "react";
import { Route } from "react-router";
import img3 from "./img3.jpg";
function AboutMe(){
    return(

       <div className="img-size"> 

            <img src= {img3} align="left"width="200" height="170"   />

<p  align="center" >  I am Apoorv Srivastava a computer science enthusiast working as a web developer .I am
hardworking, Disciplined engineer. I take challenges positively in my life, also failures don’t dissappoints me as it teaches me to thrive towards success. I am a mature team worker and adaptable to all challenging situations I have good listening and communication skills. Main motive is to excel in my work field and acquire necessary technical knowledge.
Besides these things my hobbies include travelling , listening to musics , and in future vey kneen to start vlogging as it is the most newest idea thaht fasciantes me in recent times.
  </p>
<h2 align="center">My skills:</h2>
<p align ="center">HTML</p>

<div class="container">
  <div class="skills Html">90%</div>
</div>

<p align= "center">CSS</p>

<div class="container">
  <div class="skills Css">80%</div>
</div>

<p align="center">JavaScript</p>

<div class="container">
  <div class="skills js">65%</div>
</div>

<p align="center">React</p>

<div class="container">
  <div class="skills React">60%</div>
</div>

</div>

    );
}
export default AboutMe;