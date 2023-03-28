const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel')
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const maps = document.getElementById("drop-up")
const mapsnav = document.querySelector('.mapsnav')
// const charkecil = document.querySelector('.charkecil')
// const namechar = document.querySelector('.namachar')
const nama1 = document.getElementById("nama1")
const nama2 = document.getElementById("nama2")
const nama3 = document.getElementById("nama3")
const charkecil1 = document.getElementById("charkecil1")
const charkecil2 = document.getElementById("charkecil2")
const charkecil3 = document.getElementById("charkecil3")


var direction = 0;
// ini buat ngeinitialize di gambar orang pertama
nama1.classList.add('hidup');


charkecil1.addEventListener("click", () => {
  direction = 0;
  slider.style.transform = "translateX(0)";
  nama1.classList.add("hidup");
  nama2.classList.remove("hidup");
  nama3.classList.remove("hidup");
});
charkecil2.addEventListener("click", () => {
  direction = 1;
  slider.style.transform = "translateX(-33.333333%)";
  nama1.classList.remove("hidup");
  nama2.classList.add("hidup");
  nama3.classList.remove("hidup");
});
charkecil3.addEventListener("click", () => {
  direction = 2;
  slider.style.transform = "translateX(-66.666666%)";
  nama1.classList.remove("hidup");
  nama2.classList.remove("hidup");
  nama3.classList.add("hidup");
});

function updateContent() {
    if(direction == 0) {
        slider.style.transform = 'translateX(0)';
        nama1.classList.add('hidup');
        nama2.classList.remove('hidup');
        nama3.classList.remove('hidup');
    }
    if(direction == 1) {
        slider.style.transform = 'translateX(-33.333333%)';
        nama1.classList.remove('hidup');
        nama2.classList.add('hidup');
        nama3.classList.remove('hidup');
    }
    if(direction == 2) {
        slider.style.transform = 'translateX(-66.666666%)';
        nama1.classList.remove('hidup');
        nama2.classList.remove('hidup');
        nama3.classList.add('hidup');
    }
}

prev.addEventListener('click', function() {
    // if(direction == -1){
    //     slider.appendChild(slider.firstElementChild)
    //     direction = 1;
        if(direction > 0) {
            direction--;
            updateContent();    
        }
        console.log(direction)
        console.log("kiri")
        
    // }
    // carousel.style.justifyContent = 'flex-end';
    
});

next.addEventListener('click', function(){
    // direction = -1;
    
    if(direction < 2) {
        direction++;
        updateContent();    
    }
    console.log(direction)
    console.log("kanan");
    // carousel.style.justifyContent = 'flex-start';
    // updateContent();
    // slider.style.transform = 'translateX(-35%)'
});

var count = 0;
let width = screen.width;
// maps.addEventListener('click', function(){
//     count++;
//     if(count % 2 == 1) mapsnav.style.display = "flex";
//     else if(count % 2 == 0) mapsnav.style.display = "none";
    
// })

//Richard ubah, 


maps.addEventListener('click', function(){
    count++;
    console.log("dipencet " + count);
    if(count % 2 == 1) {
        mapsnav.style.display = "flex";
    } else {
        if (window.innerWidth > 400) {
            mapsnav.style.display = "flex";
        }
        mapsnav.style.display = "none";
    }
});

window.addEventListener('resize', function() {
    if (count % 2 == 0 && window.innerWidth > 400) {
        mapsnav.style.display = "flex";
    }
});


// if(width > 350){
    // console.log(width);
    // mapsnav.style.display = "flex";
// }

// slider.addEventListener('transitioned', function(){
//     if(direction == -1){
//         slider.appendChild(slider.firstElementChild)
//     }else if(direction == 1){
//         slider.prepend(slider.lastElementChild)
//     }

//     slider.style.transition = 'none';
//     slider.style.transform = 'translate(0)';
//     setTimeout(function(){
//         slider.style.transform = 'all 0.5s'
//     })
// })