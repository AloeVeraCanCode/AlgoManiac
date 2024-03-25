import React,{useState} from 'react'
import SortingBar from '../../Components/Sorting page/SortingBar'
import BarContainer from '../../Components/Sorting page/BarContainer';
function SortingPage() {
    const [randomizedArray,setRandomizedArray]=React.useState([[],[]]);
    const [colorArray,setColorArray]=React.useState([]);
  return (
    <div>
      <SortingBar array={{obj:randomizedArray,setobj:setRandomizedArray}}/>
      <BarContainer upperarray={randomizedArray[0]} lowerarray={randomizedArray[1]}/>
    </div>
  ) 
}

export default SortingPage
