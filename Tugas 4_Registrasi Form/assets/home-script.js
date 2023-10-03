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
    if (nama.length > 0 && nama[0] === nama[0].toLowerCase()) {
        document.getElementById("rekomendasi").innerHTML += "<br>Nama mengandung huruf kecil pada huruf pertama.";
        check = true;
    }
    if (nama.length > 0 && (/\d/.test(nama))) {
        document.getElementById("rekomendasi").innerHTML += "<br>Nama mengandung angka.";
        check = true;
    }
    if (check==true){

    }

    // Add other conditions based on your requirements

    //return check; // Return the boolean value
}
