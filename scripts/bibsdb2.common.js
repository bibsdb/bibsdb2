(function($) {
  'use strict';

 // Submenus
  // Insert space above first "Aktiviteter" to visually divide menu
  Drupal.behaviors.ding_submenu_divide_at_word = {
    attach: function(context, settings) {
      $(".sub-menu li", context).has("a:contains('Aktiviteter')").addClass("aktiviteter");
      $(".sub-menu li", context).not(".aktiviteter").last().addClass("spacebelow");
    }
  };


})(jQuery);