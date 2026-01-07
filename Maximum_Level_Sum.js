
// BFS
var maxLevelSum = function(root) {
    if (!root) return 0;

    let q = [root];
    let ans = -Infinity;
    let level = 0;
    let resultLevel = 0;

    while (q.length) {
        let levelSize = q.length;
        let sum = 0;
        level++;

        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
     

            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
             sum += curr.val;
        }

        if (sum > ans) {
            ans = sum;
            resultLevel = level;
        }
    }

    return resultLevel;
};


// DFS
var maxLevelSum = function(root) {
   
   let levelSum = [];

   function Sum(root, level)
   {
    if(!root) return;

    if(level == levelSum.length)
    {
        levelSum.push(0);
    }

    levelSum[level] += root.val;

 Sum(root.left, level+1);
Sum(root.right, level+1);


   }


Sum(root,0);

let maxSum = -Infinity;
let level =0;

for(let i=0; i<levelSum.length;i++)
{
    if(levelSum[i] > maxSum)
    {
      maxSum = levelSum[i];
      level = i+1;
    }
}

return level;
};
