import { changeArray  } from "../DisplayArray/ChangeArray";
var array,p;
export async function mergeSort(props)
{
    p=props;console.log(p);
    array=props.array.obj[0].map(elem=>elem);
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
    let x=[],y=[];
    for(var i=0;i<array.length;i++)
    {
        x.push(Object.create(array[i]));y.push(Object.create(array[i]));
    }
    for(var j=a;j<=d;j++)
    {
        x[j][1]='current';
    }
    await changeArray([x,y],p);
    // if(x===array)console.log("YES");else console.log("NO");
    // console.log(x+"Before everything began");
    var j=a;
    while((a<=b)&&(c<=d))
    {
        if(x[a][0]<=x[c][0]){
            y[j][1]='lowerbar';
            x[a][1]='lowerbar';
            y[j++][0]=x[a++][0];
        }
        else
        {
            y[j][1]='lowerbar';
            x[c][1]='lowerbar';
            y[j++][0]=x[c++][0];
        }
        await changeArray([x,y],p);
    }
    // console.log(array+" array one iteration");
    console.log(y+" x one iteration$$$$$$$");
    // console.log('('+a+','+b+')'+'('+c+','+d+')')
    while(a<=b)
    {
        // console.log("First"+array[a][0])
        y[j][1]='lowerbar';
        x[a][1]='lowerbar';
        y[j++][0]=x[a++][0];
       await changeArray([x,y],p);
    //    console.log("Executed")
    }
    while(c<=d)
    {
        // console.log("Second"+array[c][0])
        y[j][1]='lowerbar';
        x[c][1]='lowerbar';
        y[j++][0]=x[c++][0];
       await changeArray([x,y],p);
    //    console.log("Executed")
    }
    // console.log(y+"!!!");

    
    // console.log(m+" "+d+" ")
    for(;m<=d;m++)
    {
        y[m][1]='upperbar';
        x[m][1]='upperbar';
        array[m][0]=y[m][0];
       await changeArray([x,y],p);
    //    console.log("Executed")
    }
    // await changeArray([x,y],p);

}