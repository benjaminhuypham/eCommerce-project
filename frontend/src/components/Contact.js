import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(event){
    event.preventDefault()
    alert('Your message has been submitted')
    emailjs.sendForm('benjaminhuypham_gmail_com', 'template_1l2uikYp', event.target, 
    'user_XFbQzio3Ffxzq33izwVwI')
    .then((response) => {
        console.log(response.text)
    },
    (error) => {
        console.log(error.text)
    })
}

  return (
    <div className="contact">
      <h1>contact us here</h1>
      <form id="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number"/>
        <label className="contact-label">Name</label>
        <input type="text" name="user_name" className="contact-name"/>
        <label className="contact-label">Email</label>
        <input type="email" name="user_email" className="contact-name"/>
        <label className="contact-label">Message</label>
        <textarea name="message" className="contact-name-2"></textarea>
        <input type="submit" value="Send" className="contact-submit-button"/>
      </form>
    </div>
  );
};

export default Contact;