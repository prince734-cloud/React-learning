import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App= () =>{
    
    
    {/*} const [user , setuser ]= useState("Ravi")
    const changeuser = ()=>{
     setuser("Prince")};
      const [num ,setnum] = useState(0)
    
    
       return ( 
        <div>
           <h1>Hello  {user} </h1>
            <h1>Hello2 </h1>
            <h2>Number is {num}</h2>
            <h2 className='text-5xl bg-red-700'>Hello !</h2>
            <button onClick={changeuser}>User change</button>
            <button onClick={()=> setnum(num+1)}>Increment</button>
            <button onClick={()=> setnum(num-1)}>Decrement</button>
           
            
        </div> */ }
    // )
     const [username , setUsername] = useState("");
     const handlesubmit = (e) => {
        e.preventDefault ();
        console.log(username);
        setUsername("");
     }
     

    return (
        <>
        <Navbar/>
        <div>
            <form onSubmit={ (e) => {handlesubmit(e)}}>
                <input 
                value = {username}
                onChange={(e)=> {setUsername(e.target.value)}}
                className='px-4 py-2  rounded text-xl bg-white-600 w-full mb-3 ml-5 flex justify-between item-center' type="text" placeholder='Enter your name' />
                <button className='px-5 py-2 text-xl bg-emerald-600 '>Submit Response</button>
            </form>
         
        </div>
        <Footer/>
        </>
    )
}
export default App;