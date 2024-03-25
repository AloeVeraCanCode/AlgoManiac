import { changeArray  } from "../DisplayArray/ChangeArray";
export async function InsertionSort(props)
{
        var len=props.array.obj[0].length;
        let tarr=props.array.obj[0].map((elem)=>elem);
        var arrayOfArray=[]
        for(var i=0;i<len-1;i++)
        {
            tarr[i+1][1]='lowerbar';
            var x=[];
            for(var k=0;k<len;k++)x.push(tarr[k]);
            await(changeArray([x,x],props))
            for(var j=i+1;j>0;j--)
            {
                if(tarr[j][0]<tarr[j-1][0])
                {
                    var t=tarr[j];tarr[j]=tarr[j-1];tarr[j-1]=t;
                }
                else  break;
                var x=[];
                for(var k=0;k<len;k++)x.push(tarr[k]);
                arrayOfArray.push(x);
                console.log(x);
                await changeArray([x,x],props);
            }
            tarr[i+1][1]='upperbar';
            tarr[j][1]='upperbar';
            var x=[];
            for(var k=0;k<len;k++)x.push(tarr[k]);
            await(changeArray([x,x],props))
            
        }
        // console.log(props);
        // console.log("Before");
        // console.log(arrayOfArray)
        // console.log("Hain Hain!!")
        // console.log("Finished!!")
}