<?php

function nbi_get_blogs() {
    $response = wp_remote_get('http://localhost:3000/api/blogs');
    if (is_wp_error($response)) {
        return [];
    }
    $body = wp_remote_retrieve_body($response);
    return json_decode($body, true);
}

function nbi_get_tags() {
    $response = wp_remote_get('http://localhost:3000/api/tags');
    if (is_wp_error($response)) {
        return [];
    }
    $body = wp_remote_retrieve_body($response);
    return json_decode($body, true);
}

function nbi_get_cats() {
    $response = wp_remote_get('http://localhost:3000/api/cats');
    if (is_wp_error($response)) {
        return [];
    }
    $body = wp_remote_retrieve_body($response);
    return json_decode($body, true);
}
