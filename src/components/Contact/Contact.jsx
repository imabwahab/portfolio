import './contact.css';

import { useRef } from 'react';
// import emailjs from '@emailjs/browser';

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://x.com/imab_wahab" target='_blank'><FaSquareXTwitter className='link' /></a>
                        <a href="https://facebook.com/imch.wahab" target='_blank'> <FaSquareFacebook className='link' /></a>
                        <a href="https://instagram.com/imab_wahab" target='_blank'>  <FaSquareInstagram className='link' /> </a>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;