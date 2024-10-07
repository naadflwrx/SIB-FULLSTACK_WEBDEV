// tugas, menampilkan 10 foto dan saat foto di klik, ada suara nya

let container = document.getElementById("container");

function playSound(){
    const audio = new Audio(`../asset/sound.mp3`);
    audio.play();
}

function tambahGambar() {
    for (let i = 0; i < 10; i++) {
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        let img = document.createElement("img");
        img.src = `../asset/img${i + 1}.jpg`; // sources untuk image
        img.alt = `Gambar ${i + 1}`;

        img.onclick = function() {
            playSound();
        };

        imageContainer.appendChild(img);
        container.appendChild(imageContainer);
    }
}