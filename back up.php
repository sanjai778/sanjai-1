<?php
/**
 * Template Part Name: Country - Child (Complete Page - UI Block Refactor)
 *
 * This version includes a refactored "Why Ilmify" section, breaking down the
 * UI into a responsive grid of feature blocks as requested.
 *
 * MODIFIED:
 * - Changed primary color to #9DC225 (theme color).
 * - Removed all instances of blue color.
 * - Improved code indentation and spacing for better readability.
 * - ENHANCED: UI refined with better spacing, section differentiation, and modern card styling.
 * - UPDATED: Hero section now uses fixed pixel padding instead of relative units.
 * - POPULATED: Comprehensive features tabs now reflect the provided UI images.
 * - IMPROVED: Modern design with enhanced visual hierarchy and better UX
 * - REFACTORED: Data usage updated to use only specified database columns.
 * - ICONS: Changed all solid icons to outline icons.
 * - RESPONSIVE: Added media queries for improved display on tablets and phones.
 * - ADDED: Meta description and canonical URL for SEO.
 */

global $wpdb;

// 1. Get the country slug
$country_slug = sanitize_key(get_query_var('country_slug', ''));

if (empty($country_slug)) {
    echo '<div class="container text-center py-5"><p>No country specified.</p></div>';
    return;
}

// --- Database Configuration ---
$table_name   = $wpdb->prefix . 'country';
$title_column = 'title';

// 2. Fetch country data with caching
$transient_key = 'country_data_' . $country_slug;
$country_data  = get_transient($transient_key);

if (false === $country_data) {
    // The query uses '*' which will include the new 'meta_description' column
    $sql = $wpdb->prepare(
        "SELECT * FROM {$table_name}
         WHERE LOWER(REPLACE(TRIM({$title_column}), ' ', '-')) = %s",
        $country_slug
    );
    $country_data = $wpdb->get_row($sql);

    if ($country_data) {
         // Data found, so we cache it.
        //  set_transient($transient_key, $country_data, 12 * HOUR_IN_SECONDS);
    }
}

// 3. Handle "Not Found"
if (!$country_data) {
    echo '<div class="container text-center py-5">';
    echo '<h2>Country Not Found</h2>';
    echo '<p>The country you are looking for does not exist or has been moved.</p>';
    echo '</div>';
    return;
}

// 4. Generate Canonical URL
$canonical_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

// Note: Dynamic_Features processing has been removed as it's not in the specified column list.
?>

<!-- ======================================================================= -->
<!-- START OF HTML DISPLAY                                                   -->
<!-- ======================================================================= -->

<!-- 
    NOTE: In a typical WordPress theme, the following <head> section content,
    especially meta tags, would be managed via the header.php file and
    action hooks like wp_head(). They are placed here for template completeness.
-->
<head>
    <!-- SEO Meta Tags -->
    <title>Empowering Islamic Education in <?php echo esc_html($country_data->title); ?></title>
    <meta name="description" content="<?php echo esc_attr($country_data->meta_description); ?>">
    <link rel="canonical" href="<?php echo esc_url($canonical_url); ?>" />

    <!-- Bootstrap 5 and Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
</head>

