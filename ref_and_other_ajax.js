/**
 * Created by morgan on 12/17/15.
 */
//function ref_and_other_ajax_load() {
//  console.debug('function call');
//  data = load("/ajax/ref_and_other/16");
//  jQuery("#ajax-target").append(data);
//}
console.debug('It worked!');

(function($) {
  Drupal.behaviors.myModule = {
    'attach': function(context) {
      $('a.landing_page_load_more:not(.mymodule-processed)', context)
        .addClass('mymodule-processed')
        .bind('click', function() {
//          $.get('/photos/get/photos/' + parseInt(this.id, 10), null, imageDetails);
          $.get('/ajax/ref_and_other/16', null, imageDetails);
          return false;
        });
    }
  }

  var imageDetails = function(response) {
    var result = Drupal.parseJson(response);
    $('div.field-type-image div.field-item').html(result.data);
  }
})(jQuery);
