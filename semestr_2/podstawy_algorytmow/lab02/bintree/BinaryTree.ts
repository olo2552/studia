// README:
// TEN PLIK UŻYWA DENO, jako środowska Node.JS
// deno run ./BinaryTree.ts

// utils
const readFromStdIn = async () => {
    const buf = new Uint8Array(1024);
    const n = <number>await Deno.stdin.read(buf);
    return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

class BinaryTreeNode {
    constructor(
        public readonly value: number,
        public leftChild?: BinaryTreeNode | null,
        public rightChild?: BinaryTreeNode | null,
    ) {}
}

type BinaryTreeTraverseCallback = (currentNode: BinaryTreeNode) => void

class BinaryTree {
    private rootNode: BinaryTreeNode;

    constructor(nodeValues: Array<BinaryTreeNode['value']> | BinaryTreeNode) {
        if (nodeValues instanceof BinaryTreeNode) {
            this.rootNode = nodeValues;
            return;
        }

        if (nodeValues.length === 0) {
            throw Error('Binary Tree must have at least one Node!');
        }

        this.rootNode = new BinaryTreeNode(nodeValues[0]);

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

    public includes(value: BinaryTreeNode['value'], currentNode: BinaryTreeNode | null | undefined = this.rootNode): boolean {
        if (!currentNode) {
            return false;
        }

        if (currentNode.value === value) {
            return true;
        }

        if (currentNode.value > value && currentNode.leftChild) {
            return this.includes(value, currentNode.leftChild);
        }

        if (currentNode.value < value && currentNode.rightChild) {
            return this.includes(value, currentNode.rightChild);
        }

        return false;
    }

    public traversePreFix(cb: BinaryTreeTraverseCallback, tree: BinaryTree = this): void {
        if (!tree.rootNode) {
            return;
        }

        if (!!this.rootNode.value) {
            cb(tree.rootNode);
        }

        if (!!tree.rootNode.leftChild) {
            this.traverseInFix(cb, new BinaryTree(tree.rootNode.leftChild));
        }

        if (!!tree.rootNode.rightChild) {
            this.traverseInFix(cb, new BinaryTree(tree.rootNode.rightChild));
        }
    }

    public traverseInFix(cb: BinaryTreeTraverseCallback, tree: BinaryTree = this): void {
        if (!tree.rootNode) {
            return;
        }

        if (!!tree.rootNode.leftChild) {
            this.traverseInFix(cb, new BinaryTree(tree.rootNode.leftChild));
        }

        if (!!this.rootNode.value) {
            cb(tree.rootNode);
        }

        if (!!tree.rootNode.rightChild) {
            this.traverseInFix(cb, new BinaryTree(tree.rootNode.rightChild));
        }
    }

    public traversePostFix(cb: BinaryTreeTraverseCallback, tree: BinaryTree = this): void {
        if (!tree.rootNode) {
            return;
        }

        if (!!tree.rootNode.leftChild) {
            this.traverseInFix(cb, new BinaryTree(tree.rootNode.leftChild));
        }

        if (!!tree.rootNode.rightChild) {
            this.traverseInFix(cb, new BinaryTree(tree.rootNode.rightChild));
        }

        if (!!this.rootNode.value) {
            cb(tree.rootNode);
        }
    }
}
const binaryTreeInitializer: Array<BinaryTreeNode['value']> = [];
let binaryTreeNodeValue = Number(await readFromStdIn());
while(binaryTreeNodeValue !== 0) {
    binaryTreeInitializer.push(binaryTreeNodeValue);
    binaryTreeNodeValue = Number(await readFromStdIn());
}

const binaryTree = new BinaryTree(binaryTreeInitializer);
console.log(JSON.stringify(binaryTree));

console.log("Pre fix order:");
console.log(binaryTree.traversePreFix(currentNode => {
    console.log(currentNode.value)
}));

console.log("In fix order:")
console.log(binaryTree.traverseInFix(currentNode => {
    console.log(currentNode.value)
}));

console.log("Post fix order:")
console.log(binaryTree.traversePostFix(currentNode => {
    console.log(currentNode.value)
}));

console.log("Enter number of test cases:");
const testCasesQuantity = Number(await readFromStdIn());

for (let i = 0; i<testCasesQuantity; i++) {
    const testValue = Number(await readFromStdIn());
    if (binaryTree.includes(testValue)) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}