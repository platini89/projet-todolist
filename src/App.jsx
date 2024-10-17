import React, { useEffect, useState } from 'react'
import  "./style.css" 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from './Components/Form'
import Items from './Components/Items'




export default function App() {
  const[times , setTime ]= useState(1);
    useEffect(()=> { 
          setInterval(() =>{ 
            setTime(times+1)} , 1000)
          } )
       
    
  return (
    
    <div className='App'>
      <h2>{}</h2>
     <h1 className="text-center mt-3">TODO-LIST</h1>

    
     <Form></Form>
    
    
         
    </div>
  )
}
