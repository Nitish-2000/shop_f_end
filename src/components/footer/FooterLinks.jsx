/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './FooterLinks.scss'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


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
          <img src="" alt="logo" />
        </div>
        <div className='footer-menu'>
          <p className='link-heading'>
            Features
          </p>
          <ul className='nav-ul footer-links'>
            <li>
              <a href="">Link Shortening</a>
            </li>
            <li>
              <a href="">Branding Links</a>
            </li>
            <li>
              <a href="">Analyticals</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>
        <div className='footer-menu'>
          <p className='link-heading'>
            Resources
          </p>
          <ul className='nav-ul footer-links'>
            <li>
              <a href="">Link Shortening</a>
            </li>
            <li>
              <a href="">Branding Links</a>
            </li>
            <li>
              <a href="">Analyticals</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>
        <div className='footer-menu'>
          <p className='link-heading'>
            Company Partners
          </p>
          <ul className='nav-ul footer-links'>
            <li>
              <a href="">Link Shortening</a>
            </li>
            <li>
              <a href="">Branding Links</a>
            </li>
            <li>
              <a href="">Analyticals</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
}

export default FooterLinks