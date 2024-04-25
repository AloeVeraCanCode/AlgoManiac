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
  let row=props.row,col=props.col;
  return (
    <td style={{lineHeight:0,height:25,width:25,border:'1px solid gray',padding:0,backgroundColor:props.color,draggable:'false'} }
    className={props.isAnimate}
    onClick={(event)=>props.clicked(event,row,col)} onMouseDown={(event)=>props.press(event,row,col)} onMouseUp={(event)=>props.release(event,row,col)} onMouseEnter={(event)=>props.toggleWallColor(event,row,col)}onMouseOut={(event)=>props.mouseOut(event,row,col)}>{props.icon&&<img src={convert[props.symbol]} style={{objectFit:'cover', width: '100%',  maxHeight: '100%', display:'block', zIndex:1}}></img>}{props.isEnd && <img src={destlogo} style={{objectFit:'cover', width: '100%',  maxHeight: '100%', display:'block'}}></img>}{props.isStart && <img src={homeLogo} style={{objectFit:'cover', width: '100%',  maxHeight: '100%',display:'block'}}></img>}</td>
  )
}
