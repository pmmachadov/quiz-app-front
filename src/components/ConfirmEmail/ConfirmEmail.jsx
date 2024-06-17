import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Box, Typography, Alert } from '@mui/material';
import axios from 'axios';

const ConfirmEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/confirm/${token}`);
        setMessage('Your registration has been successfully completed!');
        setSeverity('success');
      } catch (error) {
        setMessage('Email confirmation failed. Please try again.');
        setSeverity('error');
      }
    };

    confirmEmail();
  }, [token]);

  return (
    <Container maxWidth="sm">
      <Box sx={ { mt: 5, textAlign: 'center' } } className="bg-white p-6 rounded shadow-md">
        <Typography variant="h4" gutterBottom>
          Quiz App
        </Typography>
        <Alert severity={ severity } sx={ { mt: 3 } }>
          { message }
        </Alert>
      </Box>
    </Container>
  );
};

export default ConfirmEmail;
