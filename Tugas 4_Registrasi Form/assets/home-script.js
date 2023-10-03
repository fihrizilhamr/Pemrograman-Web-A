function validateForm() {
    var nim = document.forms["formPendaftaran"]["NIM"].value;

    if (document.forms["formPendaftaran"]["Nama"].value == "") {
        alert("Nama Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["Nama"].focus();
        return false;
    }
    if (nim == "") {
        alert("Nomor Induk Mahasiswa Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["NIM"].focus();
        return false;
    }
    if (isNaN(nim)) {
        alert("Nomor Induk Mahasiswa harus berupa angka");
        document.forms["formPendaftaran"]["NIM"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["Gender"].value == "") {
        alert("Pilih Jenis Kelamin");
        document.forms["formPendaftaran"]["Gender"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["MK"].value == "") {
        alert("Pilih Mata Kuliah");
        document.forms["formPendaftaran"]["MK"].focus();
        return false;
    }
    if (document.forms["formPendaftaran"]["ND"].value == "") {
        alert("Nama Dosen Tidak Boleh Kosong");
        document.forms["formPendaftaran"]["ND"].focus();
        return false;
    }

    document.getElementById("successMessage").style.display = "flex";
    return false;
}

function checkInput() {
    var nama = document.getElementsByName("Nama")[0].value;
    var check = false;
    document.getElementById("rekomendasi").innerHTML = "";
    var prefix = "Tidak direkomendasikan:", suffix = "";

    if (nama.length > 0 && nama[0] === nama[0].toLowerCase()) {
        suffix += "<br>Huruf pertama bukan huruf kapital.";
        check = true;
    }
    if (nama.length > 0 && (/\d/.test(nama))) {
        suffix += "<br>Nama mengandung angka.";
        check = true;
    }

    if (nama.length < 3) {
        suffix += "<br>Nama kurang dari tiga karakter.";
        check = true;
    }

    if(check == true){
        document.getElementById("rekomendasi").innerHTML = prefix+suffix;
    }
}

function checkInputND() {
    var namaDosen = document.getElementsByName("ND")[0].value;
    var check = false;
    document.getElementById("rekomendasiND").innerHTML = "";
    var prefix = "Tidak direkomendasikan:", suffix = "";

    if (namaDosen.length > 0 && namaDosen[0] === namaDosen[0].toLowerCase()) {
        suffix += "<br>Huruf pertama bukan huruf kapital.";
        check = true;
    }
    if (namaDosen.length > 0 && (/\d/.test(namaDosen))) {
        suffix += "<br>Nama Dosen mengandung angka.";
        check = true;
    }

    if (namaDosen.length < 3) {
        suffix += "<br>Nama Dosen kurang dari tiga karakter.";
        check = true;
    }

    if (check == true) {
        document.getElementById("rekomendasiND").innerHTML = prefix + suffix;
    }
}
