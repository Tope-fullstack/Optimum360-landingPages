function openNav() {
    document.getElementById("mySidebar_").style.width = "250px";
    //document.getElementById("main_").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar_").style.width = "0";
    document.getElementById("main_").style.marginLeft= "0";
}

$("head").append(`
    <link rel="stylesheet" href="plugins/o360-Navbar/o360-navbar.css">
`);

$("body").prepend(`
    <nav class="top-navbar">
        <div class="containerN is-navbar">
            <div class="hero-content__logo-wrapper is-top-naav">
                <div class="logo-white-wrapper"><img src="assets/images/logo-trans-cropped-3-128x144.png" loading="lazy" alt="Optimum360 Agency - One-Stop 360 Advertising and Effective Marketing Strategies" class="hero-icon"></div>
            </div>
            <div class="menu-links">
                <a href="#home" aria-current="page" class="nav-item__link is-navbar top-nav w-inline-block">
                    <div class="nav-item-logo-wrapper is-nav upper">
                        <div class="embed-icon w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22.216 21.629">
                                <g id="Group_12165" data-name="Group 12165" transform="translate(0 0)">
                                    <g id="Group_12167" data-name="Group 12167" transform="translate(0 0)">
                                        <path id="Path_25452" data-name="Path 25452" d="M20.144,5.406l-6.9-4.84a4.306,4.306,0,0,0-4.338.04L2.139,5.369A4.286,4.286,0,0,0,0,9.067v8.289a4.277,4.277,0,0,0,4.273,4.273H6.165a1.183,1.183,0,0,0,1.183-1.183v-5.1a1.393,1.393,0,0,1,1.393-1.392h4.734a1.392,1.392,0,0,1,1.392,1.392v5.1a1.184,1.184,0,0,0,1.184,1.183h1.892a4.277,4.277,0,0,0,4.273-4.273V9.067a4.245,4.245,0,0,0-2.072-3.661" transform="translate(0 0)" fill="currentColor"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="nav-link-text">Homepage</div>
                </a>

                <a href="#about-the-book" id="pricing-link" class="nav-item__link is-navbar top-nav w-inline-block">
                    <div class="nav-item-logo-wrapper is-nav upper">
                        <!--<div class="embed-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                height="100%" viewBox="0 0 22.641 22.633">
                                <g id="label" transform="translate(0 -0.064)">
                                    <g id="Group_12168" data-name="Group 12168"
                                        transform="translate(0 0.064)">
                                        <path id="Path_25455" data-name="Path 25455"
                                            d="M21.9.836A2.584,2.584,0,0,0,20.1.064L12.61.093h-.029a4.907,4.907,0,0,0-3.058,1.4L.75,10.209a2.6,2.6,0,0,0,0,3.658l8.087,8.087A2.589,2.589,0,0,0,10.7,22.7a2.335,2.335,0,0,0,1.8-.772l8.688-8.688a4.728,4.728,0,0,0,1.429-3.058v-.029l.029-7.459A2.589,2.589,0,0,0,21.9.836Zm-7.573,9.745a2.229,2.229,0,1,1,2.229-2.229A2.232,2.232,0,0,1,14.325,10.581Z"
                                            transform="translate(0 -0.064)" fill="currentColor"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>-->
                    </div>
                    <div class="nav-link-text">About The Book</div>
                </a>

                <a href="#what-you-will-get" id="pricing-link" class="nav-item__link is-navbar top-nav w-inline-block">
                    <div class="nav-item-logo-wrapper is-nav upper">
                        <!--<div class="embed-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                height="100%" viewBox="0 0 22.641 22.633">
                                <g id="label" transform="translate(0 -0.064)">
                                    <g id="Group_12168" data-name="Group 12168"
                                        transform="translate(0 0.064)">
                                        <path id="Path_25455" data-name="Path 25455"
                                            d="M21.9.836A2.584,2.584,0,0,0,20.1.064L12.61.093h-.029a4.907,4.907,0,0,0-3.058,1.4L.75,10.209a2.6,2.6,0,0,0,0,3.658l8.087,8.087A2.589,2.589,0,0,0,10.7,22.7a2.335,2.335,0,0,0,1.8-.772l8.688-8.688a4.728,4.728,0,0,0,1.429-3.058v-.029l.029-7.459A2.589,2.589,0,0,0,21.9.836Zm-7.573,9.745a2.229,2.229,0,1,1,2.229-2.229A2.232,2.232,0,0,1,14.325,10.581Z"
                                            transform="translate(0 -0.064)" fill="currentColor"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>-->
                    </div>
                    <div class="nav-link-text">What You Will Get</div>
                </a>

                <a href="#how-to-get-the-book" id="pricing-link" class="nav-item__link is-navbar top-nav w-inline-block">
                    <div class="nav-item-logo-wrapper is-nav upper">
                        <!--<div class="embed-icon w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22.641 22.633">
                                <g id="label" transform="translate(0 -0.064)">
                                    <g id="Group_12168" data-name="Group 12168" transform="translate(0 0.064)">
                                        <path id="Path_25455" data-name="Path 25455" d="M21.9.836A2.584,2.584,0,0,0,20.1.064L12.61.093h-.029a4.907,4.907,0,0,0-3.058,1.4L.75,10.209a2.6,2.6,0,0,0,0,3.658l8.087,8.087A2.589,2.589,0,0,0,10.7,22.7a2.335,2.335,0,0,0,1.8-.772l8.688-8.688a4.728,4.728,0,0,0,1.429-3.058v-.029l.029-7.459A2.589,2.589,0,0,0,21.9.836Zm-7.573,9.745a2.229,2.229,0,1,1,2.229-2.229A2.232,2.232,0,0,1,14.325,10.581Z" transform="translate(0 -0.064)" fill="currentColor"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>-->
                    </div>
                    <div class="nav-link-text">How To Get The Book!</div>
                </a>

                <a href="#about-the-company" id="pricing-link" class="nav-item__link is-navbar top-nav w-inline-block" target="_blank">
                    <div class="nav-item-logo-wrapper is-nav upper">
                        <!--<div class="embed-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                height="100%" viewBox="0 0 22.641 22.633">
                                <g id="label" transform="translate(0 -0.064)">
                                    <g id="Group_12168" data-name="Group 12168"
                                        transform="translate(0 0.064)">
                                        <path id="Path_25455" data-name="Path 25455"
                                            d="M21.9.836A2.584,2.584,0,0,0,20.1.064L12.61.093h-.029a4.907,4.907,0,0,0-3.058,1.4L.75,10.209a2.6,2.6,0,0,0,0,3.658l8.087,8.087A2.589,2.589,0,0,0,10.7,22.7a2.335,2.335,0,0,0,1.8-.772l8.688-8.688a4.728,4.728,0,0,0,1.429-3.058v-.029l.029-7.459A2.589,2.589,0,0,0,21.9.836Zm-7.573,9.745a2.229,2.229,0,1,1,2.229-2.229A2.232,2.232,0,0,1,14.325,10.581Z"
                                            transform="translate(0 -0.064)" fill="currentColor"></path>
                                    </g>
                                </g>
                            </svg></div>-->
                    </div>
                    <div class="nav-link-text">About the Company</div>
                </a>

                <a href="#reach-out" id="pricing-link" class="nav-item__link is-navbar top-nav w-inline-block">
                    <div class="nav-item-logo-wrapper is-nav upper">
                        <!--<div class="embed-icon w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                height="100%" viewBox="0 0 22.641 22.633">
                                <g id="label" transform="translate(0 -0.064)">
                                    <g id="Group_12168" data-name="Group 12168"
                                        transform="translate(0 0.064)">
                                        <path id="Path_25455" data-name="Path 25455"
                                            d="M21.9.836A2.584,2.584,0,0,0,20.1.064L12.61.093h-.029a4.907,4.907,0,0,0-3.058,1.4L.75,10.209a2.6,2.6,0,0,0,0,3.658l8.087,8.087A2.589,2.589,0,0,0,10.7,22.7a2.335,2.335,0,0,0,1.8-.772l8.688-8.688a4.728,4.728,0,0,0,1.429-3.058v-.029l.029-7.459A2.589,2.589,0,0,0,21.9.836Zm-7.573,9.745a2.229,2.229,0,1,1,2.229-2.229A2.232,2.232,0,0,1,14.325,10.581Z"
                                            transform="translate(0 -0.064)" fill="currentColor"></path>
                                    </g>
                                </g>
                            </svg></div>-->
                    </div>
                    <div class="nav-link-text">Reach Out</div>
                </a>
            </div>
            <div class="menu-login-and-register">
                <a href="#download-now" class="nav-item__link is-navbar top-nav is-pink w-inline-block" target="_blank">
                    <div class="nav-item-logo-wrapper is-nav upper"></div>
                    <div class="nav-link-text" style="display: flex !important; flex-direction: column;">
                        <span class="logo-white-wrapperr is-red is-top-navbar w-inline-block" style="display: flex;">
                            <div class="login-text is-topnav">Grap a Copy</div>
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mySidebar_" class="sidebar_">
        <a href="javascript:void(0)" class="closebtn_" onclick="closeNav()">×</a>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-the-book">About The Book</a></li>
            <li><a href="#what-you-will-get">What You Will Get</a></li>
            <li><a href="#how-to-get-the-book">How To Get The Book!</a></li>
            <li><a href="#about-the-company">About The Company</a></li>
            <li><a href="#reach-out">Reach Out</a></li>
        </ul>

        <a href="#download-now" class="nav-item__link is-navbar top-nav is-pink w-inline-block" target="_blank" style="margin-top: 3rem; color: #fff; line-height: 1.8;">
            <div class="nav-item-logo-wrapper is-nav upper"></div>
            <div class="nav-link-text">
                <span class="logo-white-wrapperr is-red is-top-navbar w-inline-block" style="display: flex;">
                    <div class="login-text is-topnav">Download The E-Book </div>
                </span>
            </div>
        </a>
    </div>
    <!-- Mobile Menu End -->

    <div data-w-id="2cb24bce-31b1-45f8-8add-6149932ce2c3" class="mobile-nav" onclick="openNav()">
        <div class="nav-inside">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
        </div>
    </div>
`);

