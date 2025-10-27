<?php
/**
 * visitdesk functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package visitdesk
 */

if ( ! function_exists( 'visitdesk_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function visitdesk_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on visitdesk, use a find and replace
		 * to change 'visitdesk' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'visitdesk', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary Menu', 'visitdesk' ),
			'footer-menu-1' => __( 'Footer Menu1'),
			'footer-menu-2' => __( 'Footer Menu2'),
			'footer-menu-3' => __( 'Footer Menu3'),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'visitdesk_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'visitdesk_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function visitdesk_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'visitdesk_content_width', 640 );
}
add_action( 'after_setup_theme', 'visitdesk_content_width', 0 );


/** 
 * Google reCAPTCHA: Add widget before the submit button 
 */ 
function add_google_recaptcha($submit_field) { 
    $submit_field['submit_field'] = '<p class="form-submit"> 
        <input type="submit" name="buttonSubmit" id="buttonSubmit" class="submit" value="Post Comment"> 
        <input type="hidden" name="comment_post_ID" value="'.get_the_id().'" id="comment_post_ID"> 
        <input type="hidden" name="comment_parent" id="comment_parent" value="0"> 
        <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response"> 
    </p> 
    <script> 
    document.getElementById("buttonSubmit").onclick = function onClick(e) { 
        e.preventDefault(); 
	var submitButton = document.getElementById("buttonSubmit");
        submitButton.value = "Loading...";
        submitButton.disabled = true;
        grecaptcha.ready(function() { 
            grecaptcha.execute("6LdU3D4kAAAAANY9niayRySwwzM3NUdN40yrZKMm", {action: "submit"}).then(function(token) { 
                document.getElementById("g-recaptcha-response").value = token; 
                document.getElementById("commentform").submit(); 
            }); 
        }); 
    } 
    </script> 
    '; 
    return $submit_field; 
} 
 
if (!is_user_logged_in()) { 
    add_filter('comment_form_defaults','add_google_recaptcha'); 
} 
  
/** 
 * Google reCAPTCHA: verify response and validate comment submission 
 */ 
function is_valid_captcha_response($captcha) { 
    $captcha_postdata = http_build_query( 
        array( 
            'secret' => '6LdU3D4kAAAAABcKRihm_optJ_4ZAXrJFbFi_lFb', 
            'response' => $captcha, 
            'remoteip' => $_SERVER['REMOTE_ADDR'] 
        ) 
    ); 
    $captcha_opts = array( 
        'http' => array( 
            'method' => 'POST', 
            'header' => 'Content-type: application/x-www-form-urlencoded', 
            'content' => $captcha_postdata 
        ) 
    ); 
    $captcha_context = stream_context_create($captcha_opts); 
    $captcha_response = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify", false, $captcha_context), true); 
    if($captcha_response['success'] && $captcha_response['score'] > 0.5){ 
        return true; 
    }else{ 
        return false; 
    } 
} 
 
function verify_google_recaptcha() { 
    $recaptcha = $_POST['g-recaptcha-response']; 
    if(empty($recaptcha)){ 
        wp_die(__("<p><strong>Error:</strong> Sorry, spam detected!</p><p><a href='javascript:history.back()'>« Back</a></p>")); 
    }elseif(!is_valid_captcha_response($recaptcha)){ 
        wp_die(__("<b>Sorry, spam detected!</b>")); 
    } 
} 
 
if (!is_user_logged_in()) { 
    add_action('pre_comment_on_post', 'verify_google_recaptcha'); 
}


