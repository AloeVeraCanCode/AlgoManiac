import { useContext } from 'react';
import {Context,  GridContext } from '../../../Pages/PathFinding/GridContext.jsx';
// Initialize direction vectors
var grid=[],ret=[],endPoints=[];
var setGrid=()=>{};
var dRow = [0, 1, 0, -1];
var dCol = [ -1, 0, 1, 0];
let ROW=25,COL=40;
function isValid(vis, row, col)
{
    if (row < 0 || col < 0
        || row >= ROW || col >= COL||grid[row][col].color=='black')
        return false;
    if (vis[row][col])
        return false;
 
    // Otherwise, it can be visited
    return true;
}
 
// Function to perform DFS
// Traversal on the matrix grid[]
function DFS(row, col,vis)
{
    console.log(grid)
    var st = [];
    st.push([ row, col ]);
    while (st.length!=0) {
        // Pop the top pair
        var curr = st[st.length-1];
        st.pop();
        var row = curr[0];
        var col = curr[1];
        
        if (!isValid(vis, row, col))
            continue;
        console.log([row,col]);
        // grid[row][col]=2;
        ret.push([row,col]);
        if(endPoints[1][0]==row&&endPoints[1][1]==col)break;
        // console.log("HERERERERERE"+grid)
        // Mark the current
        // cell as visited
        vis[row][col] = true;
        // Print the element at
        // the current top cell
        // document.write( grid[row][col] + " ");
 
        // Push all the adjacent cells
        for (var i = 0; i < 4; i++) {
            var adjx = row + dRow[i];
            var adjy = col + dCol[i];
            st.push([ adjx, adjy ]);
        }
    }
    console.log(ret);
    return([ret,[]]);
}
export default async function callDfs(g,e)
{
    console.log(g);
    var vis = Array.from(Array(ROW), ()=> Array(COL).fill(false));
    grid=g;endPoints=e;
    return(DFS(endPoints[0][0],endPoints[0][1],vis));
}