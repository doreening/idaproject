// import React, {useState,useEffect} from 'react';
// import '../css/tailwindcss.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import axios from 'axios';

// function Register(){
//     const [firstname,setFirstname]=useState("");
//     const [lastname,setLastname]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");

//     const [loading,setLoading]=useState(false);

//     const [message,setMessage]=useState("");

//     const handleForm = (event)=>{
//         setLoading(true);
//         event.preventDefault();
//         const data={
//             "firstname":firstname,
//             "lastname":lastname,
//             "phone":email
//         }
//         // lets send data to endpoins
//         axios.post("http://127.0.0.1:8000/reg/endpoints/",data)
//         .then((res)=>{
//             console.log(res.data)
//             setLoading(false)
//             setMessage("Account created successful!")

//         })
//         .catch((err)=>{
//             console.log(err)
//             setLoading(false)
//             setMessage("Account created failed!")
//         })
//     }
//     return(
// <>
// <Navbar />
// <div>
//     <div className="flex flex-wrap mt-8 p-4">
//         {/* grid grid-cols-3 gap-4 */}
// <div className="w-full md:w-1/5"></div>

// <div className="w-full md:w-3/5   max-w-xm bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
// <p className="p-2 font-bold text-center text-3xl text-yellow-700">Ambassador Creation</p>



// <div  className="bg-green-300 text-center">{message}</div>

// <center><hr className="w-64 text-green-700"></hr></center>




// <form class="w-full max-w-lg">
//   <div class="flex flex-wrap -mx-3 mb-6">
//     <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
//         First Name
//       </label>
//       <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"   />
//       <p class="text-red-500 text-xs italic">Please fill out this field.</p>
//     </div>
//     <div class="w-full md:w-1/2 px-3">
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
//         Last Name
//       </label>
//       <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
//     </div>
//   </div>
//   <div class="flex flex-wrap -mx-3 mb-6">
//     <div class="w-full px-3">
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
//         Password
//       </label>
//       <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"  />
//       <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
//     </div>
//   </div>
//   <div class="flex flex-wrap -mx-3 mb-2">
//     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
//         City
//       </label>
//       <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"  />
//     </div>
//     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
//         State
//       </label>
//       <div class="relative">
//         <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
//           <option>New Mexico</option>
//           <option>Missouri</option>
//           <option>Texas</option>
//         </select>
//         <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//         </div>
//       </div>
//     </div>
//     <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//       <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
//         Zip
//       </label>
//       <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
//     </div>
//   </div>
//   <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
//       Sign Up
//     </button>
//     <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
//       Cancel
//     </button>

// </form>
// </div>

// <div className="w-full md:w-1/5"></div>
//     </div>
// </div>



// <Footer/>
// </>
//     )
// }
// export default Register;


