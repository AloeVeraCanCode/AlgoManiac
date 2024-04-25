import React,{useContext, useState} from 'react'
import destlogo from '../../images/destination.png';
import '../../CSS/PathFinding/grid.css';
import '../../CSS/PathFinding/Node.css';
import da from '../../images/down arrow.png';
import la from '../../images/left arrow.png';
import ra from '../../images/right arrow.png';
import ua from '../../images/up arrow.png';
import homeLogo from '../../images/homepage-green-icon.png'
import { Context } from '../../Pages/PathFinding/GridContext';
let convert={
  da:da,
  ua:ua,
  la:la,
  ra:ra
}
export default function Node(props) {
    // const [wall,setWall]=React.useState("white")
    // const [start,setStart]=React.useState(props.start)
    // const [end,setEnd]=React.useState(props.end)
    // const grid=useContext(Context);
    // console.log(props.row+","+props.column)
    // console.log(grid);
    // console.log('Inside Node');
    // let id =`id${props.row}${props.column}`;
    // console.log(id);
    // // if(start){
    // //   let x=grid.grid;
    // //     x[props.row][props.column]=2;
    // //     grid.setGrid(x);
    // // }
    // // else if(end){
    // //   let x=grid.grid;
    // //     x[props.row][props.column]=3;
    // //     grid.setGrid(x);
    // // }
    // const toggleCell=()=>{
    //     let x=grid.grid;
    //     x[props.row][props.column]=1-x[props.row][props.column];
    //     grid.setGrid(x);
    // }
    // // console.log("Node"+wall)
    // const clicked=()=>{
    //   // if(start||end)return;
    //   console.log("Clicked");
    //   props.setPressedEnd(false);
    //   props.setPressedStart(false);
    //     props.setPressed(false);
    //     if(wall=="white")setWall("black");else setWall("white");
    //     toggleCell();
    // } 
    //  const toggleWallColor=()=>{
    //     if(!props.pressed)return;
    //     console.log("Enter");
    //     if(props.pressedStart)
    //     {
    //        setWall('white');setStart(true);console.log("Ya###");return;
    //     }
    //     if(props.pressedEnd)
    //     {
    //        setWall('white');setEnd(true);console.log("Ya###");return;
    //     }
    //     console.log("Clicked"+wall)
    //     if(wall=="white")setWall("black");else setWall("white");
    //     console.log("Clicked"+wall);
    //     toggleCell();
    //  }
    // const press=(event)=>{
    //   console.log("Pressed");
    //   event.preventDefault();
    //     console.log("Pressed"+start);
    //     if(start){props.setPressedStart(true);}
    //     else if(end)
    //     {
    //       props.setPressedEnd(true);
    //     }
    //     props.setPressed(true);
    //     // if(wall=="white")setWall("black");else setWall("white");
    // }
    // const release=(event)=>{
    //     console.log("Released");
    //     if(props.pressed&&props.pressedStart&&start){setStart(true);console.log("Ya!!!!!!");let x=grid.grid;x[props.row][props.column]=2;grid.setGrid(x);}
    //     else if(props.pressed&&props.pressedEnd&&end){setEnd(true);console.log("Ya!!!!!!");let x=grid.grid;x[props.row][props.column]=3;grid.setGrid(x);}
    //     props.setPressedEnd(false);
    //     props.setPressedStart(false);
    //     props.setPressed(false);
    // }
    // const mouseOut=()=>{
    //   console.log("Out");
    //   if(props.pressed&&props.pressedStart&&start){setStart(false);console.log("Ya@@@@");}
    //   if(props.pressed&&props.pressedEnd&&end){setEnd(false);console.log("Ya@@@@");}
    // }
    // console.log("Node")
    // console.log(grid);
    let row=props.row,col=props.col;
    // console.log(props.isAnimate)
  return (
    <td style={{lineHeight:0,height:25,width:25,border:'1px solid gray',padding:0,backgroundColor:props.color,draggable:'false'} }
    className={props.isAnimate}
        onClick={(event)=>props.clicked(event,row,col)} onMouseDown={(event)=>props.press(event,row,col)} onMouseUp={(event)=>props.release(event,row,col)} onMouseEnter={(event)=>props.toggleWallColor(event,row,col)}onMouseOut={(event)=>props.mouseOut(event,row,col)}>{props.icon&&<img src={convert[props.symbol]} style={{objectFit:'cover', width: '100%',  maxHeight: '100%', display:'block', zIndex:1}}></img>}{props.isEnd && <img src={destlogo} style={{objectFit:'cover', width: '100%',  maxHeight: '100%', display:'block'}}></img>}{props.isStart && <img src={homeLogo} style={{objectFit:'cover', width: '100%',  maxHeight: '100%',display:'block'}}></img>}</td>
  )
}
