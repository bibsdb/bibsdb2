(function($) {
  'use strict';

   // Make holdings-info start expanded on page-load
  Drupal.behaviors.expand_holdings_on_page_load = {
    attach: function(context, settings) {
      $('.group-holdings-available .field-group-format-wrapper').css("display", "block"); 
    }
  };

   // Nodelist - Node blocks. Hide field-type-text-long when the page is initially loaded.
  Drupal.behaviors.nodelist_node_blocks_hide_teaser = {
    attach: function(context, settings) {
      $('.ding_nodelist-node_blocks .nb-item .text .title-and-lead .field-type-text-long').toggleClass('element-hidden', true);
    }
  };

  // Special style for New user menu link in secondary menu
  Drupal.behaviors.style_secondary_menu_link_new_user = {
    attach: function(context, settings) {
      $('.secondary-menu li').has('a[href$="registration"]').addClass("new-user");
      $('.logged-in .secondary-menu li').has('a[href$="registration"]').css("display", "none");
    }
  };

})(jQuery);