function navigateTo(pageId) {
  // Mendapatkan elemen halaman berdasarkan ID
  var page = document.getElementById(pageId);

  // Memeriksa apakah halaman ditemukan
  if (page) {
    // Menyembunyikan semua halaman
    var pages = document.querySelectorAll('.page');
    pages.forEach(function (page) {
      page.style.display = 'none';
    });

    // Menampilkan halaman yang dipilih
    page.style.display = 'block';
  }
}
document.addEventListener('keydown', function(event) {
  // Periksa apakah tombol yang ditekan adalah 'F' atau 'f'
  if (event.key === 'F' || event.key === 'f') {
    // Cetak teks ke console
    console.log("M1 :CHECK: | 02 ALVIAN PRATAMA PUTRA");
    console.log("M2 :CHECK: | 01 AKHMAD GAZAN SHAIDAN GUNAWAN");
    console.log("M2 :UNCHECK: | 01 AKHMAD GAZAN SHAIDAN GUNAWAN");
  }
});