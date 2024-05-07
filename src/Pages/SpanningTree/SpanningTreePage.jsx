import React, { useState } from 'react'
import SpanningTreeBar from '../../Components/SpanningTree/SpanningTreeBar';
import Graph from '../../Components/Graph/Graph';
export default function SpanningTreePage() {
  const [run,setRun]=useState(false);
  return (
    <div>
      <SpanningTreeBar run={run} setRun={setRun}></SpanningTreeBar>
      <Graph run={run} setRun={setRun}></Graph>
    </div>
  )
}
