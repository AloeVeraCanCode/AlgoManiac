import React, { useState } from 'react';
import '../../CSS/Sorting/SortingBar.css';
import './SortingAlgorithms/Insertion.js'
import { InsertionSort } from './SortingAlgorithms/Insertion.js';
export default function (props) {
   const [arr,setArr]=useState([]);
   const setArray=()=>{
        var len=Math.floor(Math.random()*20)+2;
        var tarr=[];
        for(let i=0;i<len;i++)
        {
            tarr.push([Math.floor(Math.random()*900)+30,'upperbar']);
        }
        props.array.setobj(tarr);
        setArr(tarr);
        console.log(tarr);
    }
     async function sort()
    {
        var selection=document.getElementById('sortingMethods');
        var method=selection.options[selection.selectedIndex].text;;
        if(method==='Insertion Sort')
        await InsertionSort(props);
        else if(method==='Merge Sort')
        {
            
        }
    }
  return (
    <div className="sort-bar">
      <h3>Sorting</h3>
      <div className="inside-sort-bar">
        <button type="submit" href="/">Home</button>
        <button href="/" onClick={setArray}>Randomize</button>
        <select name="Merge Sort" id="sortingMethods">
            <option value="">Insertion Sort</option>
            <option value="">Merge Sort</option>
            <option value="">Bubble Sort</option>
            <option value="">Selection Sort</option>
        </select>
      </div>
      <button className="sort-button"  onClick={sort}>Sort</button>
    </div>
  )
}
