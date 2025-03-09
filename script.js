let img =document.querySelector('.img');
function phones(phone){
    img.src=phone;
}
let container=document.querySelector('.container')
function colors(color){
    container.style.background =color; 
}
//لفتح او اغلاق القائمه عند استخدام ال Hamburger
function toggleMenu(){
    const navLinks=document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}