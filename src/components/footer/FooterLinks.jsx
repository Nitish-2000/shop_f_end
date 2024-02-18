/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './FooterLinks.scss'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Elogo from '../../assets/E-logo.png'

function FooterLinks() {
  
  return <>
    <section className='contact-section'>
      <div className='container contact'>
        <div className='contact-icon'>
        <a href='https://about.meta.com/technologies/facebook-app/' target='blank'><FaFacebookF className='i'/></a>
        <a href='https://twitter.com/settings/account?lang=en' target='blank'><FaTwitter  className='i'/></a>
        <a href = 'https://www.instagram.com/' target = "blank"><FaInstagram  className='i'/></a>
        <a href = "https://www.youtube.com/" target = 'blank'></a><FaYoutube   className='i'/>
</div>
<h2>Let's Connect</h2>
<a href="https://ips.gov.in/" className='btn btn-dark' target='blank'>Make an Enquiry</a>
      </div>
    </section>
    <section className='footer-section'>
      <div className='container footer'>
        <div className='footer-logo'>
          <img src={Elogo} alt="logo" />
        </div>
        <div className='footer-menu'>
          <p className='link-heading'>
            Features
          </p>
          <ul className='nav-ul footer-links'>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Link Shortening</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Branding Links</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Analyticals</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Blogs</a>
            </li>
          </ul>
        </div>
        <div className='footer-menu'>
          <p className='link-heading'>
            Resources
          </p>
          <ul className='nav-ul footer-links'>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Tools</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Websites</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Products</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Services</a>
            </li>
          </ul>
        </div>
        <div className='footer-menu'>
          <p className='link-heading'>
            Company Partners
          </p>
          <ul className='nav-ul footer-links'>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Testimonials</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Oru Mission</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Our Vision</a>
            </li>
            <li>
              <a href="https://web-blogging.netlify.app/" target='blank'>Direct existing partners</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
}

export default FooterLinks