<?php
/**
 * Plugin Name: Next.js Blog Importer
 * Description: Imports blogs from a Next.js application.
 * Version: 1.0
 * Author: Cline
 */

if (!defined('ABSPATH')) {
    exit;
}

require_once plugin_dir_path(__FILE__) . 'includes/api.php';
require_once plugin_dir_path(__FILE__) . 'includes/admin.php';
require_once plugin_dir_path(__FILE__) . 'includes/display.php';
