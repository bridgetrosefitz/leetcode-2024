/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const initialPath = []
    const result = []
    helper(0, initialPath, nums, result)
    return result
};

function helper(i, path, nums, res) {
    if(i === nums.length) {
        res.push([...path])
        return
    }

    // exclude
        helper(i + 1, path, nums, res)
    // include
        path.push(nums[i])
        helper(i + 1, path, nums, res)
        path.pop()
}