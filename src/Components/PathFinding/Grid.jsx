import React from 'react'
import destlogo from '../../images/destination.png';
import '../../CSS/PathFinding/grid.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import Node from './Node';
let rend=0,sx=0,sy=0,ex=0,ey=0;
export default function Grid(){
  const [pressed,setPressed]=React.useState(false);
  const [pressedStart,setPressedStart]=React.useState(false);
  const [pressedEnd,setPressedEnd]=React.useState(false);
  let grid=[];
  if(!rend){
  sx=Math.floor(Math.random() * 25);
  sy=Math.floor(Math.random() * 40);
  ex=Math.floor(Math.random() * 25);
  ey=Math.floor(Math.random() * 40);
  console.log(sx+" "+sy)
  }
  rend++;console.log(rend)
  let pos=false;
  // for(let i=0;i<25;i++)
  // {
  //   let x=[]
  //   for(let j=0;j<40;j++)
  //   {
  //       const [wall,setWall]=React.useState("white")
  //       x.push([wall,setWall,'free']);
  //   }
  //   grid.push(x);
  // }
  return (
    <div className='grid'>
    <table style={{borderCollapse: 'collapse',userSelect:'none'}}>
    {(()=>{
    let z=[]  
    for(let i=0;i<25;i++)
    {
      z.push(
        <tr>
        {
          (()=>{
            let xy=[];
            for(let j=0;j<40;j++){console.log("Hain Hain")
              xy.push(<Node  start={(sx==i)&&(sy==j)?true:false} end={(ex==i)&&(ey==j)?true:false} sx={sx} sy={sy} pressedEnd={pressedEnd} setPressedEnd={setPressedEnd} pressed={pressed} setPressed={setPressed} pressedStart={pressedStart} setPressedStart={setPressedStart} status={'free'} row={i} column={j}></Node>);
            }
            return(xy);
          })()
        }
      </tr>

      )
    }
    return(z)
      })()
    }
       </table>
    </div>
  )
}
