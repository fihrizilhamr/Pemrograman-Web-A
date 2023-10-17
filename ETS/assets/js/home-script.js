function validateForm() {
    var nama = document.forms["formPendaftaran"]["Nama"].value;
    var nim = document.forms["formPendaftaran"]["NIM"].value;
    var password = document.forms["formPendaftaran"]["Password"].value;
    var gender = document.forms["formPendaftaran"]["Gender"].value;
    var tanggalLahir = document.forms["formPendaftaran"]["TL"].value;
    var statusPerkawinan = document.forms["formPendaftaran"]["SP"].value;
    if (nama === "" || nim === "" || password === "" || gender === "" || tanggalLahir === "" || statusPerkawinan === "") {
        alert("Semua field harus diisi!");
        return false;
    }
    alert("Form berhasil diisi!");
    return true;
}