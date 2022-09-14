// Header popular places to discover slider
$('#popularPlaces').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout: 3500,
  autoplayHoverPause:true,
  margin: 30,
  nav:false,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

// ColorFull tab

$('#colorful').colorfulTab();
$('#colorful').colorfulTab({
  // 'elliptic', 'flatline'
  theme: '',
});
$('#colorful').colorfulTab({
  overlayColor: "#000",
  overlayOpacity: ".6",
});
