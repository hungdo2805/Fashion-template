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

  var productImagesList = $('.product-images__list').flickity({
    prevNextButtons: true,
    wrapAround: true

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


// click quick view

const popupQuickView = document.getElementById('popup_qv');
const overlay = document.getElementById('overlay');



const quickViews = document.querySelectorAll('.quick-view');

quickViews.forEach(quickView => {
  quickView.addEventListener('click', (e) => {
    e.preventDefault();
    popUpQuickviewToggle();
  });
});


function popUpQuickviewToggle()
{
   overlay.classList.toggle('show');
  popupQuickView.classList.toggle('show');

  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
 


popupQuickView.addEventListener('click', (e) => {
  if(e.target.className == "popup-quickview show") {
    popupQuickView.classList.remove('show');
    overlay.classList.remove('show');
    document.getElementsByTagName("html")[0].style.overflow = "";
    document.getElementsByTagName("body")[0].style.overflow = "";
  }
});


// click size button
const buttonSize = document.querySelectorAll('button.entry-summary__size-btn');

for(let i = 0; i < buttonSize.length; i++)
{
  let btn =  buttonSize[i];
  btn.addEventListener('click',function(){
    
    document.querySelector('button.entry-summary__size-btn.entry-summary__size-btn--active').classList.remove('entry-summary__size-btn--active');
    this.classList.add('entry-summary__size-btn--active');
    // console.log(document.querySelector('.entry-summary__size-btn--active'))
  })
}




//show quickshop
const quickShops = document.querySelectorAll('.quick-shop');
const miniCart = document.getElementById('mini-cart');
const minicartClose =  document.getElementById('minicart-close');


quickShops.forEach(quickShop => {
  quickShop.addEventListener('click', (e) => {
    e.preventDefault();
    popUpQuickShopToggle();
  });
});


function popUpQuickShopToggle()
{
  overlay.classList.add('show');
  miniCart.classList.add('show');
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

overlay.onclick = () =>{
  overlay.classList.remove('show');
  miniCart.classList.remove('show');
  document.getElementsByTagName("html")[0].style.overflow = "";
  document.getElementsByTagName("body")[0].style.overflow = "";
}
minicartClose.onclick = () =>{
  overlay.classList.remove('show');
  miniCart.classList.remove('show');
  document.getElementsByTagName("html")[0].style.overflow = "";
  document.getElementsByTagName("body")[0].style.overflow = "";
}



//popup search box

const searchBox = document.getElementById('search-box');
const popupSearch = document.getElementById('popup-search');
const searchIconMobile = document.querySelector('.search-icon-mobile');

searchBox.addEventListener('click', (e) => {
  e.preventDefault();
  popUpSeachBoxToggle();
});
searchIconMobile.addEventListener('click', (e) => {
  e.preventDefault();
  popUpSeachBoxToggle();
});

function popUpSeachBoxToggle(){
  overlay.classList.add('show');
  popupSearch.classList.add('show');
  document.getElementsByTagName("html")[0].style.overflow = "hidden";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

popupSearch.addEventListener('click', (e) => {
  if(e.target.className == "popup-search show") {
    popupSearch.classList.remove('show');
    overlay.classList.remove('show');
    document.getElementsByTagName("html")[0].style.overflow = "";
    document.getElementsByTagName("body")[0].style.overflow = "";
  }
});

//hidden All PopUp

const popupCloses = document.querySelectorAll('.popup-close');


popupCloses.forEach(popupClose => {
  popupClose.onclick = () =>{
    hiddenAllPopUp();
  }
});

function hiddenAllPopUp(){
  popupQuickView.classList.remove('show');

  popupSearch.classList.remove('show');

  overlay.classList.remove('show');

  document.getElementsByTagName("html")[0].style.overflow = "";
  document.getElementsByTagName("body")[0].style.overflow = "";

}



// setting default attribute to disable of minus button

document.querySelector('.minus-btn').setAttribute('disabled','disabled');

var valueCount;

// change price product

//var price = document.getElementById('price-product').innerText;

// function priceTotal()
// {
//   var total = valueCount * price;
//   document.getElementById('price-product').innerText = total;
// }

//plus btn
document.querySelector('.plus-btn').addEventListener('click',function(){
  //getting number of input
  valueCount = document.getElementById('quantity-number').value;
  
  //input value increment 1
  valueCount++;

  //setting increment input value
  document.getElementById('quantity-number').value = valueCount;
  
  if(valueCount > 1)
  {
    document.querySelector('.minus-btn').removeAttribute('disabled');
    document.querySelector('.minus-btn').classList.remove('disabled');
  }
  //Call price function
  // priceTotal();
})

//minus btn

document.querySelector('.minus-btn').addEventListener('click',function(){
  //getting number of input
  valueCount = document.getElementById('quantity-number').value;
  
  //input value increment 1
  valueCount--;

  //setting increment input value
  document.getElementById('quantity-number').value = valueCount;

  if(valueCount == 1)
  {
    document.querySelector('.minus-btn').setAttribute('disabled','disabled');
  }
    //Call price function
    // priceTotal();
})



