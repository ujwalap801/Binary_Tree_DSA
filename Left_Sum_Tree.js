
var sumOfLeftLeaves = function(root) {
    let sum =0;

    let traversal =(curr)=>
    {
           if(!curr) return;

           if(curr.left)
           {
            if(!curr.left.left && !curr.left.right)
            {
                sum +=curr.left.val;
            }else{
                traversal(curr.left);
            }
           }

           if(curr.right)
           {
            traversal(curr.right);
           }
    }

    traversal(root);
    return sum;
    
};