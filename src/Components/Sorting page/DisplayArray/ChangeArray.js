export async function changeArray(a,props)
{
    var x=a.map(elem=>elem);
    props.array.setobj(x);
    return new Promise(resolve => setTimeout(resolve, 1000));
}