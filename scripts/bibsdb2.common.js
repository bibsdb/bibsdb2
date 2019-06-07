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
  

   // Make holdings-info start expanded on page-load
  Drupal.behaviors.expand_holdings_on_page_load = {
    attach: function(context, settings) {
      $('.group-holdings-available .field-group-format-wrapper').css("display", "block"); 
    }
  };

   // Nodelist - Node blocks. Hide field-type-text-long when the page is initially loaded.
  Drupal.behaviors.nodelist_node_blocks_hide_teaser = {
    attach: function(context, settings) {
      $('.field-type-text-long').toggleClass('element-hidden', true);
    }
  };

  // Nodelist - Node blocks. Hide field-type-text-long when the page is initially loaded.
  Drupal.behaviors.nodelist_node_blocks_hide_teaser = {
    attach: function(context, settings) {
      $('.field-type-text-long').toggleClass('element-hidden', true);
    }
  };


})(jQuery);