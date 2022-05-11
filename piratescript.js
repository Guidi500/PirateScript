function splitwords(input){
    let currentword = "";
    let output = [];
    for (letter in input){
        if (input.charAt(letter) === " " && currentword !== ""){
            output.push(currentword);
            currentword = "";
        }
        else {
            currentword += input.charAt(letter);
        }
    }
    output.push(currentword);
    return output;
}

function piratize(input){
    let piratewords = "";
    let wordsarray = splitwords(input);
    for (let i = 0; i < wordsarray.length; i++){
        
        if (wordsarray[i] === "pounds"){
            piratewords += "doubloons" + " ";
        }
        else if (!isNaN(wordsarray[i])){
            piratewords += wordsarray[i] + " ";
        }
        else{
            piratewords += pirateizeword(wordsarray[i]) + " ";
        }
        
    }
    piratewords = piratewords.substring(0,piratewords.length - 1);
    
    return piratewords;
}

function pirateizeword(word){
    let firstletter = word.charAt(0);
    let finalword = "";
    for (let i = 1; i < word.length; i++) {
        finalword += word.charAt(i);
    }
    finalword += firstletter + "arr";
    return finalword;
}


