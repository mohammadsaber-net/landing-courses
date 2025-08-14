// main.js

let menu_toggle=document.querySelector('.menu-toggle');
let trans_toggle=document.querySelector('.trans-toggle');
menu_toggle.onclick=()=>{
    trans_toggle.classList.toggle('trans-toggle-hide');
    trans_toggle.classList.toggle('trans-toggle-active');
}
function animateText(sentence, speed = 10) {
    let hero_p=document.querySelector(".hero h2")
    hero_p.classList.add("text-white");
    let index = 0;
    
    const caret = document.createElement('span');
    caret.textContent = '|';
    hero_p.appendChild(caret);
    function displayNextLetter() {
        hero_p.textContent += sentence[index];
        index++;

        if (index < sentence.length) {
        
          setTimeout(displayNextLetter, speed);
        } else {
          setTimeout(() => {
            hero_p.textContent = '';
             hero_p.appendChild(caret);
            index = 0;
            setTimeout(displayNextLetter, speed);
        }, 1000);
    }
    }

    displayNextLetter();
}
animateText("ابدأ رحلتك في تعلم البرمجة الآن", 150);

