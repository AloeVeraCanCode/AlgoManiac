import React from 'react'
import '../../CSS/Sorting/BarContainer.css';
import { motion } from "framer-motion"

export default function BarContainer(props) {
    const h=300;
    var m=0;
    for(var j=0;j<props.upperarray.length;j++)
    {
        m=Math.max(props.lowerarray[j][0],m);
    }
    for(var j=0;j<props.upperarray.length;j++)
    {
        m=Math.max(props.upperarray[j][0],m);
    }
    // var heightOfBar=props.upperarray.map(elem=>{((elem[0]/m)*h)});
    // console.log(m);
    const heightMap=new Map();
    for(var j=0;j<props.lowerarray.length;j++)
    {
        heightMap.set(props.lowerarray[j][0],Math.floor((props.lowerarray[j][0]*h/m)));
    }
    for(var j=0;j<props.upperarray.length;j++)
    {
        heightMap.set(props.upperarray[j][0],Math.floor((props.upperarray[j][0]*h/m)));
    }
  return (
    <>
    <div className='bar-container'>
    {
        props.upperarray.map((elem)=><div  className={elem[1]} style={{ height: heightMap.get(elem[0]) , backgroundColor:(elem[1]=='lowerbar'?'white':(elem[1]=='current'?'#d1ff3766':'rgb(186, 236, 186)')) ,color:(elem[1]=='lowerbar'?'white':'black')}} >{elem[0]}</div>)
    }
    </div>
    <div className='bar-container'>
    {
        props.lowerarray.map((elem)=><div className={elem[1]} style={{ height: heightMap.get(elem[0]) , backgroundColor:(elem[1]=='lowerbar'?'rgb(246, 130, 80)':'white') ,color:(elem[1]=='lowerbar'?'black':'white')}} >{elem[0]}</div>)
    }
    </div>
    </>
  );
}
