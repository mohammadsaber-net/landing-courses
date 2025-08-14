
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
  const swiper = new Sw
  iper('.swiper', {
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