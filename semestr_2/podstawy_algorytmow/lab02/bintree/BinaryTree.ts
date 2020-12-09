// utils
const accumulateSum = (numbers: number[]): number => numbers.reduce((a, b) => a + b, 0);
const numbersDistance = (a: number, b: number) => Math.abs(a - b);

class BinaryTreeNode {
    constructor(
        public readonly value: number,
        public leftChild?: BinaryTreeNode | null,
        public rightChild?: BinaryTreeNode | null,
    ) {}
}

class BinaryTree {
    private rootNode: BinaryTreeNode;

    private buildBalancedBinaryTree(nodeValues: Array<BinaryTreeNode['value']>);

    constructor(...nodeValues: Array<BinaryTreeNode['value']>) {
        if (nodeValues.length === 0) {
            throw Error('Binary Tree must have at least one Node!');
        }

        const nodeValuesAverage = accumulateSum(nodeValues) / nodeValues.length;
        const bestRootNodeValue = nodeValues.reduce((closestToAverageYet, currentValue ) => {
            return numbersDistance(nodeValuesAverage, currentValue) < numbersDistance(nodeValuesAverage, closestToAverageYet)
                ? currentValue
                : closestToAverageYet;
        }, nodeValues[0]);
        this.rootNode = new BinaryTreeNode(bestRootNodeValue);



        nodeValues.forEach((currentValue) => {
            this.insertNode(currentValue);
        });
    }

    /**
     *
     * @param value: arity parameter, need to pass every time
     * @param currentNode: recursive accumulator parameter, do not pass manually;
     */
    public insertNode(value: BinaryTreeNode['value'], currentNode: BinaryTreeNode = this.rootNode): void {
        if (value === currentNode.value) {
            return; // BinTree does not store duplicates. No need to add anything.
        }

        if (value < currentNode.value) {
            if (!currentNode.leftChild) {
                currentNode.leftChild = new BinaryTreeNode(value);
                return;
            }

            this.insertNode(value, currentNode.leftChild);
            return;
        }

        if (!currentNode.rightChild) {
            currentNode.rightChild = new BinaryTreeNode(value);
        }
        
        this.insertNode(value, currentNode.rightChild);
    }

    public includes(value: BinaryTreeNode['value']): boolean {
        return false;
    }

    public getNodesPreFix(): BinaryTreeNode[] {
        return [];
    }

    public getNodesInFix(): BinaryTreeNode[] {
        return [];
    }

    public getNodesPostFix(): BinaryTreeNode[] {
        return [];
    }
}


const binaryTree = new BinaryTree(1,2,3,4,5,6,7,8,9);
console.log(JSON.stringify(binaryTree));