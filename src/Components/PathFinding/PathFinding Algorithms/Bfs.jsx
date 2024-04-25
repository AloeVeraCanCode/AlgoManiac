
var ROW = 25;
var COL = 40;
var grid=[],ret=[],endPoints=[];
var dRow = [0, 1, 0, -1];
var dCol = [ -1, 0, 1, 0];
function isValid(vis, row, col)
{
	// If cell lies out of bounds
	if (row < 0 || col < 0
		|| row >= ROW || col >= COL|| grid[row][col].color=='black')
		return false;

	// If cell is already visited
	if (vis[row][col])
		return false;

	// Otherwise
	return true;
}

// Function to perform the BFS traversal
function BFS( row, col)
{
    var vis = Array.from(Array(ROW), ()=> Array(COL).fill(false));
    ret=[];
	var par=new Map();
	var q = [];

	// Mark the starting cell as visited
	// and push it into the queue
    var turn=0;
	q.push([row, col ,turn ]);
	vis[row][col] = true;
    par[[row,col]]=[-1,-1,-1];
    vis[row][col]=true;
	// Iterate while the queue
	// is not empty
	while (q.length!=0) {

		var cell = q[0];
		var x = cell[0];
		var y = cell[1];
        var z= cell[2];
        var row=x,col=y;
		q.shift();
        ret.push([x,y,z]);
        if(endPoints[1][0]==row&&endPoints[1][1]==col)break;
		// Go to the adjacent cells
		for (var i = 0; i < 4; i++) {

			var adjx = x + dRow[i];
			var adjy = y + dCol[i];

			if (isValid(vis, adjx, adjy)) {
				q.push([adjx, adjy, z+1 ]);
				vis[adjx][adjy] = true;
                if(i==0)
                par[[adjx,adjy]]=[row,col,"la"];
                else if(i==1)
                par[[adjx,adjy]]=[row,col,"da"];
                else if(i==2)
                par[[adjx,adjy]]=[row,col,"ra"];
                else if(i==3)
                par[[adjx,adjy]]=[row,col,"ua"];
			}
		}
	}
    var sr=[],cur=[endPoints[1][0],endPoints[1][1]];
    console.log(par);    console.log(cur);console.log(par[[cur[0],cur[1]]]);
    while(par[[cur[0],cur[1]]][0]!=-1)
    {
        sr.push(par[[cur[0],cur[1]]]);
        cur=[par[[cur[0],cur[1]]][0],par[[cur[0],cur[1]]][1]];
    }
    console.log(sr);
    return([ret,sr]);
}

// Driver Code
// Given input matrix
export default async function callBfs(g,e)
{
    console.log(g);
    grid=g;endPoints=e;
    return(BFS(endPoints[0][0],endPoints[0][1]));
}
