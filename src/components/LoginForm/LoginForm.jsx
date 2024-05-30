import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  email: Yup.string().email('Formato de email inválido').required('El email es requerido'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
});

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post('/api/user/login', {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem('token', response.data.token);
        navigate('/questions');
      } catch (error) {
        console.error(error);
        setErrorMessage('Inicio de sesión fallido. Por favor, inténtalo de nuevo.');
        setErrors({ submit: 'Inicio de sesión fallido. Por favor, inténtalo de nuevo.' });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }} className="bg-white p-6 rounded shadow-md">
        <Typography variant="h4" gutterBottom className="font-bold">
          Iniciar Sesión
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
            label="Contraseña"
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
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Iniciar Sesión
          </Button>
        </form>
        {errorMessage && (
          <Box mt={2}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default LoginForm;
