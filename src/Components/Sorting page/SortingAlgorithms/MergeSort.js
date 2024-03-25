import { changeArray  } from "../DisplayArray/ChangeArray";
var array,p;
export async function mergeSort(props)
{
    p=props;console.log(p);
    array=props.array.obj.map(elem=>elem);
    await rec(0,array.length-1);
}
async function rec(i,j)
{
    console.log('('+i+','+j+')');
    if(i==j)return;
    let mid=Math.floor((i+j)/2);
    await rec(i,mid);await rec(mid+1,j);
    await merge(i,mid,mid+1,j);
}
var num=0;
async function merge(a,b,c,d)
{
    console.log('('+a+','+b+')'+'('+c+','+d+')'+array)
    let m,n=c;m=a;
    let x=[],y=[];var j=a;
    for(var i=0;i<array.length;i++)
    {
        x.push(Object.create(array[i]));y.push(Object.create(array[i]));
    }
    if(x===array)console.log("YES");else console.log("NO");
    // console.log(x+"Before everything began");
    while((a<=b)&&(c<=d))
    {
        if(x[a][0]<=x[c][0]){
            y[j][1]='lowerbar';
            y[j++][0]=x[a++][0];
        }
        else
        {
            y[j][1]='lowerbar';
            y[j++][0]=x[c++][0];
        }
        // console.log(array+" inside  one iteration");
        console.log(y+" x inside one iteration");
        await changeArray(y,p);
        console.log("Executed")
        // console.log(num +"******&&&&&&");num++;
    }
    // console.log(array+" array one iteration");
    console.log(y+" x one iteration$$$$$$$");
    // console.log('('+a+','+b+')'+'('+c+','+d+')')
    while(a<=b)
    {
        console.log("First"+array[a][0])
        y[j][1]='lowerbar';
        y[j++][0]=x[a++][0];
       await changeArray(y,p);
       console.log("Executed")
    }
    while(c<=d)
    {
        console.log("Second"+array[c][0])
        y[j][1]='lowerbar';
        y[j++][0]=x[c++][0];
       await changeArray(y,p);
       console.log("Executed")
    }
    console.log(y+"!!!");

    
    console.log(m+" "+d+" ")
    for(;m<=d;m++)
    {
        y[m][1]='upperbar';
        array[m][0]=y[m][0];
       await changeArray(y,p);
       console.log("Executed")
    }
    await changeArray(y,p);
    // console.log("Final Executed")
    // console.log(y+"&");
    // console.log('('+a+','+b+')'+'('+c+','+d+')'+array)

}