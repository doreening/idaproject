// import React, {useState,useEffect} from 'react';
// // import '../css/tailwindcss.css';
// // import Navbar from './Navbar';
// // import axios from 'axios';
// // import '../App.css';
// // import {useHistory} from "react-router-dom-";


// // function Login(){
// //     const[username,setUsername]=useState("")
// //     const[password,setPassword]=useState("")
// //     const[loading,setLoading]=useState("")
// //     const[message,setMessage]=useState("")
// //     let histroy=useHistory();
// //     const handlelogin=(event)=>{
// //         setLoading(true)
// //         event.preventDefault();
// //         const data={
// //             "username":username,
// //             "password":password
// //         }
// //         axios.post("", data)
// //         .then((res)=>{
// //             console.log(res.data)
// //             setMessage("Login success")
        
// //         })
// //         .catch((res)=>{
// //             console.log(err)
// //             setMessage("Login failed")
// //             histroy:Push('/')
// //         })


// //     }
// //     return(
// //     <>
// //         <Navbar/>
// //     <div onSubmit="handlelogin" className="bg-color py-12">
// //     <div className="flex flex-wrap">
// //     <div className="w-ful md:w-1/4"></div>
// //     <div className="w-ful md:w-1/4"></div>
// //     <div className="bg-gray-200 rounded-lg shadow-lg">
// //         <p className="px-4">{message}</p>
// // <form onSubmit={handleLogin} className="p-6" method="POST">
// //     <label>Username</label>
// //     <input type="text" name="username" value={username} onchange={(event=>setUsername(event.target.value))} className="py-3 rounded-full"/>
// //     <label>Password</label>
// //     <input type="text" name="password" className="py-3 rounded-full"/>
// //     <button type="submit" className="bg-green-500 rounded-full"><span>Logging.....</span><span>Login</span></button>
// //     <a href="/user-signup">Don't you have account? Register here</a>
// // </form>
// // </div>
// // </div>
// // <div>
// //     <div className="w-full md:w1/4"></div>
// //     </div>
// // </div>

// </>
//  export default Login;