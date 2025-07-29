// document.querySelector('a').forEach(anchor=>{
//     anchor.addEventListener('click',function(e)
// {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//     });
// });
// });



const openBtn = document.getElementById('navigate');
const closeBtn = document.getElementById('closeNav');
const nav = document.getElementById('nav')
const navLinks = document.querySelectorAll('.navtag li a');


openBtn.addEventListener('click', function (e) {
  e.preventDefault()
  nav.classList.add('active');
  openBtn.style.display = 'none'
  closeBtn.style.display = 'block';
});


closeBtn.addEventListener('click', function (e) {
  e.preventDefault()
  nav.classList.remove('active');
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none'
})


navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });

      // ✅ Only collapse sidebar if screen is ≤ 768px
      if (window.innerWidth <= 768) {
        nav.classList.remove('active');
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
      }
    }
  });
});


// Handle screen resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    // Desktop: always show nav, hide toggle buttons
    nav.classList.add('active');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'none';
  } else {
    // Mobile: hide nav and show open button
    nav.classList.remove('active');
    openBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }
});

// Trigger resize on load (optional but useful)
window.dispatchEvent(new Event('resize'));



// const openBtn = document.getElementById('openNav');
// const closeBtn = document.getElementById('#closeNav a');
// const nav = document.getElementById('nav');
// const navLinks=document.querySelectorAll('.navtag li a');


// openBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     nav.classList.add('active');
// });

// closeBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     nav.classList.remove('active');
// });
