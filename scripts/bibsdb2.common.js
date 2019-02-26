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

  /*
  // Hide Internal problem warning message
  Drupal.behaviors.hide_internal_problem = {
    attach: function(context, settings) {
      $(".warning:contains('Internal problem')").hide();
    }
  };
  */

   // Make holdings-info start expanded on page-load
  Drupal.behaviors.expand_holdings_on_page_load = {
    attach: function(context, settings) {
      $('.group-holdings-available .field-group-format-wrapper').css("display", "block"); 
    }
  };

})(jQuery);