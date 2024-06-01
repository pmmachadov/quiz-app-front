import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Container, Box, Alert, Checkbox, FormControlLabel } from '@mui/material';
import { register } from '../../services/authService';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});

const Register = () => {
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await register(values.firstName, values.lastName, values.email, values.password);
        console.log(response);
        setConfirmationMessage('Confirm Your Email!');
        setErrorMessage('');
      } catch (error) {
        console.error(error);
        if (error.response && error.response.data.message) {
          setErrorMessage(error.response.data.message);
          if (error.response.data.message === 'This email is already registered') {
            setErrors({ email: 'This email is already registered' });
          } else {
            setErrors({ submit: 'Registration failed. Please try again.' });
          }
        } else {
          setErrors({ submit: 'Registration failed. Please try again.' });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }} className="bg-white p-6 rounded shadow-md">
        <Typography variant="h4" gutterBottom className="font-bold">
          Welcome to BrainRush!
        </Typography>
        <Typography variant="subtitle1" gutterBottom className="text-gray-600">
          Create your free account
        </Typography>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <TextField
            fullWidth
            margin="normal"
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            className="border-gray-300 rounded"
          />
          <TextField
            fullWidth
            margin="normal"
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            className="border-gray-300 rounded"
          />
          <TextField
            fullWidth
            margin="normal"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className="border-gray-300 rounded"
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            className="border-gray-300 rounded"
          />
          <TextField
            fullWidth
            margin="normal"
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            className="border-gray-300 rounded"
          />
          <FormControlLabel
            control={
              <Checkbox
                id="terms"
                name="terms"
                color="primary"
                checked={formik.values.terms}
                onChange={formik.handleChange}
              />
            }
            label={
              <Typography variant="body2">
                I have read and agree to the <a href="/terms-and-conditions" className="text-blue-600">Terms and Conditions</a>
              </Typography>
            }
          />
          {formik.touched.terms && Boolean(formik.errors.terms) && (
            <Typography color="error" variant="body2">
              {formik.errors.terms}
            </Typography>
          )}
          {formik.errors.submit && (
            <Typography color="error" variant="body2">
              {formik.errors.submit}
            </Typography>
          )}
          {errorMessage && (
            <Alert severity="error">{errorMessage}</Alert>
          )}
          <Button
            sx={{ bgcolor: 'bg-zinc-500', '&:hover': { bgcolor: 'bg-zinc-700' } }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formik.isSubmitting || !formik.values.terms}
            className="text-white py-2 rounded"
          >
            Continue
          </Button>
        </form>
        {confirmationMessage && (
          <Box mt={2}>
            <Alert severity="success">{confirmationMessage}</Alert>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Register;
