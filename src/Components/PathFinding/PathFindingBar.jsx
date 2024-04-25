import React, { useState,useContext } from 'react';
import '../../CSS/PathFinding/PathFindingBar.css';
import callDfs from './PathFinding Algorithms/Dfs.jsx';
import callBfs from './PathFinding Algorithms/Bfs.jsx';
import {Context,  GridContext } from '../../Pages/PathFinding/GridContext.jsx';
import da from '../../images/down arrow.png';
import la from '../../images/left arrow.png';
import ra from '../../images/right arrow.png';
import ua from '../../images/up arrow.png';
export default function (props) {
    const [arr,setArr]=useState([]);
    const grid=props.grid;
    async function wait(t)
    {
      return(new Promise(resolve=>setTimeout(resolve,t)));
    }
    async function animate(populate,setGrid)
    {
      
      for(let j=1;j<populate.length;j++){
        let z=Array.from(grid);
        console.log(populate[j][0]+" "+populate[j][1]);
        z[populate[j][0]][populate[j][1]].isAnimate="id2";
        setGrid(z);
        console.log("hehe");
        console.log(z);
        await wait(50);
        
      };
    }
    async function animateBfs(populate,setGrid)
    {
      
      for(let j=0;j<populate.length;){
        let z=Array.from(grid);
        var cur=populate[j][2];
        while(j<populate.length&&cur==populate[j][2]){
        console.log(populate[j][0]+" "+populate[j][1]);
        z[populate[j][0]][populate[j][1]].isAnimate="id2";
        j++;
        }
        setGrid(z);
        console.log("hehe");
        console.log(z);
        await wait(50);
        
      };
    }
    async function showPath(populate,setGrid)
    {
      populate.reverse();
      for(let j=1;j<populate.length;j++){
        let z=Array.from(grid);
        console.log(populate[j][0]+" "+populate[j][1]);
        z[populate[j][0]][populate[j][1]].symbol=populate[j][2];
        z[populate[j][0]][populate[j][1]].icon=true;
        setGrid(z);
        console.log("hehe");
        console.log(z);
        await wait(50);
        
      };
    }
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
      {
        var [traversedPath,ActualPath]=await callDfs(grid,props.endPoints);
        console.log(traversedPath)
        await animate(traversedPath,props.setGrid);
        await showPath(ActualPath,props.setGrid);
        console.log(grid);
      }
      else if(method=='BFS')
      {
        var [traversedPath,ActualPath]=await callBfs(grid,props.endPoints);
        console.log(traversedPath)
        await animateBfs(traversedPath,props.setGrid);
        await showPath(ActualPath,props.setGrid);
        console.log(grid);
      }
      enablePointers(); 
     };
   return (
     <div className="sort-bar">
       <h3>Sorting</h3>
       <div className="inside-sort-bar">
         <a href="/"><button type="submit" href="/">Home</button></a>
         <button href="/" id="random" onClick={setArray}>Randomize</button>
         <select name="DFS" id="pathFindingMethods">
             <option value="">BFS</option>
             <option value="">DFS</option>
         </select>
       </div>
       <button className="find-path-button"  id='findPathBtn' onClick={findPath}>Find Path</button>
     </div>
   );
}
