import React from 'react'

export default function Items(props) {
  return (
    <div>
      <li className="border d-flex justify-content-between align-item-center p-2 m-2">
        <div className="p-3">{props.txt} </div>
          <button className="btn btn-danger p-2 h-50" onClick={()=> props.delFunc(props.id)}>
              Supprimer
          </button>
       
      </li>
    </div>
  )
}
