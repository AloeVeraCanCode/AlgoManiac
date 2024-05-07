import React from 'react'
import '../../CSS/SpanningTree/controller.css'
import EdgeInformation from './EdgeInformation'
export default function Controller(props) {
  const [addNow,setAddNew]=React.useState(false);
  const [newNode,setNewNode]=React.useState([0,0]);

  console.log("Controller");

  const down=()=>{
    props.pressNodeFromController(true);
  }
  const up=(event)=>{
    props.pressNodeFromController(false);
  }
  const newEdge=(event)=>{
    setAddNew(true);
  }
  const changeNode=(x,y)=>{
    setNewNode([x,y]);
  }
  const saveNewEdge=()=>{
    setAddNew(false);
    props.addEdge(props.id,newNode[0],newNode[1]);
  }
  return (
    <div className='controller'>
      <button className='NodeBtn'  onMouseDown={down} onMouseUp={up}>Node +</button>
      <EdgeInformation id={props.id} edge={props.edge} addEdge={props.addEdge} addNow={addNow} changeNode={changeNode} newNode={newNode}></EdgeInformation>
      <button className='NodeBtn' onClick={saveNewEdge}>Save</button>
      <button className='NodeBtn' onClick={newEdge}>+</button>
    </div>
  )
}
