import React, { useState } from 'react'
import SpanningTreeBar from '../../Components/SpanningTree/SpanningTreeBar';
import Graph from '../../Components/Graph/Graph';
export default function SpanningTreePage() {
  const [run,setRun]=useState(false);
  const [clear,setClear]=useState(false);

  return (
    <div>
      <SpanningTreeBar run={run} setRun={setRun} clear={clear} setClear={setClear}></SpanningTreeBar>
      <Graph run={run} setRun={setRun} clear={clear} setClear={setClear}></Graph>
    </div>
  )
}
