class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let first = 0;
        let second = s.length - 1;

        
        while ( first < second){
           while (first < second && !this.alphaNum(s[first])) {
                first++;
            }
            while (second > first && !this.alphaNum(s[second])) {
                second--;
            }
            if(s[first]?.toLowerCase() !== s[second]?.toLowerCase()){
                console.info(s[first], s[second])
                return false;
            }
            first ++;
            second --;
        }
        console.info(first,second);
        return true;

    }
    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
    

}
