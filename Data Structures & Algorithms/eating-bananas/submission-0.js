class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r  = Math.max(...piles);
        let res = r;
        while(l <= r){
            let k = Math.floor((l + r) / 2);
            let totaltime = 0 ;
            for(const pile of piles){
                totaltime += Math.ceil(pile/k)

            }
             if (totaltime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}
