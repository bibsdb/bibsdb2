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

  // Hide Internal problem warning message
  Drupal.behaviors.hide_internal_problem = {
    attach: function(context, settings) {
      $(".warning:contains('Internal problem')").hide();
    }
  };




})(jQuery);