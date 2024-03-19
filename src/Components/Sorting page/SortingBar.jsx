import React from 'react';
import '../../CSS/Sorting/SortingBar.css';
export default function (props) {
   const setArray=()=>{
        var len=10;
        var arr=[];
        for(let i=0;i<len;i++)
        {
            arr.push(Math.floor(Math.random()*900)+30);
        }
        props.array.setobj(arr);
        console.log(arr);
    }
  return (
    <div className="sort-bar">
      <h3>Sorting</h3>
      <div className="inside-sort-bar">
        <button type="submit" href="/">Home</button>
        <button href="/" onClick={setArray}>Randomize</button>
        <select name="Merge Sort" id="cars">
            <option value="">Quick Sort</option>
            <option value="">Merge Sort</option>
            <option value="">Bubble Sort</option>
            <option value="">Selection Sort</option>
        </select>
      </div>
      <button className="sort-button">Sort</button>
    </div>
  )
}
