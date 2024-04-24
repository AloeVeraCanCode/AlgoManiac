import React,{useState} from 'react';
import PathFindingBar from '../../Components/PathFinding/PathFindingBar';
import Grid from '../../Components/PathFinding/Grid';
import  { GridContext } from './GridContext.jsx';
function PathFindingPage () {
  const [randomizedArray,setRandomizedArray]=React.useState([[],[]]);
  const [colorArray,setColorArray]=React.useState([]);
  const [grid,setGrid]=useState([]);
  const [endPoints,setEndPoints]=useState([]);
  return (
    <GridContext>
      <div>
        <PathFindingBar grid={grid} setGrid={setGrid} endPoints={endPoints}setEndPoints={setEndPoints}/>
        <Grid grid={grid} setGrid={setGrid} endPoints={endPoints}setEndPoints={setEndPoints}></Grid>
      </div>
  </GridContext>
   );
}

export default PathFindingPage