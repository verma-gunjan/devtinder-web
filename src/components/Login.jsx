import axios from "axios";
import React, { useState } from "react";
function Login(){
  const [emailId, setEmail] = useState("viratk@gmail.com");
  const [password, setPassword] = useState("Test@1234");
  const handleLogin = async () =>{
    try{
      const response = await axios.post("http://localhost:3000/login",{
        emailId,
        password
      }, {withCredentials: true});
    } catch(err){
        console.log(err);
    }
  }
  return(
    <div className="w-100 flex justify-center my-10">
      <div className="card card-side bg-base-100 shadow-sm bg-yellow-400 w-100">
      <div className="card-body">
        <h2 className="card-title">Login to your account</h2>
        <div className="card-actions justify-end">
          <div className="flex flex-col">
            <label>Email</label>
            <input type="text" value={emailId} onChange={(e) => setEmail(e.target.value)} />
            <label>Paasword</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          alt="Movie" />
      </figure>
    </div>
    </div>
  )
}
export default Login;