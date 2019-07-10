let anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
/* document.getElementsByClassName('button--device')[0].onclick = function() {
  if(!this.classList.contains('button--device-active')){
      this.classList.add('button--device-active'),
      document.getElementsByClassName('button__burger')[0].classList.add('button__burger--active'),
      document.getElementsByClassName('header__menu--device')[0].classList.add('header__menu--device-active');
  }
  else{
      this.classList.remove('button--device-active'),
      document.getElementsByClassName('button__burger')[0].classList.remove('button__burger--active'),
      document.getElementsByClassName('header__menu--device')[0].classList.remove('header__menu--device-active');
  }
}; */

//button-control_1 blog-news__block_slider



var strip_slider = document.getElementById('strip-slider__blog')

var control_1 = document.getElementById('control-sleder_1');
var control_2 = document.getElementById('control-sleder_2');
var control_3 = document.getElementById('control-sleder_3');
var control_4 = document.getElementById('control-sleder_4');

var number_position = ['0px','-300px','-600px','-900px'];

 
 
var control_bgc = ['rgba(255, 225, 149, 0.3)', '#ffe195'];

control_1.style.backgroundColor = '#ffe195';


 

control_1.onclick = function () {
  strip_slider.style.left = number_position[0];
  control_1.style.backgroundColor = control_bgc[1]
  control_2.style.backgroundColor = control_bgc[0]
  control_3.style.backgroundColor = control_bgc[0]
  control_4.style.backgroundColor = control_bgc[0]

}
control_2.onclick = function () {
  strip_slider.style.left = number_position[1];
  control_1.style.backgroundColor = control_bgc[0]
  control_2.style.backgroundColor = control_bgc[1]
  control_3.style.backgroundColor = control_bgc[0]
  control_4.style.backgroundColor = control_bgc[0]

}
control_3.onclick = function () {
  strip_slider.style.left = number_position[2]
  control_1.style.backgroundColor = control_bgc[0]
  control_2.style.backgroundColor = control_bgc[0]
  control_3.style.backgroundColor = control_bgc[1]
  control_4.style.backgroundColor = control_bgc[0]
}
control_4.onclick = function () {
  strip_slider.style.left = number_position[3]
  control_1.style.backgroundColor = control_bgc[0]
  control_2.style.backgroundColor = control_bgc[0]
  control_3.style.backgroundColor = control_bgc[0]
  control_4.style.backgroundColor = control_bgc[1]
}




 

































