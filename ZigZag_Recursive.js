
var zigzagLevelOrder = function(root) {

    if(!root) return []
    let ans =[];
    let level =0;
    let traversal =(curr, level)=>
    {
        if(!ans[level]) ans[level] =[];
        if(level %2 ===0)
        {
            ans[level].push(curr.val);
        }else{
            ans[level].unshift(curr.val);
        }

        curr.left && traversal(curr.left, level+1);
        curr.right && traversal(curr.right, level+1);
    }

    traversal(root,level);

    return ans;
    
};