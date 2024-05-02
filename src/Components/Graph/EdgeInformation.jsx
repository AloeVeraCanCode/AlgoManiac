import React from 'react'

export default function EdgeInformation(props) {
  console.log(props.edge)
  return (
    <div className='edge'>
      <div >Node {props.id}</div>
      {
        props.edge.map((x)=>{return(<p style={{'background-color':'grey'}}>Edge:<text style={{'background-color':'white'}}>{x}</text></p>)})
      }
    </div>
  )
}
