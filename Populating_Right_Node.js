
var connect = function(root) {
    if(!root) return root;

    let traversal =(curr)=>
    {

if(curr.left)
{
  curr.left.next = curr.right;
}
      
        if(curr.right && curr.next)
        {
             curr.right.next =curr.next.left;
        }
        
          curr.left &&  traversal(curr.left);
         curr.right &&   traversal(curr.right);

    }
    traversal(root);
    return root;
    
};