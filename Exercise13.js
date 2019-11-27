function targetTerdekat(arr){
    jarakKiri = 0
    jarakKanan=0
    //flag
    xki = false
    xka = false
    for(i=0;i<arr.length;i++){
        if(arr[i] == 'o'){
            //arah kiri
            for(j=0;j<=i;j++){
                if(arr[j] == " " && arr[j+1] !== undefined){
                    jarakKiri +=1
                }
                else if(arr[j] == "x" && xki== false){
                    jarakKiri+=1
                    xki=true
                    break
                }
            }
            //arah kanan
            for(j=i;j<arr.length;j++){
                if(arr[j] == ' ' && arr[j+1] !== undefined){
                    jarakKanan +=1
                }
                else if(arr[j] == 'x' && xka==false){
                    jarakKanan +=1
                    xka=true
                    break
                }
            }
            

        }
    }
    if(xka){
        if(xki){
            if(jarakKanan < jarakKKiri){
                return jarakKanan
            }
            else{
                return jarakKiri
            }
        }
        else {
            return jarakKanan
        }
        
    }
    else if(!xki && !xka){
        return 0
    }else{
        return jarakKiri
    }
}

console.log(targetTerdekat([' ',' ','o',' ',' ','x',' ','x'])); // 3
console.log(targetTerdekat(['o',' ',' ',' ','x','x','x'])); // 4
console.log(targetTerdekat(['x',' ',' ',' ','x','x','o',' '])); // 1
console.log(targetTerdekat([' ',' ','o',' '])); // 0
console.log(targetTerdekat([' ','o',' ','x','x',' ',' ','x'])); // 2

