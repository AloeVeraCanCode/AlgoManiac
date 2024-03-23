import React, { useState } from 'react';
import '../../CSS/Sorting/SortingBar.css';
export default function (props) {
    const [arr,setArr]=useState([]);
    async function changeArray(a)
    {
        props.array.setobj(a);
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

   const setArray=()=>{
        var len=Math.floor(Math.random()*20)+2;
        var tarr=[];
        for(let i=0;i<len;i++)
        {
            tarr.push([Math.floor(Math.random()*900)+30,'upperbar']);
        }
        props.array.setobj(tarr);
        setArr(tarr);
        console.log(tarr);
    }
     async function sort()
    {
        console.log('sort!!'+props.array.obj);
        var len=props.array.obj.length;
        let tarr=props.array.obj.map((elem)=>elem);
        var arrayOfArray=[]
        for(var i=0;i<len-1;i++)
        {
            tarr[i+1][1]='lowerbar';
            var x=[];
            for(var k=0;k<len;k++)x.push(tarr[k]);
            await(changeArray(x))
            for(var j=i+1;j>0;j--)
            {
                if(tarr[j][0]<tarr[j-1][0])
                {
                    var t=tarr[j];tarr[j]=tarr[j-1];tarr[j-1]=t;
                }
                else { break;}
                var x=[];
                for(var k=0;k<len;k++)x.push(tarr[k]);
                arrayOfArray.push(x);
                console.log(x);
                await changeArray(x);
            }
            tarr[i+1][1]='upperbar';
            tarr[j][1]='upperbar';
            var x=[];
            for(var k=0;k<len;k++)x.push(tarr[k]);
            await(changeArray(x))
            
        }
        // props.array.setobj(arrayOfArray[3]);
        console.log(props);
        console.log("Before");
        console.log(arrayOfArray)
        console.log("Hain Hain!!")
        // for(var j=0;j<arrayOfArray.length;j++)
        // {
        //     await changeArray(arrayOfArray[j]);
            
        // }
        // props.array.setobj(tarr)
        console.log("Finished!!")
    }
  return (
    <div className="sort-bar">
      <h3>Sorting</h3>
      <div className="inside-sort-bar">
        <button type="submit" href="/">Home</button>
        <button href="/" onClick={setArray}>Randomize</button>
        <select name="Merge Sort" id="cars">
            <option value="">Quick Sort</option>
            <option value="">Merge Sort</option>
            <option value="">Bubble Sort</option>
            <option value="">Selection Sort</option>
        </select>
      </div>
      <button className="sort-button"  onClick={sort}>Sort</button>
    </div>
  )
}
