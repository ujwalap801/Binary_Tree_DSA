// USING TWO STACKS
var postorderTraversal = function(root) {
    if(!root) return [];
    
    let ans=[];
    let s1 =[root];
    let s2 =[];

    while(s1.length)
    {
        let curr = s1.pop();
        s2.push(curr);
       curr.left && s1.push(curr.left);
       curr.right && s1.push(curr.right);

    }

    while(s2.length)
    {
        ans.push(s2.pop().val);
    }

    return ans;
};


// USING ONE STACK
var postorderTraversal = function(root) {
    let stack =[];
    let ans =[];
    let curr =root;
         let visitedNode =null;
    while(curr || stack.length)
    {
        while(curr)
        {
            stack.push(curr);
            curr =curr.left;
        }
        let peekNode = stack[stack.length-1];
   
        if(peekNode.right && peekNode.right !== visitedNode)
        {
            curr = peekNode.right;
        }else{
            ans.push(peekNode.val);
            visitedNode = stack.pop();
        }
    }

    return  ans;
};