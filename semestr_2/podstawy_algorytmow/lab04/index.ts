// numer indexu gdx142966
// tail(gdx142966) == 6
// 6 % 4 == 2

// utils
const readFromStdIn = async () => {
    const buf = new Uint8Array(1024);
    const n = <number>await Deno.stdin.read(buf);
    return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

// Wariant C: BFS, macierz sąsiedztwa
type GraphNode = number;
type Edge = [GraphNode, GraphNode];
type NeighborhoodMatrix = number[][];

const buildSquareArray = (size: number, baseElement: number = 0): number[][] => {
    const arr: number[][] = [];
    
    for(let i=0; i<size; i++) {
        arr[i] = [];
        for(let j=0; j<size; j++) {
            arr[i][j] = baseElement;
        }
    }
    
    return arr;
}

const buildNeighborhoodMatrix = (nodesQuantity: number, edges: Edge[]): NeighborhoodMatrix => {
    const result = buildSquareArray(nodesQuantity);
    
    // assuming graph is unweighted and bidirectional
    edges.forEach(([firstNode, secondNode]) => {    
        result[firstNode][secondNode]++;
        result[secondNode][firstNode]++;
    });

    return result;
}

const BFSTraversal = (graphMatrix: NeighborhoodMatrix, callBack: (node: GraphNode) => void = console.log): void => {
    const visitedNodes: Set<GraphNode> = new Set();
    const queue: GraphNode[] = [0];
    
    while(queue.length !== 0) {
        let currentNode = queue.shift();

        if (currentNode === undefined || currentNode === null) throw Error("Out of index accessor");
        
        if (!visitedNodes.has(currentNode)) {
            callBack(currentNode);
        }
        
        let nodeAdjacents = graphMatrix[currentNode];
        
        nodeAdjacents.forEach((edgesQuantity, adjacentNode) => {
            if (edgesQuantity > 0 && !visitedNodes.has(adjacentNode)) {
                queue.push(adjacentNode);
            }
        })

        visitedNodes.add(currentNode);
    }
}

// const MOCK_DATA: Edge[] = [
//     [0, 1],
//     [1, 2],
//     [1, 3],
//     [2, 3],
//     [2, 7],
//     [3, 5],
//     [3, 6],
//     [5, 7],
//     [4, 6],
//     [6, 7]
// ];

// const neighborhoodMatrix = buildNeighborhoodMatrix(8, MOCK_DATA);

// neighborhoodMatrix.forEach(row => console.log(...row));

// console.log('BFS:');

// console.log(BFSTraversal(neighborhoodMatrix));

const graphMetadata = await readFromStdIn();
const [graphNodes, graphEdges] = graphMetadata.split(' ');
const EDGES: Edge[] = [];

for (let i = 0; i<Number(graphEdges); i++) {
    const input = await readFromStdIn();
    const [firstNode, secondNode] = input.split(" ");
    EDGES.push([Number(firstNode), Number(secondNode)]);
}

const neighborhoodMatrix = buildNeighborhoodMatrix(8, EDGES);
console.log(BFSTraversal(neighborhoodMatrix));
