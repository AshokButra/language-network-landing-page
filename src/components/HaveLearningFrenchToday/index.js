import {FaGooglePay} from 'react-icons/fa'
import {SiPaytm} from 'react-icons/si'
import {SiPhonepe} from 'react-icons/si'
import {FaPaypal} from 'react-icons/fa'
import {FaCcApplePay} from 'react-icons/fa'
import {SiFampay} from 'react-icons/si'
import {GiPayMoney} from 'react-icons/gi'
import {SiPicpay} from 'react-icons/si'

import './index.css'

const HaveLearningFrenchToday = () => (
  <div className="have-learning-french-today-container">
    <h1 className="have-fun-learning-french-today">
      Have fun learning French today
    </h1>
    <div className="button-container">
      <button type="button" className="learning-french-button">
        Start Learning French Online
      </button>
    </div>
    <div className="payment-method-container">
      <FaGooglePay className="google-pay-icon" />
      <SiPaytm className="paytm-icon" />
      <SiPhonepe className="phone-pay-icon" />
      <FaPaypal className="pay-pal-icon" />
      <FaCcApplePay className="apple-pay-icon" />
      <SiFampay className="si-fam-pay-icon" />
      <GiPayMoney className="pay-money-icon" />
      <SiPicpay className="pic-pay-icon" />
    </div>
  </div>
)

export default HaveLearningFrenchToday
