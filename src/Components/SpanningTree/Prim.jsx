class PriorityQueue {
	constructor() {
		this.heap = [];
	}

	enqueue(value) {
		this.heap.push(value);
		let i = this.heap.length - 1;
		while (i > 0) {
			let j = Math.floor((i - 1) / 2);
			if (this.heap[i][0] >= this.heap[j][0]) {
				break;
			}
			[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
			i = j;
		}
	}

	dequeue() {
		if (this.heap.length === 0) {
			throw new Error("Queue is empty");
		}
		let i = this.heap.length - 1;
		const result = this.heap[0];
		this.heap[0] = this.heap[i];
		this.heap.pop();

		i--;
		let j = 0;
		while (true) {
			const left = j * 2 + 1;
			if (left > i) {
				break;
			}
			const right = left + 1;
			let k = left;
			if (right <= i && this.heap[right][0] < this.heap[left][0]) {
				k = right;
			}
			if (this.heap[j][0] <= this.heap[k][0]) {
				break;
			}
			[this.heap[j], this.heap[k]] = [this.heap[k], this.heap[j]];
			j = k;
		}

		return result;
	}

	get count() {
		return this.heap.length;
	}
}
async function wait(t)
    {
      return(new Promise(resolve=>setTimeout(resolve,t)));
    }
function newGraph(g,t)
{
	var n={},e={};
	console.log(g);
	console.log(g['nodes'])
	for (let [key,value] of  Object.entries(g['nodes'])) {console.log(key);console.log(value); n[key]={'x':value['x'],'y':value['y'],'color':t?'grey':value['color']};e[key]=[];}
	for(const [key,edges] of Object.entries(g['edges'])){
		for(const edge of edges)
		{
		  e[key].push([edge[0],edge[1],t?'rgb(218, 189, 189)':edge[2]]);
		}
	}
	return({'nodes':n,'edges':e});
}
export function Prim(graph,setGraph) {
	var ret=[];
	console.log(graph);
	let V = 0; for (let key in graph['nodes']) {   V++; }
	console.log(V);
	
	const adj = new Array(V+1).fill(null).map(() => []);

    console.log("Prim")
	for(const [key,edges] of Object.entries(graph['edges'])){
		console.log(key);
		console.log(edges);
		for(const edge of edges)
		{
		  console.log(edge);
		  adj[key].push([edge[0], edge[1]]);
		}
	  }
	  console.log(adj);
	const pq = new PriorityQueue();

	// // Create a visited array to keep track of visited vertices
	const visited = new Array(V+1).fill(false);

	// // Variable to store the result (sum of edge weights)
	var res = parseInt(0);
	var cur,prev=newGraph(graph,true);cur=prev;
	ret.push(prev);
	// setGraph(prev);await wait(50);
	// // Start with vertex 0
	pq.enqueue([0, 1,-1]);

	// // Perform Prim's algorithm to find the Minimum Spanning Tree
	
	while (pq.count > 0) {
		const p = pq.dequeue();
		 cur=newGraph(prev,false);
		var wt = p[0]; // Weight of the edge
		const u = p[1]; // Vertex connected to the edge
		if (visited[u]) {
			continue; // Skip if the vertex is already visited
		}
		if(wt!=0)
		{
			for(var j=0;j<cur['edges'][u].length;j++)
			{
				if(cur['edges'][u][j][0]==p[2])cur['edges'][u][j][2]='black';
			}
			for(var j=0;j<cur['edges'][p[2]].length;j++)
			{
				if(cur['edges'][p[2]][j][0]==u)cur['edges'][p[2]][j][2]='black';
			}
			ret.push(cur);
			prev=cur;
		}
		cur=newGraph(prev,false);
		cur['nodes'][u]['color']='red';
		ret.push(cur);
	
		prev=cur;
		cur=newGraph(prev,false);
		
		res =parseInt(res)+ parseInt(wt); // Add the edge weight to the result
		visited[u] = true; // Mark the vertex as visited
		console.log(wt+" "+u);
		// Explore the adjacent vertices
		for (const v of adj[u]) {
			// v[0] represents the vertex and v[1] represents the edge weight
			if (!visited[v[0]]) {
				cur['edges'][u].forEach((elem)=>
				{
					if(elem[0]==v[0]){
					console.log(elem)
					elem[2]='yellow'}
				})
				cur['edges'][v[0]].forEach((elem)=>
				{
					if(elem[0]==u){
					console.log(elem)
					elem[2]='yellow'}
				})
				pq.enqueue([v[1], v[0],u]); // Add the adjacent edge to the priority queue
			}
		}
		ret.push(cur);
		// setGraph(cur);await wait(1000);
		prev=cur;
	}
	console.log(res);
	return ret; 
}
