const graph = {
    1: [2, 4],
    2: [1, 3, 4],
    3: [2, 4],
    4: [1, 2, 3]
}

const graphMatrix = [
    [0, 1, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [1, 1, 1, 0]
]

class Graph {
    constructor() {
        this.vertices = {}
    }

    addVertex(value) {
        if(!this.vertices[value]) {
            this.vertices[value] = []
        }
    }

    addEdge(vertex1, vertex2) {
        if(!(vertex1 in this.vertices) || !(vertex2 in this.vertices)) {
            throw new Error('Таких вершин в этом графе нет')
        }

        if(!this.vertices[vertex1].includes(vertex2)) {
            this.vertices[vertex1].push(vertex2)
        }
        if(!this.vertices[vertex2].includes(vertex1)) {
            this.vertices[vertex2].push(vertex1)
        }
    }

    dfs(startVertex, callback) {
        let list = this.vertices;
        let stack = [startVertex];
        let visited = { [startVertex]: 1 }

        function handleVertex(vertex) {
            callback(vertex)

            let reversedNeighboursList = [...list[vertex]].reverse();
            reversedNeighboursList.forEach((neighbour) => {
                if(!visited[neighbour]) {
                    visited[neighbour] = 1;
                    stack.push(neighbour);
                }
            })
        }

        while(stack.length) {
            let activeVertex = stack.pop()
            handleVertex(activeVertex)
        }

        stack = Object.keys(this.vertices)
        while(stack.length) {
            let activeVertex = stack.pop()
            if(!visited[activeVertex]) {
                visited[activeVertex] = 1;
                handleVertex(activeVertex);
            }
        }
    }
}

const graphFromClass = new Graph()

graphFromClass.addVertex('A');
graphFromClass.addVertex('B');
graphFromClass.addVertex('C');
graphFromClass.addVertex('D');
graphFromClass.addVertex('E');
graphFromClass.addVertex('F');
graphFromClass.addVertex('G');
graphFromClass.addVertex('H');
graphFromClass.addEdge('A', 'B');
graphFromClass.addEdge('A', 'C');
graphFromClass.addEdge('C', 'E');
graphFromClass.addEdge('C', 'D');
graphFromClass.addEdge('A', 'F');
graphFromClass.addEdge('F', 'G');

graphFromClass.dfs('A', vertex => console.log(vertex))