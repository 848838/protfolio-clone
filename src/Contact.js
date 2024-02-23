import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { useHistory } from "react-router-dom";
export const ContactUs = () => {
  
  const form = useRef();


  const sendEmail = (e) => {

    
    emailjs
      .sendForm('service_099v4jd', 'template_0hcttee', form.current, {
        publicKey: 'MMB8qvf5RPepUSJS5',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log(e.preventDefault);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='emailform' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className='text' style={{ margin: '30px' }} type="text" name="from_name" />
      <label>Email</label>
      <input className='email' style={{ margin: '30px' }} type="email" name="from_name" />
      <label>Message</label>
      <textarea style={{ margin: '20px', padding: '30px' }} name="message" />
      <input className='submit ' style={{ margin: '30px ', borderRadius: '10px ', border: 'none' }} type="submit" value="Send" />
    </form>


  );





  
};
export default ContactUs;