<style>
    /* Enhanced modern UI styling with improved visual hierarchy */
    :root {
        --bs-primary: #9DC225; /* Theme Green */
        --bs-primary-rgb: 157, 194, 37;
        --bs-primary-light: rgba(157, 194, 37, 0.08);
        --bs-primary-gradient: linear-gradient(135deg, #9DC225 0%, #7E9B1D 100%);
        --bs-secondary: #f8fafc; /* Light Gray/Off-white */
        --bs-dark: #1e293b; /* Dark Gray */
        --bs-light: #f1f5f9; /* Lighter Gray */
        --bs-muted: #64748b; /* Muted Gray */
        --bs-body-color: #334155; /* Default Text Color */
        --bs-body-bg: #ffffff; /* White Background */
        --bs-link-hover-color: #7E9B1D; /* Darker Green for Hover */
        --bs-border-radius: 1rem;
        --bs-border-radius-lg: 1.5rem;
        --card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
        --card-shadow-hover: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --gradient-bg: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); /* Light gradient */
    }

    /* General Body & Section Styling */
    body {
        background-color: var(--bs-body-bg) !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.6;
    }

    .btn-outline-primary {
        --bs-btn-color: #9DC225;
        --bs-btn-border-color: #9DC225;
        --bs-btn-hover-color: #fff;
        --bs-btn-hover-bg: #9DC225;
        --bs-btn-hover-border-color: #9DC225;
        --bs-btn-focus-shadow-rgb: 157, 194, 37;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: #9DC225;
        --bs-btn-active-border-color: #9DC225;
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: #9DC225;
        --bs-btn-disabled-bg: transparent;
        --bs-btn-disabled-border-color: #9DC225;
    }

    .bg-secondary {
        background: var(--gradient-bg) !important;
    }

    section {
        padding: 6rem 0;
        position: relative;
    }

    section:not(:first-of-type) {
        border-top: 1px solid #e2e8f0;
    }

    /* Enhanced hero section with modern gradient background */
    .hero-section1 {
        padding: 8rem 0;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%);
        position: relative;
        overflow: hidden;
    }

    .hero-section1::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239DC225' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
        z-index: 0;
    }

    .hero-section1 .container {
        position: relative;
        z-index: 1;
    }

    /* Improved typography with better font weights and spacing */
    h1, h2, h3, h4, h5, h6 {
        color: var(--bs-dark);
        font-weight: 700;
        letter-spacing: -0.025em;
    }

    .display-5 {
        font-size: 3rem;
        line-height: 1.1;
        font-weight: 800;
    }

    .lead {
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--bs-muted);
        line-height: 1.7;
    }

    .btn-primary:hover {
        background: var(--bs-link-hover-color) !important;
        border-color: var(--bs-link-hover-color) !important;
        transform: translateY(-2px);
        box-shadow: 0 8px 25px 0 rgba(157, 194, 37, 0.35);
    }

    .btn-lg {
        padding: 0.875rem 2rem;
        font-size: 1.1rem;
    }

    /* Modern card styling with improved shadows - removed hover effects */
    .card {
        border: none;
        border-radius: var(--bs-border-radius);
        box-shadow: var(--card-shadow);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background: #fff;
    }

    /* Enhanced feature blocks with better visual hierarchy - removed hover effects */
    .feature-block {
        background: linear-gradient(135deg, rgba(157, 194, 37, 0.05) 0%, rgba(157, 194, 37, 0.02) 100%);
        border: 1px solid rgba(157, 194, 37, 0.1);
        border-radius: var(--bs-border-radius);
        padding: 2rem;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .feature-block::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: var(--bs-primary-gradient);
    }

    .feature-block img {
        width: 56px;
        height: 56px;
        padding: 12px;
        background: rgba(157, 194, 37, 0.1);
        border-radius: 12px;
    }

    /* Improved icon styling with consistent sizing - removed hover effects */
    .stat-icon, .feature-icon, .card-title-icon, .about-card .icon, .feature-content .icon {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: var(--bs-primary);
        display: inline-block;
    }

    /* Enhanced feature cards with better spacing */
    .feature-card-detailed .card-body {
        padding: 2.5rem;
    }

    .feature-card-detailed h4 {
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: var(--bs-dark);
    }

    .feature-card-detailed .icon {
        font-size: 2rem;
        color: var(--bs-primary);
        margin-right: 1rem;
    }

    .feature-card-detailed ul {
        padding-left: 0;
        margin-bottom: 0;
    }

    .feature-card-detailed li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #f1f5f9;
    }

    .feature-card-detailed li:last-child {
        border-bottom: none;
    }

    .feature-card-detailed li span {
        color: var(--bs-body-color);
        font-weight: 500;
    }

    /* Modern tab styling */
    .features-tabs {
        background: #fff !important;
        border: 1px solid #e2e8f0 !important;
        box-shadow: var(--card-shadow);
    }

    .features-tabs .nav-link {
        color: var(--bs-muted);
        font-weight: 600;
        border-radius: 0.75rem !important;
        margin: 0.25rem;
        transition: all 0.3s ease;
    }


