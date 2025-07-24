// document.querySelector('a').forEach(anchor=>{
//     anchor.addEventListener('click',function(e)
// {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//     });
// });
// });



const openBtn=document.getElementById('openNav');
const closeBtn=document.getElementById('closeNav');
const nav=document.getElementById('nav')
const navLinks=document.querySelectorAll('.navtag li a');


openBtn.addEventListener('click',function(e){
    e.preventDefault()
    nav.classList.add('active');
    openBtn.style.display='none'
    closeBtn.style.display='block';
});


closeBtn.addEventListener('click',function(e){
    e.preventDefault()
    nav.classList.remove('active');
    openBtn.style.display='block';
    closeBtn.style.display='none'
})

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            nav.classList.remove('active');
            openBtn.style.display='block';
            closeBtn.style.display='none';
        }
    });
});


