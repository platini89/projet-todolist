import React from 'react'
import { useState } from 'react'
import Items from './Items'
import{v4  as uuidV4} from "uuid"

export default function Form() {

  const[taches , setTaches]= useState([
      {txt: " apprendre react", id: uuidV4()},
      {txt: " apprendre bootstrap", id: uuidV4()},
      {txt: " apprendre ux/iu", id: uuidV4()}
  ])

  const[statinput, setStatinput]= useState(
   )


  const deletes = id => {
    const filterstate = taches.filter(item  => {
        return item.id != id;
    }  ) 
    setTaches(filterstate)
  }

  const linkedInput = e =>{
      setStatinput(e);
  }

  const addtodo = e=>{
    e.preventDefault();
    const nweArr = [...taches];
    const newtodo= {};
    
    newtodo.txt= statinput;
    newtodo.id = uuidV4();

    nweArr.push(newtodo);
    setTaches(nweArr);

    setStatinput('')
  }
  return (
    <div>
       <div className="m-auto px-4 col-12 col-sm-10 col-lg-6"></div>
     <form className="mb-3" onSubmit={e=>addtodo(e)}>
        <label htmlFor="tode" className="form-label-mt-3"> choses a faire  </label>
        <input value={statinput} onInput={e =>linkedInput(e.target.value)} type="text" className="form-control" id="todo" />
        <button className="mt-2 btn btn-primary d-block">Envoyer</button>
     </form>

     <h2>liste des choses a faire </h2>
     <ul className="list-group">
          {taches.map((item ) => 
          
            {return(
              <Items
              txt= {item.txt}
              Key = {item.id}
              id = {item.id}
              delFunc = {deletes}/>
              
            )

             } ) }

     </ul>
    </div>
  )
}
