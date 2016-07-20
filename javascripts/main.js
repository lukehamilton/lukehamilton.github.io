
// change nav active
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).addClass("active");
});

// open employer modal
$(".circle").on("click", function(){
  slug = $(this).data('slug');
  $("#" + slug + "-modal").modal('show');
});

// scroll to
$(function () {
  $('[data-scroll-to]').click(function (e) {
    var el = e.currentTarget,
      $targetEl = $($(el).attr('href')),
      // offset = 50,
      offset = 0,
      targetElTop;
    if ($targetEl.size()) {
      targetElTop = $targetEl.offset().top;
      $('html, body').animate({scrollTop: targetElTop - offset}, 500);
    }
    return false;
  });
});

$(document).ready(function() {
  $(".circle-container").mouseenter(function() {
    $(this).find('img').addClass('active');
  }).mouseleave(function () {
    $(this).find('img').removeClass('active');
  });
});

/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}




/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// taken from mo.js demos
	function isIOSSafari() {
		var userAgent;
		userAgent = window.navigator.userAgent;
		return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
	};

	// taken from mo.js demos
	function isTouch() {
		var isIETouch;
		isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
	};

	// taken from mo.js demos
	var isIOS = isIOSSafari(),
		clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

	function extend( a, b ) {
		for( var key in b ) {
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Animocon(el, options) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );

		this.checked = false;

		this.timeline = new mojs.Timeline();

		for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
			this.timeline.add(this.options.tweens[i]);
		}

		var self = this;
		this.el.addEventListener(clickHandler, function() {
      console.log('clicked');
      self.timeline.start();
		});
	}

	Animocon.prototype.options = {
		tweens : [
			new mojs.Burst({
				shape : 'circle',
				isRunLess: true
			})
		],
		onCheck : function() { return false; },
		onUnCheck : function() { return false; }
	};

	function init() {
		/* Icon 6 */
		var el6 = document.querySelector('.icobutton')
    var el6span = el6.querySelector('span');
		var scaleCurve6 = mojs.easing.path('M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0');
		new Animocon(el6, {
			tweens : [
				// burst animation
				new mojs.Burst({
					parent: el6,
					duration: 1500,
					shape : 'circle',
					fill : 'white',
          x: '39%',
          y: '65.5%',
					childOptions: {
						radius: {12:0},
						type: 'line',
						stroke: '#F81851',
						strokeWidth: 2
					},
					radius: {40:110},
					count: 20,
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// ring animation
				new mojs.Transit({
					parent: el6,
					duration: 800,
					type: 'circle',
					radius: {10: 60},
					fill: 'transparent',
					stroke: '#F81851',
					strokeWidth: {30:0},
					x: '42%',
          y: '65.5%',
					isRunLess: true,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
				}),
				// icon scale animation
				new mojs.Tween({
					duration : 800,
					easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
					onUpdate: function(progress) {
						var scaleProgress = scaleCurve6(progress);
						el6span.style.WebkitTransform = el6span.style.transform = 'scale3d(' + progress + ',' + progress + ',1)';
					}
				})
			],
			onCheck : function() {
				el6.style.color = '#988ADE';
			},
			onUnCheck : function() {
				el6.style.color = '#C0C1C3';
			}
		});
		/* Icon 6 */


	}

	init();

})(window);
