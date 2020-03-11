class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const getBinaryTree = (list) => {
    const root = new TreeNode(list[0]);
    for (let i = 1; i < list.length; i++) {
        const current = list[i];
        if (root.left === null) {
            root.left = current === null ? undefined : current;
        } else if (root.left) {

        }
    }
    return root;
}

const tree = new TreeNode(2);

console.log(tree)
