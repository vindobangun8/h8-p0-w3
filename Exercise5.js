function palindrome(str){
    var hitung =0
    for(i=0;i<str.length;i++){
        ujung = str.length-1
        if(str[i] == str[ujung-i]){
            hitung+=1
        }
    }
    if(hitung == str.length){
        return true
    }
    else{
        return false
    }
}
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false