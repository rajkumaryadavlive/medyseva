const Contactus=()=>{

     return (<>
       <section>
           <h1 className="text-center">Contact Us</h1>
       <div className="container">
        <div className="row pt-30">
          <div className="col-lg-4">
            <div className="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate bg-white-f1 p-30 mb-30">
              <div className="icon-box-wrapper">
                <div className="icon-wrapper">
                  <a className="icon icon-type-font-icon icon-dark icon-circled"> <i class="fas fa-phone-volume"></i> </a>
                </div>
                <div className="icon-text">
                  <h5 className="icon-box-title mt-0">Phone</h5>
                  <div className="content"><a href="tel:+123.456.7890">+123.456.7890</a></div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate bg-white-f1 p-30 mb-30">
              <div className="icon-box-wrapper">
                <div className="icon-wrapper">
                  <a className="icon icon-type-font-icon icon-dark icon-circled"> <i class="fas fa-envelope-open-text"></i> </a>
                </div>
                <div className="icon-text">
                  <h5 className="icon-box-title mt-0">Email</h5>
                  <div className="content"><a href="mailto:needhelp@yourdomain.com">needhelp@youdomain.com</a></div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate bg-white-f1 p-30 mb-30">
              <div className="icon-box-wrapper">
                <div className="icon-wrapper">
                  <a className="icon icon-type-font-icon icon-dark icon-circled"> 
                  <i class="fas fa-map-marker-alt"></i> </a>
                </div>
                <div className="icon-text">
                  <h5 className="icon-box-title mt-0">Address</h5>
                  <div className="content">www.your-domain.com</div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="icon-box icon-left iconbox-centered-in-responsive iconbox-theme-colored1 animate-icon-on-hover animate-icon-rotate bg-white-f1 p-30 mb-30">
              <div className="icon-box-wrapper">
                <div className="icon-wrapper">
                  <a className="icon icon-type-font-icon icon-dark icon-circled">
                  <i class="fas fa-map-marker-alt"></i> </a>
                </div>
                <div className="icon-text">
                  <h5 className="icon-box-title mt-0">UK Address</h5>
                  <div className="content">66 Broklyn Street USA</div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <h2 className="mt-0 mb-0">Interested in discussing?</h2>
            <p className="font-size-20">Active &amp; Ready to use Contact Form!</p>
            <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post" novalidate="novalidate">
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label>Name <small>*</small></label>
                    <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label>Email <small>*</small></label>
                    <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label>Subject <small>*</small></label>
                    <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label>Phone</label>
                    <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label>Message</label>
                <textarea name="form_message" className="form-control required" rows="7" placeholder="Enter Message"></textarea>
              </div>
              <div className="mb-3">
                <input name="form_botcheck" className="form-control" type="hidden" value=""/>
                <button type="submit" className="btn-contact btn-theme-colored1 text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px text-white" data-loading-text="Please wait...">Send your message</button>
                <button type="reset" className="btn-contact btn-theme-colored3 text-uppercase mt-10 mb-sm-30 border-left-theme-color-2-4px">Reset</button>
              </div>
            </form>
             </div>
        </div>
      </div>
       </section>
      </>)

}
export default Contactus;