import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import './index.css'

const Footer = () =>(
    <div>
        <div className='contact-container d-flex flex-row justify-content-between'>
            <div>
                <h3>Contact us</h3>
                <hr/>
                <div className='icons'><FiPhone/><span> +91 8035735724</span></div>
                <div className='icons'><CiMail/><span></span> contact@amberstudent.com</div>
                <div className='icons'><FaWhatsapp/><span> WhatsApp</span></div>
                <div className='icons'><IoLocationOutline/><span> 40 E Main St # 1215 Newark 1971...</span></div>
            </div>
                    
            <div style={{width:'40%'}}>
                <p>Follow us on</p>
                <div className="d-flex flex-row justify-content-around align-items-center">
                    <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Linkedin.svg?auto=format&trim=auto' alt='linkedin'/>
                    <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Facebook.svg?auto=format&trim=auto' alt='facebook'/>
                    <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Instagram.svg?auto=format&trim=auto' alt='insta'/>
                    <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Youtube.svg?auto=format&trim=auto' alt='youtube'/>
                    <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/Twitter.svg?auto=format&trim=auto' alt='twitter'/>
                    <img className='social-media-icons' src='https://prod-static-assets.amberstudent.com/images/pinterest.svg?auto=format&trim=auto' alt='pinterest'/>
                </div>
            </div>
        </div>
    </div>
)

export default Footer