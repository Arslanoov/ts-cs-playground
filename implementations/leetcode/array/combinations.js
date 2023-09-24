/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    if (nums.length === 1) {
        return [nums.slice()]
    }

    const results = [];

    for (let i = 0; i < nums.length; i++) {
        const n = nums.shift();
        const perms = permute(nums.slice());

        perms.forEach((perm) => perm.push(n));

        results.push(...perms);
        nums.push(n);
    }

    return results;
};
