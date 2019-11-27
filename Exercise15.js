function groupAnimals(arr){
    arrBaru=[]
    for (i =0;i<arr.length;i++){
        masuk = false
        tmp = [arr[i]]
        for(j=0;j<arrBaru.length;j++){
            if(tmp[0][0] == arrBaru[j][0][0]){
                arrBaru[j].push(arr[i])
                masuk = true
            }   
        }
        if(!masuk){
            arrBaru.push(tmp)
        }

    }
    for (i = 0; i<arrBaru.length;i++){
        for(j=0;j<arrBaru.length-i-1;j++){
            if(arrBaru[j]> arrBaru[j+1]){
                tmp = arrBaru[j]
                arrBaru[j]=arrBaru[j+1]
                arrBaru[j+1]= tmp
            }
        }
    }
    return arrBaru
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]