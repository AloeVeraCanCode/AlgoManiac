import React from 'react'

export default function SpanningTreeBar(props) {

    return (
        <div className="sort-bar">
          <h3>Minimum Spanning Tree</h3>
          <div className="inside-sort-bar">
            <a href="/"><button type="submit" href="/">Home</button></a>
            <button href="/" id="random" >Randomize</button>
            <button  id="clear" >Clear</button>
          </div>
          <button className="find-spanning-tree-button"  id='findSpanningTree' onClick={()=>props.setRun(true)}>Run</button>
        </div>
      );
}
