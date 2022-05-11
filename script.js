$('.owl-carousel').owlCarousel(
    {
        lazyLoad:true,
        items:1,
        autoplay: true,
        smartSpeed: 1500,
        nav:true,
        dots: true, 
        loop : true,
      }
    );
    AOS.init({
        disable: function() {
          var maxWidth = 800;
          return window.innerWidth < maxWidth;
        }
      });