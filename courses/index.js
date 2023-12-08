const navbar = document.querySelector('.navbar');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('#closemenu');


openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

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