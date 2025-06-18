import './contact.css';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_se4w84f', 'template_r4elsgp', form.current, 'sFmurYra7IrSz6epr')
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
					<input type="text" className="name" placeholder='Your name' name='name' />
					<input type="text" className="email" placeholder='Your Email' name='eemail' />
					<textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
					<button type="submit" value="Send" className='submitBtn'>Submit</button>


					<div className="links">
						<a href="https://x.com/imab_wahab" target='_blank'><FaXTwitter className='link twitter' /></a>

						<a href="https://facebook.com/imch.wahab" target='_blank'> <FaFacebookF className='link facebook' /></a>

						<a href="https://instagram.com/imab_wahab" target='_blank'>
							<IoLogoInstagram className='link instagram' /> </a>

						<a href="https://www.linkedin.com/in/abdul-wahab-705a5330b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
						" target='_blank'>  <TiSocialLinkedin className='link in-icon' /> </a>

					</div>
				</form>
			</div>
		</div>
	);
}

export default Contact;