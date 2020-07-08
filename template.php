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


  // Get classes and add them to body. 
  // Code copied from 
  $css = '';
  $menu_item = menu_get_active_trail();
  $menu_item = array_reverse($menu_item);

  foreach ($menu_item as $key => $menu) {
    if (isset($menu_item[$key]['router_path'])) {
      if ($menu_item[$key]['router_path'] == 'taxonomy/term/%' && $menu_item[$key] != NULL) {
        $menu_object = menu_get_object('taxonomy_term', '2', $menu_item[$key]['link_path']);
        if ($menu_object && $menu_object->vocabulary_machine_name == 'section' && !empty($menu_object->field_ding_sections_custom_css)) {
          $css = $menu_object->field_ding_sections_custom_css[LANGUAGE_NONE][0]['value'];
          break;
        }
      }
    }
  }

  $term = menu_get_object('taxonomy_term', 2);
  if ($term && $term->vocabulary_machine_name == 'section') {
    $css = (!empty($term->field_ding_sections_custom_css)) ? $term->field_ding_sections_custom_css[LANGUAGE_NONE][0]['value'] : $css;
  }
  $node = menu_get_object('node', 1);
  if (isset($node->field_ding_section) && !empty($node->field_ding_section)) {
    $tid = $node->field_ding_section[LANGUAGE_NONE][0]['tid'];
    $term = taxonomy_term_load($tid);
    $css = (isset($term->field_ding_sections_custom_css) && !empty($term->field_ding_sections_custom_css)) ? $term->field_ding_sections_custom_css[LANGUAGE_NONE][0]['value'] : FALSE;
  }

  $vars['classes_array'][] = 'bibsdb';
  $css_arr = explode(" ", $css);
  foreach ($css_arr as $item) {
    if (strlen($item) > 0) {
      $vars['classes_array'][] = 'bibsdb-' . $item;
    }
  }
  
}

