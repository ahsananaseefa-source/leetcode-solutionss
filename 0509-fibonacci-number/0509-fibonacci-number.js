/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a = 0 ;
    let b = 1 ;
    
    for(let i = 0; i < n; i++){
        let rslt = a + b;
        a = b;
        b = rslt
    }
    return a
    
};