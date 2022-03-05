import React from 'react'
import './Footer.css'
import { BsChevronDoubleRight } from 'react-icons/bs'
import {AiFillPhone, AiFillMail,AiFillFacebook,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {FaMobileAlt,FaTwitter} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {Link} from 'react-router-dom'


const Footer = () => {
    return(
        <>
        <div className='footer'>
            <div className='footer__intro f__item'>
                <Link to='/' className='footer__link'>
                <h1>
                E-MUKHBIR
                </h1>
                </Link>
                
                E-MUKHBIR is a crime reporting website and app. It provide online crime reporting features to users. With eveidence attachement and forensic of the evidence. It also provide complains services againt police stations and police officers.   
            </div>
            <div className='footer__services f__item'>
                <div >
                <h3>
                    Services
                </h3>
                </div>
                <div className='services__item'>
                    <BsChevronDoubleRight className='services__icon'/>
                    Crime Reporting
                </div>
                <div className='services__item'>
                    <BsChevronDoubleRight className='services__icon'/>
                    E-FIR
                </div>
                <div className='services__item'>
                  <BsChevronDoubleRight className='services__icon'/>
                  Statistics
                </div>
                <div className='services__item'>
                  <BsChevronDoubleRight className='services__icon'/>
                  Wanted Criminals
                </div>
                <div className='services__item'>
                  <BsChevronDoubleRight className='services__icon'/>
                  Missing Persons
                </div>
                <div className='services__item'>
                  <BsChevronDoubleRight className='services__icon'/>
                  Missing Vehicles
                </div>
            </div>
            <div className='footer__contact f__item'>
                <div >
                <h3>
                    Contact Us
                </h3>
                </div>
                <div className='contact__item'>
                    <AiFillPhone className='contact__icon'/>
                    03487171551
                </div>
                <div className='contact__item'>
                    <FaMobileAlt className='contact__icon'/>
                    03459147437
                </div>
                <div className='contact__item'>
                    < AiFillMail className='contact__icon'/>
                     mzamanqadir@gmail.com
                </div>
                <div className='contact__item'>
                    <GoLocation className='contact__icon'/>
                    Hostel City Islamabad, Pakistan
                </div>
            </div>
            <div className='footer__social f__item'>
                <h3>
                    Follow Us
                </h3>
                <div>
                    Link to our social <br /> media accounts
                </div>
                <div className='social__links'>
                    <a href="https://web.facebook.com/usmany26/" target="_blank" >
                    <AiFillFacebook className='social__fb'/>
                    </a>
                    <a href="https://www.instagram.com/usmany26/" target="_blank" >
                    <AiFillInstagram className='social__in'/>
                    </a>
                    <a href="https://twitter.com/usmany26" target="_blank" >
                    <FaTwitter className='social__tw'/>
                    </a>
                    <a href="https://www.linkedin.com/in/usman-yousaf-88449a204/" target="_blank" >
                    <AiFillLinkedin className='social__li'/>
                    </a>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Footer;
