export async function changeArray(a,props)
{
    props.array.setobj(a);
    return new Promise(resolve => setTimeout(resolve, 1000));
}