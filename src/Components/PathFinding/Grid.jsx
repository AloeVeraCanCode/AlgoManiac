import React from 'react'
import destlogo from '../../images/destination.png';
import '../../CSS/PathFinding/grid.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
export default function Grid(){
  return (
    <div className='grid'>
    <table>
    {(()=>{
    let z=[]  
    for(let i=0;i<19;i++)
    {
      z.push(
        <tr>
        {
          (()=>{
            let xy=[];
            for(let j=0;j<40;j++){
              xy.push(<td style={{lineHeight:0,height:25,width:25,border:'1px solid black',padding:0 }}><img src={destlogo} style={{objectFit: 'contain',width: '100%',maxHeight:' 100%'}}></img></td>);
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
