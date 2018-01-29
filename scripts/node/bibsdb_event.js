(function($) {
  'use strict';

	 // Translate target label on event full
  Drupal.behaviors.ding_event_translate_target_label_on_event_full = {
    attach: function(context, settings) {
    	$( ".node-ding-event.node-full .field-name-field-ding-event-target .field-label:contains('Target')" , context).text("Adgang");   
    }
  };

})(jQuery);