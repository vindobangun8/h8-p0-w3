function tentukanDeretAritmatika(arr){
    angka = 0
    aritmatika = arr[1] - arr[0]
    for(i=0;i<arr.length;i++){
        if(arr[i+1] == undefined){
            angka +=1
        }
        else if (arr[i+1]-arr[i] == aritmatika) {
            angka +=1
        }
    }
    if(angka == arr.length){
        return true
    }
    else{
        return false
    }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false