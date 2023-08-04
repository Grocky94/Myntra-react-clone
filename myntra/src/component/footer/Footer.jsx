import React from 'react'
import "./../footer/Footer.css";
const Footer = () => {
    return (

        <div id="footer-parent-div">
            <div id="inner-align-div">
                <div id="inside-of-inner-align-div">
                    <div id="Online-Useful">
                        <div id="shopping">
                            <h4 className="anchor" >ONLINE SHOPING</h4>
                            <p className="anchor-grey">Men</p>
                            <p className="anchor-grey">Women</p>
                            <p className="anchor-grey">Kids</p>
                            <p className="anchor-grey">Home & Living</p>
                            <p className="anchor-grey">Beauty</p>
                            <p className="anchor-grey">Gift Card</p>
                            <p className="anchor-grey">Myntra Insider</p>
                        </div>
                        <div id="link">
                            <h4 className="anchor" >USEFUL LINKS</h4>
                            <p className="anchor-grey">Blog</p>
                            <p className="anchor-grey">Careers</p>
                            <p className="anchor-grey">Site Map</p>
                            <p className="anchor-grey">Corporate Information</p>
                            <p className="anchor-grey">Whitehat</p>
                        </div>
                    </div>
                    <div id="cus-pro">
                        <h4 className="anchor">CUSTOMER POLICIES</h4>
                        <p className="anchor-grey">Contact Us</p>
                        <p className="anchor-grey">FAQ</p>
                        <p className="anchor-grey">T&C</p>
                        <p className="anchor-grey">Terms of Use</p>
                        <p className="anchor-grey">Shipping</p>
                        <p className="anchor-grey">Cancellation</p>
                        <p className="anchor-grey">Returns</p>
                        <p className="anchor-grey">Privacy Policy</p>
                        <p className="anchor-grey">Grievance Officer</p>

                    </div>
                    <div id="exp-mob">
                        <h4 className="anchor">EXPERIENCE MYNTRA APP ON MOBILE</h4>
                        <div id="play-image-div">
                            <img className="play-img"
                                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" />
                            <img className="apple-app-img"
                                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" />
                        </div>
                        <h4 className="anchor">KEEP IN TOUCH</h4>
                        <div>
                            <a><i className="fa-brands fa-square-facebook fa-xl"></i></a>
                            <a><i className="fa-brands fa-twitter fa-xl"></i></a>
                            <a><i className="fa-brands fa-youtube fa-xl"></i></a>
                            <a><i className="fa-brands fa-instagram fa-xl"></i></a>
                        </div>
                    </div>
                    <div id="accredation">
                        <div id="original">
                            <img className="accreddation-pic"
                                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" />
                            <div>
                                <p className="accreddation-text"><strong>100% ORIGINAL</strong> guarantee for<br />all products
                                    at myntra.com</p>
                            </div>
                        </div>
                        <div id="original">
                            <img className="accreddation-pic"
                                src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" />
                            <div>
                                <p className="accreddation-text"><strong>Return within 30days</strong> of<br /> receiving your
                                    order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
