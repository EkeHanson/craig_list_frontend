import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./Register.css"

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can do whatever you want with the form data here
  };

  return (
    <div className="container-fluid align-items-center">
       <div className="row min-vh-100 align-items-center justify-content-center"> 
        <div className="col-lg-6 col-md-7 col-sm-12">
          <div className="card rounded-5 p-5 mx-auto shadow"> 
          <form onSubmit={handleSubmit}>
            <div className='item-align-center'>
              <h2 className="text-center">Register  with Us</h2>
              <label className="my-2">
                  First Name:
                </label ><br/>
              <input
                className="rounded-pill border-primary py-2 px-2 w-100 border-0.5"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className='item-align-center'>
              <label className="my-2">
                  Last Name:
              </label ><br/>
              <input
                className="rounded-pill border-primary py-2 px-2 w-100 border-0.5"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className='item-align-center'>
              <label className="my-2">
                  Email:
              </label ><br/>
              <input
                className="rounded-pill border-primary py-2 px-2 w-100 border-0.5"
                type="email"
                name="email"
                placeholder='Register with a unique email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='item-align-center'>
                <label className="my-2">
                    Password:
                </label ><br/>
                <input
                className="rounded-pill border-primary py-2 px-2 w-100 border-0.5"
                type="password"
                name="password"
                placeholder='Password should be at least 8 characters'
                value={formData.password}
                onChange={handleChange}
                />
            </div>

            <div className="my-4 text-center">
              <Button type="submit" className="w-75 rounded-pill py-2 text-bold border-0.5" variant="primary">Submit</Button>
            </div>
          </form>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Register;
