import React,{useState,useNavigate} from 'react';
import Navbar from '../components/Navbar';
import {Link} from "react-router-dom";
function Login() {
  const[values,setValues] = useState({email:"",password:""})
  //let navigate= useNavigate();

    const handleSubmit= async(e)=>{
      e.preventDefault();
      const response=await fetch("http://localhost:5000/api/loginUser",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:values.email,password:values.password})
      });
      const data= await response.json();
      console.log(data);

      if(data.success){
        localStorage.setItem("userEmail",values.email);
        localStorage.setItem("authToken",data.authToken);
        //console.log(localStorage.getItem("authToken"))
        window.location.href="/";
      }
      else{
        alert("Enter Valid Credentials")
      }
    }
    const setChange=(event)=>{
        setValues({...values,[event.target.name]:event.target.value})
    }
  
  return (
    <div>
      <div><Navbar/></div>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="text" className="form-control"  placeholder="Enter email" name='email' value={values.email}  onChange={setChange}/>
 
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  placeholder="Password" name='password' value={values.password} onChange={setChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/createUser" className='btn btn-success'>I am a new User</Link>
  </form>
    </div>
  )
}

export default Login
