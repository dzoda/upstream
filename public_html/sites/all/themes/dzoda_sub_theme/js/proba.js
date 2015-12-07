jQuery(function () {


jQuery("#block-views-logara-block > div > div > div > table > tbody > tr > td > div > div > a > img").hide(300).show(2000);

} );





/////////////////////// counter //////////////////////


(function($) {
  $.fn.countUp = function(options) {
    var start_num = Number($(this).text());
    var d = {
      start: 0,
      last: 0,
      duration: 3000,
      frame: 33,
      update: null,
      complete: null
    };
    var o = $.extend(d, options);
    var $that = $(this);

    o.last = parseInt(o.last);
    o.duration = parseInt(o.duration);
    o.frame = parseInt(o.frame);

    $that.each(function(i) {
      var $t = $(this);
      var total_frame = 0;
      var split = (o.last - o.start) / (o.duration / 33);
      var value = o.start;

      var clear = setInterval(function() {
        value = Math.round(value + split);
        $t.text(value);

        if (typeof o.update == 'function') {
          o.update.call($t, value);
        }

        if (total_frame > o.duration) {
          clearInterval(clear);
          $t.text(o.last);

          if (typeof o.complete == 'function') {
            o.complete.call($t, value);
          }
        }
        total_frame += o.frame;
      }, o.frame);
    });
    return $that;
  };
})(jQuery);


jQuery(function () {

var param1 = {
  last: 4253
};

jQuery('#block-views-some-fun-facts-block > div > div > div > table > tbody > tr > td.col-2 > div.views-field.views-field-field-numbers > div').countUp(param1);

} );
	

	jQuery(function () {

var param1 = {
  last: 865
};
jQuery('#block-views-some-fun-facts-block > div > div > div > table > tbody > tr > td.col-1.col-first > div.views-field.views-field-field-numbers > div').countUp(param1);

} );





		jQuery(function () {

var param1 = {
  last: 8657
};
jQuery('#block-views-some-fun-facts-block > div > div > div > table > tbody > tr > td.col-4.col-last > div.views-field.views-field-field-numbers > div').countUp(param1);

} );


				jQuery(function () {

var param1 = {
  last: 102
};
jQuery('#block-views-some-fun-facts-block > div > div > div > table > tbody > tr > td.col-3 > div.views-field.views-field-field-numbers > div').countUp(param1);

} );
//////////////////////////////////

 /* jQuery(function () {


jQuery("#block-system-main-menu > ul").hide(300).show(2000);

} );    

jQuery(function () {


jQuery("#block-block-1 > div").hide(1000).show(2000);

} );

*/