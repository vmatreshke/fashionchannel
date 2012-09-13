$(document).ready(function () {
// -------------------- big banner scroll ----------------------- //
$(".tab-big-banner__1 a").addClass("tab-big-banner__active");
	$('.big-banner').scrollable({
			next:'.next',
			prev:'.prev',
      onSeek: function() {

        var currentItem = this.getItems().eq(this.getIndex());
        var index = this.getIndex();

        $(".tab-big-banner a").each(function () {
          if ($(this).attr("href") == index) {
              $(".tab-big-banner a").removeClass("tab-big-banner__active");
              $(this).addClass("tab-big-banner__active");
          }
        });
      }
	}).autoscroll({ autoplay: true });
	api = $('.big-banner').data('scrollable');
	$('.tab-big-banner a').hover(function() {
		$('.tab-big-banner a').removeClass("tab-big-banner__active");
		$(this).addClass("tab-big-banner__active");
	    ar = $(this).attr('href');
	    api.seekTo(ar, 200);
	    return false;
	});
	$('.tab-big-banner a').click(function() {
		return false;
	});
// -------------------- entry slider ---------------------------- //
	$('.entry-slider').scrollable({
			next:'.entry-slider-nav__next',
			prev:'.entry-slider-nav__prev'
	});
// -------------------- slider ---------------------------------- //
	$('.slider').scrollable({
			next:'.slider-nav__next',
			prev:'.slider-nav__prev'
	});
// -------------------- team slider ---------------------------- //
	$('.team__slider').scrollable({
			next:'.team__nav-next',
			prev:'.team__nav-prev'
	});
// -------------------- article scroll video ---------------------------- //
	$('.article__scroll').scrollable({
			next:'.article__scroll-next',
			prev:'.article__scroll-prev'
	});
// -------------------- afisha scroll video ---------------------------- //
	$('.afisha-v').scrollable({
			next:'.afisha-v-nav__next',
			prev:'.afisha-v-nav__prev'
	});
if ($(".afisha-v").length>0) {
  // Get the Scrollable control
  var scrollable_list_1 = $(".afisha-v").data("scrollable");
  // Set to the number of visible items
  var number_list = 3;
  // Handle the Scrollable control's onSeek event
  scrollable_list_1.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
      $(".afisha-v-nav__next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_1.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
}
// -------------------- afisha scroll photo ---------------------------- //
	$('.afisha-p').scrollable({
			next:'.afisha-p-nav__next',
			prev:'.afisha-p-nav__prev'
	});
	
// -------------------- afisha scroll article ---------------------------- //
	$('.afisha-a').scrollable({
			next:'.afisha-a-nav__next',
			prev:'.afisha-a-nav__prev'
	});
if ($(".afisha-a").length>0) {
// Get the Scrollable control
  var scrollable_list_2 = $(".afisha-a").data("scrollable");
  // Set to the number of visible items
  var number_list_2 = 4;
  // Handle the Scrollable control's onSeek event
  scrollable_list_2.onSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) {      // Disable the Next link
      $(".afisha-a-nav__next").addClass("disabled");
    }
  });
  // Handle the Scrollable control's onBeforeSeek event
  scrollable_list_2.onBeforeSeek(function(event, index) {
    // Check to see if we're at the end
    if (this.getIndex() >= this.getSize() - number_list_2) { 
      // Check to see if we're trying to move forward
      if (index > this.getIndex()) {
        // Cancel navigation
        return false;
      }
    }
  });
}
// -------------------- calendar scroll ---------------------------- //
	$('.calendar__scroll').scrollable({
			next:'.calendar__next',
			prev:'.calendar__prev'
	});
// --------------------- calendar popup -------------------------------//
$('.calendar').hide();
$('.afisha-title__date, .calendar').click(function() {
	$('.calendar').show();
	return false;
});
$('body').click(function() {
	$('.calendar').hide();
	return false;
});
// --------------------- video -------------------------------//
	var video_url = $('.article__scroll-item:first a').attr("href");
	$(".article__video iframe").attr("src", video_url);
	$('.article__scroll-item:first a').addClass("article__video-active");
	var video_text = $('.article__scroll-item:first a').children(".js-block").html();
	$(".article__video-descr").html(video_text);
	$('.article__scroll-item a').click(function() {

		$('.article__scroll-item a').removeClass("article__video-active");
		$(this).addClass("article__video-active");
		var video_url = $(this).attr("href");
		$(".article__video iframe").attr("src", video_url);

		var video_text = $(this).children(".js-block").html();
		$(".article__video-descr").html(video_text);
		return false;
	});
// --------------------- show/hide add comment -------------------//
$(".add-comment").hide();
$(".comments__write").click(function() { 
	$(".add-comment").show();
});
// ---------------------- entry Tabs ---------------------------- //
//reset
$(".entry-slider-wrapper").hide();
$(".entry-tabs li:first a").addClass("entry-tabs__active").show();  
$(".entry-slider-wrapper:first").show();
// main
  $(".entry-tabs a").click(function() { 
      $(".entry-tabs a").removeClass("entry-tabs__active");  
      $(this).addClass("entry-tabs__active");  
      $(".entry-slider-wrapper").hide();  
      var activeTab = $(this).attr("href");  
      $(activeTab).show();  
      return false; 
  });

// ----------------------- ON AIR popup -------------------------- //
$(".header__on-air").click(function() { 
	$(".on-air-bg, .on-air-popup").fadeIn();
      return false; 
  });
$(".on-air-popup__close").click(function() { 
	$(".on-air-bg, .on-air-popup").fadeOut();
      return false; 
  });

// -------------- Vacancy select and input----------------------- //
$('.vacancy-form__user select').change(function() {
    vfu = $('.vacancy-form__user select option:selected').html();
    $(this).prev().html(vfu);
});
$('.vacancy-form__resume select').change(function() {
    vfr = $('.vacancy-form__resume select option:selected').html();
    $(this).prev().html(vfr);
});
$('.add-resume').change(function() {
	arv = $(this).val();
	$(this).prev().prev().val(arv);
});

// ---------------------- Edit detail ---------------------------- //
$('.new-look__added a').toggle(function() {
  $(this).parent().next().slideDown();
	return false;
}, function() {
  $(this).parent().next().slideUp();
	return false;
});


// ---------------------- Lupa ------------------------------- //
$("#lupa").imageLens({ lensSize: 180, borderSize: 10, borderColor: "#fff" });

// ---------------------- Pipetka ---------------------------- //

    var canvas = document.getElementById("mycanvas");
    var context = canvas.getContext("2d");
 	var img = new Image();   
 	img.onload = function(){
	    context.drawImage(img, 0, 0);
	};
 	img.src = 'images/new-look.jpg'; 

    $('#mycanvas').mousemove(function(e) { // Обработчик события mousemove (движение мыши)
        var canvasOffset = $(canvas).offset();
        var canvasX = Math.floor(e.pageX - canvasOffset.left);
        var canvasY = Math.floor(e.pageY - canvasOffset.top);
        var imageData = context.getImageData(canvasX, canvasY, 1, 1);
        var pixel = imageData.data;
        var pixelColor = "rgba("+pixel[0]+", "+pixel[1]+", "+pixel[2]+", "+pixel[3]+")";
        $('#preview').css('backgroundColor', pixelColor);
        contex.scale(2, 2)
    });
    console.log(imageData);

  


	//data = context.getImageData(x, y, 1, 1).data;




// ---------------------- Gallery -------------------------------- //
Galleria.run('#gallery', {
    showInfo: false,
    showCounter: false
});


})