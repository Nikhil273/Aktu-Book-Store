const navbar = document.querySelector('.navbar');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('#closemenu');
const head = document.querySelector(".head");

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

// head.addEventListener('mouseover',(e)=>{
//     if(e.target.classlist.include("nav-menu"));
// });

function show(){
    navbar.style.display = 'block';
    openmenu.style.display='none';
    closemenu.style.display='block';

}

function close(){
    navbar.style.display='none';
    closemenu.style.display='none';
    openmenu.style.display='block';

}