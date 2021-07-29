import '../../assets/css/contact.css';
import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, title, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'title') {
      setTitle(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !title) {
      setErrorMessage('Email or title is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(message)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${title}`
      );
      return;
    }
    alert(`Hello ${title}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setTitle('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <form className="form default-tag-structure">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={title}
          name="title"
          onChange={handleInputChange}
          type="text"
          placeholder="title"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
