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


var strip_slider = document.getElementById('strip-slider__blog')
var control_1 = document.getElementById('control-sleder_1');
var control_2 = document.getElementById('control-sleder_2');
var control_3 = document.getElementById('control-sleder_3');
var control_4 = document.getElementById('control-sleder_4');
var button_hamburger = document.getElementsByClassName("hamburger")[0];
var modal_menu = document.getElementsByClassName("modal_menu")[0];


var number_position = ['0px', '-300px', '-600px', '-900px'];
var control_bgc = ['rgba(255, 225, 149, 0.3)', '#ffe195'];

control_1.style.backgroundColor = '#ffe195';

button_hamburger.onclick = function () {
  if (!!modal_menu.classList.contains("modal_menu-hidden-js")) {
    modal_menu.classList.remove("modal_menu-hidden-js");
    modal_menu.classList.add("modal_menu-open-js");
    document.body.style.overflow = "hidden"
  }
  else if (!modal_menu.classList.contains("modal_menu-hidden-js")) {
    modal_menu.classList.remove("modal_menu-open-js");
    modal_menu.classList.add("modal_menu-hidden-js");
    document.body.style.overflow = "auto"
  }
}


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









































