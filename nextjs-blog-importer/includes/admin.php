<?php

add_action('admin_menu', 'nbi_add_admin_menu');

function nbi_add_admin_menu() {
    add_menu_page(
        'Next.js Blog Importer',
        'Blog Importer',
        'manage_options',
        'nbi-importer',
        'nbi_importer_page',
        'dashicons-download'
    );
}

function nbi_importer_page() {
    ?>
    <div class="wrap">
        <h1>Next.js Blog Importer</h1>
        <form method="post" action="">
            <input type="hidden" name="nbi_import_blogs" value="1">
            <?php submit_button('Import Blogs'); ?>
        </form>
        <?php
        if (isset($_POST['nbi_import_blogs'])) {
            nbi_import_blogs();
        }
        ?>
    </div>
    <?php
}

function nbi_import_blogs() {
    $blogs = nbi_get_blogs();
    if (empty($blogs)) {
        echo '<div class="error"><p>No blogs found or failed to fetch blogs.</p></div>';
        return;
    }

    foreach ($blogs as $blog) {
        $post_data = array(
            'post_title'    => wp_strip_all_tags($blog['title']),
            'post_content'  => $blog['content'],
            'post_status'   => 'publish',
            'post_author'   => 1,
            'post_date'     => $blog['date']
        );

        $post_id = wp_insert_post($post_data);

        if ($post_id) {
            if (!empty($blog['categories'])) {
                $cat_ids = array();
                foreach ($blog['categories'] as $cat) {
                    $term = term_exists($cat['name'], 'category');
                    if ($term !== 0 && $term !== null) {
                        $cat_ids[] = $term['term_id'];
                    } else {
                        $new_term = wp_insert_term($cat['name'], 'category');
                        if (!is_wp_error($new_term)) {
                            $cat_ids[] = $new_term['term_id'];
                        }
                    }
                }
                wp_set_post_categories($post_id, $cat_ids);
            }

            if (!empty($blog['tags'])) {
                $tag_names = array();
                foreach ($blog['tags'] as $tag) {
                    $tag_names[] = $tag['name'];
                }
                wp_set_post_tags($post_id, $tag_names);
            }

            if (!empty($blog['featuredImage'])) {
                // This part requires more advanced handling to download the image and set it as a featured image.
                // For simplicity, we'll skip this for now.
            }
        }
    }

    echo '<div class="updated"><p>Blogs imported successfully!</p></div>';
}
