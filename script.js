'use strict';

const html = document.querySelector('html');
const body = document.querySelector('#body');
const phoneNumber = document.getElementById('number');
const clickHome = document
  .querySelector('#home')
  .addEventListener('click', function () {
    event.preventDefault();
    console.log('Home');
  });

const clickNews = document
  .querySelector('#news')
  .addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('header2').scrollIntoView();
  });

const clickLink1 = document
  .querySelector('#link1')
  .addEventListener('click', function () {
    event.preventDefault();
    window.open('https://www.instagram.com/daniela_saavedras/');
  });

const clickLink2 = document
  .querySelector('#link2')
  .addEventListener('click', function () {
    event.preventDefault();
    window.open('https://www.facebook.com/Saavedra-Tattoo-105570378726404');
  });
