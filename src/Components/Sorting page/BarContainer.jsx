import React from 'react'
import '../../CSS/Sorting/BarContainer.css';

export default function BarContainer(props) {
    const h=600;
    var m=Math.max(...props.array);
    console.log(m);
  return (
    <div className='bar-container'>
    {
        props.array.map((elem)=><div className='bar' style={{height:((elem/m)*h)}}>{elem}</div>)
    }
    </div>
  );
}
