import React from 'react'
import '../../CSS/Sorting/BarContainer.css';
import { motion } from "framer-motion"

export default function BarContainer(props) {
    const h=550;
    var m=Math.max(...props.array);
    console.log(m);
  return (
    <div className='bar-container'>
    {
        props.array.map((elem)=><motion.div className='bar' animate={{ height: ((elem/m)*h)  }} transition={{duration:2 , type:'spring', stiffness:100}}>{elem}</motion.div>)
    }
    </div>
  );
}
