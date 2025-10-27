
<?php 
/* 
    Template Name: Contact page
*/
get_header();
?>
<style>

.btn-primary {
  color: #fff;
  background-color: #28d57a;
  border-color: #28d57a;
  
}
.btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #28d57a;
  border-color: #28d57a;
}

</style>
<section id="single-blog-title" class="single-blog-title-margin">
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<h1 class="vd-post-title"><?php the_title(); ?></h1>			
			</div>
		</div>
	</div>
</section>
<!-- page title -->

<section class="contact-page">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form action="#" method="" enctype="" id="checkPopupForm">
                    <div>
                        <h4 style="text-align: center;">Let's Connect!</h4>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="check_name" placeholder="Name" id="contact-name">
                        <p style="color: #f00; font-size: 12px; padding-left: 15px; margin-top: 5px;" id="errorName">
                        </p>
                    </div>
                    <div class="row">
                        <div class="col-md-6 inputAdjust" style="padding-right: 5px;">
                            <div class="form-group">
                                <input type="email" class="form-control" name="check_email" placeholder="Email"
                                    id="contact-email">
                                <p style="color: #f00; font-size: 12px;padding-left: 15px; margin-top: 5px;"
                                    id="errorEmail"></p>
                            </div>
                        </div>
                        <div class="col-md-6 inputAdjust" style="padding-left: 5px;">
                            <div class="form-group">
                                <input type="tel" class="form-control" name="check_phone_number"
                                    placeholder="Phone Number" onkeypress="return isNumber(event)" id="contact-number">
                            </div>
                        </div>
                    </div>
                    <div class="form-group"><textarea class="form-control" name="message" rows="5" cols="30"
                            placeholder="Message" id="contact-message"></textarea></div>
                    <div class="form-group">
                        <div class="g-recaptcha" data-sitekey="6Lf38qAUAAAAAEWAYcTiW483EeTrpoXT2dl9DB2Z">
                            <div style="width: 304px; height: 78px;">
                                <div><iframe title="reCAPTCHA"
                                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lf38qAUAAAAAEWAYcTiW483EeTrpoXT2dl9DB2Z&amp;co=aHR0cHM6Ly93d3cudmlzaXRkZXNrLmlvOjQ0Mw..&amp;hl=en&amp;v=PRMRaAwB3KlylGQR57Dyk-pF&amp;size=normal&amp;cb=z3e8qz47lew4"
                                        role="presentation" name="a-65ki0ju0tmb2" scrolling="no"
                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                        width="304" height="78" frameborder="0"></iframe></div><textarea
                                    id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response"
                                    style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                            </div><iframe style="display: none;"></iframe>
                        </div>
                        <p style="color: #f00; font-size: 12px;padding-left: 15px; margin-top: 5px;"
                            class="errorRecapcha"></p>
                    </div>
                    <div class="form-group" style="text-align: center;">
                        <button type="button" class="form-control btn btn-primary popup-form-submit" value="Submit"
                            id="submit-contact-form">Submit</button>
                    </div>
                </form>
            </div>
            <div class="col-md-6">
                <div class="c-info">
                    <h6>Contact:</h6>
                    <p><strong>India:</strong> +91 98848 99868</p>
                    <p><strong>US:</strong> +1 650 488 7744</p>
                </div>
                <div class="c-info">
                    <h6>For More Information:</h6>
                    <p><strong>Email:</strong> hello@visitdesk.io</p>
                    
                </div>
                
                <div class="c-info">
                    <h6>Registered Office:</h6>
                    <p><strong>IFELSE TECHSMART SOLUTIONS PVT LTD.</strong> <br/> 16/4, Salai Street, Choolai, Chennai, TN, India 600112</p>
                    
                </div>
            </div>
        </div>
    </div>
</section>

<?php 
    get_footer();
?>