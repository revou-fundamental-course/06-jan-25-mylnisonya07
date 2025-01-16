// Fungsi greeting name
function setUserName() {
    const userName = prompt("Masukkan nama Anda:");
    if (userName) {
        document.getElementById("name").textContent = userName;
    }
}

setUserName();



// Fungsi untuk validasi form
function validationform() {
    // Ambil nilai dari variabel yang ada di form
    const fullName = document.querySelector('input[name="full-name"]').value;
    const birthDate = document.querySelector('input[name="birth-date"]').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const messages = document.querySelector('textarea[name="messages"]').value;
    // Buat pastiin semua field diisi,
    if (fullName == "" || birthDate == "" || gender == "" || messages == "") {
        alert("All fields must be filled out!");
        return false;
    }

    // Nampilin hasil submit form
    document.getElementById('sender-full-name').textContent = fullName;
    document.getElementById('sender-birth-date').textContent = birthDate;
    document.getElementById('sender-gender').textContent = gender ? (gender === 'male' ? 'Laki-Laki' : 'Perempuan') : '';
    document.getElementById('sender-messages').textContent = messages;

    // Update waktu submitnya
    document.getElementById('current-time').textContent = new Date().toString();


    return false;
}


// fungsi untuk banner slide

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner += 1; //kenapa +=1 agar gambar diperbaharii jabarannya indexBanner = indexBanner + 1
    changeBackground();
    
}

function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');
    console.log(bannerList.length); // console nya bisa di hapus agar tdak masuk ke production kita

    // reset change banner  jika melebihi jumlah gambar
    console.log(indexBanner); // console nya bisa di hapus agar tdak masuk ke production kita
    if (indexBanner >= bannerList.length - 1) {
        // reset indexBanner
        indexBanner = 0;
    }

    // looping bannerList
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style.display = "none";
    }

    bannerList[indexBanner].style.display = "block";

}

setInterval(nextBanner, 3000); // 3000ms = 3s