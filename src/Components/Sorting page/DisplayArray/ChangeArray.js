export async function changeArray(a,props)
{
    console.log(a[0]+" Inside async func*******\n"+a[1]);
    var x=a.map(elem=>elem);
    props.array.setobj(x);
    // console.log(props.array.obj+" After settingInside async func++++++++++");
    return new Promise(resolve => setTimeout(resolve, 1000));
}