import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';
import { StudentAuthContext } from '../../src/context/StudentAuthContext';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    code: Yup.string().required('Code is required').length(6, 'Code must be exactly 6 digits'),
    username: Yup.string().required('Username is required'),
});

const StudentRegisterOrLoginPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(StudentAuthContext);

    const formik = useFormik({
        initialValues: {
            code: '',
            username: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting, setErrors }) => {
            try {
                await login(values.code, values.username);
                navigate('/student/waitingroom'); // Navegar al Waiting Room
            } catch (error) {
                console.error(error);
                if (error.response && error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                    setErrors({ submit: 'Registration or Login failed. Please try again.' });
                } else {
                    setErrors({ submit: 'Registration or Login failed. Please try again.' });
                }
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <Container maxWidth="sm">
            <Box sx={ { mt: 5 } } className="bg-white p-6 rounded shadow-md">
                <Typography variant="h4" gutterBottom className="font-bold">
                    Enter Game Code and Username
                </Typography>
                <form onSubmit={ formik.handleSubmit } className="space-y-4">
                    <TextField
                        fullWidth
                        margin="normal"
                        id="code"
                        name="code"
                        label="Game Code"
                        value={ formik.values.code }
                        onChange={ formik.handleChange }
                        error={ formik.touched.code && Boolean(formik.errors.code) }
                        helperText={ formik.touched.code && formik.errors.code }
                        className="border-gray-300 rounded"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        id="username"
                        name="username"
                        label="Username"
                        value={ formik.values.username }
                        onChange={ formik.handleChange }
                        error={ formik.touched.username && Boolean(formik.errors.username) }
                        helperText={ formik.touched.username && formik.errors.username }
                        className="border-gray-300 rounded"
                    />
                    { formik.errors.submit && (
                        <Typography color="error" variant="body2">
                            { formik.errors.submit }
                        </Typography>
                    ) }
                    { errorMessage && (
                        <Alert severity="error">{ errorMessage }</Alert>
                    ) }
                    <Button
                        sx={ { bgcolor: 'bg-zinc-500', '&:hover': { bgcolor: 'bg-zinc-700' } } }
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                        disabled={ formik.isSubmitting }
                        className="text-white py-2 rounded"
                    >
                        Join Game
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default StudentRegisterOrLoginPage;
