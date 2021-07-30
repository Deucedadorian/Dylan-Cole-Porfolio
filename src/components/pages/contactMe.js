import '../../assets/css/contact.css';
import React, { useState } from 'react';
import { send } from 'emailjs-com';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const handleInputChange = (e) => {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if(!isValid) {
          setErrorMessage('please enter a valid email');
      } else {
          setErrorMessage('');
      }

    } else {
      if (e.target.value === '') {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      } 
    }

    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    setToSend({ ...toSend, [e.target.name]: e.target.value });

    // Based on the input type, we set the state of either email, name, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Sends real email using emailjs
    send(
      'service_mf5t3vs',
      'template_e19nk3j',
      toSend,
      'user_D2qMBAy2i39C08h50DL4g'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <form className="form default-tag-structure">
        <h2>Name:</h2>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your name"
        />
        <h2>Email Address:</h2>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your email address"
        />
        <h2>message:</h2>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Your message"
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
