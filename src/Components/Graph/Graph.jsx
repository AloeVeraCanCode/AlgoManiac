import React, { useState } from 'react'
import DrawingBoard from './DrawingBoard'
import Controller from './Controller'
import '../../CSS/SpanningTree/graph.css'
import { Prim } from '../SpanningTree/Prim';
var node=0;
async function wait(t)
{
  return(new Promise(resolve=>setTimeout(resolve,t)));
}
async function animate(g,setGraph)
{
  console.log(g);
  // setGraph(g);
  for(var j=0;j<g.length;j++){
    var elem=g[j];
    console.log(elem);
    setGraph(elem);await wait(1000);
  };
}
async function subanimate(g,setGraph,sr){
  sr(false);
  await animate(g,setGraph);
}
export default function Graph(props) {
 console.log("Graph")
 
  const [id,setId]=useState(1);
  const [graph,setGraph]=useState({'nodes':{1:{x:0,y:0,color:'red'}},'edges':{1:[[1,10,'green']]}});
  const [pressedNode,setPressedNode]=useState(false);
  console.log(graph);
  const clickId=(i)=>{
    setId(i);
  }
  const addEdge=(x,y,cost)=>{
    if(x==y)return;
    if((x<=node&&x>=1)&&(y>=1&&y<=node)&&(cost>=0)){
    const n=graph['nodes'];
    const e=graph['edges'];
    e[x].push([y,cost,'green']);
    e[y].push([x,cost,'green']);
    setGraph({'nodes':n,'edges':e});
    console.log(graph);
    }
  };
  const addNode=(x,y)=>{
    if(!pressedNode)return;
    const n=graph['nodes'];
    n[++node]={x,y,'color':'red'};
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
    n[num]={x,y,'color':'red'};
    const e=graph['edges'];
    setGraph({'nodes':n,'edges':e});
    console.log(graph);
  }
  React.useEffect(()=>{
    console.log("Here")
    if(props.run){
    
    var newGraph=Prim(graph,setGraph);
    subanimate(newGraph,setGraph,props.setRun);
    // console.log()
     
    }
  })
  return (
    <div className='graph'>
      <DrawingBoard addNode={addNode} updateNode={updateNode} clickId={clickId} graph={graph} ></DrawingBoard>
      <Controller id={id} edge={graph['edges'][id]} addEdge={addEdge} pressNodeFromController={pressNodeFromController}></Controller>
    </div>
  )
}
