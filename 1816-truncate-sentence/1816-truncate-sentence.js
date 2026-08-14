/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
    let arr=s.split(" ");
    let str="";
    for(let i=0;i<k;i++) {
        str+=arr[i]+" ";

    } 

    return str.trim();
};