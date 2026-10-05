class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length >  s2.length){
            return false;
        }

        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }
        let matches = 0;
        for(let i = 0; i < 26; i++){
            if(count1[i] === count2[i]){
                matches++;
            }
        }
     

        let l = 0;
        for(let r = s1.length; r < s2.length; r++){
            if(matches === 26){
                return true;
            }
            let index = s2.charCodeAt(r) - 97;
            count2[index]++;
            if(count1[index] === count2[index]){
                matches++;
            }
            else if(count1[index] + 1 === count2[index]){
                matches--;
            }

            index = s2.charCodeAt(l) - 97;
            count2[index]--;
            if (count1[index] === count2[index]) {
                matches++;
            } else if (count1[index] - 1 === count2[index]) {
                matches--;
            }
            l++;

        }
        return matches === 26;



        
    }
}
