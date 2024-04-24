import React, { useState,useContext } from 'react';
import '../../CSS/PathFinding/PathFindingBar.css';
import callDfs from './PathFinding Algorithms/Dfs.jsx';
import {Context,  GridContext } from '../../Pages/PathFinding/GridContext.jsx';
export default function (props) {
    const [arr,setArr]=useState([]);
    const grid=useContext(Context);
    function disablePointers()
    {
         document.getElementById("findPathBtn").disabled = true;
         document.getElementById("findPathBtn").style.cursor = 'wait';
         document.getElementById("pathFindingMethods").disabled = true;
         document.getElementById("pathFindingMethods").style.cursor = 'wait';
         document.getElementById("random").disabled = true;
         document.getElementById("random").style.cursor = 'wait';
    }
    function enablePointers()
    {
         document.getElementById("findPathBtn").disabled = false;
         document.getElementById("findPathBtn").style.cursor =' pointer';
         document.getElementById("pathFindingMethods").disabled = false;
         document.getElementById("pathFindingMethods").style.cursor = ' pointer';
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
     async function findPath(){
      var selection=document.getElementById('pathFindingMethods');
      var method=selection.options[selection.selectedIndex].text;
      disablePointers();
      if(method==='DFS')    
      await callDfs(document,grid.grid,grid.setGrid);
      enablePointers(); 
      
     };
   return (
     <div className="sort-bar">
       <h3>Sorting</h3>
       <div className="inside-sort-bar">
         <a href="/"><button type="submit" href="/">Home</button></a>
         <button href="/" id="random" onClick={setArray}>Randomize</button>
         <select name="DFS" id="pathFindingMethods">
             <option value="">DFS</option>
             <option value="">BFS</option>
         </select>
       </div>
       <button className="find-path-button"  id='findPathBtn' onClick={findPath}>Find Path</button>
     </div>
   );
}
