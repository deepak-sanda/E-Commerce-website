import React from 'react'
import "./Footer.css"
import footer_amazon_logo from "./images/amazon_logo.png"

const Footer2 = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer2
