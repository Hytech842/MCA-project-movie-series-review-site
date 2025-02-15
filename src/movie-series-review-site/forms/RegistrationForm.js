import { React, useState } from 'react';
import '../style/registrationform.css';

function RegistrationForm() {
  const [formState, setFormState] = useState(true); // `true` means login is active

  const handleTabChange = (isLogin) => {
    setFormState(isLogin); // Toggle form state based on login/register selection
  };

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    setFormData({ name: '', username: '', email: '', password: '' });
  };

  return (
    <div className="container-fluid registration-form">
      {/* Pills navs */}
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${formState ? 'active' : ''}`}
            id="tab-login"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected={formState ? 'true' : 'false'}
            onClick={() => handleTabChange(true)}
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${!formState ? 'active' : ''}`}
            id="tab-register"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected={!formState ? 'true' : 'false'}
            onClick={() => handleTabChange(false)}
          >
            Register
          </a>
        </li>
      </ul>

      {/* Pills content */}
      <div className="tab-content">
        {/* Login Form */}
        <div
          className={`tab-pane fade ${formState ? 'show active' : ''}`}
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <div className="text-center mb-3">
              <p>Sign in with:</p>
              {/* Social buttons */}
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>

            <p className="text-center">or</p>

            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="loginName" className="form-control" />
              <label className="form-label" htmlFor="loginName">Email or username</label>
            </div>

            {/* Password input */}
            <div className="form-outline mb-4">
              <input type="password" id="loginPassword" className="form-control" />
              <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            {/* 2 column grid layout */}
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            {/* Register buttons */}
            <div className="text-center">
              <p>Not a member? <a href="#!" onClick={() => handleTabChange(false)}>Register</a></p>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div
          className={`tab-pane fade ${!formState ? 'show active' : ''}`}
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              {/* Social buttons */}
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-secondary btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>

            <p className="text-center">or</p>

            {/* Name input */}
            <div className="form-outline mb-4">
              <input type="text" id="registerName" name="name" value={formData.name} onChange={handleChange} className="form-control" />
              <label className="form-label" htmlFor="registerName">Name</label>
            </div>

            {/* Username input */}
            <div className="form-outline mb-4">
              <input type="text" id="registerUsername" name="username" value={formData.username} onChange={handleChange} className="form-control" />
              <label className="form-label" htmlFor="registerUsername">Username</label>
            </div>

            {/* Email input */}
            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" name="email" value={formData.email} onChange={handleChange} className="form-control" />
              <label className="form-label" htmlFor="registerEmail">Email</label>
            </div>

            {/* Password input */}
            <div className="form-outline mb-4">
              <input type="password" id="registerPassword" name="password" value={formData.password} onChange={handleChange} className="form-control" />
              <label className="form-label" htmlFor="registerPassword">Password</label>
            </div>

            {/* Repeat Password input */}
            <div className="form-outline mb-4">
              <input type="password" id="registerRepeatPassword" className="form-control" />
              <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
