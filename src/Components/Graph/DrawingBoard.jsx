import React from 'react'
import '../../CSS/SpanningTree/DrawingBoard.css';
import Konva from 'konva';
import Switch from 'react-switch';
export default function DrawingBoard(props) {
  console.log("Board")
  React.useEffect(()=>{var stage = new Konva.Stage({
    container: 'div',
    width: 1300,
    height: 630,
  });
  var layer = new Konva.Layer();
  const drawEdge=(a,b,c,d,cost,col)=>{
    if(a>c)
    {
      var t=a;a=c;c=t;
      t=b;b=d;d=t;
    }
    var line = new Konva.Line({
      points: [a,b,c,d],
      stroke: col,
      strokeWidth: 2,
      lineCap: 'round',
      lineJoin: 'round',
    });
    var index = line.zIndex();
    var textpath = new Konva.TextPath({
      x:(c-a)/2,
      y:(d-b)/2,
      fill: '#333',
      fontSize: 16,
      fontFamily: 'Arial',
      text: cost,
      data: `M ${a},${b} L${c},${d} `,
    });

    layer.add(textpath);

// set index
    
    layer.add(line);
  }
  const drawCircle=(num,a,b,col)=>{
    var c = new Konva.Circle({
    x: a,
    y: b,
    
    radius: 25,
    fill: col,
    stroke: 'black',
    strokeWidth: 4,
    draggable:true
  });
  var text = new Konva.TextPath({
    x: a,
    y: b+17,
    fill: '#000',
    textBaseline: 'hanging',
    text:num,
    fontSize: 18,
    fontFamily: 'Calibri',
    align: 'center',
    data: 'M 0 30 a 30 30 0 1 1 1 0'
  });
  c.on('click',()=>{
    props.clickId(num);
  })
  c.on('dragend',()=>{
    // console.log(stage.getPointerPosition());
    props.updateNode(num,stage.getPointerPosition().x,stage.getPointerPosition().y);
  })
  layer.add(c);
  layer.add(text);
  };
  stage.on('pointerup', function () {
      props.addNode(stage.getPointerPosition().x,stage.getPointerPosition().y);
      stage.add(layer);

    });

  
    for (const [key, value] of Object.entries(props.graph['nodes'])) {
    console.log(value);
    drawCircle(key,value['x'],value['y'],value['color']);
    }
    for(const [key,edges] of Object.entries(props.graph['edges'])){
      console.log(edges);
      for(const edge of edges)
      {
        console.log(edge);
        drawEdge(props.graph['nodes'][key]['x'],props.graph['nodes'][key]['y'],props.graph['nodes'][edge[0]]['x'],props.graph['nodes'][edge[0]]['y'],edge[1],edge[2])
      }
    }
  stage.add(layer);
  }
)
  return (
    <div className="Topdiv">
    <div className="switch">
    <Switch ></Switch>
    </div>
    <div id="div" ></div>
    </div>
   
  )
}
