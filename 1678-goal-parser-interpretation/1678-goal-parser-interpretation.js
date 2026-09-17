/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    
    let rslt = '';

    for(let i = 0; i < command.length;i++){

        if(command[i] === "G"){
            rslt += "G"

        }

        else if (command[i] === "(" && command[i + 1] === ")") {
        rslt += "o";
        i++;
        }

        else {
        rslt += "al";
        i += 3;
    }
    }
    return rslt
    
};