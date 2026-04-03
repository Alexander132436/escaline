
import phone from '../../../images/pictures/phone.svg'
import email from '../../../images/pictures/email.svg'
import './Contact.css'

export default function Contact()
{
    return(
        <div className="contact-container">
            <a href="tel:+7(499)682-01-68">
                <img src={phone} alt='phone'/>+7(499)682-01-68
            </a>

            <a href="mailto:escaline1@gmail.com">
                <img src={email} alt='email'/>escaline1@gmail.com
            </a>
        </div>
    )
}