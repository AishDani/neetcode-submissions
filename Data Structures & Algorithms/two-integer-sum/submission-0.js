class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {}
        for(let i = 0; i < nums.length; i++){
            hash[nums[i]] = i

        }
        for(let i = 0; i< nums.length; i++){
            let diff = target - nums[i];
            if(hash[diff] && hash[diff] !== undefined && hash[diff] != i){
                return [i,hash[diff]]
            }
        }
    }
}
