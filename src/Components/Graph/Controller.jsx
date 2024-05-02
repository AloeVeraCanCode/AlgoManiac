import React from 'react'
import '../../CSS/SpanningTree/controller.css'
import EdgeInformation from './EdgeInformation'
export default function Controller(props) {
  console.log("Controller");

  const down=()=>{
    props.pressNodeFromController(true);
  }
  const up=(event)=>{
    props.pressNodeFromController(false);
    
  }
  return (
    <div className='controller'>
      <button className='NodeBtn'  onMouseDown={down} onMouseUp={up}>Node +</button>
      <EdgeInformation id={props.id} edge={props.edge} addEdge={props.addEdge} ></EdgeInformation>
      <button className='NodeBtn'>+</button>
    </div>
  )
}
