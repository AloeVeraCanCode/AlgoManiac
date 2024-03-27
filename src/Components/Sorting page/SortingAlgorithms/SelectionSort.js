import { changeArray  } from "../DisplayArray/ChangeArray";
export async function SelectionSort(props)
{
        var len=props.array.obj[0].length;
        let tarr=props.array.obj[0].map((elem)=>elem);
        var arrayOfArray=[]
        for(var i=0;i<len;i++)
        {
            var m=tarr[i][0],ind=i;
            tarr[ind][1]='lowerbar';
            await(changeArray([tarr,tarr],props))
            for(var j=i+1;j<len;j++)
            {
                tarr[j][1]='current';
                await(changeArray([tarr,tarr],props))
                if(tarr[j][0]<m)
                {
                    tarr[ind][1]='upperbar';
                    await(changeArray([tarr,tarr],props))
                    ind=j;m=tarr[j][0];
                    tarr[ind][1]='lowerbar';
                    await(changeArray([tarr,tarr],props));
                    continue;
                }
                tarr[j][1]='upperbar';
                await(changeArray([tarr,tarr],props))
               
            }
            tarr[i][1]='lowerbar';
            await(changeArray([tarr,tarr],props));
            var t=tarr[ind][0];tarr[ind][0]=tarr[i][0];tarr[i][0]=t;
            await(changeArray([tarr,tarr],props));
            tarr[ind][1]='upperbar';
            tarr[i][1]='upperbar';
            await(changeArray([tarr,tarr],props))
            
        }
       
}