import React from 'react'
import "./Footer.css"
import footer_amazon_logo from "./images/amazon_logo.png"

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer_container'>
                    <div className='footer_section'>
                        <strong className='footer_section_heading'>Get to Know Us</strong>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Press Releases</p>
                        <p>Amazon Science</p>
                    </div>
                    <div className='footer_section'>
                        <strong className='footer_section_heading'>Connect with Us</strong>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div><div className='footer_section'>
                        <strong className='footer_section_heading'>Make Money with Us</strong>
                        <p>Sell on Amazon</p>
                        <p>Sell under Amazon Accelerator</p>
                        <p>Protect and Build Your Brand</p>
                        <p>Amazon Global Selling</p>
                        <p>Become an Affiliate</p>
                        <p>Fulfilment by Amazon</p>
                        <p>Advertise Your Products</p>
                        <p>Amazon Pay on Merchants</p>
                    </div><div className='footer_section'>
                        <strong className='footer_section_heading'>Let Us Help You</strong>
                        <p>COVID-19 and Amazon</p>
                        <p>Your Account</p>
                        <p>Returns Centre</p>
                        <p>Recalls and Product Safety Alerts</p>
                        <p>100% Purchase Protection</p>
                        <p>Amazon App Download</p>
                        <p>Help</p>
                    </div>
                </div>
            </footer>

            <div className='footer_two_container'>
                <div className='footer_amazon_logo_container'>
                    <img src={footer_amazon_logo} className="footer_amazon_logo" alt='pic' />
                </div>
                <div className='footer_two_section'>
                    <p>Conditions of Use & Sale</p>
                    <p>Privacy Notice</p>
                    <p>Interest-Based Ads</p>
                </div>
                <div className='footer_two_section'>
                    <span>© 1996-2024, Amazon.com, Inc. or its affiliates</span>
                </div>


            </div>
        </>
    )
}

export default Footer



