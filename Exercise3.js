function dataHandling(arr){
    var tampil = ""
    for (i=0;i<arr.length;i++){
        for (j=0;j<arr[i].length;j++){
            if(j == 0){
                tampil += "Nomor ID :  "+ `${arr[i][j]}`+"\n"
            }
            else if(j == 1){
                tampil += "Nama : "+ `${arr[i][j]}`+"\n"
            }
            else if(j == 2){
                tampil += "TTL : "+`${arr[i][j]} ${arr[i][j+1]}`+"\n"
            }
            else if(j == 4){
                tampil += "Hobby : "+`${arr[i][j]}` + "\n\n"
            }

        }
    }
    return tampil
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))