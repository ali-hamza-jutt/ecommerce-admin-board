import React from 'react';
import { Container, Grid, TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel, IconButton, InputAdornment, Button, Box } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const AccountForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <Container maxWidth="lg" style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
      <Grid container spacing={3}>
        {/* Account Information Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Account
          </Typography>
          <Typography variant="body2" gutterBottom>
            Fill in the information below to add a new account
          </Typography>
          <TextField fullWidth margin="normal" label="Username" variant="outlined" />
          <TextField fullWidth margin="normal" label="Email" variant="outlined" />
          <TextField
            fullWidth
            margin="normal"
            label="Enter password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Confirm password"
            type={showConfirmPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Permission Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Permission
          </Typography>
          <Typography variant="body2" gutterBottom>
            Items that the account is allowed to edit
          </Typography>
          {['Add product', 'Update product', 'Delete product', 'Apply discount', 'Create coupon'].map((permission, index) => (
            <FormControl component="fieldset" margin="normal" key={index}>
              <FormLabel component="legend">{permission}</FormLabel>
              <RadioGroup row defaultValue="deny">
                <FormControlLabel value="allow" control={<Radio />} label="Allow" />
                <FormControlLabel value="deny" control={<Radio />} label="Deny" />
              </RadioGroup>
            </FormControl>
          ))}
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AccountForm;
