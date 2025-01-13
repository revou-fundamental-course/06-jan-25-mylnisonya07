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