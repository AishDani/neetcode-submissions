class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = ['+','*','/','-'];
        for(let i = 0 ; i < tokens.length ; i++){
        
            if( !isNaN(parseInt(tokens[i]))){
                stack.push(Number(tokens[i]));
         
            }else if(operators.includes(tokens[i])){
                let a = stack.pop();
                let b = stack.pop();

                let result;

                switch (tokens[i]) {
                    case '+':
                        result = b + a;
                        break;

                    case '-':
                        result = b - a;
                        break;

                    case '*':
                        result = b * a;
                        break;

                    case '/':
                        result = Math.trunc(b / a);
                        break;
                }
                stack.push(result)


            }
        }
       return stack.pop();

    }
}
