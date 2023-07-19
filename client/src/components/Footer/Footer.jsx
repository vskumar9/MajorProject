import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../assets/fb.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import insta from '../../assets/instagram.svg'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb-footer-links'>
                <div className='sb_footer-links_div'>
                    <h4>About us</h4>
                    <Link className='link' to='/'>Company</Link>
                    <Link className='link' to='/'>Our Team</Link>
                    <Link className='link' to='/'>Careers</Link>
                    <Link className='link' to='/'>Helping</Link>
                    <Link className='link' to='/'>Become a teacher</Link>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Terms</h4>
                    <Link className='link'  to='/'>Terms of use</Link>
                    <Link className='link' to='/'>Privacy Policy</Link>
                    <Link className='link' to='/'>Cookies Policy</Link>
                    <Link className='link' to='/'>Refund Policy</Link>
                    <Link className='link' to='/'>FQA</Link>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Learning Tutorials</h4>
                    <Link className='link' to='/Python'>Learn Python</Link>
                    <Link className='link' to='/java'>Learn Java</Link>
                    <Link className='link' to='/html'>Learn HTML</Link>
                    <Link className='link' to='/C++'>Learn C++</Link>
                    <Link className='link' to='/CSS'>Learn CSS</Link>
                    <Link className='link' to='/DataScience'>Learn Data Structures</Link>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Contact</h4>
                    <Link className='link' to='/'>Address: 5/1461, Sri Ram Nagar,
                    Proddatur, Kadapa(Dist), A.P. <br />
                    constact no: 9701041108 <br />
                    Gmail: vaddisanjeevkumar9676@gmail.com</Link>
                </div>
                <div className='sb_footer-links_div'>
                    <h4>Social media links:</h4>
                    <div className='socilmedia'>
                    <Link className='link' to='https://www.facebook.com/'><p><img src={fb} alt="" /></p></Link>
                    <Link className='link' to='https://www.twitter.com'><p><img src={twitter} alt="" /></p></Link>
                    <Link className='link' to='https://www.linkedin.com/feed/'><p><img src={linkedin} alt="" /></p></Link>
                    <Link className='link' to='https://www.instagram.com/'><p><img src={insta} alt="" /></p></Link>
                    </div>
                </div>
            </div>

            <hr />

            <div className='sb_footer-below'>
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} StudentDiscussion. All right reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <Link className='link' to='/privcy'>Term & Conditions Privacy Security Cookies Declaration</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
