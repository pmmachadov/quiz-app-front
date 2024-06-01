import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';
import { AuthContext } from '../../services/authContext';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await login(values.email, values.password);
        console.log('Navigating to /questions');
        navigate('/questions');
      } catch (error) {
        console.error(error);
        setErrors({ submit: 'Login failed. Please try again.' });
        setErrorMessage('Login failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }} className="bg-white p-6 rounded shadow-md">
        <Typography variant="h4" gutterBottom className="font-bold">
          Login to Your Account
        </Typography>
        <Typography variant="subtitle1" gutterBottom className="text-gray-600">
          Enter your credentials to access your account
        </Typography>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
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
          {formik.errors.submit && (
            <Typography color="error" variant="body2">
              {formik.errors.submit}
            </Typography>
          )}
          {errorMessage && (
            <Alert severity="error">{errorMessage}</Alert>
          )}
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
