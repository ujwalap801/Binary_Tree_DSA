// BRUTE FORCE
var isSubtree = function(root, subRoot) {

if(!root) return false;
    if(isSame(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    
};

function isSame(t1, t2)
{
    if(!t1 && !t2) return true;

    if(!t1 || !t2) return false;

    if(t1.val !== t2.val) return false;

    return isSame(t1.left, t2.left) && isSame(t1.right,t2.right);
}

// TC:0(n)

var isSubtree = function (root, subRoot) {
let hashRoot =serialize(root);
let hashSubRoot = serialize(subRoot);

console.log(hashRoot);
console.log(hashSubRoot);
  return hashRoot.includes(hashSubRoot);
};

let serialize = function(root){
    let hash ="";
    let traversal =(curr)=>
    {
        if(!curr)
        {
            hash = hash + "-#"
            return
        }

        hash = hash +"-"+ curr.val ;
     traversal(curr.left);
      traversal(curr.right);
    }
    traversal(root);
    return hash;
}