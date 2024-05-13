import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
function Signup() {
    const[values,setValues] = useState({name:"",email:"",password:"",location:""})
    let navigate=useNavigate();

    const handleSubmit= async(e)=>{
      e.preventDefault();
      const response=await fetch("https://groitems.onrender.com/api/createUser",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:values.name,email:values.email,password:values.password,location:values.location})
      });
      const data= await response.json();
      console.log(data);

      if (data.success) {
        
        //save the auth toke to local storage and redirect
        localStorage.setItem('token', data.authToken)
        navigate("/login")
  
      }
      else {
        alert("Enter Valid Credentials")
      }
    }
    const setChange=(event)=>{
        setValues({...values,[event.target.name]:event.target.value})
    }
  return (
    <div>
        <div className='container'>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Name</label>
    <input type="text" className="form-control"  placeholder="Enter email" name='name' value={values.name}  onChange={setChange}/>
 
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Email</label>
    <input type="text" className="form-control"  placeholder="Password" name='email' value={values.email} onChange={setChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  placeholder="Password" name='password' value={values.password} onChange={setChange}/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Location</label>
    <input type="text" className="form-control"  placeholder="location" name='location' value={values.location} onChange={setChange}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-success'>Already a User?</Link>
</form>
</div>
    </div>
  )
}

export default Signup
