
document.addEventListener('DOMContentLoaded', () => {

    let callBackButton = document.getElementsByClassName('login__sign-up')[0];

    let modal1 = document.getElementById('modal-1');
  
 
    let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
  

    let tagBody = document.getElementsByTagName('body');
  
    callBackButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }
  
    closeButton.onclick = function (e) {
      e.preventDefault();
      modal1.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
  
    modal1.onmousedown = function (e) {
      let target = e.target;
      let modalContent = modal1.getElementsByClassName('modal__content')[0];
      if (e.target.closest('.' + modalContent.className) === null) {
        this.classList.remove('modal_active');
        tagBody.classList.remove('hidden');
      }
    };

    const desc = document.getElementsByClassName('card__about-description')[0];
    const available = document.getElementsByClassName('card__about-shops')[0];
    const descTitle = document.getElementsByClassName('about_good')[0];
    const availTitle = document.getElementsByClassName('about_available')[0];
  

    descTitle.onclick = function (e) {
        desc.style.display = "flex";
        descTitle.classList.add('active-title');
        availTitle.classList.remove('active-title');
    available.style.display = "none";
 
}



    availTitle.onclick = function(e) {
        available.style.display = "block";
        availTitle.classList.add('active-title');
        descTitle.classList.remove('active-title');
    desc.style.display = "none";
    
}

document.body.onclick = function(event) {
    event || window.event;
    if(event.target.classList.contains('min')) {
        document.getElementById('main').src=event.target.src;
    }
}

  });