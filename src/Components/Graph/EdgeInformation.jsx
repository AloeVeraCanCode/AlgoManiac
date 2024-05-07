import React from 'react'

export default function EdgeInformation(props) {
  console.log(props.edge)
  const changeNode=(event)=>{
    console.log(document.getElementById("input1").value)
    props.changeNode(document.getElementById("input1").value,document.getElementById("input2").value);
  }
  return (
    <div className='edge'>
      <div >Node {props.id}</div>
      <div className='edgeInfo'>
      <table>
      <tr>
      <th>
        Next
      </th>
      <th>
        Cost
      </th>
      </tr>
      {
        props.edge.map((x)=>{return(<tr><td >{x[0]}</td><td >{x[1]}</td></tr>)})
      }
      {props.addNow&&<tr ><td ><input style={{width:40}}type="number" id="input1" onChange={changeNode}defaultValue={props.newNode[0]}/></td><td ><input style={{width:40}}type="number"id="input2"  onChange={changeNode}defaultValue={props.newNode[1]}/></td></tr>}
      </table>
      </div>
    </div>
  )
}
