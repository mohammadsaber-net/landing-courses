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
const faders = document.querySelectorAll('.fade-up');
const boxes = document.querySelectorAll('.courses .box');

    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.1,
    });

    faders.forEach(fade => {
      appearOnScroll.observe(fade);
    });
    boxes.forEach(fade => {
      appearOnScroll.observe(fade);
    });


    document.querySelector('.contactForm').addEventListener('submit', function(e) {
    e.preventDefault()
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const fullMessage = `مرحبًا، لدي رسالة من موقعك:
الاسم: ${name}
البريد: ${email}
رقم الهاتف: ${phone}
الرسالة: ${message}`;
    const phoneNumber = "+201023966702"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(url, '_blank');
  });
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
  });