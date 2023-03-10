import React from 'react';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div className='main'>
	<header className="top-navbar">         
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					<img height={100} src="images/logo.png" alt="" />
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbars-rs-food">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
						<li className="nav-item"><a className="nav-link" href="menu.html">Menu</a></li>
						<li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Pages</a>
							<div className="dropdown-menu" aria-labelledby="dropdown-a">
								<a className="dropdown-item" href="reservation.html">Reservation</a>
								<a className="dropdown-item" href="stuff.html">Stuff</a>
								<a className="dropdown-item" href="gallery.html">Gallery</a>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">Blog</a>
							<div className="dropdown-menu" aria-labelledby="dropdown-a">
								<a className="dropdown-item" href="blog.html">blog</a>
								<a className="dropdown-item" href="blog-details.html">blog Single</a>
							</div>
						</li>
						<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	</header> 
	<Carousel />
    <div className="about-section-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 text-center">
					<div className="inner-column">
						<h1>Welcome To <span>Live Dinner Restaurant</span></h1>
						<h4>Little Story</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
						<p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
						<a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img src="images/about-img.jpg" alt="" className="img-fluid"/>
				</div>
			</div>
		</div>
	</div>
    <div className="qt-box qt-background">
		<div className="container">
			<div className="row">
				<div className="col-md-8 ml-auto mr-auto text-center">
					<p className="lead ">
						" If you're not the one cooking, stay out of the way and compliment the chef. "
					</p>
					<span className="lead">Michael Strahan</span>
				</div>
			</div>
		</div>
	</div>
    <div className="menu-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Special Menu</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
			
			<div className="row inner-menu-box">
				<div className="col-3">
					<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
						<a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Drinks</a>
						<a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Lunch</a>
						<a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Dinner</a>
					</div>
				</div>
				
				<div className="col-9">
					<div className="tab-content" id="v-pills-tabContent">
						<div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
							<div className="row">
								<div className="col-lg-4 col-md-6 special-grid drinks">
									<div className="gallery-single fix">
										<img src="images/img-01.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Drinks 1</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $7.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid drinks">
									<div className="gallery-single fix">
										<img src="images/img-02.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Drinks 2</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $9.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid drinks">
									<div className="gallery-single fix">
										<img src="images/img-03.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Drinks 3</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $10.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid lunch">
									<div className="gallery-single fix">
										<img src="images/img-04.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Lunch 1</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $15.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid lunch">
									<div className="gallery-single fix">
										<img src="images/img-05.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Lunch 2</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $18.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid lunch">
									<div className="gallery-single fix">
										<img src="images/img-06.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Lunch 3</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $20.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid dinner">
									<div className="gallery-single fix">
										<img src="images/img-07.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Dinner 1</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $25.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid dinner">
									<div className="gallery-single fix">
										<img src="images/img-08.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Dinner 2</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $22.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid dinner">
									<div className="gallery-single fix">
										<img src="images/img-09.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Dinner 3</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $24.79</h5>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
							<div className="row">
								<div className="col-lg-4 col-md-6 special-grid drinks">
									<div className="gallery-single fix">
										<img src="images/img-01.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Drinks 1</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $7.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid drinks">
									<div className="gallery-single fix">
										<img src="images/img-02.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Drinks 2</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $9.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid drinks">
									<div className="gallery-single fix">
										<img src="images/img-03.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Drinks 3</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $10.79</h5>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						<div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
							<div className="row">
								<div className="col-lg-4 col-md-6 special-grid lunch">
									<div className="gallery-single fix">
										<img src="images/img-04.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Lunch 1</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $15.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid lunch">
									<div className="gallery-single fix">
										<img src="images/img-05.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Lunch 2</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $18.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid lunch">
									<div className="gallery-single fix">
										<img src="images/img-06.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Lunch 3</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $20.79</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
							<div className="row">
								<div className="col-lg-4 col-md-6 special-grid dinner">
									<div className="gallery-single fix">
										<img src="images/img-07.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Dinner 1</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $25.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid dinner">
									<div className="gallery-single fix">
										<img src="images/img-08.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Dinner 2</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $22.79</h5>
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6 special-grid dinner">
									<div className="gallery-single fix">
										<img src="images/img-09.jpg" className="img-fluid" alt="Image"/>
										<div className="why-text">
											<h4>Special Dinner 3</h4>
											<p>Sed id magna vitae eros sagittis euismod.</p>
											<h5> $24.79</h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
    <div className="gallery-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Gallery</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
			<div className="tz-gallery">
				<div className="row">
					<div className="col-sm-12 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-01.jpg">
							<img className="img-fluid" src="images/gallery-img-01.jpg" alt="Gallery Images"/>
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-02.jpg">
							<img className="img-fluid" src="images/gallery-img-02.jpg" alt="Gallery Images"/>
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-03.jpg">
							<img className="img-fluid" src="images/gallery-img-03.jpg" alt="Gallery Images"/>
						</a>
					</div>
					<div className="col-sm-12 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-04.jpg">
							<img className="img-fluid" src="images/gallery-img-04.jpg" alt="Gallery Images"/>
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-05.jpg">
							<img className="img-fluid" src="images/gallery-img-05.jpg" alt="Gallery Images"/>
						</a>
					</div> 
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-06.jpg">
							<img className="img-fluid" src="images/gallery-img-06.jpg" alt="Gallery Images"/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    <div className="customer-reviews-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Customer Reviews</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-8 mr-auto ml-auto text-center">
					<div id="reviews" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner mt-4">
							<div className="carousel-item text-center active">
								<div className="img-box p-1 border rounded-circle m-auto">
									<img className="d-block w-100 rounded-circle" src="images/quotations-button.png" alt=""/>
								</div>
								<h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Paul Mitchel</strong></h5>
								<h6 className="text-dark m-0">Web Developer</h6>
								<p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
							</div>
							<div className="carousel-item text-center">
								<div className="img-box p-1 border rounded-circle m-auto">
									<img className="d-block w-100 rounded-circle" src="images/quotations-button.png" alt=""/>
								</div>
								<h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Steve Fonsi</strong></h5>
								<h6 className="text-dark m-0">Web Designer</h6>
								<p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
							</div>
							<div className="carousel-item text-center">
								<div className="img-box p-1 border rounded-circle m-auto">
									<img className="d-block w-100 rounded-circle" src="images/quotations-button.png" alt=""/>
								</div>
								<h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Daniel vebar</strong></h5>
								<h6 className="text-dark m-0">Seo Analyst</h6>
								<p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
							</div>
						</div>
						<a className="carousel-control-prev" href="#reviews" role="button" data-slide="prev">
							<i className="fa fa-angle-left" aria-hidden="true"></i>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#reviews" role="button" data-slide="next">
							<i className="fa fa-angle-right" aria-hidden="true"></i>
							<span className="sr-only">Next</span>
						</a>
                    </div>
				</div>
			</div>
		</div>
	</div>
    <div className="contact-imfo-box">
		<div className="container">
			<div className="row">
				<div className="col-md-4 arrow-right">
					<i className="fa fa-volume-control-phone"></i>
					<div className="overflow-hidden">
						<h4>Phone</h4>
						<p className="lead">
							+01 123-456-4590
						</p>
					</div>
				</div>
				<div className="col-md-4 arrow-right">
					<i className="fa fa-envelope"></i>
					<div className="overflow-hidden">
						<h4>Email</h4>
						<p className="lead">
							yourmail@gmail.com
						</p>
					</div>
				</div>
				<div className="col-md-4">
					<i className="fa fa-map-marker"></i>
					<div className="overflow-hidden">
						<h4>Location</h4>
						<p className="lead">
							800, Lorem Street, US
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    <footer className="footer-area bg-f">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<h3>About Us</h3>
					<p>Integer cursus scelerisque ipsum id efficitur. Donec a dui fringilla, gravida lorem ac, semper magna. Aenean rhoncus ac lectus a interdum. Vivamus semper posuere dui.</p>
				</div>
				<div className="col-lg-3 col-md-6">
					<h3>Subscribe</h3>
					<div className="subscribe_form">
						<form className="subscribe_form">
							<input name="EMAIL" id="subs-email" className="form_input" placeholder="Email Address..." type="email"/>
							<button type="submit" className="submit">SUBSCRIBE</button>
							<div className="clearfix"></div>
						</form>
					</div>
					<ul className="list-inline f-social">
						<li className="list-inline-item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<div className="col-lg-3 col-md-6">
					<h3>Contact information</h3>
					<p className="lead">Ipsum Street, Lorem Tower, MO, Columbia, 508000</p>
					<p className="lead"><a href="#">+01 2000 800 9999</a></p>
					<p><a href="#"> info@admin.com</a></p>
				</div>
				<div className="col-lg-3 col-md-6">
					<h3>Opening hours</h3>
					<p><span className="text-color">Monday: </span>Closed</p>
					<p><span className="text-color">Tue-Wed :</span> 9:Am - 10PM</p>
					<p><span className="text-color">Thu-Fri :</span> 9:Am - 10PM</p>
					<p><span className="text-color">Sat-Sun :</span> 5:PM - 10PM</p>
				</div>
			</div>
		</div>
		
		<div className="copyright">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<p className="company-name">All Rights Reserved. &copy; 2018 <a href="#">Live Dinner Restaurant</a> Design By : 
					<a href="https://html.design/">html design</a></p>
					</div>
				</div>
			</div>
		</div>
		
	</footer>
    <a href="#" id="back-to-top" title="Back to top" ><i className="fa fa-paper-plane-o" aria-hidden="true"></i></a>
     </div>

  );

  
}
