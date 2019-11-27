function pasanganTerbesar(num){
    angkaString = String(num)
    hasil = 0
    for(i=0;i<angkaString.length;i++){
        pembanding = ''
        for(j=i;j<=i+1;j++){
            pembanding += angkaString[j]
        }
        if(pembanding > hasil){
            hasil = pembanding
        }
    }
    return Number(hasil)
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99