/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function visitdesk_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'visitdesk' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'visitdesk' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Post Search', 'visitdesk' ),
		'id'            => 'post-search',
		'description'   => esc_html__( 'Add widgets here.', 'visitdesk' ),
		'before_widget' => '<div class="form-group has-search">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer 1', 'visitdesk' ),
		'id'            => 'footer-1',
		'description'   => esc_html__( 'Add widgets here.', 'visitdesk' ),
		'before_widget' => '<div class="vd-footer-menu">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer 2', 'visitdesk' ),
		'id'            => 'footer-2',
		'description'   => esc_html__( 'Add widgets here.', 'visitdesk' ),
		'before_widget' => '<div class="vd-footer-menu">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer 3', 'visitdesk' ),
		'id'            => 'footer-3',
		'description'   => esc_html__( 'Add widgets here.', 'visitdesk' ),
		'before_widget' => '<div class="vd-footer-menu">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'visitdesk_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function visitdesk_scripts() {
	wp_enqueue_style( 'visitdesk-style', get_stylesheet_uri() );
	
    wp_enqueue_script('google-recaptcha', 'https://www.google.com/recaptcha/api.js?render=6LdU3D4kAAAAANY9niayRySwwzM3NUdN40yrZKMm');
    
	wp_enqueue_style('bootstrap-css','https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css');
	wp_enqueue_style('owl-carousel-css','https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css');

	wp_enqueue_style('owl-carousel-theme-css','https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css');

	wp_enqueue_style( 'country-code-css', get_template_directory_uri() . '/css/intlTelInput.css');

	wp_enqueue_style('swiper-css','https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/css/swiper.min.css');

	wp_enqueue_style('font-awesome-css','https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
	
	wp_enqueue_style('ionicons-css','https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');

    wp_enqueue_script( 'jQuery', 'https://code.jquery.com/jquery-3.3.1.min.js', array('jquery'), '3.3.1', true );

    //wp_enqueue_script( 'jQuery-ui', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js');

    wp_enqueue_script( 'bootstrap-popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js');
    wp_enqueue_script( 'bootstrap-js', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
   wp_enqueue_script( 'owl-carousel-js', 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/owl.carousel.min.js');


    wp_enqueue_script( 'swiper-js', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min.js');

	wp_enqueue_script( 'visitdesk-js', get_template_directory_uri() . '/js/script.js');
	wp_enqueue_script( 'country-code-js', get_template_directory_uri() . '/js/intlTelInput.js');
	wp_enqueue_script( 'country-js', get_template_directory_uri() . '/js/niceCountryInput.js');

    wp_localize_script( 'visitdesk-js', 'visitdesk_ajax', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );

}
add_action( 'wp_enqueue_scripts', 'visitdesk_scripts' );

// svg upload support
function cc_mime_types($mimes) {
 $mimes['svg'] = 'image/svg+xml';
 return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// lets connect form ajax

function letsConnect_ajax_call(){
    $var_letsconnect_action = isset($_POST['action']) ? $_POST['action'] : ''; 
    if ($var_letsconnect_action == "letsConnect") {
        
		$letsConnectName = isset($_POST['var_contact_name']) ? $_POST['var_contact_name'] : '' ;
		$letsConnectEmail = isset($_POST['var_contact_email']) ? $_POST['var_contact_email'] : '' ;
		$letsConnectPhone = isset($_POST['var_contact_number']) ? $_POST['var_contact_number'] : '' ;
		$letsConnectMessage = isset($_POST['var_contact_message']) ? $_POST['var_contact_message'] : '' ;
		
    //  	$to_address = "aadil@ifelsetech.com , rahman@ifelsetech.com, sales@visitdesk.io";

        $to_address = "karthikeyank@ifelsetech.com";
		$subject = "Visitdesk Inquiry from ".$letsConnectEmail;
		$message = '<div style="background:#f8f9fa;widht:100%;height:100%;padding:80px 0px;font-family: "Open Sans", sans-serif;color:#444;">
		  <table style="overflow:hidden;border-collapse: collapse;max-width:600px;width:100%;margin:auto;background:#fff;border-radius: 10px;box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);">
		     <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #efefef;"> <a class="navbar-brand dark-logo" href="#home"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_color.resized.png" style="width: 100%;max-width:200px"></a>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;">
		        <h1 style="text-align:center;margin:auto;font-family: "Open Sans", sans-serif;"> New Inquiry :) </h1>
		        <p style="width:90%;margin:auto;padding:10px;">
		          Hey admin you got a new inquiry from the website.
		          <br>
		          <br>
		          <br>
		          <br>
		          <strong> User Details</strong>
		          <br>
		          <br> Name: <b>'.$letsConnectName.'</b>
		          <br> Email: <b>'.$letsConnectEmail.'</b>
		          <br> Number: <b>'.$letsConnectPhone.'</b>
		          <br> Message: <b>'.$letsConnectMessage.'</b>
		          <br>
		          <br>
		        </p>
		        <p style="width:90%;margin:auto;padding:10px;">
		          If you have any trouble in login into visitdesk, kindly contact us at help@visitdesk.io
		        </p>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;background:#28d57a;"> <a class="navbar-brand dark-logo" href="https://www.visitdesk.io/" style="width: 50%;text-decoration:none;"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_white.resized.png" style="width: 100px;">
		      <p style="font-size:10px;color:#fff;text-decoration:none;padding:0px;margin:0px;">
		      www.visitdesk.io
		      </p></a>
		        <p style="font-size:10px;padding:20px;color:#fff;">
		          Visitdesk is the product of ifelse Technologies. if you have any clarification please feel free to contact us on info@visitdesk.io
		        </p>
		        <p style="padding:0px;color:#fff;">
		          follow us on
		        </p>
		        <p>
		          <a class="navbar-brand dark-logo" href="https://www.facebook.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png">
		      </a>
		          <a class="navbar-brand dark-logo" href="https://twitter.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="http://aux.iconspalace.com/uploads/linkedin-round-icon-256.png">
		      </a>
		        </p>
		      </td>
		    </tr>
		  </table>
		</div>
		';
					
			//Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8 " . "\r\n";
		 
		// More headers
		$headers .= "Reply-To: $letsConnectName, $letsConnectEmail \r\n";
		$headers .= "Return-Path: Visitdesk <visitdesk@ifelsetech.com \r\n";
		$headers .= "From: Visitdesk <ifelsetesting@gmail.com \r\n";
		$headers .= "Organization: Visitdesk \r\n";
		$headers .= "X-Sender: Visitdesk <visitdesk@ifelsetech.com  \r\n";
		$headers .= "X-Mailer: PHP \r\n";
		if(wp_mail($to_address,$subject,$message,$headers))
		    echo json_encode("success");
		else
		    echo json_encode("error");
	}
	else {
		echo json_encode("no data found");
	}
	wp_die();
}
add_action('wp_ajax_letsConnect', 'letsConnect_ajax_call');
add_action('wp_ajax_nopriv_letsConnect', 'letsConnect_ajax_call');




// // lets connect partner form ajax
// function letsConnectPartner(){
// // 	$userName = $_REQUEST['data'];
// 	if (isset($_REQUEST["check_Business_Code"])) {
// 		$letsConnectPartnerBusiness = $_POST['check_Business_Code'];
// 		$letsConnectPartnerEmail = $_POST['check_registered_email-id'];
// 		$letsConnectPartnerPhone = $_POST['check_partner_phone_number'];
// 		$letsConnectPartnerQuery = $_POST['partner_query'];
// 		$to_address = "aadil@ifelsetech.com , rahman@ifelsetech.com, sales@visitdesk.io";
// 		$subject = "Visitdesk Inquiry from ".$letsConnectPartnerEmail;
// 		$message = '<div style="background:#f8f9fa;widht:100%;height:100%;padding:80px 0px;font-family: "Open Sans", sans-serif;color:#444;">
// 		  <table style="overflow:hidden;border-collapse: collapse;max-width:600px;width:100%;margin:auto;background:#fff;border-radius: 10px;box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);">
// 		    <tr>
// 		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #efefef;"> <a class="navbar-brand dark-logo" href="#home"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_color.resized.png" style="width: 100%;max-width:200px"></a>
// 		      </td>
// 		    </tr>
// 		    <tr>
// 		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;">
// 		        <h1 style="text-align:center;margin:auto;font-family: "Open Sans", sans-serif;"> New Ticket </h1>
// 		        <p style="width:90%;margin:auto;padding:10px;">
// 		          Hey admin you got a partner support ticket from the website.
// 		          <br>
// 		          <br>
// 		          <br>
// 		          <br>
// 		          <strong> User Details</strong>
// 		          <br>
// 		          <br> Business Code: <b>'.$letsConnectPartnerBusiness.'</b>
// 		          <br> Registered Email: <b>'.$letsConnectPartnerEmail.'</b>
// 		          <br> phone Number: <b>'.$letsConnectPartnerPhone.'</b>
// 		          <br> Partner Query: <b>'.$letsConnectPartnerQuery.'</b>
// 		          <br>
// 		          <br>
// 		        </p>
// 		        <p style="width:90%;margin:auto;padding:10px;">
// 		          If you have any trouble in login into visitdesk, kindly contact us at help@visitdesk.io
// 		        </p>
// 		      </td>
// 		    </tr>
// 		    <tr>
// 		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;background:#28d57a;"> <a class="navbar-brand dark-logo" href="#home" style="width: 50%;text-decoration:none;"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_white.resized.png" style="width: 100px;">
// 		      <p style="font-size:10px;color:#fff;text-decoration:none;padding:0px;margin:0px;">
// 		      www.visitdesk.io
// 		      </p></a>
// 		        <p style="font-size:10px;padding:20px;color:#fff;">
// 		          Visitdesk is the product of ifelse Technologies. if you have any clarification please feel free to contact us on info@visitdes.io
// 		        </p>
// 		        <p style="padding:0px;color:#fff;">
// 		          follow us on
// 		        </p>
// 		        <p>
// 		          <a class="navbar-brand dark-logo" href="https://www.facebook.com/visitdesk" style="width: 50%;text-decoration:none;">
// 		      <img style="width:50px;height:50px;" src="https://visitdesk.io/wp-content/uploads/2019/01/icon_fb.png">
// 		      </a>
// 		          <a class="navbar-brand dark-logo" href="https://twitter.com/visitdesk" style="width: 50%;text-decoration:none;">
// 		      <img style="width:50px;height:50px;" src="https://visitdesk.io/wp-content/uploads/2019/01/icon_t.png">
// 		      </a>
// 		        </p>
// 		      </td>
// 		    </tr>
// 		  </table>
// 		</div>
// 		';
					
// 		//Always set content-type when sending HTML email
// 		$headers = "MIME-Version: 1.0" . "\r\n";
// 		$headers .= "Content-type:text/html;charset=UTF-8 " . "\r\n";
		 
// 		// More headers
// 		$headers .= "Reply-To: Visitdesk <visitdesk@ifelsetech.com> \r\n";
// 		$headers .= "Return-Path: Visitdesk <visitdesk@ifelsetech.com \r\n";
// 		$headers .= "From: Visitdesk <visitdesk@ifelsetech.com \r\n";
// 		$headers .= "Organization: Visitdesk \r\n";
// 		$headers .= "X-Sender: Visitdesk <visitdesk@ifelsetech.com  \r\n";
// 		$headers .= "X-Mailer: PHP \r\n";
// 		if(wp_mail($to_address,$subject,$message,$headers))
// 		    echo "success";
// 		else
// 		    echo "error";
// 	}
// 	else {
// 		echo "no data found";
// 	}
// 	wp_die();
// }
// add_action('wp_ajax_letsConnectPartner', 'letsConnectPartner');
// add_action('wp_ajax_nopriv_letsConnectPartner', 'letsConnectPartner');


// Become a partner form old
function become_partner($string)
{
    return str_replace("\r\n", "", $string);
}

if (! empty($_POST["Submit"])) {
    $fname = become_partner($_POST["firstName"]);
    $lname = become_partner($_POST["lastName"]);
    $cname = become_partner($_POST["companyName"]);
    $bname = become_partner($_POST["businessEmail"]);
    $websiteurl = become_partner($_POST["website"]);
    $pnumber = become_partner($_POST["phoneNumber"]);
    $countryname = become_partner($_POST["countryName"]);
    $yearestablishment =become_partner( $_POST["yearofEstablishment"]);
    $numberemployees = become_partner($_POST["numberofEmployees"]);
    $typeregistration =become_partner( $_POST["typeRegistration"]);
    $lastthreeyears = become_partner($_POST["lastthreeYear"]);        
    $taxnumber = become_partner($_POST["gstNumber"]);
    $partner = become_partner($_POST["typeofPartnership"]);
    $expectedsales = become_partner($_POST["expectedSales"]);

$to_address = "aadil@ifelsetech.com , rahman@ifelsetech.com";
		$subject = "Visitdesk Partner From ".$bname;
		$message = '<html>
		<head>
		</head>
		<body>
		<div style="background:#f8f9fa;widht:100%;height:100%;padding:80px 0px;font-family: "Open Sans", sans-serif;color:#444;">
		   <table style="overflow:hidden;border-collapse: collapse;max-width:600px;width:100%;margin:auto;background:#fff;border-radius: 10px;box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);">
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #efefef;"> <a class="navbar-brand dark-logo" href="#home"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_color.resized.png" style="width: 100%;max-width:200px"></a>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;">
		        <h1 style="text-align:center;margin:auto;font-family: "Open Sans", sans-serif;">Visitdesk Partner Form</h1>
		        <p style="width:90%;margin:auto;padding:10px;">
		          Hey admin you got a new Partner from the website.
		        </p>
		        <div class="container">
					<div class="fullWidthCard" style="background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
						<h3 class="counteyName" style="margin: 0;">'.$countryname.'</h3>
					
                    
                    <div class="businessDetails" style="margin-top: 35px;text-align: left;">
						<h3>Busnines Details</h3>
						<p class="details"><span style="font-weight: bold;">First name:</span> '.$fname.'</p>
						<p class="details"><span style="font-weight: bold;">Last name:</span> '.$lname.'</p>
						<p class="details"><span style="font-weight: bold;">Company name:</span> '.$cname.'</p>
						<p class="details"><span style="font-weight: bold;">Business email:</span> '.$bname.'</p>
						<p class="details"><span style="font-weight: bold;">Website:</span>'.$websiteurl.'</p>
						<p class="details"><span style="font-weight: bold;">Phone Number:</span> '.$pnumber.'</p>
                        <p class="details"><span style="font-weight: bold;">Year of Establishment:</span> '.$yearestablishment.'</p>
                        <p class="details"><span style="font-weight: bold;">Number of employees:</span> '.$numberemployees.'</p>
                        <p class="details"><span style="font-weight: bold;">Type of Registration:</span> '.$typeregistration.'</p>
                        <p class="details"><span style="font-weight: bold;">Turn Over of last three financial years:</span> '.$lastthreeyears.'</p>
                        <p class="details"><span style="font-weight: bold;">GST Number/Taxation Number :</span> '.$taxnumber.'</p>
                        <p class="details"><span style="font-weight: bold;">Expected Sales you can bring in USD Per Year:</span> '.$expectedsales.'</p>
					</div>
                    <div class="fullWidthCard" style="background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
						<p class="label">Interested in type of partnership</p>
						<p class="count" style="font-size: 24px;margin-top: 0;color: #28d57a;">'.$partner.'</p>
					</div>
					
				</div>
		        <p style="width:90%;margin:auto;padding:10px;">
		          If you have any trouble in login into visitdesk, kindly contact us at help@visitdesk.io
		        </p>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;background:#28d57a;"> <a class="navbar-brand dark-logo" href="https://www.visitdesk.io/" style="width: 50%;text-decoration:none;"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_white.resized.png" style="width: 100px;">
		      <p style="font-size:10px;color:#fff;text-decoration:none;padding:0px;margin:0px;">
		      www.visitdesk.io
		      </p></a>
		        <p style="font-size:10px;padding:20px;color:#fff;">
		          Visitdesk is the product of ifelse Technologies. if you have any clarification please feel free to contact us on info@visitdesk.io
		        </p>
		        <p style="padding:0px;color:#fff;">
		          follow us on
		        </p>
		        <p>
		          <a class="navbar-brand dark-logo" href="https://www.facebook.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png">
		      </a>
		          <a class="navbar-brand dark-logo" href="https://twitter.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="http://aux.iconspalace.com/uploads/linkedin-round-icon-256.png">
		      </a>
		        </p>
		      </td>
		    </tr>
		  </table>
		</div>
		</body>
		</html>
		';
					
		//Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8 " . "\r\n";
		 
		// More headers
		$headers .= "Reply-To: $gerPricingContName, $contactEmail \r\n";
		$headers .= "Return-Path: Visitdesk <visitdesk@ifelsetech.com \r\n";
		$headers .= "From: Visitdesk <ifelsetesting@gmail.com \r\n";
		$headers .= "Organization: Visitdesk \r\n";
		$headers .= "X-Sender: Visitdesk <visitdesk@ifelsetech.com  \r\n";
		$headers .= "X-Mailer: PHP \r\n";
		if(wp_mail($to_address,$subject,$message,$headers))
		     "success";
		else
		     "error";
	}
	else {
	 "no data found";
	}
add_action('wp_ajax_pricingForm', 'become_partner');
add_action('wp_ajax_nopriv_pricingForm', 'become_partner');



// survey form for client
function removespace($string)
{
    return str_replace("\r\n", "", $string);
}
function survey_form_ajax_call(){
 $survey_form_action = isset($_POST['action']) ? $_POST['action'] : ''; 
    if ($survey_form_action == "survey_form") {
        $surveydiv1 = removespace($_POST["surveycheck"]);
        $surveydiv2 = removespace($_POST["surveycheck1"]);
        $surveydiv3 = removespace($_POST["surveycheck2"]);
        $surveydiv4 = removespace($_POST["surveycheck3"]);
        $surveydiv5 = removespace($_POST["surveycheck4"]);
        $surveydiv6 = removespace($_POST["surveycheck5"]);
        
    $to_address = "aadil@ifelsetech.com , rahman@ifelsetech.com, sales@visitdesk.io";
    //$to_address = "karthikeyank@ifelsetech.com";
		$subject = "Client Survey";
		$message = '<html>
		<head>
		</head>
		<body>
		<div style="background:#f8f9fa;widht:100%;height:100%;padding:80px 0px;font-family: "Open Sans", sans-serif;color:#444;">
		   <table style="overflow:hidden;border-collapse: collapse;max-width:600px;width:100%;margin:auto;background:#fff;border-radius: 10px;box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);">
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #efefef;"> <a class="navbar-brand dark-logo" href="#home"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_color.resized.png" style="width: 100%;max-width:200px"></a>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;">
		        <h1 style="text-align:center;margin:auto;font-family: "Open Sans", sans-serif;">Survey Form</h1>
		        
		             
		        <div class="container">
					<div class="fullWidthCard" style="background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
					

                    <div class="fullWidthCard" style="background: #f5f5f5;  border-radius: 8px;padding: 15px;text-align: left;">
						<p class="label">How was the overall experience of your Visitdesk free trial?</p>
						<p class="count" style="font-size: 18px;margin-top: 0;color: #000;">'.$surveydiv1.'</p>
						<hr></hr>
						<p class="label">Did Visitdesk deliver what you wanted it to?</p>
						<p class="count" style="font-size: 18px;margin-top: 0;color: #000;">'.$surveydiv2.'</p>
						<hr></hr>
						<p class="label">How effective was our communication on resources, features, and general queries?</p>
						<p class="count" style="font-size: 18px;margin-top: 0;color: #000;">'.$surveydiv3.'</p>
						<hr></hr>
						<p class="label">How likely are you to recommend Visitdesk to your friends or colleagues?</p>
						<p class="count" style="font-size: 18px;margin-top: 0;color: #000;">'.$surveydiv4.'</p>
						<hr></hr>
						<p class="label">Is there any way in which we can improve our services? Please share your thoughts.</p>
						<p class="count" style="font-size: 18px;margin-top: 0;color: #000;">'.$surveydiv5.'</p>
						<hr></hr>
						<p class="label">Email-id</p>
						<p class="count" style="font-size: 18px;margin-top: 0;color: #000;">'.$surveydiv6.'</p>
					</div>
					
				</div>
		        <p style="width:90%;margin:auto;padding:10px;">
		          If you have any trouble in login into visitdesk, kindly contact us at help@visitdesk.io
		        </p>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;background:#28d57a;"> <a class="navbar-brand dark-logo" href="https://www.visitdesk.io/" style="width: 50%;text-decoration:none;"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_white.resized.png" style="width: 100px;">
		      <p style="font-size:10px;color:#fff;text-decoration:none;padding:0px;margin:0px;">
		      www.visitdesk.io
		      </p></a>
		        <p style="font-size:10px;padding:20px;color:#fff;">
		          Visitdesk is the product of ifelse Technologies. if you have any clarification please feel free to contact us on info@visitdesk.io
		        </p>
		        <p style="padding:0px;color:#fff;">
		          follow us on
		        </p>
		        <p>
		          <a class="navbar-brand dark-logo" href="https://www.facebook.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png">
		      </a>
		          <a class="navbar-brand dark-logo" href="https://twitter.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="http://aux.iconspalace.com/uploads/linkedin-round-icon-256.png">
		      </a>
		        </p>
		      </td>
		    </tr>
		  </table>
		</div>
		</body>
		</html>
		';
					
		//Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8 " . "\r\n";
		 
		// More headers
		$headers .= "Reply-To: $gerPricingContName, $contactEmail \r\n";
		$headers .= "Return-Path: Visitdesk <visitdesk@ifelsetech.com \r\n";
		$headers .= "From: Visitdesk <ifelsetesting@gmail.com \r\n";
		$headers .= "Organization: Visitdesk \r\n";
		$headers .= "X-Sender: Visitdesk <visitdesk@ifelsetech.com  \r\n";
		$headers .= "X-Mailer: PHP \r\n";
		
		if(wp_mail($to_address,$subject,$message,$headers,$attachment)){
		  echo   json_encode("success"); }
		else {
		   echo  json_encode("error");
	}
        
    }
	else {
	 echo json_encode("no data found");
	}
	wp_die();
}

add_action('wp_ajax_survey_form', 'survey_form_ajax_call');
add_action('wp_ajax_nopriv_survey_form', 'survey_form_ajax_call');

		
	
// news letter	

add_action('wp_ajax_newsletter_action_name', 'newsletter_ajax_handler');
add_action('wp_ajax_nopriv_newsletter_action_name', 'newsletter_ajax_handler');

function newsletter_ajax_handler() {
    if (isset($_POST['action']) && $_POST['action'] === 'newsletter_action_name') {
        $business_email = isset($_POST['businessEmail1']) ? sanitize_email($_POST['businessEmail1']) : '';

        if (!empty($business_email)) {
            
            // $to_address = "aadil@ifelsetech.com , rahman@ifelsetech.com, sales@visitdesk.io";
            
            $to_address = "karthikeyank@ifelsetech.com"; // Set your email recipient address

            $subject = "Newsletter Received";
              // Construct HTML message with the provided content
           $message = '<html>
		<head>
		</head>
		<body>
		<div style="background:#f8f9fa;widht:100%;height:100%;padding:80px 0px;font-family: "Open Sans", sans-serif;color:#444;">
		   <table style="overflow:hidden;border-collapse: collapse;max-width:600px;width:100%;margin:auto;background:#fff;border-radius: 10px;box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);">
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #efefef;"> <a class="navbar-brand dark-logo" href="#home"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_color.resized.png" style="width: 100%;max-width:200px"></a>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;">
		        <h1 style="text-align:center;margin:auto;font-family: "Open Sans", sans-serif;">Newsletter</h1>
		        <p style="width:90%;margin:auto;padding:10px;">
		          Hey admin you got a new newsletter from the website.
		        </p>
		        <div class="container">
					<div class="fullWidthCard" style="background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
						
					
                    
                    <div class="businessDetails" style="margin-top: 35px;text-align: left;">
						<h3>Email Address</h3>
						
						<p class="details">'.$business_email.'</p>
						
					</div>
                   
					
				</div>
		        <p style="width:90%;margin:auto;padding:10px;">
		          If you have any trouble in login into visitdesk, kindly contact us at help@visitdesk.io
		        </p>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;background:#28d57a;"> <a class="navbar-brand dark-logo" href="https://www.visitdesk.io/" style="width: 50%;text-decoration:none;"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_white.resized.png" style="width: 100px;">
		      <p style="font-size:10px;color:#fff;text-decoration:none;padding:0px;margin:0px;">
		      www.visitdesk.io
		      </p></a>
		        <p style="font-size:10px;padding:20px;color:#fff;">
		          Visitdesk is the product of ifelse Technologies. if you have any clarification please feel free to contact us on info@visitdesk.io
		        </p>
		        <p style="padding:0px;color:#fff;">
		          follow us on
		        </p>
		        <p>
		          <a class="navbar-brand dark-logo" href="https://www.facebook.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png">
		      </a>
		          <a class="navbar-brand dark-logo" href="https://twitter.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="http://aux.iconspalace.com/uploads/linkedin-round-icon-256.png">
		      </a>
		        </p>
		      </td>
		    </tr>
		  </table>
		</div>
		</body>
		</html>
		';

            // Set additional headers
            $headers = array(
                'Content-Type: text/html; charset=UTF-8',
                'Reply-To: $business_email',
                'Return-Path: Visitdesk <visitdesk@ifelsetech.com',
                'From: Visitdesk <ifelsetesting@gmail.com',
                'Organization: Visitdesk',            
                'X-Sender: Visitdesk <visitdesk@ifelsetech.com',
                'X-Mailer: PHP',
);

            $email_sent = wp_mail($to_address, $subject, $message, $headers);

            if ($email_sent) {
                echo json_encode("success");
            } else {
                echo json_encode("error");
            }
        } else {
            echo json_encode("error: Business email is required.");
        }
    } else {
        echo json_encode("error: Invalid AJAX action.");
    }

    wp_die();
}





// New form for become a partner
function become_partner1($string)
{
    return str_replace("\r\n", "", $string);
}
function become_partner_ajax_call(){
    $become_partner_action = isset($_POST['action']) ? $_POST['action'] : ''; 
    if ($become_partner_action == "become_partner") {
        
    
    $countryName1 = become_partner1($_POST['countryName1']);
    $fname1 = become_partner1($_POST["firstName1"]);
    $lname1 = become_partner1($_POST["lastName1"]);
    $cname1 = become_partner1($_POST["companyName1"]);
    $bname1 = become_partner1($_POST["businessEmail1"]);
    $websiteurl1 = become_partner1($_POST["website1"]);
    $pnumber1 = become_partner1($_POST["phoneNumber1"]);
    $countryname1 = become_partner1($_POST["countryName1"]);
    $yearestablishment1 =become_partner1( $_POST["yearofEstablishment1"]);
    $numberemployees1 = become_partner1($_POST["numberofEmployees1"]);
    $typeRegistration11 =become_partner1( $_POST["typeRegistration1"]);
    $lastthreeYear1s1 = become_partner1($_POST["lastthreeYear1"]);        
    $taxnumber1 = become_partner1($_POST["gstNumber1"]);
    $partner1 = become_partner1($_POST["typeofPartnership1"]);
    $expectedsales1 = become_partner1($_POST["expectedSales1"]);

    $to_address = "aadil@ifelsetech.com , rahman@ifelsetech.com, sales@visitdesk.io";
    //$to_address = "karthikeyank@ifelsetech.com";
		$subject = "Visitdesk $partner1 From ".$cname1;
		$message = '<html>
		<head>
		</head>
		<body>
		<div style="background:#f8f9fa;widht:100%;height:100%;padding:80px 0px;font-family: "Open Sans", sans-serif;color:#444;">
		   <table style="overflow:hidden;border-collapse: collapse;max-width:600px;width:100%;margin:auto;background:#fff;border-radius: 10px;box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);">
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #efefef;"> <a class="navbar-brand dark-logo" href="#home"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_color.resized.png" style="width: 100%;max-width:200px"></a>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;">
		        <h1 style="text-align:center;margin:auto;font-family: "Open Sans", sans-serif;">Visitdesk Partner Form</h1>
		        <p style="width:90%;margin:auto;padding:10px;">
		          Hey admin you got a new Partner from the website.
		        </p>
		        <div class="container">
					<div class="fullWidthCard" style="background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
						<h3 class="counteyName" style="margin: 0;">'.$countryName1.'</h3>
					
                    
                    <div class="businessDetails" style="margin-top: 35px;text-align: left;">
						<h3>Busnines Details</h3>
						<p class="details"><span style="font-weight: bold;">First name:</span> '.$fname1.'</p>
						<p class="details"><span style="font-weight: bold;">Last name:</span> '.$lname1.'</p>
						<p class="details"><span style="font-weight: bold;">Company name:</span> '.$cname1.'</p>
						<p class="details"><span style="font-weight: bold;">Business email:</span> '.$bname1.'</p>
						<p class="details"><span style="font-weight: bold;">Website:</span>'.$websiteurl1.'</p>
						<p class="details"><span style="font-weight: bold;">Phone Number:</span> '.$pnumber1.'</p>
                        <p class="details"><span style="font-weight: bold;">Year of Establishment:</span> '.$yearestablishment1.'</p>
                        <p class="details"><span style="font-weight: bold;">Number of employees:</span> '.$numberemployees1.'</p>
                        <p class="details"><span style="font-weight: bold;">Type of Registration:</span> '.$typeRegistration11.'</p>
                        <p class="details"><span style="font-weight: bold;">Turn Over of last three financial years:</span> '.$lastthreeYear1s1.'</p>
                        <p class="details"><span style="font-weight: bold;">GST Number/Taxation Number:</span> '.$taxnumber1.'</p>
                        <p class="details"><span style="font-weight: bold;">Expected Sales you can bring in USD Per Year:</span> '.$expectedsales1.'</p>
					</div>
                    <div class="fullWidthCard" style="background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
						<p class="label">Interested in type of partnership</p>
						<p class="count" style="font-size: 24px;margin-top: 0;color: #28d57a;">'.$partner1.'</p>
					</div>
					
				</div>
		        <p style="width:90%;margin:auto;padding:10px;">
		          If you have any trouble in login into visitdesk, kindly contact us at help@visitdesk.io
		        </p>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;background:#28d57a;"> <a class="navbar-brand dark-logo" href="https://www.visitdesk.io/" style="width: 50%;text-decoration:none;"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_white.resized.png" style="width: 100px;">
		      <p style="font-size:10px;color:#fff;text-decoration:none;padding:0px;margin:0px;">
		      www.visitdesk.io
		      </p></a>
		        <p style="font-size:10px;padding:20px;color:#fff;">
		          Visitdesk is the product of ifelse Technologies. if you have any clarification please feel free to contact us on info@visitdesk.io
		        </p>
		        <p style="padding:0px;color:#fff;">
		          follow us on
		        </p>
		        <p>
		          <a class="navbar-brand dark-logo" href="https://www.facebook.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png">
		      </a>
		          <a class="navbar-brand dark-logo" href="https://twitter.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="http://aux.iconspalace.com/uploads/linkedin-round-icon-256.png">
		      </a>
		        </p>
		      </td>
		    </tr>
		  </table>
		</div>
		</body>
		</html>
		';
					
		//Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8 " . "\r\n";
		 
		// More headers
		$headers .= "Reply-To: $gerPricingContName, $contactEmail \r\n";
		$headers .= "Return-Path: Visitdesk <visitdesk@ifelsetech.com \r\n";
		$headers .= "From: Visitdesk <ifelsetesting@gmail.com \r\n";
		$headers .= "Organization: Visitdesk \r\n";
		$headers .= "X-Sender: Visitdesk <visitdesk@ifelsetech.com  \r\n";
		$headers .= "X-Mailer: PHP \r\n";
		if(isset($_FILES['attachment'])) 
        {       
            $uploadedfile = $_FILES['attachment'];
            $upload_overrides = array( 'test_form' => false );                  
            $movefile = wp_handle_upload( $uploadedfile, $upload_overrides );


            $attachment = $movefile['file'];
        }
		if(wp_mail($to_address,$subject,$message,$headers,$attachment)){
		  echo   json_encode("success"); }
		else {
		   echo  json_encode("error");
	}
        
    }
	else {
	 echo json_encode("no data found");
	}
	wp_die();
}

add_action('wp_ajax_become_partner', 'become_partner_ajax_call');
add_action('wp_ajax_nopriv_become_partner', 'become_partner_ajax_call');








// Get pricing form ajax
function getPriceForm(){
	$getPricngData = $_REQUEST['data'];
	if (isset($getPricngData)) {
		$gerPricingPackageName = $getPricngData['pricing_package_name'];
		$gerPricingCompName = $getPricngData['pricing_company_name'];
		$gerPricingContName = $getPricngData['pricing_contact_name'];
		$gerPricingContactNo = $getPricngData['pricing_contact_no'];
		$gerPricingEmail = $getPricngData['pricing_contact_email'];
		$gerPricingNotes = $getPricngData['pricing_notes'];
		$to_address = "aadil@ifelsetech.com , rahman@ifelsetech.com, sales@visitdesk.io";
		$subject = "Visitdesk Inquiry from ".$gerPricingEmail;
		$message = '<div style="background:#f8f9fa;widht:100%;height:100%;padding:80px 0px;font-family: "Open Sans", sans-serif;color:#444;">
		  <table style="overflow:hidden;border-collapse: collapse;max-width:600px;width:100%;margin:auto;background:#fff;border-radius: 10px;box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);">
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #efefef;"> <a class="navbar-brand dark-logo" href="#home"><img class="my-0 mr-md-auto" src="https://ifelsetechno.com/demo/checkpoint/img/logo/visitdesk_color.png" style="width: 100%;max-width:200px"></a>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;">
		        <h1 style="text-align:center;margin:auto;font-family: "Open Sans", sans-serif;"> new Quotation :) </h1>
		        <p style="width:90%;margin:auto;padding:10px;">
		          Hey admin you got a new Quotation from the website.
		          <br>
		          <br>
		          <br>
		          <br>
		          <strong> User Details</strong>
		          <br>
		          <br> Pckage name: <b>'.$gerPricingPackageName.'</b>
		          <br> Company name: <b>'.$gerPricingCompName.'</b>
		          <br> Contact name: <b>'.$gerPricingContName.'</b>
		          <br> Contact No: <b>'.$gerPricingContactNo.'</b>
		          <br> Email: <b>'.$gerPricingEmail.'</b>
		          <br> Notes: <b>'.$gerPricingNotes.'</b>
		          <br>
		          <br>
		        </p>
		        <p style="width:90%;margin:auto;padding:10px;">
		          If you have any trouble in login into visitdesk, kindly contact us at help@visitdesk.io
		        </p>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;background:#28d57a;"> <a class="navbar-brand dark-logo" href="#home" style="width: 50%;text-decoration:none;"><img class="my-0 mr-md-auto" src="https://visitdesk.io/assets/images/mail/visitdesk_color.png" style="width: 100px;">
		      <p style="font-size:10px;color:#fff;text-decoration:none;padding:0px;margin:0px;">
		      www.visitdesk.io
		      </p></a>
		        <p style="font-size:10px;padding:20px;color:#fff;">
		          Visitdesk is the product of ifelse Technologies. if you have any clarification please feel free to contact us on info@visitdesk.io
		        </p>
		        <p style="padding:0px;color:#fff;">
		          follow us on
		        </p>
		        <p>
		          <a class="navbar-brand dark-logo" href="#home" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png">
		      </a>
		          <a class="navbar-brand dark-logo" href="#home" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="http://icons-for-free.com/free-icons/png/512/294709.png">
		      </a>
		        </p>
		      </td>
		    </tr>
		  </table>
		</div>
		';
					
		//Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8 " . "\r\n";
		 
		// More headers
		$headers .= "Reply-To: Visitdesk <visitdesk@ifelsetech.com> \r\n";
		$headers .= "Return-Path: Visitdesk <visitdesk@ifelsetech.com \r\n";
		$headers .= "From: Visitdesk <visitdesk@ifelsetech.com \r\n";
		$headers .= "Organization: Visitdesk \r\n";
		$headers .= "X-Sender: Visitdesk <visitdesk@ifelsetech.com  \r\n";
		$headers .= "X-Mailer: PHP \r\n";
		if(mail($to_address,$subject,$message,$headers))
		    echo "success";
		else
		    echo "error";
	}
	else {
		echo "no data found";
	}
	wp_die();
}
add_action('wp_ajax_getPriceForm', 'getPriceForm');
add_action('wp_ajax_nopriv_getPriceForm', 'getPriceForm');

// Pricing form ajax
function pricingForm(){
	$getquotesDatas = $_REQUEST['data'];
	if (isset($getquotesDatas)) {
		$countryName = $getquotesDatas['getquotes_countryname'];
		$branches = $getquotesDatas['getquotes_branches'];
		$checkpoints = $getquotesDatas['getquotes_checkpoints'];
		$devices = $getquotesDatas['getquotes_devices'];
		$users = $getquotesDatas['getquotes_users'];
		$visitors = $getquotesDatas['getquotes_visitors'];
		$smsNotification = $getquotesDatas['getquotes_smsnotification'];
		$companyName = $getquotesDatas['getquotes_company_name'];
		$contactName = $getquotesDatas['getquotes_contact_name'];
		$contactEmail = $getquotesDatas['getquotes_contact_email'];
		$countryCode = $getquotesDatas['getquotes_countrycode'];
		$contactNo = $getquotesDatas['getquotes_contact_no'];
		$notes = $getquotesDatas['getquotes_notes'];
		$to_address = "aadil@ifelsetech.com , rahman@ifelsetech.com, sales@visitdesk.io";
		//$to_address = "karthikeyank@ifelsetech.com";
		$subject = "Visitdesk Quotes from ".$contactEmail;
		$message = '<html>
		<head>
		</head>
		<body>
		<div style="background:#f8f9fa;widht:100%;height:100%;padding:80px 0px;font-family: "Open Sans", sans-serif;color:#444;">
		  <table style="overflow:hidden;border-collapse: collapse;max-width:600px;width:100%;margin:auto;background:#fff;border-radius: 10px;box-shadow: 0 0 10px rgba(46, 59, 125, 0.23);">
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #efefef;"> <a class="navbar-brand dark-logo" href="#home"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_color.resized.png" style="width: 100%;max-width:200px"></a>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;">
		        <h1 style="text-align:center;margin:auto;font-family: "Open Sans", sans-serif;"> New Quotation :) </h1>
		        <p style="width:90%;margin:auto;padding:10px;">
		          Hey admin you got a new Quotation from the website.
		        </p>
		        <div class="container">
					<div class="fullWidthCard" style="background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
						<h3 class="counteyName" style="margin: 0;">'.$countryName.'</h3>
					</div>
					<div class="fourcolCardMain" style="display: block;margin: 15px 0px;">
						<div class="fourcolCard" style="display: inline-block;margin-right: 5px;background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
							<p class="label">No of Branches</p>
							<p class="count" style="font-size: 24px;margin-top: 0;color: #28d57a;">'.$branches.'</p>
						</div>
						<div class="fourcolCard" style="display: inline-block;margin-right: 5px;background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
							<p class="label">Number of Checkpoints</p>
							<p class="count" style="font-size: 24px;margin-top: 0;color: #28d57a;">'.$checkpoints.'</p>
						</div>
						<div class="fourcolCard" style="display: inline-block;margin-right: 5px;background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
							<p class="label">Number of Devices</p>
							<p class="count" style="font-size: 24px;margin-top: 0;color: #28d57a;">'.$devices.'</p>
						</div>
						<div class="fourcolCard" style="margin-right: 0;display: inline-block;margin-right: 5px;background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
							<p class="label">Number of Users</p>
							<p class="count" style="font-size: 24px;margin-top: 0;color: #28d57a;">'.$users.'</p>
						</div>
					</div>
					<div class="fullWidthCard" style="background: #8080800d;  border-radius: 8px;padding: 15px;text-align: center;">
						<p class="label">Approx visitors / year</p>
						<p class="count" style="font-size: 24px;margin-top: 0;color: #28d57a;">'.$visitors.'</p>
					</div>
					<div class="businessDetails" style="margin-top: 35px;text-align: left;">
						<h3>Busnines Details</h3>
						<p class="details"><span style="font-weight: bold;">SMS Notification:</span> '.$smsNotification.'</p>
						<p class="details"><span style="font-weight: bold;">Company Name:</span> '.$companyName.'</p>
						<p class="details"><span style="font-weight: bold;">Contact Name:</span> '.$contactName.'</p>
						<p class="details"><span style="font-weight: bold;">Phone Number:</span> '.$countryCode.' '.$contactNo.'</p>
						<p class="details"><span style="font-weight: bold;">E-mail:</span>'.$contactEmail.'</p>
						<p class="details"><span style="font-weight: bold;">Notes:</span> '.$notes.'</p>
					</div>
				</div>
		        <p style="width:90%;margin:auto;padding:10px;">
		          If you have any trouble in login into visitdesk, kindly contact us at help@visitdesk.io
		        </p>
		      </td>
		    </tr>
		    <tr>
		      <td style="text-align:center;padding:20px 0px;border-bottom: 1px dotted #e7faef;background:#28d57a;"> <a class="navbar-brand dark-logo" href="https://www.visitdesk.io/" style="width: 50%;text-decoration:none;"><img class="my-0 mr-md-auto" src="https://www.visitdesk.io/wp-content/uploads/2019/01/visitdesk_white.resized.png" style="width: 100px;">
		      <p style="font-size:10px;color:#fff;text-decoration:none;padding:0px;margin:0px;">
		      www.visitdesk.io
		      </p></a>
		        <p style="font-size:10px;padding:20px;color:#fff;">
		          Visitdesk is the product of ifelse Technologies. if you have any clarification please feel free to contact us on info@visitdesk.io
		        </p>
		        <p style="padding:0px;color:#fff;">
		          follow us on
		        </p>
		        <p>
		          <a class="navbar-brand dark-logo" href="https://www.facebook.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png">
		      </a>
		          <a class="navbar-brand dark-logo" href="https://twitter.com/visitdesk" style="width: 50%;text-decoration:none;">
		      <img style="width:50px;height:50px;" src="http://aux.iconspalace.com/uploads/linkedin-round-icon-256.png">
		      </a>
		        </p>
		      </td>
		    </tr>
		  </table>
		</div>
		</body>
		</html>
		';
					
		//Always set content-type when sending HTML email
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8 " . "\r\n";
		 
		// More headers
		$headers .= "Reply-To: $gerPricingContName, $contactEmail \r\n";
		$headers .= "Return-Path: Visitdesk <visitdesk@ifelsetech.com \r\n";
		$headers .= "From: Visitdesk <ifelsetesting@gmail.com \r\n";
		$headers .= "Organization: Visitdesk \r\n";
		$headers .= "X-Sender: Visitdesk <visitdesk@ifelsetech.com  \r\n";
		$headers .= "X-Mailer: PHP \r\n";
		if(wp_mail($to_address,$subject,$message,$headers))
		    echo "success";
		else
		    echo "error";
	}
	else {
		echo "no data found";
	}
	wp_die();
}
add_action('wp_ajax_pricingForm', 'pricingForm');
add_action('wp_ajax_nopriv_pricingForm', 'pricingForm');


function visitdesk_add_ajax_form_loading_script() {
    if (is_admin() || !wp_script_is('visitdesk-js', 'enqueued')) {
        return;
    }
    $script = <<<JS
        jQuery(document).ready(function($) {
            // --- Helper Functions ---
            function getButtonOriginalText(submitButton) {
                return submitButton.is('input') ? submitButton.val() : submitButton.text();
            }

            function setButtonText(submitButton, text) {
                if (submitButton.is('input')) {
                    submitButton.val(text);
                } else {
                    submitButton.text(text);
                }
            }

            function enableSubmitButton(submitButton) {
                var originalButtonText = submitButton.data('original-text');
                if (typeof originalButtonText !== 'undefined') {
                    setButtonText(submitButton, originalButtonText);
                    submitButton.prop('disabled', false).removeData('original-text');
                }
            }

            function disableSubmitButton(submitButton) {
                if (submitButton.length && !submitButton.is(':disabled')) {
                    var originalButtonText = getButtonOriginalText(submitButton);
                    submitButton.data('original-text', originalButtonText);
                    setButtonText(submitButton, 'Loading...');
                    submitButton.prop('disabled', true);
                }
            }

            // --- Event Handlers ---

            // Handler for standard forms that use the 'submit' event
            $('form').on('submit', function() {
                var submitButton = $(this).find('input[type="submit"], button[type="submit"]');
                disableSubmitButton(submitButton);
            });

            // Handler for forms submitted via JS on a button click (like the contact form)
            $('form .popup-form-submit').on('click', function() {
                var submitButton = $(this);
                disableSubmitButton(submitButton);

                // If client-side validation fails, the AJAX call won't be made.
                // This timeout checks if an AJAX request has started. If not, it re-enables the button.
                setTimeout(function() {
                    if (jQuery.active === 0 && submitButton.is(':disabled')) {
                        enableSubmitButton(submitButton);
                    }
                }, 1000);
            });

            // Global handler to re-enable buttons after ANY AJAX request completes
            $(document).ajaxComplete(function() {
                $('input[type="submit"]:disabled, button[type="submit"]:disabled, .popup-form-submit:disabled').each(function() {
                    enableSubmitButton($(this));
                });
            });
        });
JS;
    wp_add_inline_script('visitdesk-js', $script);
}
add_action('wp_enqueue_scripts', 'visitdesk_add_ajax_form_loading_script', 99);

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';



/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}
