import React, { useState } from 'react';
import '../../CSS/Sorting/SortingBar.css';
export default function (props) {
    const [arr,setArr]=useState([]);
    function disablePointers()
    {
         document.getElementById("sortBtn").disabled = true;
         document.getElementById("sortBtn").style.cursor = 'wait';
         document.getElementById("sortingMethods").disabled = true;
         document.getElementById("sortingMethods").style.cursor = 'wait';
         document.getElementById("random").disabled = true;
         document.getElementById("random").style.cursor = 'wait';
    }
    function enablePointers()
    {
         document.getElementById("sortBtn").disabled = false;
         document.getElementById("sortBtn").style.cursor =' pointer';
         document.getElementById("sortingMethods").disabled = false;
         document.getElementById("sortingMethods").style.cursor = ' pointer';
         document.getElementById("random").disabled = false;
         document.getElementById("random").style.cursor = ' pointer';
    }
    const setArray=()=>{
         var len=Math.floor(Math.random()*20)+2;;
         var tarr=[];
         for(let i=0;i<len;i++)
         {
             tarr.push([Math.floor(Math.random()*900)+30,'upperbar']);
         }
         props.array.setobj([tarr,tarr]);
         setArr([tarr,tarr]);
         console.log(tarr);
     };
     const sort=()=>{
        return 1;
     };
   return (
     <div className="sort-bar">
       <h3>Sorting</h3>
       <div className="inside-sort-bar">
         <a href="/"><button type="submit" href="/">Home</button></a>
         <button href="/" id="random" onClick={setArray}>Randomize</button>
         <select name="Merge Sort" id="sortingMethods">
             <option value="">Insertion Sort</option>
             <option value="">Merge Sort</option>
             <option value="">Bubble Sort</option>
             <option value="">Selection Sort</option>
         </select>
       </div>
       <button className="sort-button"  id='sortBtn' onClick={sort}>Sort</button>
     </div>
   );
}
