/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')

rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-res');
    navlist.classList.toggle('v-class-res');
    navbar.classList.toggle('h-nav-res');


})

