function dataHandling2 (arr){
    arr.splice(1,1,"Roman Alamsyah Elsharawy")
    arr.splice(2,1,"Provinsi Bandar Lampung")
    arr.splice(4,1,"Pria", "SMA Internasional Metro")
    console.log(arr)
    bulanArr = arr[3].split("/")
    switch(bulanArr[1]){
        case '01':
            namaBulan = 'Januari'
            break;
        case '02':
            namaBulan = "Februari"
            break;
        case '03':
            namaBulan = "Maret"
            break;
        case '04':
            namaBulan = "April"
            break;
        case '05':
            namaBulan = "Mei"
            break;
        case '06':
            namaBulan = "Juni"
            break;
        case '07':
            namaBulan = "Juli"
            break;
        case '08':
            namaBulan = "Agustus"
            break;
        case '09':
            namaBulan = "September"
            break;
        case '10':
            namaBulan = "Oktober"
            break;
        case '11':
            namaBulan = "November"
            break;
        case '12':
            namaBulan = "Desember"
            break;
    }
    console.log(namaBulan)
    console.log(bulanArr)

    //sort
    train = bulanArr.sort((a,b)=> b-a)
    console.log(bulanArr)

    //21-05-1989
    bulanGaris = arr[3].split("/")
    gabung = bulanGaris.join("-")
    console.log(gabung)

    //Slice
    nama = String(arr[1])
    potong = nama.slice(0,15)
    console.log(potong)


    return arr
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input)