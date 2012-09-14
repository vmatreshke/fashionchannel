$(document).ready(function () {

// -------------------- big banner scroll ----------------------- //
$(".tab-big-banner__1 a").addClass("tab-big-banner__active");
	$('.big-banner').scrollable({
			next:'.next',
			prev:'.prev',
      circular: true,
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

// ---------------------- look list ---------------------------- //
$('.new-look__sex input').click(function() {
    $(this).next().css('display', 'block');
});
$('.new-look__sex li').click(function() {
    nls = $(this).text();
    $(this).parent().prev().attr('value', nls);
    $('.new-look__sex ul').css('display', 'none');
});
$('.new-look__dl').toggle(function() {
  $('.new-look__dl').removeClass('new-look__dl_active')
  $(this).addClass('new-look__dl_active');
}, function() {
  $('.new-look__dl').removeClass('new-look__dl_active')
  $(this).removeClass('new-look__dl_active');
});
$('.new-look__scr li').click(function() {
    nlid = $(this).parent().attr('item-data');
    nll = $(this).text();
    $('#' + nlid).attr('value', nll);
});

// ---------------------- Lupa ------------------------------- //
(function ($) {
    $.fn.imageLens = function (options) {

        var defaults = {
            lensSize: 100,
            borderSize: 4,
            borderColor: "#888"
        };
        var options = $.extend(defaults, options);
        var lensStyle = "background-position: 0px 0px;width: " + String(options.lensSize) + "px;height: " + String(options.lensSize)
            + "px;float: left;display: none;border-radius: " + String(options.lensSize / 2 + options.borderSize)
            + "px;border: " + String(options.borderSize) + "px solid " + options.borderColor 
            + ";background-repeat: no-repeat;position: absolute;";

        return this.each(function () {
            obj = $(this);

            var offset = $(this).offset();

            // Creating lens
            var target = $("<div style='" + lensStyle + "' class='" + options.lensCss + "'>&nbsp;</div>").appendTo($(this).parent());
            var targetSize = target.size();

            // Calculating actual size of image
            var imageSrc = options.imageSrc ? options.imageSrc : $(this).attr("src");
            var imageTag = "<img style='display:none;' src='" + imageSrc + "' />";

            var widthRatio = 0;
            var heightRatio = 0;

            $(imageTag).load(function () {
                widthRatio = $(this).width() / obj.width();
                heightRatio = $(this).height() / obj.height();
            }).appendTo($(this).parent());

            target.css({ backgroundImage: "url('" + imageSrc + "')" });

            target.mousemove(setPosition);
            $(this).mousemove(setPosition);

            function setPosition(e) {

                var leftPos = parseInt(e.pageX - offset.left);
                var topPos = parseInt(e.pageY - offset.top);

                var canvas = document.getElementById("mycanvas");
                var context = canvas.getContext("2d");
                var img = new Image();   
                img.onload = function(){
                    context.drawImage(img, 0, 0);
                };
                img.src = 'images/new-look.jpg'; 
                var canvasOffset = $(canvas).offset();
                var canvasX = leftPos;
                var canvasY = topPos;
                var imageData = context.getImageData(canvasX, canvasY, 1, 1);
                var pixel = imageData.data;
                var pixelColor = "rgba("+pixel[0]+", "+pixel[1]+", "+pixel[2]+", "+pixel[3]+")";
                $('#preview').css('backgroundColor', pixelColor);
                //data = context.getImageData(x, y, 1, 1).data;
                //alert(''+leftPos+'____'+ topPos+'');
                // if (leftPos < 0 || topPos < 0 || leftPos > obj.width() || topPos > obj.height()) {
                //     target.hide();
                // }
                // else {
                //     target.show();

                //     leftPos = String(((e.pageX - offset.left) * widthRatio - target.width() / 2) * (-1));
                //     topPos = String(((e.pageY - offset.top) * heightRatio - target.height() / 2) * (-1));
                //     target.css({ backgroundPosition: leftPos + 'px ' + topPos + 'px' });

                //     leftPos = String(e.pageX - target.width() / 2);
                //     topPos = String(e.pageY - target.height() / 2);
                //     target.css({ left: leftPos - 479 + 'px', top: topPos - 11 + 'px' });
                // }
            }            
        });
    };
})(jQuery);
if ($("#lupa").length > 0) {
    $("#lupa").imageLens({ lensSize: 180, borderSize: 10, borderColor: "#fff" });
};

// ---------------------- Pipetka ---------------------------- //

  

  







// ---------------------- Gallery -------------------------------- //
if ($('#gallery').length > 0) {
    Galleria.run('#gallery', {
        showInfo: false,
        showCounter: false
    });
};

})