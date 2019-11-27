function angkaPalindrome(num){
    num +=1
    hasil = 0
    palindrome = false
    while(!palindrome){
        angkaString = String(num)
        penanda =0
        if(angkaString.length == 1){
            hasil = Number(angkaString)
            palindrome = true
        }
        else{
            for (i=0; i<angkaString.length;i++){
                ujung = angkaString.length -1
            if(angkaString[i] == angkaString[ujung-i]){
                penanda +=1
                }
            }
        }
        if(penanda == angkaString.length){
            hasil= Number(angkaString)
            palindrome = true
        }
        else {
            num+=1
        }
    }
    return hasil
    

}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001