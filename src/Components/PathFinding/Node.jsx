import React,{useState} from 'react'
import destlogo from '../../images/destination.png';
import '../../CSS/PathFinding/grid.css';
import homeLogo from '../../images/homepage-green-icon.png'

export default function Node(props) {
    const [wall,setWall]=React.useState("white")
    const [start,setStart]=React.useState(props.start)
    const [end,setEnd]=React.useState(props.end)
    // console.log("Node"+wall)
    const clicked=()=>{
      // if(start||end)return;
      
      console.log("Clicked");
      props.setPressedEnd(false);
      props.setPressedStart(false);
        props.setPressed(false);
        if(wall=="white")setWall("black");else setWall("white");
    } 
     const toggleWallColor=()=>{
        if(!props.pressed)return;
        console.log("Enter");
        if(props.pressedStart)
        {
           setWall('white');setStart(true);console.log("Ya###");return;
        }
        if(props.pressedEnd)
        {
           setWall('white');setEnd(true);console.log("Ya###");return;
        }
        console.log("Clicked"+wall)
        if(wall=="white")setWall("black");else setWall("white");
        console.log("Clicked"+wall)
     }
    const press=(event)=>{
      console.log("Pressed");
      event.preventDefault();
        console.log("Pressed"+start);
        if(start){props.setPressedStart(true);}
        else if(end)
        {
          props.setPressedEnd(true);
        }
        props.setPressed(true);
        // if(wall=="white")setWall("black");else setWall("white");
    }
    const release=(event)=>{
        console.log("Released");
        if(props.pressed&&props.pressedStart&&start){setStart(true);console.log("Ya!!!!!!");}
        else if(props.pressed&&props.pressedEnd&&end){setEnd(true);console.log("Ya!!!!!!");}
        props.setPressedEnd(false);
        props.setPressedStart(false);
        props.setPressed(false);
    }
    const mouseOut=()=>{
      console.log("Out");
      if(props.pressed&&props.pressedStart&&start){setStart(false);console.log("Ya@@@@");}
      if(props.pressed&&props.pressedEnd&&end){setEnd(false);console.log("Ya@@@@");}
    }
  return (
    <td style={{lineHeight:0,height:25,width:25,border:'1px solid gray',padding:0,backgroundColor:wall,draggable:'false' }} onClick={clicked} onMouseDown={press} onMouseUp={release} onMouseEnter={toggleWallColor}onMouseOut={mouseOut}>{end && <img src={destlogo} style={{objectFit:'cover', width: '100%',  maxHeight: '100%', display:'block'}}></img>}{start && <img src={homeLogo} style={{objectFit:'cover', width: '100%',  maxHeight: '100%',display:'block'}}></img>}</td>
  )
}
