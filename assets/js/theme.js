const body = document.querySelector('body');
const navMenu = document.querySelector('.nav-menu');
const extendMenu = document.querySelector('.menu-symbol');
const menuItmes = document.querySelectorAll('.nav-menu .hidden-item');
const start = document.querySelector('.start');
const about = document.querySelector('.about');
const galery = document.querySelector('.galery');
const contacts = document.querySelector('.contacts');
const toTop = document.querySelector('.to-top');

// navigation menu
navMenu.addEventListener('click', e => {
  switch(e.target.dataset.name) {
    case 'start':
      start.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'about':
      about.scrollIntoView({ behavior: 'smooth'});
      break;
    case 'galery':
      galery.scrollIntoView({ behavior: 'smooth' });
      break;
    case 'contacts':
      contacts.scrollIntoView({ behavior: 'smooth' });
      break;
  }
});

let firstClick = true;
extendMenu.addEventListener('click', e => {
  if(firstClick) {
    menuItmes.forEach(item => {
      console.log(item);
      item.style.display = 'list-item';
    });
    firstClick = false;
  } else {
    menuItmes.forEach(item => {
      console.log(item);
      item.style.display = 'none';
    });
    firstClick = true;
  }
});

// google maps api
function initMap() {
  const uluru = { lat: 56.949340, lng: 24.103735 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 4,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// anchot scroll to top
toTop.addEventListener('click', e => {
  scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('scroll', e => {
  toTop.style.display = 'inline';
  console.log(e);
  console.dir(window);
});