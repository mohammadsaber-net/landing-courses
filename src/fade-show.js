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
