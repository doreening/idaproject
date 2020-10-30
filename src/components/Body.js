import React,{Component,useState,useEffect} from 'react';
import logo from '../logo.png';
import epr from '../img/epr.png';
import Navbar from '../components/Navbar.js';
import axios from 'axios';
import '../css/tailwindcss.css';

function Body(){

  const [data, setData] = useState([]);

  const [count,setCount] = useState(0);
  const [loading,setLoading] = useState(false);
  const [housechurch,setHousechuch] = useState('Welcome to House Church Platform');
  const clickHandle = () =>{
       setLoading(true)
       setCount(+1)
       setHousechuch(housechurch+2)

       setTimeout(function(){
         setLoading(false);
       },3000)
      
       }
       //let fetch information
       useEffect( ()=>{
          // async await
         const response = axios.get('https://ussdprude2.herokuapp.com/reg/endpoints/')
        //  print(response);
         .then(res=>{
           setData(res.data);
           console.log(res)
         })
         .catch((err)=>{
           console.log(err)
         })
       },[]
       );
 
    return(
      <>
      <Navbar />

        <div className="bg-gray-300 p-5 flex">
            <a href="/"><h1>Home</h1></a>
             <a href="about-us/"><h1>Home</h1></a>

    <h2>State value: {count} </h2>
    <h2>State value: {housechurch} </h2>
    <button onClick={clickHandle} >

      {loading?<p>Loading...</p>:<p>Update me</p>}
    </button>
</div>
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        

        <p>
          Hello <code>World</code> and IgiranezaPrude2 Web Master.
        </p>
        <a
          className="My-color"
          href="http://igiranezaprude2portfolio.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to House Church App
        </a>
      
      </header>
        <img src={epr} className="App-epr"  alt="epr"  />
{/*data-aos="flip-left"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" */}

     <table className="table">
                <tr>
                    <th>Id</th>
      
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Phone</th>
                </tr>
            {data.map( (item,key)=>{
                return(
                    <tr key={key}>
                    <td>{item.id}</td>
                    
                <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.phone}</td>
                </tr>
                )
            }
            )}
            </table>

      </>
    )
}

export default Body;