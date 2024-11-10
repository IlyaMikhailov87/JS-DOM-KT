document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav_ul').classList.toggle('open');
    document.querySelector('.header').classList.toggle('open');
    })
    
