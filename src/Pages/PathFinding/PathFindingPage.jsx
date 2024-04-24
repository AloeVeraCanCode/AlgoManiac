import React,{useState} from 'react';
import PathFindingBar from '../../Components/PathFinding/PathFindingBar';
import Grid from '../../Components/PathFinding/Grid';
import  { GridContext } from './GridContext.jsx';
function PathFindingPage () {
  const [randomizedArray,setRandomizedArray]=React.useState([[],[]]);
  const [colorArray,setColorArray]=React.useState([]);
  return (
    <GridContext>
      <div>
        <PathFindingBar array={{obj:randomizedArray,setobj:setRandomizedArray}} />
        <Grid></Grid>
      </div>
  </GridContext>
   );
}

export default PathFindingPage