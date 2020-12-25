'use strict'

let burger = document.querySelector('.burger_link');
let hoverMenu = document.querySelector('.hover_menu');
burger.onclick = function(){
    hoverMenu.classList.toggle('hover_menu_active');
}