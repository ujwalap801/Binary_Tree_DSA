// ITERATIVE

var rightSideView = function(root) {

    if(!root) return [];
    let q =[root];
    let ans =[];

    while(q.length)
    {
        let level = q.length;
        for(let i=0;i<level;i++)
        {
            let curr = q.shift();
            if(i==0) ans.push(curr.val);

            curr.right && q.push(curr.right)
            curr.left && q.push(curr.left);
        }
    }

    return ans;
    
};



// USING RECUSRION


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return [];
    let ans =[];

    let traversal =(curr, level)=>
    {

       if(!curr) return;
       if(level == ans.length)
       {
        ans.push(curr.val);
       }
     
     traversal(curr.right, level+1);
     traversal(curr.left, level+1);

    }

traversal(root, 0)
return ans;

    
};