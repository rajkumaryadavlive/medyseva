import ceo from '../../assets/images/ceo2.jpg';
import puzzle from '../../assets/images/puzzle.png'
import signature from '../../assets/images/signature.png'
import banner1 from '../../assets/images/banners/banner1.jpg'
import member1 from '../../assets/images/team/member-1.jpg'
import member2 from '../../assets/images/team/member-2.jpg'

const Aboutus=()=>{
    return(<>
            <section>
            <div className="container about-primary-section">
                <div className="row">
                    <div className="col-lg-6 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 order-lg-1 order-2">                        
                        <div className="banner-content">
                            <h3 className="banner-title">A platform that truly transforms healthcare in United States.</h3>
                            <p className="text-justify">
                                No matter where you are or how busy your life gets, you can 
                                talk to one of our many friendly and knowledgable doctors
                                online at a time that works with your schedule.
                            </p>
                            <p className="text-justify">
                                Day dry face darkness were divide whose replenish won't the and 
                                shall man deep evening days open moving evening have man great
                                gathering fruit tree grass gathering us third grass made yielding
                                saying earth to creepeth creepth she'd air female appear was 
                                brought signs likeness thing.
                            </p>
                            <p className="text-justify">
                                Day dry face darkness were divide whose replenish won't the and 
                                shall man deep evening days open moving evening have man great
                                gathering fruit tree grass gathering us third grass made yielding
                                saying earth to creepeth creepth she'd air female appear was 
                                brought signs likeness thing.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 order-lg-2 order-1 d-lg-inline-flex justify-content-lg-end">
                        <figure>
                            <img src={ceo} className="img-aside rounded-img" alt="Banner-aside" width="470" height="447"/>
                            <img src={puzzle} className="puzzle" alt="Puzzle" width="160" height="217"/>
                        </figure>
                    </div>
                    <div className="col-lg-12 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1 order-3">
                        <p className="text-justify">
                            No matter where you are or how busy your life gets, you can 
                            talk to one of our many friendly and knowledgable doctors
                            online at a time that works with your schedule.
                            Day dry face darkness were divide whose replenish won't the and 
                            shall man deep evening days open moving evening have man great
                            gathering fruit tree grass gathering us third grass made yielding
                            saying earth to creepeth creepth she'd air female appear was 
                            brought signs likeness thing.
                        </p>
                        <h2 className="sign">
                            <img src={signature}/></h2>
                        <h5 className="mb-0">Michael Adams</h5>
                        <span>Chief Executive  Officer</span>
                    </div>
                </div>
            </div>




            </section>
         

            <div className="bg-section bg-section-4 type-section type-section-2">
				<div className="container-wrapper">
					<div className="container">
						<div className="banner-content">
							<div className="row">
								<div className="col-lg-12 offset-lg-0 col-md-8 col-sm-8 offset-sm-2 col-10 offset-1">
									<div className="banner-content-wrapper">
										<h2 className="banner-title">
											The mission of quality &amp; our core values.
										</h2>
										<p className="banner-info">
											Our mission it to improve the world’s health through compassionate and afforable care through innovation.
										</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 offset-lg-0 col-md-8 col-sm-8 offset-sm-2 col-10 offset-1">
									<div className="icon-box icon-box-left">
										<figure>
											<i className="fal fa-wheelchair"></i>
										</figure>
										<div className="icon-box-content">
											<h4 className="box-title">Put the patient first</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-4 offset-lg-0 col-md-8 col-sm-8 offset-sm-2 col-10 offset-1">
									<div className="icon-box icon-box-left">
										<figure>
											<i className="fal fa-user-nurse"></i>
										</figure>
										<div className="icon-box-content">
											<h4 className="box-title">Take personal ownership</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-4 offset-lg-0 col-md-8 col-sm-8 offset-sm-2 col-10 offset-1">
									<div className="icon-box icon-box-left">
										<figure>
											<i className="fal fa-stethoscope"></i>
										</figure>
										<div className="icon-box-content">
											<h4 className="box-title">Celebrate the art of medicine</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-4 offset-lg-0 col-md-8 col-sm-8 offset-sm-2 col-10 offset-1">
									<div className="icon-box icon-box-left">
										<figure>
											<i className="fal fa-syringe"></i>
										</figure>
										<div className="icon-box-content">
											<h4 className="box-title">Be fast, but don't hurry</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-4 offset-lg-0 col-md-8 col-sm-8 offset-sm-2 col-10 offset-1">
									<div className="icon-box icon-box-left">
										<figure>
											<i className="fal fa-heart-circle"></i>
										</figure>
										<div className="icon-box-content">
											<h4 className="box-title">Always work with integrity</h4>
										</div>
									</div>
								</div>       
								<div className="col-lg-4 offset-lg-0 col-md-8 col-sm-8 offset-sm-2 col-10 offset-1">
									<div className="icon-box icon-box-left">
										<figure>
											<i className="fal fa-microscope"></i>
										</figure>
										<div className="icon-box-content">
											<h4 className="box-title">Be inquisitive and discover</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12 offset-lg-0 col-md-8 col-sm-8 offset-sm-2 col-10 offset-1">
									<div className="banner-actions">
										<a href="appointment-step1.html" className="ap-btn btn-primary-color">
											<span>Book an Appointment</span>
										</a>
										<a href="how-it-works.html" className="ap-btn">
									<span> More</span>
								</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="foreground-img">
					<img src={banner1} alt="image"/>					
				</div>
			</div>



            <div className="container team-section">
                <h2 className="ls-n-20 text-center mb-0">Meet our talented<br />team members.</h2>
                <div className="row">
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1">
                        <div className="image-box doctor-card team-card mt-3">
                            <figure>
                                <img src={member1} className="w-100" alt="Member" width="370" height="407"/>
                            </figure>
                            <div className="box-content text-center">
                                <h4 className="box-title">Vishesh Kasliwal</h4>
                                <p className="doctor-cat">Co-Founder, CEO</p>
                                <ul className="social-links d-flex justify-content-center mb-0">
                                    <li><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1">
                        <div className="image-box doctor-card team-card mt-3">
                            <figure>
                                <img src={member1} className="w-100" alt="Member" width="370" height="407"/>
                            </figure>
                            <div className="box-content text-center">
                                <h4 className="box-title">Mehul Jain</h4>
                                <p className="doctor-cat">Co-Founder, CTO</p>
                                <ul className="social-links d-flex justify-content-center mb-0">
                                    <li><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-0 col-sm-8 offset-sm-2 col-10 offset-1">
                        <div className="image-box doctor-card team-card mt-3">
                            <figure>
                                <img src={member2} className="w-100" alt="Member" width="370" height="407"/>
                            </figure>
                            <div className="box-content text-center">
                                <h4 className="box-title">Shruti Gupta</h4>
                                <p className="doctor-cat">Co-Founder</p>
                                <ul className="social-links d-flex justify-content-center mb-0">
                                    <li><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="#" className="social-link"><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                   </div>
            </div>

            </>)
}

export default Aboutus;