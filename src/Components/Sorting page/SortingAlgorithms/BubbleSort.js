import { changeArray  } from "../DisplayArray/ChangeArray";
export async function BubbleSort(props)
{
        var len=props.array.obj[0].length;
        let tarr=props.array.obj[0].map((elem)=>elem);
        var arrayOfArray=[]
        for(var i=0;i<len;i++)
        {
            tarr[len-1][1]='current';
            var x=[];
            for(var k=0;k<len;k++)x.push(tarr[k]);
            await(changeArray([x,x],props))
            for(var j=len-1;j>i;j--)
            {
                if(tarr[j][0]<tarr[j-1][0])
                {
                    var t=tarr[j];tarr[j]=tarr[j-1];tarr[j-1]=t;
                }
                tarr[j][1]='upperbar';
                tarr[j-1][1]='current';
                var x=[];
                for(var k=0;k<len;k++)x.push(tarr[k]);
                arrayOfArray.push(x);
                console.log(x);
                await changeArray([x,x],props);
            }
            tarr[j][1]='sorted';
            var x=[];
            for(var k=0;k<len;k++)x.push(tarr[k]);
            await(changeArray([x,x],props))
            
        }
        
}