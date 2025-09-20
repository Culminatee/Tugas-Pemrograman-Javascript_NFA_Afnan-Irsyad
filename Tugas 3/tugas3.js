const readline = require("readline"); //import readline untuk membaca inputan dari terminal (stdin) dan menuliskan output ke terminal (stdout)

//membuat interface readline
const rl = readline.createInterface({
  input: process.stdin, //ambil input dari keyboard (standar input)
  output: process.stdout, //menampilkan output ke layar terminal (standar output)
});

let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// function untuk menambahkan produk
function tambahProduk() {
  //rl.question() merupakan method dari readline untuk menampilkan pertanyaan ke user
  rl.question("Masukan nama barang: ", (nama) => {
    rl.question("Masukan harga barang: ", (harga) => {
      rl.question("Masukan stok barang: ", (stok) => {
        produkToko.push({
          id: produkToko.length + 1,
          nama: nama,
          harga: Number(harga),
          stok: Number(stok),
        });

        console.log("Produk berhasil ditambahkan!");
        console.log(produkToko);
        tampilkanMenu(); // balik ke menu
      });
    });
  });
}

// function menampilkan produk
function tampilkanProduk() {
  console.log("\n=================== Daftar Produk =====================");
  console.log(produkToko);
  console.log("=======================================================\n");
  tampilkanMenu();
}

// function hapus produk
function hapusProduk() {
  rl.question("Masukan ID produk yang ingin dihapus: ", (id) => {
    let index = produkToko.findIndex((p) => p.id === Number(id));
    if (index !== -1) {
      produkToko.splice(index, 1);
      console.log("Produk berhasil dihapus!");
    } else {
      console.log("Produk tidak ditemukan.");
    }
    tampilkanMenu();
  });
}

// function menu utama
function tampilkanMenu() {
  rl.question(
    "\nMenu:\n1. tambah\n2. lihat\n3. hapus\n4. keluar\nPilih menurut angka: ",
    (pilih) => {
      switch (pilih.toLowerCase()) {
        case "1":
          tambahProduk();
          break;
        case "2":
          tampilkanProduk();
          break;
        case "3":
          hapusProduk();
          break;
        case "4":
          console.log("Program selesai.");
          rl.close(); //menutup interface readline
          break;
        default:
          console.log("Pilihan tidak dikenal.");
          tampilkanMenu(); // mengulang
          break;
      }
    }
  );
}

// Mulai Program
tampilkanMenu();
