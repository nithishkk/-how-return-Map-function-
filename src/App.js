import React from "react";
import "./style.css";
import {data} from './Data'
// const data=[
//   {id:1, name:'nithish'},
//   {id:2, name:'meghana'},
//   {id:3, name:'ankitha'},
//   {id:4, name:'vamshi'}
// ];

export default function App() {
  const[nithish,setNithish]=React.useState(data)
 
  return (
    <div>

{/* {nithish.map(megha=>(
  <div key={megha.id}>
  <p>{megha.name}</p>
    </div>
))} */}








      {/* {nithish.map(megha=>{
        const{id,name}=megha
        return(
          <div key={id}>
            <li>{id}</li>
        <p>{name}</p>

          </div>
        )
      })} */}
     {/* {nithish.map(person=>{
      const{id,name}= nithish;
      return(
        <div key={id} className='item'>
          <h2>{name}</h2>
          <button onClick={()=>removeItem(id)}>remove</button>
        </div>
      );
    })}
    <button className='btn' onClick={()=>setPeople([])}>clear items</button> */}
    </div>
  );
}
