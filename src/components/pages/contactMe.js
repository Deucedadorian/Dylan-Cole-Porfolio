import React from 'react';
import '../../assets/css/contact.css';
import { useForm } from 'react-hook-form';

export default function ContactMe() {
    // const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => console.log(data);
    return (
      <div className="contact">
        <h1>Contact</h1>
        {/* <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="user_name"
            ref={register}
            placeholder="Name"
          />
          <br />
          <input
            type="email"
            name="user_email"
            ref={register}
            placeholder="Email"
          />
          <br />
          <textarea name="message" ref={register} placeholder="Message" />
          <br />
          <input type="submit" value="Send" />
        </form> */}
        <form id='contact-form'>
            <input type='text' name='user_name' placeholder='Name' />
            <br/>
            <input type='email' name='user_email' placeholder='Email' />
            <br/>
            <textarea name='message' placeholder='Message'/>
            <br/>
            <input type='submit' value='Send' />
        </form>
      </div>
    );
}