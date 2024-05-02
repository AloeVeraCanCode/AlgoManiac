import React,{useContext, useState} from 'react'
import destlogo from '../../images/destination.png';
import '../../CSS/PathFinding/grid.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Node from './Node';
let rend=0,sx=0,sy=0,ex=0,ey=0,z=[];
function initialize(setGrid,end,setEnd)
{
    for(let i=0;i<25;i++)
    {
      let y=[]
      for(let j=0;j<40;j++)
      {
          y.push({
          row:i,
          col:j,
          isStart:false,
          isEnd:false,
          color:"white",
          isAnimate:"nothing",
          symbol:"none",
          icon:false
      });
      }
      z.push(y);
  }
  
  sx=Math.floor(Math.random() * 25);
  sy=Math.floor(Math.random() * 40);
  ex=Math.floor(Math.random() * 25);
  ey=Math.floor(Math.random() * 40);
  z[sx][sy].isStart=true;
  z[ex][ey].isEnd=true;
  
    setGrid(z);
     setEnd([[sx,sy],[ex,ey]]);
}
async function animate(populate,setGrid)
{
  populate.map((e)=>{
    z[e[0]][e[1]].isAnimate="id2";
  });
  setGrid(z);
}
export default function Grid(props){
  const [pressed,setPressed]=React.useState(false);
  const [pressedStart,setPressedStart]=React.useState(false);
  const [pressedEnd,setPressedEnd]=React.useState(false);
  const [start,setStart]=React.useState(false)
  const [end,setEnd]=React.useState(false)
  let grid=props.grid;let setGrid=props.setGrid;
  z=grid;
  // z=grid;
  if(!rend){
    initialize(setGrid,props.endPoints,props.setEndPoints);
  }
  rend++;
  let pos=false;

    const clicked=(event,row,col)=>{
    let x=Array.from(z);
    
    setPressedEnd(false);
    setPressedStart(false);
    setPressed(false);
    if(x[row][col].color=="white")x[row][col].color='black';else x[row][col].color='white';
    setGrid(x);
    } 
     const toggleWallColor=(event,row,col)=>{
      let x=Array.from(z);
        if(!pressed)return;
        if(pressedStart)
        { sx=row;sy=col;
          x[row][col].isStart=true;setGrid(x);return;
        }
        if(pressedEnd)
        { ex=row;ey=col;
          x[row][col].isEnd=true;setGrid(x);return;
        }
       props.setEndPoints([[sx,sy],[ex,ey]]);
        if(x[row][col].color=="white")x[row][col].color='black';else x[row][col].color='white';
        setGrid(x);
     }
    const press=(event,row,col)=>{
        let x=Array.from(z);
        event.preventDefault();
        if(x[row][col].isStart){ setPressedStart(true);}
        else if(x[row][col].isEnd)
        {
          setPressedEnd(true);
        }
        setPressed(true);
        setGrid(x);
    }
    const release=(event,row,col)=>{
      let x=Array.from(z);
        if( pressed&& pressedStart){setStart(true);x[row][col].isStart=true;sx=row;sy=col;setGrid(x);}
        else if( pressed&& pressedEnd){setEnd(true);x[row][col].isEnd=true;ex=row;ey=col;setGrid(x);}
         setPressedEnd(false);
         setPressedStart(false);
         setPressed(false);
          props.setEndPoints([[sx,sy],[ex,ey]]);
    }
    const mouseOut=(event,row,col)=>{
      let x=Array.from(z);
      if( pressed&& pressedStart){x[row][col].isStart=false;sx=row;sy=col;}
      if( pressed&& pressedEnd){x[row][col].isEnd=false;ex=row;ey=col;}
      setEnd([[sx,sy],[ex,ey]]);
      
    }
  return (
    <div className='grid'>
    <table style={{borderCollapse: 'collapse',userSelect:'none'}}>
    {
      grid.map((row,i)=>{
      return(  <tr>
       { row.map((elem,j)=>{
          return(<Node icon={elem.icon} symbol={elem.symbol} isAnimate={elem.isAnimate} row={i} col={j} color={elem.color} isWall={elem.isWall} isStart={elem.isStart} isEnd={elem.isEnd} clicked={clicked} press={press} mouseOut={mouseOut} release={release}  toggleWallColor={toggleWallColor}></Node>)
        })
       }
        </tr>)
      })
    }
    </table>
    </div>
  )
}
