import React,{useState} from 'react'
import './Signup.css'
function Signup() {

const [formData,setFormData] = useState({
  firstName:'',
  lastName:'',
  email:'',
  password:''
})

const handleInputChange = (event)=>{
const {name,value} = event.target
setFormData((prevData)=>({...prevData,[name]:value}))
}

const handleSubmit =(event)=>{
event.preventDefault();
console.log(formData,'Result');
}

  return (
    <div className='signup-card'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>


        <label htmlFor="">First Name</label>
        <input type="text" placeholder='John' value={formData.firstName} name='firstName' onChange={(event)=>handleInputChange(event)}/>


        <label htmlFor="">Sur Name</label>
        <input type="text" placeholder='Doe'  value={formData.lastName} name='lastName' onChange={(event)=>handleInputChange(event)}/>


        <label htmlFor="">Email</label>
        <input type="email" placeholder='johndoe@mail.com' value={formData.email} name='email' onChange={(event)=>handleInputChange(event)}/>


        <label htmlFor="">Password</label>
        <input type="password" placeholder='*******' value={formData.password} name='password' onChange={(event)=>handleInputChange(event)}/>


        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );

}


export default Signup
