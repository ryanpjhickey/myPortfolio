import React from 'react';

//include contact info as well as email form, return error on non-email


export default function Contact() {


  const [formState, setFormState] = React.useState('Send')
  const handler = (event) => {
    event.preventDefault()
    setFormState('Submitted!')
    const { name, email, message } = event.target.elements
    let contactForm = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(contactForm)
    this.onChange = () => {
      this.setState({
        name: 'Please fill out all forms!',
        email: 'Please fill out all forms!',
        message: 'Please fill out all forms!',
      })
    }
    const error = {}
    if (!event.email) {
      error.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.email)) {
      error.email = 'Invalid email address'
    }
  }

  return (
    <div>
      <h1>Contact Page</h1>
      <p>

        <div className="container mt-5">
          <h2 className="mb-3">Contact me</h2>
          <form onSubmit={handler}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-danger" type="submit">
              {formState}
            </button>
          </form>
        </div>


        <p>
          Phone Number: 555-123-4567
        </p>
        <p>
          E-mail Address: ryanpjhickey@gmail.com
        </p>
        <p>
          GitHub: ryanpjhickey
        </p>
      </p>
    </div>
  );
}