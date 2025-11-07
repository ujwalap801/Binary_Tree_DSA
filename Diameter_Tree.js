var diameterOfBinaryTree = function(root) {
    let maxDia =0;
    let findDepth =(curr)=>
    {
        if(!curr) return 0;
        let leftDepth = findDepth(curr.left);
        let rightDepth = findDepth(curr.right);

        let currDepth = leftDepth + rightDepth;
        maxDia = Math.max(currDepth, maxDia);

        return 1 + Math.max(leftDepth, rightDepth)

    }

    findDepth(root);
    return maxDia;
};