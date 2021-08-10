// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const tabs = $$('.product-tabs__item');
// const panes = $$('.tab-pane');
// const wishlists  = $$('.product-item__info-favourite');



// tabs.forEach((tab,index) =>{

//     const pane = panes[index];

//     tab.onclick = function (){
//         $('.product-tabs__item.tab--active').classList.remove('tab--active');
//         $('.tab-pane.tab--active').classList.remove('tab--active');


//         this.classList.add('tab--active');
//         pane.classList.add('tab--active');
//     }
// });

// wishlists.forEach((wishlist,index) =>{
//     wishlist.onclick = function(){
//         wishlist.innerHTML = `<i class="fas fa-heart"></i>`;
//     };
// });


// let scrollTop = document.getElementById('scroll-top');

// window.addEventListener('scroll',function(){
//     let value = window.scrollY;
//     if(value < 1200){
//         scrollTop.style.display ='none';
//     }
//     if(value > 1200){
//         scrollTop.style.display ='block';
//     }
// });

// scrollTop.onclick = function(){
//     window.scrollTo(0, 0);
// }

// var elem = document.querySelector('.main__carousel');
// var flkty = new Flickity( elem, {
//   cellAlign: 'left',
// //   contain: true,
//   pageDots: true,
//   autoPlay: true,
// //   autoPlay: 1500
// });

$(document).ready(function(){
  var bannerCarousel = $('.banner__carousel-list').flickity({
    prevNextButtons: false,
    wrapAround: true
  });

  $('.previous-bn').click(() => {
    bannerCarousel.flickity('previous');
  })
  $('.next-bn').click(() => {
      bannerCarousel.flickity('next');
  })

  var product_trending = $('#product__trending-list').flickity({
    contain: true,
    cellAlign: 'left',
    pageDots: true,
    prevNextButtons: false,
    wrapAround: true,
    groupCells: true
  });

  var productList = $('#product-list').flickity({
    contain: true,
    cellAlign: 'left',
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    groupCells: true
  });
  $('.previous-btn-style2').click(() => {
    productList.flickity('previous');
  })
  $('.next-btn-style2').click(() => {
    productList.flickity('next');
  })


  var brand = $('#list-brand').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: true,
    cellAlign: 'left'
  });

  var instagram = $('.list-instagram').flickity({
    prevNextButtons: false,
    pageDots: false,
    contain: true,
    cellAlign: 'left'
  });

});

var headerMain = $('.header__main');
var toTop = headerMain[0].offsetTop;

$(window).scroll(function(){
    if(document.documentElement.scrollTop > toTop){
      headerMain.addClass('header-fixed');
    }
    else{
      headerMain.removeClass('header-fixed');
    }
})

let scrollTop = document.getElementById('scroll-top');

window.addEventListener('scroll',function(){
  
    let value = window.scrollY;
    if(value < 1200){
        scrollTop.style.display ='none';
    }
    if(value > 1200){
        scrollTop.style.display ='block';
    }

});

scrollTop.onclick = function(){
    window.scrollTo(0, 0);
}



