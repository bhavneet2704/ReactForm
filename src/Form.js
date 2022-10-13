import React from 'react'
import { useState } from 'react';
import {useEffect} from 'react';

export default function Form() {
    function handleData(e){
        setInputData({...inputData, [e.target.name]: 
            e.target.value})
    }
    const data={name:"",email:"",password:""};
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);
    // useState(default state)
    // useState always returnss an arr of 2 values inn which first one is current state n 2nd one is the fn used 
    // for updating its state
    useEffect(() =>{
        console.log("Registered")
    }, [flag])

    //fn,dependency
    console.log(inputData);
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Input Fields are Mandatory")
        }
        else{
            setFlag(true)
        }
    }
    
return (
    
    <>
     <pre className='confirmH'>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
     <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>REGISTRATION FORM</h1>
       </div>
         <div>
            <input type="text" value={inputData.name} placeholder='Enter Your Name' name='name' onChange={handleData}/>
        </div>
         <div>
           <input type="text" value={inputData.email} placeholder='Enter Your Email' name='email' onChange={handleData}></input>
        </div>
         <div>
            <input type="text" value={inputData.password} placeholder='Enter Your Password' name='password' onChange={handleData}></input>
        </div>
        <br/>
        <br/>
       
        <button type='submit'>Submit</button>
        <br/>
        <br/>
        <br/>
     </form>
    </>
)
}