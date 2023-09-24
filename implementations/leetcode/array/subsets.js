/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const results = [];
    const subset = [];

    const dfs = (i) => {
        if (i === nums.length) {
            results.push([...subset]);
            return;
        }

        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);
    }

    dfs(0);

    return results;
};
