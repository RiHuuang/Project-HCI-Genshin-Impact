const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel')
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const maps = document.getElementById("drop-up")
const mapsnav = document.querySelector('.mapsnav')


//problemnya adalah saat dia di pnecet geser dia merubah ukuran description nya

var direction = 0;

function updateContent() {
    if(direction == 0) slider.style.transform = 'translateX(0)';
    if(direction == 1) slider.style.transform = 'translateX(-33.333333%)';
    if(direction == 2) slider.style.transform = 'translateX(-66.666666%)';
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

// maps.addEventListener('click', function(){
//     count++;
//     console.log("dipencet " + count);
//     if(count % 2 == 1) mapsnav.style.display = "flex";
//     else {
//         if (width > 350){
//             mapsnav.style.display = "flex";
            
//         }
//         mapsnav.style.display = "none";
//     }
    
// })

maps.addEventListener('click', function(){
    count++;
    console.log("dipencet " + count);
    if(count % 2 == 1) {
        mapsnav.style.display = "flex";
    } else {
        if (window.innerWidth > 350) {
            mapsnav.style.display = "flex";
        }
        mapsnav.style.display = "none";
    }
});

window.addEventListener('resize', function() {
    if (count % 2 == 0 && window.innerWidth > 350) {
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