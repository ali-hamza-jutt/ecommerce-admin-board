import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  IconButton,
  InputAdornment,
  Button,
  Box
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const AddUserForm = ({ onAddUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Name is required'),
    userEmail: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one digit and one special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    roles: Yup.string().required('Role is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9), // Generate a random ID for the new user
      name: values.userName,
      email: values.userEmail,
      phone: '', // Add phone if needed
      image: 'https://via.placeholder.com/50', // Placeholder image
      roles: values.roles // Include roles
    };
    onAddUser(newUser);
    resetForm();
  };

  return (
    <Container maxWidth="lg" style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
      <Formik
        initialValues={{
          userName: '',
          userEmail: '',
          password: '',
          confirmPassword: '',
          roles: '' // Initialize roles
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form id="userDetailsForm">
            <Grid container spacing={3}>
              {/* Account Information Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Account
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Fill in the information below to add a new account
                </Typography>
                <Field
                  name="userName"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  label="Username"
                  variant="outlined"
                  error={Boolean(values.userName && values.userName.length === 0)}
                  helperText={<ErrorMessage name="userName" />}
                />
                <Field
                  name="userEmail"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  label="Email"
                  variant="outlined"
                  error={Boolean(values.userEmail && values.userEmail.length === 0)}
                  helperText={<ErrorMessage name="userEmail" />}
                />
                <Field
                  name="password"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  label="Enter password"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  error={Boolean(values.password && values.password.length === 0)}
                  helperText={<ErrorMessage name="password" />}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Field
                  name="confirmPassword"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  label="Confirm password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  variant="outlined"
                  error={Boolean(values.confirmPassword && values.confirmPassword.length === 0)}
                  helperText={<ErrorMessage name="confirmPassword" />}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle confirm password visibility"
                          onClick={toggleConfirmPasswordVisibility}
                          edge="end"
                        >
                          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Role Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Roles
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Select the roles for the user
                </Typography>
                <Field
                  name="roles"
                  as={TextField}
                  fullWidth
                  margin="normal"
                  label="Roles"
                  variant="outlined"
                  select
                  SelectProps={{ native: true }}
                  error={Boolean(values.roles && values.roles.length === 0)}
                  helperText={<ErrorMessage name="roles" />}
                >
                  <option value="" label="Select a role" />
                  <option value="Admin" label="Admin" />
                  <option value="Editor" label="Editor" />
                  <option value="Viewer" label="Viewer" />
                </Field>
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="flex-end" mt={3}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddUserForm;
