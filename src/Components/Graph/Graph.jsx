import React, { useState } from 'react'
import DrawingBoard from './DrawingBoard'
import Controller from './Controller'
import '../../CSS/SpanningTree/graph.css'
var node=0;
export default function Graph(props) {
  const [id,setId]=useState(1);
  const [graph,setGraph]=useState({'nodes':{},'edges':{1:[5]}});
  const [pressedNode,setPressedNode]=useState(false);
  const clickId=(i)=>{
    setId(i);
  }
  const addEdge=(x,y)=>{
    const n=graph['nodes'];
    const e=graph['edges'];
    e[x].push(y);
    e[y].push(x);
    setGraph({'nodes':n,'edges':e});
    console.log(graph);
  };
  const addNode=(x,y)=>{
    if(!pressedNode)return;
    const n=graph['nodes'];
    n[++node]={x,y};
    const e=graph['edges'];
    e[node]=[];
    setPressedNode(false);  
    setGraph({'nodes':n,'edges':e});
    console.log(graph);
  }
  const pressNodeFromController=(val)=>{
  setPressedNode(val);
  }
  const updateNode=(num,x,y)=>{
    const n=graph['nodes'];
    n[num]={x,y};
    const e=graph['edges'];
    setGraph({'nodes':n,'edges':e});
    console.log(graph);
  }

  return (
    <div className='graph'>
      <DrawingBoard addNode={addNode} updateNode={updateNode} clickId={clickId} graph={graph} ></DrawingBoard>
      <Controller id={id} edge={graph['edges'][id]} addEdge={addEdge} pressNodeFromController={pressNodeFromController}></Controller>
    </div>
  )
}
