// fungsi hitung nilai total menggunakan rest parameter dan arrow function
const hitungNilai = (nama, ...nilai) => {
    const nilaiTambah = [...nilai, 3, 7];
    const total = nilaiTambah.reduce((acc, value) => acc + value, 0);

console.log(`Nama saya adalah ${nama}
Total nilai saya adalah ${total}`); 
};

hitungNilai("Sina", 20, 10, 40);