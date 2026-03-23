// Fungsi untuk menjumlahkan dua angka
function tambah( a, b ) {
    return a + b;
}

// fungsi baru ditambahkan
function kurang( a, b ) {
    return a - b;
}

function kali( a, b ) {
    return a * b;
}

// Fungsi untuk membagi dua angka
// Mengembalikan pesan error jika b bernilai 0
function bagi( a, b ) {
    if (b === 0) {
        return "Error: tidak bisa membagi dengan 0";
    }
    return a / b;
}

// validasi dipindah ke fungsi sendiri
function validasiInput(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: input harus berupa angka";
    }
    return null;
}

function hitung(a, b, operator) {
    const error = validasiInput(a, b);
    if (error) return error;

    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") {
        if (b === 0) return "Error: tidak bisa membagi dengan 0";
        return a / b;
    }
}