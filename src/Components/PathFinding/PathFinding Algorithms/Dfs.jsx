import { useContext } from 'react';
import {Context,  GridContext } from '../../../Pages/PathFinding/GridContext.jsx';
// Initialize direction vectors
var grid=[];
var setGrid=()=>{};
var dRow = [0, 1, 0, -1];
var dCol = [ -1, 0, 1, 0];
let ROW=19,COL=40;
function isValid(vis, row, col)
{
    if (row < 0 || col < 0
        || row >= ROW || col >= COL)
        return false;
    if (vis[row][col])
        return false;
 
    // Otherwise, it can be visited
    return true;
}
 
// Function to perform DFS
// Traversal on the matrix grid[]
function DFS(document,row, col,vis)
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
        var n = Array.from(Array(ROW), ()=> Array(COL).fill(0));
        for(let i=0;i<ROW;i++)
        {
            for(let j=0;j<COL;j++)
                {let x;
                n[i][j]=grid[i][j];
                }
        }
        n[row][col]=2;
        console.log(document.getElementById(`id${row}${col}`))
        document.getElementById(`id${row}${col}`).classList.add('id2');
        setGrid(n);
        console.log("HERERERERERE"+grid)
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
}
export default async function callDfs(document,g,sg)
{
    console.log(g);
    var vis = Array.from(Array(ROW), ()=> Array(COL).fill(false));
    grid=g;
    setGrid=sg;
    console.log(grid);
    DFS(document,0,0,vis);
}