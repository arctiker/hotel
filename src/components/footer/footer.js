import React from 'react'
import './footer.styles.scss';
import { ReactComponent as  Mail} from '../../assets/mail.svg'
import { ReactComponent as  Map} from '../../assets/map.svg'
import { ReactComponent as  Whatsapp} from '../../assets/whatsapp.svg'
import { ReactComponent as  Home} from '../../assets/home.svg'
import { ReactComponent as  Phone} from '../../assets/phone.svg'




function Footer() {
    return (
        <div className='footer-container'>
            <div className='contact-us'>
                <h1>CONTACT US</h1>
                <span><Phone /><span className='contactus-whitespace'></span>354 775 6480</span>
                <p><Mail /><span className='contactus-whitespace'></span>info@bluehouse.is</p>
                <p><Map /><span className='contactus-whitespace'></span>170 SeltJarnarnes, iceland</p>
                <p><Home /><span className='contactus-whitespace'></span>Grotta Northern Lights Apartment</p>
                <p><Whatsapp /><span className='contactus-whitespace'></span>Whats app</p>
            </div>
            <div className='our-newsletter'>
                <h1>OUR NEWSLETTER</h1>
                <p>Sign up for our newsletter!</p>
                <input className='footer-input' placeholder='Your full name'></input>
                <span className='footer-whitespace'></span>
                <input className='footer-input' placeholder='Your email adress'></input>
                <span className='footer-whitespace'></span>
                <button className='footer-btn'>Sign up</button>
            </div>
            <div className='about-us'>
                <h1>ABOUT US</h1>
                <p>House Rules</p>
                <p>Blue House Blog</p>
                <p>Northern Lights</p>
                <p>Airport Shuttle</p>
                <p>Feedback</p>
                <p>Imprint & Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer;
