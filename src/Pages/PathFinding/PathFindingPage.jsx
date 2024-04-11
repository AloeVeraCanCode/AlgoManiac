import React,{useState} from 'react';
import PathFindingBar from '../../Components/PathFinding/PathFindingBar';
import Grid from '../../Components/PathFinding/Grid';
function PathFindingPage () {
  const [randomizedArray,setRandomizedArray]=React.useState([[],[]]);
  const [colorArray,setColorArray]=React.useState([]);
  return (
  <div>
    <PathFindingBar array={{obj:randomizedArray,setobj:setRandomizedArray}} />
    <Grid></Grid>
  </div>
   );
}

export default PathFindingPage