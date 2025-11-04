
var isBalanced = function(root) {
    
    let ans =true;
    let traversal =(curr)=>
    {
           if(!curr) return 0;
            let leftHeight = traversal(curr.left);
            let rightHeight = traversal(curr.right);
            if(Math.abs(leftHeight - rightHeight) >1)
            {
               ans = false;
            }

            return 1 +Math.max(leftHeight, rightHeight)
    }

   traversal(root)
    return ans;
};