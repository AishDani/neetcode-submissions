class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a,b)=> a-b);
        console.info(sorted);
        let res = [];
        // let r = sorted.length - 1 ;
        for(let i = 0; i < sorted.length; i++){
             if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = sorted.length - 1;
            while (l < r){
                 let sum = sorted[i] + sorted [l] + sorted[r];
                if(sum === 0){
                    res.push([sorted[i] , sorted [l],  sorted[r]]);
                    l++;
                    r--;
                    while( l < r && nums[l] === nums[l - 1]){
                        l++;
                    }

                }
                if (sum > 0){
                    r--;
                }
                else if (sum < 0){
                    l++;
                }

            }
           

        }
        console.info(res);
        return res;
    }
}
