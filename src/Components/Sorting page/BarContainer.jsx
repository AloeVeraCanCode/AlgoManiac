import React from 'react'
import '../../CSS/Sorting/BarContainer.css';
import { motion } from "framer-motion"

export default function BarContainer(props) {
    console.log(props.array+"*")
    const h=300;
    var m=0;
    for(var j=0;j<props.array.length;j++)
    {
        m=Math.max(props.array[j][0],m);
    }
    console.log(m);
  return (
    <>
    <div className='bar-container'>
    {
        props.array.map((elem)=><div  className={elem[1]} style={{ height: ((elem[0]/m)*h) , backgroundColor:(elem[1]=='lowerbar'?'white':'rgb(186, 236, 186)') ,color:(elem[1]=='lowerbar'?'white':'black')}} >{elem[0]}</div>)
    }
    </div>
    <div className='bar-container'>
    {
        props.array.map((elem)=><div className={elem[1]} style={{ height: ((elem[0]/m)*h) , backgroundColor:(elem[1]=='lowerbar'?'rgb(246, 130, 80)':'white') ,color:(elem[1]=='lowerbar'?'black':'white')}} >{elem[0]}</div>)
    }
    </div>
    </>
  );
}
