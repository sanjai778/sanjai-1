<?php

add_shortcode('nbi_display_blogs', 'nbi_display_blogs_shortcode');

function nbi_display_blogs_shortcode() {
    $blogs = nbi_get_blogs();

    if (empty($blogs)) {
        return '<p>No blogs found.</p>';
    }

    ob_start();
    ?>
    <div class="nbi-blogs-container">
        <?php foreach ($blogs as $blog) : ?>
            <div class="nbi-blog-post">
                <h2><?php echo esc_html($blog['title']); ?></h2>
                <div class="nbi-blog-meta">
                    <span><?php echo esc_html(date('F j, Y', strtotime($blog['date']))); ?></span>
                </div>
                <div class="nbi-blog-content">
                    <?php echo wp_kses_post($blog['content']); ?>
                </div>
                <?php if (!empty($blog['categories'])) : ?>
                    <div class="nbi-blog-categories">
                        <strong>Categories:</strong>
                        <?php foreach ($blog['categories'] as $cat) : ?>
                            <span><?php echo esc_html($cat['name']); ?></span>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
                <?php if (!empty($blog['tags'])) : ?>
                    <div class="nbi-blog-tags">
                        <strong>Tags:</strong>
                        <?php foreach ($blog['tags'] as $tag) : ?>
                            <span><?php echo esc_html($tag['name']); ?></span>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
    <?php
    return ob_get_clean();
}
