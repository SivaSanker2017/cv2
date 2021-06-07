var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectedButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

if(selectedButtons.length > 0){
    for(var i=0; i<selectedButtons.length; i++){
        selectedButtons[i].addEventListener('click', function(){
            //modal.style.display = 'block';
            //backdrop.style.display = 'block';
            //modal.className = 'open';
            modal.classList.add('open');
            backdrop.classList.add('open');
            console.log("one");
        });
    }
}

if(backdrop){
    backdrop.addEventListener('click', function(){
        //mobileNav.style.display = 'none';
        mobileNav.classList.remove('open');
        closeModal();
        console.log("2222");
    });
}

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal(){
    //modal.style.display = 'none';
    //backdrop.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
    console.log("3333");
}

if(toggleButton){
    toggleButton.addEventListener('click', function(){
        // mobileNav.style.display = 'block';
        // backdrop.style.display = 'block';
        mobileNav.classList.remove('open');
        backdrop.classList.remove('open');
        console.log("4444");
    });
}

