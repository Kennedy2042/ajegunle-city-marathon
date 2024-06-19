import './Contact.css'

const Contact = () => {
  return (
    <div className='contact_us_main_body'>
      <div className="contact_us_hero_wrapper">
        CONTACT US
      </div>
      <div className="contactUs_get_intouch_wrapper">
        <div className="contactUs_get_intouch_body">
          <div className="contactUs_get_intouch">
            <h2>Get in Touch</h2>
            <h1>RUN WITH US</h1>
            <p>Our dedicated team is here to help. If you have any questions or need assistance, don’t hesitate to get in touch.</p>
            <div className="contactUs_get_intouch_name_wrapper">
              <input type="text" placeholder='First Name*'/>
              <input type="text" placeholder='Last Name*'/>
            </div>
            <div className="contactUs_get_intouch_email_wrapper">
              <input type="text" placeholder='Email*'/>
            </div>
            <div className="contactUs_get_intouch_email_wrapper">
              <input type="text" placeholder='Phone Number*'/>
            </div>
            <div className="contactUs_get_intouch_textArea_wrapper">
              <textarea name="" id=""></textarea>
            </div>
            <div className="contactUs_get_intouch_btn_wrapper">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUs_get_intouch_map"></div>
    </div>
  )
}

export default Contact