.features-tabs .nav-link.active {
    border-radius: 20px !important;
        background: var(--bs-primary-gradient) !important;
        color: #fff !important;
        box-shadow: 0 4px 12px rgba(157, 194, 37, 0.25);
        transform: translateY(-1px);
    }

    .features-tabs .nav-link:hover:not(.active) {
        background: var(--bs-primary-light) !important;
        color: var(--bs-primary) !important;
    }

    /* Enhanced progress bars */
    .progress {
        height: 12px;
        border-radius: 6px;
        background-color: #f1f5f9;
        overflow: hidden;
    }

    .progress-bar {
        background: var(--bs-primary-gradient) !important;
        border-radius: 6px;
        transition: width 0.6s ease;
    }

    /* Improved badge styling */
    .badge {
        font-weight: 600;
        letter-spacing: 0.025em;
    }

    .bg-light.text-dark {
        background: rgba(255, 255, 255, 0.9) !important;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    /* Enhanced accordion styling */
    .accordion-item {
        border: none;
        margin-bottom: 1rem;
        border-radius: var(--bs-border-radius) !important;
        overflow: hidden;
        box-shadow: var(--card-shadow);
    }

    .accordion-button {
        background: #fff;
        border: none;
        font-weight: 600;
        color: var(--bs-dark);
        padding: 1.5rem;
    }

    .accordion-button:not(.collapsed) {
        background: var(--bs-primary-light);
        color: var(--bs-primary);
        box-shadow: none;
    }

    .accordion-button:focus {
        box-shadow: 0 0 0 0.25rem rgba(157, 194, 37, 0.25);
    }

    .accordion-body {
        padding: 1.5rem;
        background: #fff;
    }

    /* Utility classes for better spacing */
    .right-icon {
        width: 18px;
        margin-right: 10px;
        filter: brightness(0) saturate(100%) invert(64%) sepia(98%) saturate(376%) hue-rotate(64deg) brightness(91%) contrast(87%);
    }

    .app-icons {
        width: 48px !important;
        height: 48px !important;
        object-fit: contain;
    }
    
    /* Enhanced testimonial card */ 
    .testimonial-card {
        background: linear-gradient(135deg, #fff 0%, #f8fafc 100%);
        border: 1px solid #e2e8f0;
        position: relative;
        overflow: hidden;
    }

    /* ---------------------------------- */
    /* RESPONSIVE MEDIA QUERIES           */
    /* ---------------------------------- */

    /* Tablets (md) and below */
    @media (max-width: 992px) {
        .display-4 {
            font-size: 2.5rem;
        }
        .display-5 {
            font-size: 2.75rem;
        }
        .lead {
            font-size: 1.15rem;
        }
        section {
            padding: 4rem 0;
        }
        .hero-section, .hero-section1 {
            padding: 6rem 0;
            text-align: center;
        }
        .hero-section .d-flex, .hero-section1 .d-flex {
            justify-content: center;
        }
        .hero-section .col-lg-6:last-child, .hero-section1 .col-lg-6:last-child {
            margin-top: 3rem;
        }
        .features-tabs .nav-link {
            font-size: 0.9rem;
        }
        .testimonial-card blockquote {
            font-size: 1.1rem;
        }
        .landscape-section-refactored .col-md-4 {
            margin-bottom: 2rem;
        }
    }

    /* Phones (sm) and below */
    @media (max-width: 768px) {
        .display-4 {
            font-size: 2rem;
        }
         .display-5 {
            font-size: 2.25rem;
        }
        .lead {
            font-size: 1rem;
        }
        .hero-section, .hero-section1 {
            padding: 4rem 0;
        }
        .hero-section .d-flex, .hero-section1 .d-flex {
            flex-direction: column;
            align-items: center;
        }
        .hero-section .btn, .hero-section1 .btn {
            width: 100%;
            max-width: 300px;
        }
         .hero-section .btn:last-child, .hero-section1 .btn:last-child {
            margin-top: 1rem;
        }
        .why-ilmify-section .g-5, .landscape-section-refactored .g-4 {
            row-gap: 2rem;
        }
        .features-tabs {
            flex-direction: column;
            border-radius: 1rem !important;
        }
        .features-tabs .nav-item {
            width: 100%;
        }
        .feature-block {
            padding: 1.5rem;
        }
        .success-faq-section .row {
            flex-direction: column-reverse;
        }
        .success-faq-section .col-lg-6 {
            width: 100%;
        }
         .success-faq-section .col-lg-6:first-child {
            margin-top: 3rem;
        }
        .accordion-button, .accordion-body {
            padding: 1rem;
        }
        h2 {
           font-size: 1.75rem;
        }
    }
</style>

<!-- Hero Section -->
<section class="hero-section bg-white text-dark py-8">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h1 class="display-4 fw-bold mb-4">
                    Empowering Islamic
                    <span class="">Education in the</span>
                    <span class="text-primary"><?php echo esc_html($country_data->title); ?></span>
                </h1>
                <p class="lead mb-5" style="max-width: 550px;">
                    Transforming traditional Islamic education with modern digital solutions for Maktabs, Madrasas, and Islamic centers across the <?php echo esc_html($country_data->title); ?>.
                </p>
                <div class="d-flex gap-3">
                    <a href="#free-trial" class="btn btn-primary btn-lg px-4 py-3 rounded-pill">
                        Start Free Trial <i class="far fa-arrow-alt-circle-right ms-2"></i>
                    </a>
                    <a href="#watch-demo" class="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill">
                        Watch Demo
                    </a>
                </div>
            </div>
            <div class="col-lg-6 text-center">
                <div class="mockup-container position-relative d-inline-block">
                    <img src="https://ilmify.app/wp-content/uploads/2025/07/Tarbiyaah.webp" alt="Ilmify App Mockup" class="img-fluid">
                    <div class="mockup-shadow position-absolute top-0 start-0 end-0 bottom-0 rounded-3"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .hero-section {
        background-color: #fff; /* White background for the hero section */
        /*padding-top: 8rem;*/
        /*padding-bottom: 8rem;*/
        position: relative;
        overflow: hidden;
    height: auto !important;
}
    .hero-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239DC225' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat; /* Subtle pattern */
        z-index: 0;
    }

    .hero-section .container {
        position: relative; /* Ensure content is above the pseudo-element pattern */
        z-index: 1;
    }

    .display-4 {
        font-size: 2.8rem; /* Adjust as needed */
        font-weight: 700;
        letter-spacing: -0.03em;
    }

    .text-primary { color: #9DC225 !important; } /* Custom primary color (theme green) */
    .text-success { color: #10B981 !important; } /* Success green for "<?php echo esc_html($country_data->title); ?>" */

    .lead {
        font-size: 1.25rem;
        line-height: 1.7;
        color: #64748b; /* Muted gray for description */
    }

    .btn-primary {
        background-color: #9DC225 !important; /* Theme green */
        border-color: #9DC225 !important;
        color: #fff !important;
        font-weight: 600;
        letter-spacing: 0.03em;
    }
    .btn-primary:hover {
        background-color: #7E9B1D !important; /* Darker theme green */
        border-color: #7E9B1D !important;
    }

    .btn-outline-primary {
        color: #9DC225 !important; /* Theme green */
        border-color: #9DC225 !important;
        font-weight: 600;
        letter-spacing: 0.03em;
    }
    .btn-outline-primary:hover {
        background-color: #9DC225 !important; /* Theme green */
        color: #fff !important;
        border-color: #9DC225 !important;
    }

    .rounded-pill {
        border-radius: 50px !important;
    }
@media (max-width: 575.98px) {
  .rounded-pill {
    border-radius: 20px !important;
  }
}
    .mockup-container {
        width: 100%;
        max-width: 600px; /* Adjust as needed */
        margin: 0 auto;
    }

    .mockup-image {
        border-radius: 1.5rem !important; /* Rounded corners for the mockup */
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.2); /* Realistic shadow */
    }

    /* Style for the location badge */
    .location-badge {
        background-color: rgba(240, 255, 240, 0.8); /* Light green with transparency */
        color: #10B981; /* Success green text */
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        border: 1px solid rgba(16, 185, 129, 0.3); /* Subtle border */
    }
    .location-badge i {
        margin-right: 0.5rem;
        color: #10B981; /* Success green icon */
    }
</style>

<!-- Why Ilmify Section -->
<section class="why-ilmify-section bg-white py-5">
    <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
            <h2 class="d-flex justify-content-center align-items-center">
                
                Why Ilmify for <?php echo esc_html($country_data->title); ?>?
            </h2>
        </div>
        <div class="row g-5">
            <div class="col-lg-6" style="
    display: flex;
    align-items: center;
">
                <div class="row g-5">
                    <!-- Growing Muslim Population -->
                    <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                        <div class="d-flex align-items-start">
                            <div class="flex-shrink-0 me-3">
                                <div class="icon-container bg-light-primary rounded-lg d-flex align-items-center justify-content-center" style="width: 56px; height: 56px;">
                                    <i class="far fa-user text-primary" style="font-size: 24px;"></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 row g-2">
                                <h4 class="fw-bold mb-1">Growing Muslim Population</h4>
                                <p class="text-muted mb-0" style="font-size: 0.9rem;">
                                    Growing Muslim population in <?php echo esc_html($country_data->title); ?> demands scalable and modern Islamic education infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Digital Transformation -->
                    <div class="col-12" data-aos="fade-up" data-aos-delay="200">
                        <div class="d-flex align-items-start">
                            <div class="flex-shrink-0 me-3">
                                <div class="icon-container bg-light-primary rounded-lg d-flex align-items-center justify-content-center" style="width: 56px; height: 56px;">
                                    <i class="far fa-file-alt text-primary" style="font-size: 24px;"></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 row g-2">
                                <h4 class="fw-bold mb-1">Digital Transformation</h4>
                                <p class="text-muted mb-0" style="font-size: 0.9rem;">
                                    Many madrassas and maktabs still rely on paper-based or fragmented systems. Ilmify supports digital transformation while preserving traditional Islamic values.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Enhanced Communication -->
                    <div class="col-12" data-aos="fade-up" data-aos-delay="300">
                        <div class="d-flex align-items-start">
                            <div class="flex-shrink-0 me-3">
                                <div class="icon-container bg-light-primary rounded-lg d-flex align-items-center justify-content-center" style="width: 56px; height: 56px;">
                                    <i class="far fa-comment-dots text-primary" style="font-size: 24px;"></i>
                                </div>
                            </div>
                            <div class="flex-grow-1 row g-2">
                                <h4 class="fw-bold mb-1">Enhanced Communication</h4>
                                <p class="text-muted mb-0" style="font-size: 0.9rem;">
                                    Enables transparent parent-teacher communication, student performance tracking, and attendance automation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card localized-card p-4 h-100 text-start" style="background-color: #eefdf4;">
               <div class="d-flex  mb-3" style="
    align-items: left;
    margin-right: auto;
">
                        <i class="far fa-map text-primary me-2 fs-3"></i>
                        <h4 class="fw-bold mb-0">Localized for <?php echo esc_html($country_data->title); ?></h4>
                    </div>
                    <div style="
    margin-left: 35px;
">
                    <p class="text-muted mb-4" style="font-size: 0.95rem;">
                        Ilmify supports cultural and language preferences unique to <?php echo esc_html($country_data->title); ?> . Whether your institution follows English, Arabic, Urdu, Ilmify is designed to adapt.
                    </p>
                    <h5 class="fw-bold mb-3" style="
    margin-right: auto;
">We also support:</h5>
                   <ul class="list-unstyled" style="
    margin-right: auto;
">
                        <li class="d-flex align-items-center mb-2">
                            <i class="far fa-check-circle text-primary me-2"></i>
                            <span class="text-muted">Local calendar preferences (Hijri/Gregorian)</span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <i class="far fa-check-circle text-primary me-2"></i>
                            <span class="text-muted">Custom school structures</span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <i class="far fa-check-circle text-primary me-2"></i>
                            <span class="text-muted">Timezone synchronization</span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <i class="far fa-check-circle text-primary me-2"></i>
                            <span class="text-muted">GDPR Compliant</span>
                        </li>
                        <li class="d-flex align-items-center mb-2">
                            <i class="far fa-check-circle text-primary me-2"></i>
                            <span class="text-muted"><?php echo esc_html($country_data->title); ?> Curriculum Support</span>
                        </li>
                        <li class="d-flex align-items-center">
                            <i class="far fa-check-circle text-primary me-2"></i>
                            <span class="text-muted">Multi-faith Integration</span>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Styles to match the provided image */
    p.text-muted.mb-0.fs-5 {
    font-weight: 100;
}
    .icon-container {
        border-radius: 12px !important; /* Matches the rounded corners of the icon containers */
        opacity: 0.8; /* Slight transparency */
    }
    .bg-light-primary { background-color: rgba(157, 194, 37, 0.08); } /* Theme green tint */
    .text-primary { color: #9DC225; } /* Primary green color */
    .text-danger { color: #dc3545; } /* Red for emphasis */

    .localized-card {
        border: 1px solid rgba(157, 194, 37, 0.2); /* Subtle border matching primary color */
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1); /* Subtle shadow */
    }
    .text-muted {
        color: #64748b !important; /* Matching the muted text color */
    }
    h4, h5 {
        color: #1e293b; /* Dark color for headings */
    }
    .fw-bold {
        font-weight: 700 !important;
    }
    .fw-bold.mb-1 {
        margin-bottom: 0.25rem !important;
    }
    .fw-bold.mb-3 {
        margin-bottom: 1rem !important;
    }
    .mb-0 {
        margin-bottom: 0 !important;
    }
    .mb-1 {
        margin-bottom: 0.25rem !important;
    }
    .mb-2 {
        margin-bottom: 0.5rem !important;
    }
    .mb-3 {
        margin-bottom: 1rem !important;
    }
    .mb-4 {
        margin-bottom: 1.5rem !important;
    }
    .me-2 {
        margin-right: 0.5rem !important;
    }
    .me-3 {
        margin-right: 1rem !important;
    }
    .py-5 {
        padding-top: 3rem !important;
        padding-bottom: 3rem !important;
    }
    .g-4 {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 1.5rem;
    }
    .g-5 {
        --bs-gutter-x: 2rem;
        --bs-gutter-y: 2rem;
    }
    .bg-white { background-color: #ffffff !important; }
    .bg-secondary { background-color: #f8fafc !important; } /* Light background */
    .text-primary { color: #9DC225 !important; }
    .rounded-lg {
        border-radius: 0.75rem !important; /* Larger radius for icons */
    }
    .d-flex { display: flex !important; }
    .align-items-center { align-items: center !important; }
    .justify-content-center { justify-content: center !important; }
    .align-items-start { align-items: flex-start !important; }
    .flex-shrink-0 { flex-shrink: 0 !important; }
    .flex-grow-1 { flex-grow: 1 !important; }
    .mx-auto { margin-left: auto !important; margin-right: auto !important; }
    .text-center { text-align: center !important; }
    .fs-3 { font-size: 1.75rem !important; }
    .fs-4 { font-size: 1.5rem !important; }
    .fs-5 { font-size: 1.25rem !important; }
    .mb-0 { margin-bottom: 0 !important; }
    .mb-1 { margin-bottom: 0.25rem !important; }
    .mb-2 { margin-bottom: 0.5rem !important; }
    .mb-3 { margin-bottom: 1rem !important; }
    .mb-4 { margin-bottom: 1.5rem !important; }
    .mb-5 { margin-bottom: 3rem !important; }
    .me-2 { margin-right: 0.5rem !important; }
    .me-3 { margin-right: 1rem !important; }
    .me-4 { margin-right: 1.5rem !important; }
    .py-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
    section.footer-top {
    padding: 0px;
}
.footer-banner-section {
    width: 100%;
}
</style>

<!-- Islamic Education Landscape Section --><!-- ======================================================================= -->
<!-- START OF REFACTORED "ISLAMIC EDUCATION LANDSCAPE" SECTION               -->
<!-- UI updated to match image and use theme colors consistently.          -->
<!-- ======================================================================= -->
<section class="landscape-section-refactored" style="background-color: #f8fafc; padding: 4rem 0;">
    <div class="container">
        <!-- Section Title -->
        <div class="text-center mb-5" data-aos="fade-up">
            <h2 style="font-weight: 700; color: #1e293b;">Islamic Education Landscape in the  <?php echo esc_html($country_data->title); ?> </h2>
            <p class="lead" style="font-size: 1.25rem; color: #64748b; max-width: 650px; margin-left: auto; margin-right: auto;">
                Understanding the growing need for digital solutions in Islamic education across the <?php echo esc_html($country_data->title); ?>.
            </p>
        </div>

        <!-- Main Stats Panel -->
        <div class="card shadow-sm mb-5" style="border: none; border-radius: 1rem;" data-aos="fade-up" data-aos-delay="100">
            <div class="card-body p-4" style="
    width: 100%;
">

             <div class="row text-center g-4">
    <!-- Stat Item: Muslim Population -->
    <div class="col-md-4">
        <i class="far fa-user mb-3 text-primary" style="font-size: 1.5rem;"></i>
                <h3 class="fw-bold mb-2" style="color: #1e293b; font-size: 2rem;">
                    <?php echo esc_html($country_data->Muslim_Population); ?>
                
                <p class="text-muted mb-0 fs-5">Muslim Population Count</p></h3>
            
    </div>

    <!-- Stat Item: Islamic Schools -->
    <div class="col-md-4">
                <i class="far fa-building mb-3 text-primary" style="font-size: 1.5rem;"></i>
                <h3 class="fw-bold mb-2" style="color: #1e293b; font-size: 2rem;">
                    <?php echo esc_html($country_data->Islamic_Schools); ?>
                
                <p class="text-muted mb-0 fs-5">Islamic Schools</p></h3>
            
    </div>

    <!-- Stat Item: Muslim Population Growth -->
    <div class="col-md-4">
         <i class="far fa-chart-bar mb-3 text-primary" style="font-size: 1.5rem;"></i>
                <h3 class="fw-bold mb-2" style="color: #1e293b; font-size: 2rem;">
                    <?php echo esc_html($country_data->Muslim_Population_Growth); ?>%
                
                <p class="text-muted mb-0 fs-5">GLOBAL MUSLIM POPULATION</p></h3>
           
    </div>
</div>

<style>
    .hover-scale:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
    }
    .transition-all {
        transition: all 0.3s ease;
    }
    .rounded-4 {
        border-radius: 1rem !important;
    }
</style>

            </div>
        </div>

        <!-- Details Cards Row -->
        <div class="row g-4" style="
    align-items: start !important;
">
     
            
            
            <!-- Islamic Education Overview Card -->
            <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
                <div class="card h-100 shadow-sm" style="border: none; border-radius: 1rem;">
                    <div class="card-body p-4">
                        <h4 class="fw-bold d-flex align-items-center mb-4" style="color: #1e293b;">
                            <i class="far fa-file-alt me-2 text-primary"></i>Islamic Education Overview
                        </h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">Total Islamic Schools<span class="fw-bold"><?php echo esc_html($country_data->Islamic_Schools); ?></span></li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">Weekend Maktabs<span class="fw-bold">1,200+</span></li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">Full-time Madrasas<span class="fw-bold">400+</span></li>
                            <li class="list-group-item d-flex justify-content-between align-items-center px-0">Niswan Centers<span class="fw-bold">200+</span></li>
                        </ul>
                        <!-- Challenge Box -->
                        <div class="mt-3 p-3 rounded" style="background-color: var(--bs-primary-light);">
                            <p class="mb-0 small" style="color: var(--bs-link-hover-color);">
                                <strong>Challenge:</strong> Only 35% of Islamic institutions use digital management systems, creating a significant opportunity for modernization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Population Trends Card -->
            <div class="col-lg-6" data-aos="fade-right" data-aos-delay="200">
                <div class="card h-100 shadow-sm" style="border: none; border-radius: 1rem;">
                    <div class="card-body p-4 row">
                        <h4 class="fw-bold d-flex align-items-center mb-4" style="color: #1e293b;">
                            <i class="far fa-chart-bar me-2 text-primary"></i>Population Trends
                        </h4>
                        <!-- Muslim Population Growth Progress Bar -->
                        <div class="mb-4">
                            <div class="d-flex justify-content-between mb-1">
                                <span class="fw-medium" style="color: #334155;">Muslim Population Growth </span>
                                <span class="fw-bold" style="color: #1e293b;"><?php echo esc_html($country_data->Muslim_Population_Growth); ?> %</span>
                            </div>
                            <div class="progress" style="height: 8px; background-color: #e2e8f0; border-radius: 4px;">
                                <div class="progress-bar" role="progressbar" style="width: <?php echo esc_attr(rtrim($country_data->Muslim_Population_Growth, '%')); ?>%; background-color: #1e293b;" aria-valuenow="<?php echo esc_attr(rtrim($country_data->Muslim_Population_Growth, '%')); ?>" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <!-- Youth Population Progress Bar -->
                        <div>
                            <div class="d-flex justify-content-between mb-1">
                                <span class="fw-medium" style="color: #334155;">Youth Population (Under 25)</span>
                                <span class="fw-bold" style="color: #1e293b;"><?php echo esc_html($country_data->Youth_Population); ?></span>
                            </div>
                            <div class="progress" style="height: 8px; background-color: #e2e8f0; border-radius: 4px;">
                                <div class="progress-bar" role="progressbar" style="width: <?php echo esc_attr(rtrim($country_data->Youth_Population, '%')); ?>%; background-color: #1e293b;" aria-valuenow="<?php echo esc_attr(rtrim($country_data->Youth_Population, '%')); ?>" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</section>
<!-- ======================================================================= -->
<!-- END OF REFACTORED SECTION                                               -->
<!-- ======================================================================= -->

<!-- Comprehensive Features Section -->

<style>
    @media (max-width: 767px) {
  .nav-pills-dropdown {
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
  }
  .nav-pills-dropdown::after {
    content: "☰";
    position: absolute;
    top: 8px;
    right: 15px;
    pointer-events: none;
    font-size: 1.2rem;
  }
  .nav-pills-dropdown.open li {
    display: block;
  }
  .nav-pills-dropdown li {
    display: none;
  }
  .nav-pills-dropdown li.active {
    display: block;
  }
}

</style>
<section class="features-section bg-white">
    <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
            <h2>Comprehensive Features</h2>
            <p class="lead mx-auto" style="max-width: 600px;">Everything you need to manage your Islamic educational institution efficiently and effectively.</p>
        </div>
<ul class="nav nav-pills bg-light border rounded-pill p-2 mb-5 features-tabs 
           flex-column flex-sm-row justify-content-center"
    id="featuresTab" role="tablist">

  <li class="nav-item flex-fill text-center" role="presentation">
    <button class="nav-link active w-100" id="overview-tab" data-bs-toggle="tab" 
            data-bs-target="#tab-overview" type="button" role="tab" 
            aria-controls="tab-overview" aria-selected="true">
      Overview
    </button>
  </li>

  <li class="nav-item flex-fill text-center" role="presentation">
    <button class="nav-link w-100" id="academic-tab" data-bs-toggle="tab" 
            data-bs-target="#tab-academic" type="button" role="tab" 
            aria-controls="tab-academic" aria-selected="false">
      Academic
    </button>
  </li>

  <li class="nav-item flex-fill text-center" role="presentation">
    <button class="nav-link w-100" id="communication-tab" data-bs-toggle="tab" 
            data-bs-target="#tab-communication" type="button" role="tab" 
            aria-controls="tab-communication" aria-selected="false">
      Communication
    </button>
  </li>

  <li class="nav-item flex-fill text-center" role="presentation">
    <button class="nav-link w-100" id="analytics-tab" data-bs-toggle="tab" 
            data-bs-target="#tab-analytics" type="button" role="tab" 
            aria-controls="tab-analytics" aria-selected="false">
      Analytics
    </button>
  </li>
</ul>


        <div class="tab-content" id="featuresTabContent">
            <!-- Overview Tab -->
            <div class="tab-pane fade show active" id="tab-overview" role="tabpanel" aria-labelledby="overview-tab">
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="card h-100 text-center">
                            <div class="card-body p-4">
                                <div class="feature-icon"><i class="far fa-user text-primary"></i></div>
                                <h4 style="
    font-size: 22px;
">Student Records Management</h4>
                                <p style="
    font-size: 14px;
">Comprehensive digital profiles for every student with academic history, personal details, and progress tracking.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="card h-100 text-center">
                            <div class="card-body p-4">
                                <div class="feature-icon"><i class="far fa-user-check text-primary"></i></div>
                                <h4 style="
    font-size: 22px;
">Digital Attendance Tracking</h4>
                                <p style="
    font-size: 14px;
">Real-time attendance monitoring with automated reports and parent notifications.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div class="card h-100 text-center">
                            <div class="card-body p-4">
                                <div class="feature-icon"><i class="far fa-id-card text-primary"></i></div>
                                <h4 style="
    font-size: 22px;
">Examination & Grade Management</h4>
                                <p style="
    font-size: 14px;
">Complete assessment system with grade calculations, report cards, and performance analytics.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div class="card h-100 text-center">
                            <div class="card-body p-4">
                                <div class="feature-icon"><i class="far fa-comments text-primary"></i></div>
                                <h4 style="
    font-size: 22px;
">Parent-Teacher Communication</h4>
                                <p style="
    font-size: 14px;
">Instant messaging, announcements, and progress updates to keep parents informed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Academic Tab -->
            <div class="tab-pane fade" id="tab-academic" role="tabpanel" aria-labelledby="academic-tab">
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="card h-100 feature-card-detailed">
                            <div class="card-body">
                                <h4 class="d-flex align-items-center mb-3"><i class="far fa-id-card icon me-3"></i>Academic Management</h4>
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Comprehensive student profile and records</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Digital attendance tracker with bio-metric support</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Automated grade calculation and report cards</span></li>
                                    <li class="d-flex align-items-start"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Curriculum mapping and progress tracking</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="card h-100 feature-card-detailed">
                            <div class="card-body">
                                <h4 class="d-flex align-items-center mb-3"><i class="far fa-calendar-alt icon me-3"></i>Scheduling & planning</h4>
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Dynamic timetable creation management</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Prayer time integration and reminders</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Event planning and Islamic calendar integration</span></li>
                                    <li class="d-flex align-items-start"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Resources allocation and room booking</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Communication Tab -->
            <div class="tab-pane fade" id="tab-communication" role="tabpanel" aria-labelledby="communication-tab">
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="card h-100 feature-card-detailed">
                            <div class="card-body">
                                <h4 class="d-flex align-items-center mb-3"><i class="far fa-comments icon me-3"></i>Parent-Teacher Communication</h4>
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Real-Time messaging and announcements</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Automated progress reports and notifications</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Parent portal with student information access</span></li>
                                    <li class="d-flex align-items-start"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Multi-language support for diverse communication</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="card h-100 feature-card-detailed">
                            <div class="card-body">
                                <h4 class="d-flex align-items-center mb-3"><i class="far fa-bell icon me-3"></i>Notification & Alerts</h4>
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Customizable Notification preferences</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>SMS and email integration</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Emergency communication system</span></li>
                                    <li class="d-flex align-items-start"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Event reminders and deadline alerts</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Analytics Tab -->
            <div class="tab-pane fade" id="tab-analytics" role="tabpanel" aria-labelledby="analytics-tab">
                <div class="row g-4 justify-content-center">
                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div class="card h-100 feature-card-detailed">
                            <div class="card-body">
                                <h4 class="d-flex align-items-center mb-3"><i class="far fa-chart-bar icon me-3"></i>Performance Analytics</h4>
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Student performance tracking and trends</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Attendance patterns and insights</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Teacher effectiveness metrics</span></li>
                                    <li class="d-flex align-items-start"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Institutional performance dashboards</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div class="card h-100 feature-card-detailed">
                            <div class="card-body">
                                <h4 class="d-flex align-items-center mb-3"><i class="far fa-file-alt icon me-3"></i>Custom Reporting</h4>
                                <ul class="list-unstyled">
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Customizable report generation</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Export capabilities (PDF, Excel, CSV)</span></li>
                                    <li class="d-flex align-items-start mb-2"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Automation report scheduling</span></li>
                                    <li class="d-flex align-items-start"><i class="far fa-check-circle text-primary me-2 mt-1"></i><span>Data visualization and charts</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About ilmify.app Section -->
<section class="about-section bg-secondary">
    <div class="container">
        <div class="text-center mb-5" data-aos="fade-up">
            <h2>About ilmify.app</h2>
            <p class="lead mx-auto" style="max-width: 700px;">Bridging traditional Islamic education with modern technology to create efficient, connected learning environments.</p>
        </div>
        <div class="row g-4">
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="card h-100 about-card">
                    <div class="card-body p-4">
                       <h4 style=" text-align: left; "><i class="far fa-heart  me-2 text-primary"></i>Our Mission</h4>
                        <p style="
    text-align: start;
">To empower Islamic educational institutions with cutting-edge digital tools that preserve traditional values while embracing modern efficiency and connectivity.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="card h-100 about-card">
                    <div class="card-body p-4">
                       <h4 style=" text-align: left; "><i class="far fa-star me-2 text-primary"></i>Our Vision</h4>
                        <p style="
    text-align: start;
">To become the leading platform for Islamic education management globally, fostering excellence in Islamic learning through innovative technology solutions.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="card h-100 about-card">
                    <div class="card-body p-4">
                       <h4 style=" text-align: left; "><i class="far fa-map me-2 text-primary"></i>Local Relevance</h4>
                        <p style="
    text-align: start;
">Specifically designed for <?php echo esc_html($country_data->title); ?> Islamic institutions with multilingual support (English, Arabic, Urdu), local curriculum alignment, and cultural sensitivity.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Success Story & FAQ Section -->
<section class="success-faq-section bg-white py-5">
    <div class="container">
        <div class="row align-items-center g-5">
            <!-- Features List Column -->
            <div class="col-lg-6 col-md-12 mb-5 mb-lg-0" data-aos="fade-right">
                <ul class="list-unstyled">
                    <li class="d-flex align-items-start mb-4">
                        <div class="flex-shrink-0 text-center me-3 me-sm-4" style="width: 64px; height: 64px;">
                            <div class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center h-100">
                                <i class="far fa-map text-primary fs-3"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4 class="fw-bold mb-2">Multilingual Support</h4>
                            <p class="text-muted mb-0">Comprehensive support for English, Arabic, and Urdu to effectively serve the diverse <?php echo esc_html($country_data->title); ?> Muslim community.</p>
                        </div>
                    </li>
                    <li class="d-flex align-items-start mb-4">
                        <div class="flex-shrink-0 text-center me-3 me-sm-4" style="width: 64px; height: 64px;">
                            <div class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center h-100">
                                <i class="far fa-file-alt text-primary fs-3"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4 class="fw-bold mb-2"><?php echo esc_html($country_data->title); ?> Curriculum Alignment</h4>
                            <p class="text-muted mb-0">Expertly designed to complement the <?php echo esc_html($country_data->title); ?> education system while preserving Islamic educational values and requirements.</p>
                        </div>
                    </li>
                    <li class="d-flex align-items-start mb-4">
                        <div class="flex-shrink-0 text-center me-3 me-sm-4" style="width: 64px; height: 64px;">
                            <div class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center h-100">
                                <i class="far fa-id-card text-primary fs-3"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4 class="fw-bold mb-2">Scalable for All Sizes</h4>
                            <p class="text-muted mb-0">From intimate weekend Maktabs with 20 students to large Madrasas with 500+ students - one powerful platform fits all.</p>
                        </div>
                    </li>
                    <li class="d-flex align-items-start">
                        <div class="flex-shrink-0 text-center me-3 me-sm-4" style="width: 64px; height: 64px;">
                            <div class="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center h-100">
                                <i class="far fa-check-circle text-primary fs-3"></i>
                            </div>
                        </div>
                        <div class="feature-content">
                            <h4 class="fw-bold mb-2">GDPR Compliant</h4>
                            <p class="text-muted mb-0">Full compliance with <?php echo esc_html($country_data->title); ?> data protection regulations ensuring complete student and staff data security.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- Testimonial Card Column -->
            <div class="col-lg-6 col-md-12" data-aos="fade-left">
                <div class="card testimonial-card shadow-lg border-0">
                    <div class="card-body p-4 p-md-5 text-center">
                        <div class="d-inline-flex bg-white rounded-circle mb-4 shadow-sm" style="width:80px; height:80px; align-items:center; justify-content:center;">
                            <img src="<?php echo esc_html($country_data->ilmifyicon); ?>" style="width: 40px; height: 40px;" alt="School Icon">
                        </div>
                        <h3 class="fw-bold mb-2">Al-Noor Islamic School</h3>
                        <p class="text-primary fw-semibold mb-4">
                            <i class="far fa-map-marker-alt me-1"></i>Birmingham, <?php echo esc_html($country_data->title); ?>
                        </p>
                       <blockquote class="fst-italic fs-6 fs-md-5 text-start mb-4 lh-lg">
                            "ilmify.app completely transformed our school management. We reduced administrative work by 60% and significantly improved parent communication. The multilingual support helped us serve our diverse community better than ever before."
                        </blockquote>
                        <div class="text-warning mb-4">
                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                            <span class="text-muted ms-2 fw-semibold">5.0/5 Rating</span>
                        </div>
                        <div class="row text-center border-top pt-4">
                            <div class="row text-center">
  <div class="col-12 col-md-4 mb-3 mb-md-0">
    <span class="d-block h4 text-primary fw-bold mb-1">300+</span>
    <span class="d-block small text-muted fw-semibold">Students</span>
  </div>

  <div class="col-12 col-md-4 mb-3 mb-md-0">
    <span class="d-block h4 text-primary fw-bold mb-1">25</span>
    <span class="d-block small text-muted fw-semibold">Teachers</span>
  </div>

  <div class="col-12 col-md-4">
    <span class="d-block h4 text-primary fw-bold mb-1">2 Years</span>
    <span class="d-block small text-muted fw-semibold">Using Ilmify</span>
  </div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Enhanced FAQ section with better styling -->
        <div class="mt-5 pt-5" data-aos="fade-up">
            <div class="text-center mb-5">
                <h3 class="fw-bold mb-3 fs-2 fs-md-1">
                    <i class="far fa-question-circle text-primary me-3"></i>
                    Frequently Asked Questions
                </h3>
                <p class="lead text-muted">Get answers to common questions about Ilmify</p>
            </div>
            <div class="accordion" id="faqAccordion">
                <div class="accordion-item mb-3">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i class="far fa-question-circle text-primary me-3"></i>
                            What is Ilmify?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            <p class="mb-0">Ilmify is a comprehensive management platform designed specifically for Islamic educational institutions like Maktabs and Madrasas. It helps digitize and streamline administrative tasks, academic management, and parent-teacher communication while preserving traditional Islamic values.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mb-3">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i class="far fa-user text-primary me-3"></i>
                            Who can use Ilmify?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            <p class="mb-0">Ilmify is designed for Islamic schools, weekend Maktabs, full-time Madrasas, Hifz programs, and any institution involved in Islamic education. It is scalable for centers with 20 students to large schools with over 500 students.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <i class="far fa-map text-primary me-3"></i>
                            Is Ilmify available globally?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            <p class="mb-0">Yes, while initially optimized for the <?php echo esc_html($country_data->title); ?>, Ilmify is a cloud-based platform available and used by institutions worldwide. We offer multilingual and multi-currency support to cater to a global audience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://ilmify.app/faq/" class="btn btn-outline-primary btn-lg px-4 py-3 rounded-pill">
                       More
                    </a>
        </div>
    </div>
</section>

<!-- JavaScript Libraries and Custom Scripts -->


<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Initialize Animate-On-Scroll library
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 800, once: true });
        }
    });
</script>