let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let cube = document.querySelector('.cube');
let wrap = document.querySelector('.wrap');
let frontPage = document.querySelector('.front');
let links = document.querySelectorAll('.link');


frontPage.addEventListener('click', function () {
  //clic sur la front page si le menu est ouvert
  if (!!document.querySelector('.cube--isOpen')) {
    cube.classList.remove('cube--front')
    cube.classList.remove('cube--about')
    cube.classList.remove('cube--etc')

    menu.classList.remove('menu--isOpen');
    wrap.classList.remove('wrap--isOpen');

    // délai avant dezoom
    setTimeout(function () {
      cube.classList.remove('cube--isOpen')
    }, 500);
  }
})

burger.addEventListener('click', function () {
  // SI le burger menu est ouvert
  if (!!document.querySelector('.cube--isOpen')) {
    menu.classList.toggle('menu--isOpen');
    wrap.classList.toggle('wrap--isOpen');

    // attendre X secondes avant de dezoom
    setTimeout(function () {
      cube.classList.toggle('cube--isOpen')
    }, 500);
  }
  // si leburger est fermé
  else {
    // dezoom
    cube.classList.toggle('cube--isOpen')

    //délai de 0.X s pour translate le cube + le menu caché
    setTimeout(function () {
      menu.classList.toggle('menu--isOpen');
      wrap.classList.toggle('wrap--isOpen');
    }, 200);
  }

})


// bouger le cube au hover sur chaque lien
links.forEach(link => {

  link.addEventListener('mouseenter', function () {
    cube.classList.toggle(link.getAttribute('data-hover'))
  })

  link.addEventListener('mouseleave', function () {
    cube.classList.toggle(link.getAttribute('data-hover'))
  })

});



links.forEach(element => {
  element.addEventListener('click', function () {
    menu.classList.remove('menu--isOpen');
    wrap.classList.remove('wrap--isOpen');

    cube.classList.remove('cube--front')
    cube.classList.remove('cube--about')
    cube.classList.remove('cube--etc')
    cube.classList.remove('nothing')

    cube.classList.add(element.getAttribute('data-click'))

    setTimeout(function () {
      cube.classList.remove('cube--isOpen')

    }, 200);
  })
});