$("body").append(`
    <footer class="site-footer_">
        <div class="container_">
            <div class="footer-content_">
                <div class="footer-column_">
                    <div class="footer-brand">
                        <img src="assets/images/logo-trans-cropped-3-128x144.png" style="width:50px; height:auto;" alt="Optimum360 Agency - Pioneers of 360 Advertising and Effective Marketing Strategies">
                        <h3 style="text-align: left;">Optimum360 Agency</h3>
                    </div><br><br>
                    <p class="brand-description">At Optimum360 Agency, we are the pioneers of 360 Advertising, delivering cutting-edge solutions that redefine the advertising landscape.</p><br><br>

                    <div class="footer-socials">
                        <span style="font-size: 11px; font-weight: 700;">Follow Us</span><br>
                        <a href="https://faceook.com/optimum360.agency" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(250, 96, 24, 1);"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg>
                        </a>

                        <a href="https://instagram.com/optimum360.agency" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(250, 96, 24, 1);"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
                        </a>

                        <a href="https://linkedin.com/company/optimum360" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(250, 96, 24, 1);"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                        </a>
                    </div>
                </div>

                <div class="footer-column_">
                    <h3>Our Packages</h3><br>
                    <ul>
                        <li><a href="#">Digital Presence Booster&nbsp;<!--<sup class="price-tag">₦300K</sup>--></a></li>
                        <li><a href="#">Outdoor Visibility&nbsp;<!--<sup class="price-tag">₦200K</sup>--></a></li>
                        <li><a href="#">Comprehensive Marketing Suite&nbsp;<!--<sup class="price-tag">₦450K</sup>--></a></li>
                        <li><a href="#">Online Identity Starter Pack&nbsp;<!--<sup class="price-tag">₦150K</sup>--></a></li>
                        <li><a href="#">Web-to-App Conversion Bundle&nbsp;<!--<sup class="price-tag">₦300K</sup>--></a></li>
                        <li><a href="#">All-In-One Online Presence Package&nbsp;<!--<sup class="price-tag">₦200K</sup>--></a></li>
                        <li><a href="#">Content and Social Media Boost&nbsp;<!--<sup class="price-tag">₦170K</sup>--></a></li>
                        <li><a href="#">Mobile App Essentials&nbsp;<!--<sup class="price-tag">₦1.8M</sup>--></a></li>
                        <li><a href="#">Comprehensive Enterprise Suite&nbsp;<!--<sup class="price-tag">₦5.5M</sup>--></a></li>
                        <li><a href="#">Online Domination Package&nbsp;<!--<sup class="price-tag">₦300K</sup>--></a></li>
                        <li><a href="#">Outdoors Starter Visibility Packages&nbsp;<!--<sup class="price-tag">₦500K</sup>--></a></li>
                        <li><a href="#">Outdoors Dynamic Impact&nbsp;<!--<sup class="price-tag">₦2.3M</sup>--></a></li>
                        <li><a href="#">Outdoors Brand Domination Package&nbsp;<!--<sup class="price-tag">₦3M</sup>--></a></li>
                    </ul>
                </div>

                <div class="footer-column_">
                    <h3>Featured Services</h3><br>
                    <ul>
                        <li><a href="#">Outdoor Advertising</a></li>
                        <li><a href="#">Company Branding</a></li>
                        <li><a href="#">Company Website Design</a></li>
                        <li><a href="#">Landing Page Website Design</a></li>
                        <li><a href="#">NEWS, Blog and Editorial Website Design</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Hybrid Mobile Applications Development (Android &amp; iOS)</a></li>
                        <li><a href="#">Native Mobile Applications Development</a></li>
                        <li><a href="#">Convert Website to App</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Digital Marketing Strategy</a></li>
                        <li><a href="#">Content Development</a></li>
                        <li><a href="#">ERP Solution</a></li>
                    </ul>
                </div>

                <div class="footer-column_">
                    <h3>Main Website</h3><br>
                    <ul>
                        <li><a href="https://optimum360agency.com#home">Home</a></li>
                        <li><a href="https://optimum360agency.com#our-services">Our Services</a></li>
                        <li><a href="https://optimum360agency.com#how-it-works">How It Works</a></li>
                        <li><a href="https://optimum360agency.com#our-team">The Team</a></li>
                        <li><a href="https://optimum360agency.com#pricing">Pricing &amp; Packages</a></li>
                        <li><a href="https://optimum360agency.com#blog">Blog &amp; Insights</a></li>
                        <li><a href="https://optimum360agency.com#use-cases">Use Cases</a></li>
                        <li><a href="https://optimum360agency.com#contact-us">Contact Us</a></li>
                    </ul>
                </div>

                <!--<div class="footer-column_">
                    <h3>Contact Us</h3><br/>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>-->
            </div>
        </div>
    </footer>
`);