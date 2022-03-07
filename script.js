'use strict';

import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const html = document.querySelector('html');
const body = document.querySelector('#body');
const phoneNumber = document.getElementById('number');

const clickNews = document
  .querySelector('#news')
  .addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('header2').scrollIntoView();
  });

const clickMaps = document
  .querySelector('#home')
  .addEventListener('click', function () {
    event.preventDefault();
    document.getElementById('map').scrollIntoView();
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

var map = L.map('map').setView([-17.7755912, -63.1878051], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-17.77610928524583, -63.188661625430406])
  .addTo(map)
  .bindPopup(
    '<center>Saavedra Tattoo Shop</center><center>Apartamento #301</center>'
  )
  .openPopup();
