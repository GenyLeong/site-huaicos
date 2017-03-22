var ancho = window.innerWidth;
var altura = window.innerHeight;
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
  $(document).ready(function(){
     $(".button-collapse").sideNav();
      $('ul.tabs').tabs();
    $('.popup').click(function(event) {
                  var width  = 650,
                      height = 450,
                      left   = ($(window).width()  - width)  / 2,
                      top    = ($(window).height() - height) / 2,
                      url    = this.href,
                      opts   = 'status=1' +
                               ',width='  + width  +
                               ',height=' + height +
                               ',top='    + top    +
                               ',left='   + left;
                      window.open(url, 'twitter', opts);
                      return false;                                  
      })
    var map_container = $("#container").innerHeight()
    var mobile_demo = document.getElementById('mobile-demo')    
    var box_description = document.getElementById('box_description')
    // var box_img = document.getElementsByClassName('alt')
    // var box_img_desc= document.getElementsByClassName('description_alerts')

    if (ancho>601){
        box_description.style.height = map_container + "px";        
    }

    // if ($('.bl-main').hasClass('bl-expand-item')){
    //     for (var i = 0; i < box_img.length; i++) {
    //       var alt_box = box_img[i].offsetHeight;
    //       box_img_desc[i].style.height = alt_box + 'px'
    //     }
    // }


    if (ancho<993){
        mobile_demo.style.height = altura + 'px';
    }
  });

  });