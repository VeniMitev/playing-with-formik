import React from "react";
import './index.css'
import { useFormik } from 'formik';

function App() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: values => {
      console.log(values);
      alert('Login Succesful')
    },

    validate: values => {
      let errors = {
        email: '',
        password: ''
      };

      if (!values.email) {
        errors.email = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }

      if(!values.password) errors.password = "Field Required";
      return errors
    }
  });

  return (
    <div>
      <div className="login-form">
        <h1>LOGIN</h1>
        <form>
          <h3>Email</h3>
          <input id='email' type="text" onChange={formik.handleChange} value={formik.values.email} />
            <div>
              {formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : <div></div>}
            </div>
            
          <h3>Password</h3>
          <input id='password' type="password" onChange={formik.handleChange} value={formik.values.password} />
            <div>
              {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : <div></div>}
            </div>
            
          <div>
            <button id="submitBtn" type='submit'><h3>Submit</h3></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
