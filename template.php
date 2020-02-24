<?php

/**
* Preprocesses the wrapping HTML.
*
* @param array &$variables
*   Template variables.
*/
function bibsdb2_preprocess_html(&$vars) {
  
  // Setup Bibspire embed script.
  $bibspire_script_embed = array(
    '#tag' => 'script',
    '#attributes' => array(
      'type' => 'text/javascript',
      'src' => 'https://cdn.bibspire.dk/ddbcms.js',
      'async' => ""
    ),
    '#value' => '',
  );
  
  // Add Bibspire embed script to head.
  drupal_add_html_head($bibspire_script_embed, 'bibspire_script_embed');
}