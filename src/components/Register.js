import { Formik } from 'formik';
import { Box, Typography } from '@mui/material';
const formStyle = {
  m: 'auto',
  px: 4,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  background: '#201f23',
  color: '#fff',
  width: { sm: '400px' },
  input: {
    my: 0.5,
    height: 25,
  },
  select: {
    my: 0.5,
    height: 25,
  },
  span: {
    height: 18,
    color: 'red',
  },
  button: {
    my: 2,
    mx: 'auto',
    width: 100,
    height: 25,
  },
};

export default function Register() {
  return (
    <Box>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Email required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Password required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          //   localStorage.setItem('logged', 'yes');
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Box component='form' sx={formStyle} onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input
              placeholder='Email'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <span>{errors.email && touched.email && errors.email}</span>
            <input
              placeholder='Password'
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <span>
              {errors.password && touched.password && errors.password}
            </span>
            <input
              type='hidden'
              name='teamID'
              //   onChange={handleChange}
              //   onBlur={handleBlur}
              value='knd-1'
            />
            <select
              placeholder='role'
              name='role'
              onChange={handleChange}
              //   onBlur={handleBlur}
              value={values.role}
            >
              <option value='Team Member'>Team Member</option>
              <option value='Team Leader'>Team Leader</option>
            </select>
            <select
              placeholder='continent'
              name='continent'
              onChange={handleChange}
              //   onBlur={handleBlur}
              value={values.continent}
            >
              <option value='North America'>North America</option>
              <option value='South America'>South America</option>
              <option value='Europe'>Europe</option>
              <option value='Other'>Other</option>
            </select>
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Box>
        )}
      </Formik>
    </Box>
  );
}
