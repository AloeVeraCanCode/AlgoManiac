import React from 'react'
import '../../CSS/SpanningTree/DrawingBoard.css';
import Konva from 'konva';
export default function DrawingBoard(props) {
  console.log("Board")
  React.useEffect(()=>{var stage = new Konva.Stage({
    container: 'div',
    width: 1300,
    height: 650,
  });
  var layer = new Konva.Layer();
  const drawCircle=(num,a,b)=>{
    var c = new Konva.Circle({
    x: a,
    y: b,
    
    radius: 25,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    draggable:true
  });
  var text = new Konva.TextPath({
    x: a,
    y: b,
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
    drawCircle(key,value['x'],value['y']);
    }
  stage.add(layer);
  // layer.add(circle)
  // stage.add(layer);
  }
  // 
)

  return (
    <div id="div" ></div>
   
  )
}
