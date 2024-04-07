import React,{useState} from 'react';
import PathFindingBar from '../../Components/PathFinding/PathFindingBar';
function PathFindingPage () {
  const [randomizedArray,setRandomizedArray]=React.useState([[],[]]);
  const [colorArray,setColorArray]=React.useState([]);
  return (
  <div>
    <PathFindingBar array={{obj:randomizedArray,setobj:setRandomizedArray}} />
  </div>
   );
}

export default PathFindingPage