// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.

// OJ's undirected graph serialization:
// Nodes are labeled uniquely.

// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.
// As an example, consider the serialized graph {0,1,2#1,2#2,2}.

// The graph has a total of three nodes, and therefore contains three parts as separated by #.

// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
// Second node is labeled as 1. Connect node 1 to node 2.
// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.
// Visually, the graph looks like the following:

//        1
//       / \
//      /   \
//     0 --- 2
//          / \
//          \_/

/**
 * Definition for undirected graph.
 * class UndirectedGraphNode {
 *     int label;
 *     List<UndirectedGraphNode> neighbors;
 *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }
 * };
 */


class UndirectedGraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = [];
    }
}

class CloneGraph {
    constructor() {
        this.map = new Map(); // Use Map for storing cloned nodes
    }

    cloneGraph(node) {
        // Handle edge case where the input node is null
        if (node === null) {
            return null;
        }

        // If the node has already been cloned, return the clone
        if (this.map.has(node.label)) {
            return this.map.get(node.label);
        }

        // Create a new clone of the current node
        const newNode = new UndirectedGraphNode(node.label);
        this.map.set(newNode.label, newNode); // Store the clone in the map

        // Recursively clone the neighbors
        for (const neighbor of node.neighbors) {
            newNode.neighbors.push(this.cloneGraph(neighbor));
        }

        return newNode; // Return the cloned node
    }
}

// Example Usage
// Constructing a graph manually for demonstration
const node0 = new UndirectedGraphNode(0);
const node1 = new UndirectedGraphNode(1);
const node2 = new UndirectedGraphNode(2);

node0.neighbors.push(node1, node2);
node1.neighbors.push(node0, node2);
node2.neighbors.push(node0, node1, node2); // Self-cycle

const cloneGraphInstance = new CloneGraph();
const clonedGraph = cloneGraphInstance.cloneGraph(node0);

// Function to print the cloned graph for verification
function printGraph(node, visited = new Set()) {
    if (!node || visited.has(node.label)) return;
    visited.add(node.label);
    const neighborsLabels = node.neighbors.map(n => n.label).join(', ');
    console.log(`Node ${node.label} -> Neighbors: [${neighborsLabels}]`);
    for (const neighbor of node.neighbors) {
        printGraph(neighbor, visited);
    }
}

printGraph(clonedGraph); // Print the cloned graph structure
