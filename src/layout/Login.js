
import React ,{useEffect, useState} from "react";
import CSS from"./CSS/ContactMe.css";
import{useHistory} from "react-router-dom";
const Login =() => {
    let history=useHistory();
    const [UserName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const submitform=(e)=>{
      if(!UserName.trim()){
        alert('pls enter username');
        return;
      }
        if(!password.trim()){
          alert('pls enter password');
          return;
        }
      
history.push('/');
    };

return(
    <div className="login-web">
  <h2>Login to your account</h2>
  <form action="" onSubmit={submitform}>
  <input type="text"  placeholder ="username"  value={UserName} onChange={(e)=>setUserName(e.target.value)}
   />
    <input type="text" placeholder="password" value = {password} onChange={(e)=>setPassword(e.target.value)}
     />
    <button type="submit"> SUBMIT</button>
   
    
  </form>
  </div>
);

};

 export default Login;


 
