import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'

import './index.css'

const ContactComponent = () => (
  <div className="contact-component-container">
    <img
      src="https://res.cloudinary.com/dmw995kmc/image/upload/v1680074132/Tln_logo_u45bmj.svg"
      className="language-logo"
      alt="language"
    />
    <p className="support-description">
      For any support, please mail to info@thelanguagenetwork.co. Our support{' '}
      <br />
      team will get back to you within 24 hours.
    </p>
    <div className="support-container">
      <p className="copyright-sentence">
        Copyright @2022 The language Network - All Rights Reserved
      </p>
      <div className="support-middle-container">
        <p className="terms-conditions">Terms and Conditions</p>
        <p className="privacy-policy">Privacy Policy</p>
        <p className="start-up">Start Up</p>
      </div>
      <div className="icons-container">
        <BsFacebook className="facebook-icon" />
        <AiOutlineInstagram className="instagram-icon" />
        <AiFillLinkedin className="linkedin-icon" />
        <BsPinterest className="pinterest-icon" />
        <AiFillYoutube className="youtube-icon" />
      </div>
    </div>
  </div>
)

export default ContactComponent
