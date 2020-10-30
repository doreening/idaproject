import React, {useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';

function Signup(){
    const[firstname, setFirstname]=useState("");
    const[lastname, setLastname]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const handleForm =(e)=>{
        e.preventDefault();
        const data={
            "firstname": firstname,
            "lastname": lastname,
            "phone": email

        }
        // let us send data to endpoint
        axios.post("http://localhost:8000/endpoint/",data)
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
          })
        
    }
    return (
        <>
        <Navbar/>
        <div >
        <div className="grid grid-cols-3 gap-4 mt-12">
            <div>1</div>
       {/* also here you can use flex instead of grid <div className="flex flex-col-3 gap-4"> */}
        <div className="bg-gray-100 rounded-ly py-4 shadow-md">
        <p className="p-2 text-center text-3xl font-bold text-gray-400">User creation</p>
      {/* ?Also if you want to be center you can do this<p className="p-2 text-center text-gray-400">User creation</p> */}
        {/* <center><hr className="w-64 text-gray"></hr></center> */}
        {/* <input type="text" name="firstname"></input> */}
        <form onSubmit={handleForm} className="p-12">
            <label>Firstname{firstname}</label>         
        <input type="text" name="firstname" value={firstname} onChange={event=> setFirstname(event.target.value)} placeholder="Enter your firstname" className="w-full border py-4 px-4 rounded-lg"></input> 
            <label>Lastname</label>
         <input type="text" name="lastname" value={lastname} onChange={event=> setLastname(event.target.value)} placeholder="Enter your lastname" className="W-full border py-4 px-4 rounded-lg"></input> 
         <label>Email</label>
         <input type="text" name="email" value={email} onChange={event=> setEmail(event.target.value)} placeholder="Enter your email" className="w-full border py-4 px-4 rounded-lg"></input> 
         <label>Password</label>
         <input type="text" name="password" value={password} onChange={event=> setPassword(event.target.value)} placeholder="Enter your password"></input> 
            <button name="" type="submit" className="bg-blue-500 rounded-lg">
                <span>Create account</span></button>
        </form>
        </div>
        </div>
        </div>
        </>
    )
}
export default Signup;